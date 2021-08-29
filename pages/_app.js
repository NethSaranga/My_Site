import Head from 'next/head';
import 'tailwindcss/tailwind.css'
import '../styles/tailwind.scss'
import "../styles/styles.scss";
import React from "react";


function NethSaranga({ Component, pageProps }) {
  return( 
  <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
  </Head>
  <Component {...pageProps} />
  </>)
}

export default NethSaranga
