"use client";

import { useState } from "react";
import CatalogPopup from "@/components/catalog/CatalogPopup";
import Image from "next/image";
import React from "react";

export default function Top() {
  const [showCatalog, setShowCatalog] = useState(false);
  return (
    <div className="relative">
      {/* Top Strip with fixed height */}
      <div
        className="relative bg-[#232823] h-[50px] flex items-center
                      pr-[20px] xl:pr-[20px] 3xl:pr-[1.042vw]
                      pl-[12px] xl:pl-[12px] 3xl:pl-[0.625vw] flex justify-between"
      >
        <div className="flex gap-[1px] items-center">
          <div className="flex divide-x divide-[#c7c7c7]">
            <Image
              src="/images/redington-logo.svg"
              width={100}
              height={22}
              alt="logo"
              className="w-[100px] xl:w-[100px] 3xl:w-[5.208vw] 
                         h-[22px] xl:h-[22px] 3xl:h-[1.342vw]"
            />

            <Image
              src="/images/aws.svg"
              width={100}
              height={25}
              alt="aws"
              className="w-[70px] h-auto"
            />
          </div>

          <Image
            src="/images/flash.svg"
            width={30}
            height={40}
            alt="flash"
            className="w-[30px] h-auto"
          />
          <div className="pl-[10px] flex cursor-pointer flex font-medium gap-[4px] items-center text-[14px] text-[#fff] px-[12px] rounded-[2px] bg-[#019049]">
            <Image
              src="/images/book.svg"
              width={15}
              height={15}
              alt="flash"
              className="w-[15px] h-auto"
            />
            <button
              type="button"
              onClick={() => setShowCatalog(true)}
              className="rounded-full cursor-pointer px-4 py-2 text-sm font-medium"
            >
              Catalog
            </button>
          </div>
          <CatalogPopup
            open={showCatalog}
            onClose={() => setShowCatalog(false)}
          />
        </div>
        <div className="flex gap-[20px] text-[#fff]">
          <div className="text-[#fff] text-[14px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[0.729vw] font-medium">
            Support
          </div>
          <div className="text-[#fff] text-[14px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[0.729vw] font-medium">
            Contact Us
          </div>
          <div className="text-[#fff] text-[14px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[0.729vw] font-medium">
            English - EN
          </div>
          <div className="text-[#fff] text-[14px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[0.729vw] font-medium">
            Sign In
          </div>
        </div>
      </div>

      {/* Gradient + icon centered on the bar */}
      <div className="absolute left-1/2 top-[25px] -translate-x-1/2 -translate-y-1/2">
        <div className="custom-gradient flex items-center flex-nowrap gap-4 px-[70px] ">
          <span className="text-white">What are you looking for today?</span>
          <Image
            src="/images/tonai.svg"
            width={80}
            height={40}
            alt="icon"
            className="w-[80px] h-[40px]"
          />
        </div>
      </div>
    </div>
  );
}
