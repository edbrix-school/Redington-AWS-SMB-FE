"use client";

import { usePathname } from "next/navigation";
import Top from "./top";
import Footer from "./footer";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export default function LayoutClient({ children }) {
  const pathname = usePathname();

  const hideLayout = pathname === "/sign-in" || pathname === "/not-found";

  return (
    <div className={inter.className}>
      {!hideLayout && <Top />}

      <div className={!hideLayout ? "mt-[48px] lg:mt-[46px] md:mt-[48px] xl:mt-[50px] 2xl:mt-[2.9vw] 3xl:mt-[3.021vw]" : ""}>
        <main>{children}</main>
      </div>

      {!hideLayout && <Footer/>}
    </div>
  );
}
