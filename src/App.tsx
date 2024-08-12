import type { RouteObject } from "react-router-dom";
import { Link, useLoaderData, redirect, useLocation } from "react-router-dom";
import Layout from "./resources/layout";
import { useState } from "react";
import { getCurrentHost } from "./feeef";
import { EmbaddedCategory, ProductEntity, StoreEntity } from "feeef/src/core/core";
import Product from "./pages/product";
import AsynxWave from "./widgets/asynx_wave";
import { ProductCard } from "./widgets/product_card";
import { IconFlag } from "@tabler/icons-react";
import CategoryButton from "./widgets/category_button";
import { getProduct, getProducts, getStore } from "./usecases";
import { SuperSEO } from "react-super-seo";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    loader: layoutLoader,
    children: [
      {
        index: true,
        loader: homeLoader,
        element: <Home />,
      },
      {
        path: "p/:slug",
        loader: productLoader,
        element: <Product />,
      },
      {
        path: "dashboard",
        loader: dashboardLoader,
        element: <Dashboard />,
      },
      {
        path: "lazy",
        lazy: () => import("./lazy"),
      },
      {
        path: "redirect",
        loader: redirectLoader,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
];


const sleep = (n = 500) => new Promise((r) => setTimeout(r, n));
const rand = () => Math.round(Math.random() * 100);



async function layoutLoader() {
  let store = await getStore(getCurrentHost()!)
  return store
}



async function productLoader({ params }: any) {
  let store = await getStore(getCurrentHost()!)

  let slug = params.slug
  let product = await getProduct(slug)
  return { store, product }
}

async function homeLoader() {
  let store = await getStore(getCurrentHost()!)


  let products = await getProducts(store.id)

  return {
    store,
    products
  }
}

function Home() {
  let { store, products } = useLoaderData() as {
    store: StoreEntity,
    products: ProductEntity[]
  };
  const location = useLocation()

  const [selectedCategory, setSelectedCategory] = useState<EmbaddedCategory | null>(null)

  function filteredProducts() {
    return products.filter((product) => !selectedCategory ? true : product.category?.name == selectedCategory?.name)
  }

  return (
    <>
            <SuperSEO
            // title={store.name + " | " + (product.name || "") + (!!product.title? " - " + product.title: "")}
            // description={product.description || undefined}
            // lang="ar"
            // openGraph={{
            //     ogTitle: store.title + "|" + (product.name || ""),
            //     ogDescription: product.description || undefined,
            //     ogUrl: getCurrentUrl(pathname),
            //     ogImage: {
            //         ogImage: product.media[0],
            //         ogImageAlt: product.name || product.title || store.title || "",
            //     },
            //     ogSiteName: store.name || store.title || undefined,
            //     ogType: "product",
            //     ogLocale: "ar_AR",
            //     ogDeterminer: "auto",
            //     ogLocaleAlternate: ["en_US"],
            // }}

            title={store.name + " - " + store.title || ""}
            description={store.description || undefined}
            lang="ar"
            openGraph={{
                ogTitle: store.name + " - " + store.title || "",
                ogDescription: store.description || undefined,
                ogUrl: getCurrentHost() + location.pathname,
                ogImage: {
                    ogImage: store.logoUrl || undefined,
                    ogImageAlt: store.name || store.title || "",
                },
                ogSiteName: store.name || store.title || undefined,
                ogType: "website",
                ogLocale: "ar_AR",
                ogDeterminer: "auto",
                ogLocaleAlternate: ["en_US"],
            }}

        >
        </SuperSEO>

      {/* main container */}
      <div className="text-center relative max-w-screen-xl mx-auto px-4  sm:px-6 py-10 lg:px-8">
        <AsynxWave
          className='pointer-events-none scale-150 z-0 absolute inset-0 aspect-square h-full m-auto blur-xl'
        ></AsynxWave>
        <div className="z-10 relative">
          <div className='relative flex items-center justify-center'>
            <h4 className=" absolute
          font-extrabold text-base dark:text-gray-50 tracking-wide uppercase">
              {store?.name}
            </h4>
            <AsynxWave></AsynxWave>
          </div>
          <h1 className="title-font font-light mt-1 text-4xl text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-4xl">
            {store?.title}
          </h1>
          <p className="max-w-xl mt-5 mx-auto  text-gray-500 dark:text-gray-400
            font-extralight
            text-s
            md:text-m
            lg:text-l
          ">
            {store?.description}
          </p>
        </div>
      </div>
      <div className="h-4"></div>
      {/* categories */}
      <div className="container">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {store?.categories?.map((category, index) => (
            <CategoryButton key={index} onClick={() => {
              return (selectedCategory == category) ? setSelectedCategory(null) :
                setSelectedCategory(category)
            }} selected={selectedCategory?.name == category.name} category={category}></CategoryButton>
          ))}
        </div>
      </div>

      <div className="h-4"></div>

      {/* products */}
      <div className="container">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts().map((product, index) => (
            <div key={index} >
              <ProductCard product={product}></ProductCard>
            </div>
          ))}

          {
            !filteredProducts().length &&
            <div className="col-span-full">
              <div className="py-4 flex flex-col items-center justify-center">
                <IconFlag></IconFlag>
                <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400">لا يوجد منتجات</h3>
                <p className="text-gray-400 dark:text-gray-500">لا يوجد منتجات في هذه الفئة</p>
                {/* remove selected cate */}
                <div className="h-3"></div>
                <button onClick={() => setSelectedCategory(null)} className="gb btn">إزالة التصفية</button>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
}


async function dashboardLoader() {
  await sleep();
  return { data: `Dashboard loader - random value ${rand()}` };
}

function Dashboard() {
  let data = useLoaderData() as any;
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Loader Data: {data.data}</p>
    </div>
  );
}

async function redirectLoader() {
  await sleep();
  return redirect("/");
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
