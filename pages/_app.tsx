import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>MyTop !</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
    </Head>
        <div style={{marginTop:"20px"}}></div>
        <Component {...pageProps} />;
  </>
  );

}
