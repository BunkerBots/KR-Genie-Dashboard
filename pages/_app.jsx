/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import '../styles/main.css';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Nav from '../src/components/nav';


// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Nav />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
