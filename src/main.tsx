import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductPage from './pages/product';
// import ReactPixel from 'react-facebook-pixel';
import axios from 'axios';
import { StoreEntity } from 'feeef/src/core/core';
import { FeeeF } from 'feeef/src/feeef/feeef';


export const ff = new FeeeF({
  apiKey: "API_KEY"
});

declare global {
  interface Window {
    ff: FeeeF;
  }
}
window.ff = ff

// currentStoreId from currunt url queryParam

const currentStoreId = new URLSearchParams(window.location.search).get('store_slug') || "asynx"
// alert(currentStoreId)

// [getStore] a function to get store data from the server
// by default path is "/stores/:storeId"
var _storesCache: { [storeId: string]: StoreEntity } = {}

/**
 * Retrieves the store with the specified storeId.
 * If the store is already cached, it returns the cached store.
 * Otherwise, it makes a GET request to fetch the store from the server.
 * The fetched store is then cached for future use.
 * @param storeId - The ID of the store to retrieve.
 * @returns A promise that resolves to the store object.
 */
export const getStore = async (slug: string): Promise<StoreEntity> => {
  if (_storesCache[slug]) return _storesCache[slug]
  const store = await ff.stores.find({
    id: slug,
    by: 'slug'
  });
  _storesCache[slug] = store
  return store
}

// dart color is 0xffXXXXXX
// js color is #XXXXXXFF
// so we need to convert the color to the js format
// and set the css variable --p to the primary color
// of the store
// for example ff009688 to #009688ff in css
export const dartColorToCss = (color: number): string => {
  var colorAsString = color.toString(16)
  if (color > 0xffffff) {
    var alpha = colorAsString.slice(0, 2)
    colorAsString = colorAsString.slice(2) + alpha
  }
  var colorAsHex = "#" + colorAsString
  return colorAsHex
}

/**
 * Initializes the app with the provided store ID.
 * @param storeId - The ID of the store.
 */
export const initApp = async (storeSlug: string) => {
  
  // Retrieve the store data
  const store = await getStore(storeSlug);

  // set the rel="icon" to the store logo
  if (store.logoUrl) {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    link.href = store.ondarkLogoUrl || store.logoUrl;
  }

  if (store?.decoration?.primary) {
    document.body.style.setProperty("--p", dartColorToCss(store!.decoration!.primary));
    if (store?.decoration?.onPrimary) {
      document.body.style.setProperty("--on-p", dartColorToCss(store!.decoration!.onPrimary));
    }
  }
  // set the title to the store name
  document.title = store.title || store.name;

  // Initialize Facebook Pixel if it is active
  // if (store.integrations.facebookPixel?.active) {
  //   ReactPixel.init(store.integrations.facebookPixel.id, undefined, {
  //     autoConfig: true,
  //     debug: true,
  //   });
  // }

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
  ]);

  // Render the app
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}


// Initialize the app with the current store ID
initApp(currentStoreId)


