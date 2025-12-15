"use client";

import React from "react";
import { NavBar } from "../layout/NavBar";
import { Hero } from "@/components/my-company/index";
import { MyCompany } from "@/components/my-company/company";

export default function MyCompanyPage() {
  return (
   <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <NavBar />
      <Hero />
      <main className="flex-grow -mt-20 relative z-20 px-4 md:px-8 pb-10"> {/* Negative margin to overlap Hero */}
        <MyCompany />
      </main>
    </div>
  );
}
