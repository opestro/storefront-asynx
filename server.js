let path = require("path");
let fsp = require("fs/promises");
let express = require("express");
let { installGlobals } = require("@remix-run/node");

// Polyfill Web Fetch API
installGlobals();

let root = process.cwd();
let isProduction =  true; //process.env.NODE_ENV === "production";

function resolve(p) {
  return path.resolve(__dirname, p);
}

async function createServer() {
  let app = express();
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
    app.use(express.static(resolve("dist/client")));
  }

  // Serve favicon.ico from root
  app.use("/favicon.ico", express.static(resolve("favicon.ico")));

  app.use("*", async (req, res) => {
    console.log("GET: ", req.originalUrl);

    let url = req.originalUrl;

    // if now subdomain, redirect to feeef.net
    if (req.hostname === "feeef.shop") {
      return res.redirect(301, `https://feeef.net`);
    }

    try {
      let template;
      let render;
      if (!isProduction) {
        template = await fsp.readFile(resolve("i.html"), "utf8");
        template = await vite.transformIndexHtml(url, template);
        render = await vite
          .ssrLoadModule("src/entry.server.tsx")
          .then((m) => m.render);
      } else {
        template = await fsp.readFile(
          resolve("dist/client/index.html"),
          "utf8"
        );
        render = (await import('./dist/server/entry.server.mjs')).render;
      }

      try {
        console.log("Rendering...");
        let appHtml = await render(req, res);
        let html = template.replace("<!--app-html-->", appHtml);
        res.setHeader("Content-Type", "text/html");
        return res.status(200).end(html);
      } catch (e) {
        console.error(e);
        if (e instanceof Response && e.status >= 300 && e.status <= 399) {
          return res.redirect(e.status, e.headers.get("Location"));
        }
        throw e;
      }
    } catch (error) {
      if (!isProduction) {
        vite.ssrFixStacktrace(error);
      }
      console.log(error.stack);
      res.status(500).end(error.stack);
    }
  });
  return app;
}

createServer().then((app) => {
  app.listen(3000, () => {
    console.log("HTTP server is running at http://localhost:3000");
  });
});
