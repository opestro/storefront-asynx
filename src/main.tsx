import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/product";
import ReactPixel from "react-facebook-pixel";
import { StoreEntity } from "feeef/src/core/core";
import { FeeeF } from "feeef/src/feeef/feeef";

// polyfill for Object.hasOwn
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn
if (!Object.prototype.hasOwnProperty) {
  Object.prototype.hasOwnProperty = function (key) {
    return key in this;
  };
}

declare global {
  interface Object {
    hasOwn?: (obj: any, key: string) => boolean; // eslint-disable-line
  }
}

if (!Object.hasOwn) {
  Object.hasOwn = function (obj: any, key: string) {  // eslint-disable-line
 
    return Object.prototype.hasOwnProperty.call(obj, key);
  };
}
// https://feeef-s3.s3.eu-west-3.amazonaws.com/u/GOOO/products/t5ojg7s1zkrv.jpeg
// https://feeef-s3.s3.eu-west-3.amazonaws.com/u/ghduck12m1vk/products/jscjozf0r4yc.jpeg

export const ff = new FeeeF({
  apiKey: "API_KEY",
  baseURL: "https://apis.feeef.net/api/v1",
  // baseURL: "http://localhost:3333/api/v1",
});

declare global {
  interface Window {
    ff: FeeeF;
  }
}

// [getStore] a function to get store data from the server
// by default path is "/stores/:storeId"
const _storesCache: { [storeId: string]: StoreEntity } = {};

/**
 * Retrieves the store with the specified storeId.
 * If the store is already cached, it returns the cached store.
 * Otherwise, it makes a GET request to fetch the store from the server.
 * The fetched store is then cached for future use.
 * @param storeId - The ID of the store to retrieve.
 * @returns A promise that resolves to the store object.
 */
export const getStore = async (host: string): Promise<StoreEntity> => {
  if (_storesCache[host]) return _storesCache[host];
  let id: string | null = null;
  let by: string | null = null;
  const tokens = host.split(".");
  // if host is subdomain, we need to get the store by slug
  if (tokens.length > 2) {
    id = tokens[0];
    by = "slug";
  } else {
    id = host;
    by = "domain.name";
  }
  const store = await ff.stores.find({
    id: id,
    by: by,
  });
  _storesCache[host] = store;
  return store;
};

// dart color is 0xffXXXXXX
// js color is #XXXXXXFF
// so we need to convert the color to the js format
// and set the css constiable --p to the primary color
// of the store
// for example ff009688 to #009688ff in css
export const dartColorToCss = (color: number): string => {
  let colorAsString = color.toString(16);
  if (color > 0xffffff) {
    const alpha = colorAsString.slice(0, 2);
    colorAsString = colorAsString.slice(2) + alpha;
  }
  const colorAsHex = "#" + colorAsString;
  return colorAsHex;
};

export let setAdvancedMatching = (
  _advancedMatching?: ReactPixel.AdvancedMatching // eslint-disable-line
) => {};
export const track = (_title: string, _data?: ReactPixel.Data | any) => {}; // eslint-disable-line

/**
 * Initializes the app with the provided store ID.
 * @param storeId - The ID of the store.
 */
export const initApp = async (host: string) => {
  // Retrieve the store data
  const store = await getStore(host);

  // set the rel="icon" to the store logo
  if (store.logoUrl) {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    link.href = store.ondarkLogoUrl || store.logoUrl;
  }

  if (store?.decoration?.primary) {
    document.body.style.setProperty(
      "--p",
      dartColorToCss(store!.decoration!.primary)
    );
    if (store?.decoration?.onPrimary) {
      document.body.style.setProperty(
        "--on-p",
        dartColorToCss(store!.decoration!.onPrimary)
      );
    }
  }
  // set the title to the store name
  document.title = store.title || store.name;

  // Initialize Facebook Pixel if it is active
  // if (store.integrations.facebookPixel?.active) {
  const metaPixelIntegration = store.integrations?.metaPixel;
  const pixels = metaPixelIntegration?.pixels.map((e: any) => e.id); // eslint-disable-line
  if (pixels) {
    for (let i = 0; i < pixels.length; i++) {
      ReactPixel.init(pixels[i], undefined, {
        autoConfig: false,
        debug: true,
      });
    }
  }
  setAdvancedMatching = (advancedMatching?: ReactPixel.AdvancedMatching) => {
    if (pixels) {
      for (let i = 0; i < pixels.length; i++) {
        ReactPixel.init(pixels[i], advancedMatching, {
          autoConfig: false,
          debug: true,
        });
      }
    }
  };

  // Create the router configuration
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App store={store} />,
    },
    {
      path: "products/:id",
      element: <ProductPage store={store} />,
    },
    {
      path: "p/:slug",
      element: <ProductPage store={store} />,
    },
  ]);

  // Render the app
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

// Initialize the app with the current store
const host = new URL(
  // window.location.href.includes("localhost") ? "http://elkhalwi.asynx.store" :
  //  window.location.href
  "http://afar.khfif.shop"
).host;

initApp(host);
