import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./parts/navbar";
import { StoreEntity } from "feeef/src/core/core";
import Footer from "./parts/footer";
import { dartColorToCss, initMetaPixel } from "../pishop/helpers";
import { useEffect } from "react";

export default
    function Layout() {
    let store = useLoaderData() as StoreEntity;

    useEffect(() => {
            initMetaPixel(store)
        //     // Initialize Facebook Pixel if it is active
        //     // if (store.integrations.facebookPixel?.active) {
        //     const metaPixelIntegration = store.integrations?.metaPixel;
        //     const pixels = metaPixelIntegration?.pixels.map((e: any) => e.id);
        //     if (pixels) {
        //         for (let i = 0; i < pixels.length; i++) {
        //             ReactPixel.init(pixels[i], undefined, {
        //                 autoConfig: false,
        //                 debug: true,
        //             });
        //         }
        //     }
        // }
    }, [])

    // if (store?.decoration?.primary) {
    //     document.body.style.setProperty("--p", dartColorToCss(store!.decoration!.primary));
    //     if (store?.decoration?.onPrimary) {
    //       document.body.style.setProperty("--on-p", dartColorToCss(store!.decoration!.onPrimary));
    //     }
    //   }

    return (
        <div
            style={{
                "--p": dartColorToCss(store!.decoration!.primary),
                "--on-p": dartColorToCss(store!.decoration!.onPrimary!),
            } as React.CSSProperties}
        >
            <Navbar store={store} />
            <Outlet />
            <Footer store={store} />
        </div>
    );
}