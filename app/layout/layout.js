"use client";
import Footer from "./footer";
import Top from "./top";
import Head from "next/head";

export default function Layout({ children, ...pageProps }) {
  return (
    <>
      <Head>
        <title>
          {pageProps.pageTitle ? pageProps.pageTitle : "Loading..."} | Welcome
          to Redington-AWS-SMB
        </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={pageProps.pageClass}>
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
