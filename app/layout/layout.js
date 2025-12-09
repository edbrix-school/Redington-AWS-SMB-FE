// "use client";
// import Head from "next/head";

// export default function Layout({ children, ...pageProps }) {
//   return (
//     <>
//       <Head>
//         <title>
//           {pageProps.pageTitle ? pageProps.pageTitle : "Loading..."} | Welcome
//           to Redington-AWS-SMB
//         </title>
//         <meta name="description" content="" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div className={pageProps.pageClass}>
//         <div className="">
//           <main className="">{children}</main>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import { usePathname } from "next/navigation";
import Top from "./top";
import Footer from "./footer";


export default function LayoutClient({ children }) {
  const pathname = usePathname();

  const hideLayout = pathname === "/sign-in";

  return (
    <>
      {!hideLayout && <Top />}

      <div className={!hideLayout ? "mt-[40px] xl:mt-[50px] 2xl:mt-[56px]" : ""}>
        <main>{children}</main>
      </div>

      {!hideLayout && <Footer/>}
    </>
  );
}
