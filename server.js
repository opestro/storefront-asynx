const path = require("path");
const fsp = require("fs/promises");
const express = require("express");
const { installGlobals } = require("@remix-run/node");


import { BentoCache, bentostore } from 'bentocache'
import { memoryDriver } from 'bentocache/drivers/memory'

const bento = new BentoCache({
  default: 'default',
  stores: {
    // A first cache store named "myCache" using 
    // only L1 in-memory cache
    default: bentostore()
      .useL1Layer(memoryDriver({ maxSize: 100_000 })),  }
})



// Polyfill Web Fetch API
installGlobals();

const root = process.cwd();
const isProduction = process.env.NODE_ENV === "production";

function resolve(p) {
  return path.resolve(__dirname, p);
}

async function createServer() {
  const app = express();
  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite;

  if (!isProduction) {
    vite = await require("vite").createServer({
      root,
      server: { middlewareMode: "ssr" },
    });

    app.use(vite.middlewares);
  } else {
    app.use(require("compression")());
  }

  // Serve favicon.ico from root
  app.use("/favicon.ico", express.static(resolve("favicon.ico")));

  // Handle assets
  app.use("/assets", express.static(resolve("dist/client/assets")));

  // Serve CSR for /index route
  app.get("/", async (req, res) => {
    if (!isProduction) {
      const template = await vite.transformIndexHtml(
        req.originalUrl,
        await fsp.readFile(resolve("index.html"), "utf8")
      );
      return res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } else {
      return res.sendFile(resolve("dist/client/index.html"));
    }
  });

  // Handle all other routes with SSR
  app.use("*", async (req, res) => {
    const url = req.originalUrl;
    const cacheKey = `ssr:${url}`;
    const cached = await bento.get(cacheKey);
    if (cached) {
      // header X-Cache: HIT
      res.setHeader('X-Cache', 'HIT')
      return res.status(200).end(cached);
    }

    try {
      let template;
      let render;

      if (!isProduction) {
        template = await fsp.readFile(resolve("index.html"), "utf8");
        template = await vite.transformIndexHtml(url, template);
        render = await vite
          .ssrLoadModule("src/entry.server.tsx")
          .then((m) => m.render);
      } else {
        template = await fsp.readFile(
          resolve("dist/client/index.html"),
          "utf8"
        );
        render = (await import("./dist/server/entry.server.mjs")).render;
      }

      console.log("Rendering...");
      const appHtml = await render(req, res);
      const html = template.replace("<!--app-html-->", appHtml);

      res.setHeader("Content-Type", "text/html");
      res.setHeader('X-Cache', 'MISS')
      await bento.set(cacheKey, html, { ttl: "5s" })
      return res.status(200).end(html);
    } catch (e) {
      console.error(e);
      if (e instanceof Response && e.status >= 300 && e.status <= 399) {
        return res.redirect(e.status, e.headers.get("Location"));
      }
      if (!isProduction) {
        vite.ssrFixStacktrace(e);
      }
      console.log(e.stack);
      res.setHeader('X-Cache', 'MISS')
      return res.status(500).end(e.stack);
    }
  });

  if (isProduction) {
    app.use(express.static(resolve("dist/client")));
  }

  return app;
}

createServer().then((app) => {
  app.listen(3000, () => {
    console.log("HTTP server is running at http://localhost:3000");
  });
});
