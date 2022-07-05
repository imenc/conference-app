import React from "react";
import Head from "next/head";

import Header from "./header";
import Footer from "./footer";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = ({ children, title = 'Conference Application' }) => {
    return(
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Header />
            <ToastContainer position="bottom-right" />
            {children}
            <Footer />

        </div>
    );
}

export default Layout;

