
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import CatalogPopup from "@/components/catalog/CatalogPopup";
import { Dropdown } from "primereact/dropdown";
import { Roboto } from "next/font/google";
import Signin from "@/components/sign-in/sign-in";
import SigninTemplate from "@/components/sign-in/sign-in";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function SignIn() {

  return (
    <div className={`${roboto.variable} w-full min-h-screen `}>
     <SigninTemplate/>

    </div>
  );
}
