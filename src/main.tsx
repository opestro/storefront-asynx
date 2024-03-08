import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './pages/product';
import ReactPixel from 'react-facebook-pixel';
import axios from 'axios';
import { StoreModel } from './pishop/models';


const currentStoreId = "gcstore"

// [getStore] a function to get store data from the server
// by default path is "/stores/:storeId"
var _storesCache: { [storeId: string]: StoreModel } = {}

/**
 * Retrieves the store with the specified storeId.
 * If the store is already cached, it returns the cached store.
 * Otherwise, it makes a GET request to fetch the store from the server.
 * The fetched store is then cached for future use.
 * @param storeId - The ID of the store to retrieve.
 * @returns A promise that resolves to the store object.
 */
export const getStore = async (storeId: string): Promise<StoreModel> => {
  if (_storesCache[storeId]) return _storesCache[storeId]
  const req = await axios.get(`/stores/${storeId}/${storeId}.json`)
  const store = req.data
  _storesCache[storeId] = store
  return store
}

/**
 * Initializes the app with the provided store ID.
 * @param storeId - The ID of the store.
 */
export const initApp = async (storeId: string) => {
  
  // Retrieve the store data
  const store = await getStore(storeId);

  // set the rel="icon" to the store logo
  if (store.logo) {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    link.href = store.darkLogo?.url || store.logo.url;
  }
  // set the title to the store name
  document.title = store.title;

  // Initialize Facebook Pixel if it is active
  if (store.integrations.facebookPixel?.active) {
    ReactPixel.init(store.integrations.facebookPixel.id, undefined, {
      autoConfig: true,
      debug: true,
    });
  }

  // Create the router configuration
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App store={store} />,
    },
    {
      path: "product/:id",
      element: <Product store={store} />,
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


