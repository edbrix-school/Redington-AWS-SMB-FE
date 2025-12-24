
"use client";
import React, { useState } from "react";
import { Roboto } from "next/font/google";
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
