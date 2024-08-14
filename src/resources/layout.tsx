import Navbar from "./parts/navbar";
import { StoreEntity } from "feeef/src/core/core";
import Footer from "./parts/footer";
import { dartColorToCss, initMetaPixel } from "../pishop/helpers";
import { useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

export default function Layout() {
    let store = useLoaderData() as StoreEntity;
    useEffect(() => {
        initMetaPixel(store)
    }, [])
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