import Top from "./top";
import Head from "next/head";
import Footer from "./footer";
import { ScrollTop } from "primereact/scrolltop";

export default function Layout({ children, ...pageProps }) {
  return (
    <>
      <Head>
        <title>{pageProps.pageTitle ? pageProps.pageTitle : "Loading..."} | Welcome to ERDI</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={pageProps.pageClass}>
        <Top />                 
        <div>
          <main>
            {children}
          </main>
        </div>
        <Footer isLogin = {pageProps?.isLogin}/>
        <ScrollTop  threshold={1000}/>
      </div>
    </>
  );
}
