import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { getData } from '../services/hero';

function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />;
}

export default MyApp;