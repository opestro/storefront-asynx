import Navbar from "./parts/navbar";
import { StoreEntity } from "feeef/src/core/core";
import Footer from "./parts/footer";
import { dartColorToCss, initMetaPixel } from "../pishop/helpers";
import { useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";


import { createTheme, ThemeProvider } from '@mui/material/styles';
import { arEG } from '@mui/material/locale';
import { TextField, Theme } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';

const theme = (outerTheme: Theme) =>
    createTheme({
        direction: 'rtl',
        //   font
        typography: {
            fontFamily: '"IBM Plex Sans Arabic", sans-serif',
        },
    });

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
});

export default function Layout() {
    let store = useLoaderData() as StoreEntity;
    useEffect(() => {
        initMetaPixel(store)
    }, [])
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
        </CacheProvider>
    );
}