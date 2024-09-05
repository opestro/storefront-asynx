import { Link } from "react-router-dom";
import { IconBrightness } from "@tabler/icons-react";
import { StoreEntity } from "feeef/src/core/core";
import { track } from "../../pishop/helpers";


function Navbar({ store, fixed = true }: { fixed: boolean, store: StoreEntity }) {
  // const location = useLocation()

  return (
    <>
      {
        store?.banner && <>
          <div className="h-8">
          </div>
          <a 
            aria-label={store.banner.title}
          className="h-8 block py-1 bg-primary text-center fixed left-0 right-0 top-0 z-50" href={store!.banner!.url || "#!"}>
            {store?.banner.title}
          </a>
        </>
      }
      <div className={
        fixed ? 
        `sticky ${store?.banner ? "top-8" : "top-0"} z-50`
         : ""
      }>
        <nav className={
          `w-screen backdrop-blur-xl bg-opacity-40 dark:bg-opacity-40 bg-gray-50 dark:bg-gray-900   z-20 top-0 start-0 border-b border-opacity-20 dark:border-opacity-30 border-gray-600`
        }>
          <div className="h-16 container flex flex-wrap items-center justify-between mx-auto">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse">
              {
                store?.ondarkLogoUrl &&
                <img src={store?.ondarkLogoUrl} className={(
                  store?.decoration?.logoFullHeight ? "h-16" : "h-12")
                  + " hidden dark:block"
                } alt={store?.name!} />
              }
              {
                (store?.logoUrl || store?.ondarkLogoUrl) &&
                <img src={store?.logoUrl || store?.ondarkLogoUrl || undefined} className={(
                  store?.decoration?.logoFullHeight ? "h-16" : "h-12")
                  + " dark:hidden block"
                } alt={store?.name!} />
              }
              {
                store?.decoration?.showStoreNameInHeader &&
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{store?.name}</span>
              }
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button type="button"
                aria-label="تبديل الوضع"
                onClick={() => {
                  document.body.classList.toggle("dark")
                }}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <IconBrightness size={20}></IconBrightness>
              </button>
              <a
                href={store?.action?.url || "#!"}
                target="_blank"
                onClick={() => {
                  // Contact
                  track('Contact');
                }}
              >
                {
                  store?.action?.label &&
                  <button
                    aria-label={store.action.label}
                    // on click lunch url
                    type="button" className="text-white bg-primary focus:ring-2 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-4 py-2 text-center  dark:focus:ring-primary">
                    {store.action.label}
                  </button>
                }
              </a>
              {/* <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button> */}
              {/* toggle dark/light */}
            </div>
            {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className=" flex items-center flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 ">
              <li>
                <Link to="/"><TextButton>المعرض</TextButton></Link>
              </li>
              <li>
                <Link to="/" ><TextButton>المنتجات</TextButton></Link>
              </li>
              <li>
                <TextButton href={store?.socials.instagram} target="_blank">
                  <IconBrandInstagram size={20}></IconBrandInstagram>
                </TextButton>
              </li>
            </ul>
          </div> */}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;