import "../styles/globals.css";

import { Inter } from "next/font/google";
// import ReduxWrapper from "./reduxWrapper";

const Myinter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "CSIUOBPP Portal",
  description: "Welcome to CSIUOBPP Portal",
  name: "viewport",
  content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={Myinter.className}>
          {/* <ReduxWrapper> */}
            {children}
          {/* </ReduxWrapper> */}
        </body>
      </html>
    </>
  );
}
