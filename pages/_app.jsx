/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';

import '../styles/main.css';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Nav from '../src/components/Nav';


// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
