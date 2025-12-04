"use client";
import Image from "next/image";
import CatalogPopup from "@/components/catalog/CatalogPopup";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function Top() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [showCatalog, setShowCatalog] = useState(false);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <div className="w-full bg-[#232823] relative">
      <div className="flex items-center justify-between px-[20px] xl:px-[20px] 3xl:px-[1.875vw]  py-[7px] lg:py-[8px] xl:py-[10px] 3xl:py-[0.733vw] relative">
        <div className="flex items-center gap-x-[12px]">
          <div className="flex divide-x divide-[#494949] items-center">
            <div className="pr-[10px] xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[0.729vw]">
              <Image
                src="/images/redington-logo.svg"
                width={100}
                height={22}
                alt="logo"
                className="w-[70px] lg:w-[80px] xl:w-[80px] 3xl:w-[5.108vw] 
                         h-auto"
              />
            </div>

            <Image
              src="/images/aws.svg"
              width={100}
              height={20}
              alt="aws"
              className="w-[30px] lg:w-[32px]  xl:w-[34px] 3xl:w-[2.104vw] h-auto ml-[10px]"
            />
          </div>

          {/* MIDDLE BUTTONS */}
          <div className="flex items-center gap-[12px] xl:gap-[16px] 3xl:gap-[0.833vw]">
            <Image
              src="/images/flash.svg"
              width={30}
              height={40}
              alt="flash"
              className="h-auto w-[25px] xl:w-[30px] 3xl:w-[1.763vw] h-auto"
            />

            <div className="py-[4px] lg:py-[3px] xl:py-[3px] 3xl:py-[0.217vw] flex items-center justify-center gap-[4px] lg:gap-[7px] xl:gap-[8px] 2xl:gap-[9px] 3xl:gap-[0.521vw] text-white px-[12px] lg:px-[14px] xl:px-[18px] 3xl:px-[1.225vw] cursor-pointer rounded-[2px] xl:rounded-[3px] 3xl:rounded-[3px] bg-[#019049]">
              <Image
                src="/images/book.svg"
                width={17}
                height={18}
                alt="book"
                className="w-[16px] lg:w-[18px] xl:w-[20px] 3xl:w-[1.031vw] h-auto  "
              />
              <div
                onClick={() => setShowCatalog(true)}
                className="text-[13px] lg:text-[12px] xl:text-[13px] 3xl:text-[0.729vw] font-medium py-[3px] xl:py-[3px] 3xl:py-[0.217vw]"
              >
                Catalog{" "}
              </div>
            </div>
            <CatalogPopup
              open={showCatalog}
              onClose={() => setShowCatalog(false)}
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-[12px] lg:gap-[10px]  xl:gap-[20px] 3xl:gap-[1.563vw] text-white">
          <div className="cursor-pointer text-[12px] lg:text-[12px] xl:text-[13px]] 3xl:text-[0.729vw] font-medium">
            Support
          </div>
          <div className=" cursor-pointer text-[12px] lg:text-[12px] xl:text-[13px] 3xl:text-[0.729vw] font-medium">
            Contact Us
          </div>
          <div className="flex items-center gap-[6px] text-[14px] font-medium  mx-[6px] lg:mx-[4px] xl:mx-[6px] 2xl:mx-[10px] 3xl:mx-[0.625vw]">
            <Image
              src="/images/global.svg"
              width={15}
              height={15}
              alt="global"
              className="h-auto"
            />
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="English - EN"
              className="w-[90px] xl:w-[100px] xl:w-[110px] 3xl:w-[5.471vw] topdropdown"
            />
          </div>
          <div className=" cursor-pointer flex gap-[16px] lg:gap-[16px] xl:gap-[16px] 3xl:gap-[1.238vw] items-center lg:pl-[2px] xl:pl-[4px] 2xl:pl-[8px] 3xl:pl-[0.521vw]">
            <div className="flex items-center gap-[8px]">
              <Image
                src="/images/login.svg"
                width={20}
                height={20}
                alt="logo"
                className="w-[15px] lg:w-[15px] xl:w-[15px] 3xl:w-[0.781vw] 
                        h-[15px] lg:h-[15px] xl:h-[15px] 3xl:h-[0.781vw] "
              />
              <div className="text-[12px] lg:text-[12px] xl:text-[13px] 3xl:text-[0.729vw] font-medium">
                Sign In
              </div>
            </div>
            <Image
              src="/images/user-square.svg"
              width={30}
              height={30}
              alt="logo"
              className="w-[26px] lg:w-[24px] xl:w-[26px] 3xl:w-[1.323vw] 
                        h-[26px] lg:h-[24px] xl:h-[26px] 3xl:h-[1.323vw] "
            />
          </div>
        </div>
      </div>

      {/* CENTER GRADIENT */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none ">
        <div className=" custom-gradient flex items-center gap-[12px] lg:gap-[12px] xl:gap-[12px] 3xl:gap-[0.625vw] px-[20px] lg:px-[16px] xl:px-[40px] 2xl:px-[60px]  3xl:px-[7.208vw] py-[9px] lg:py-[0.871vw] xl:py-[0.661vw] 2xl:py-[0.521vw] 3xl:py-[0.847vw] rounded-md">
          <span className="text-[#fff] cursor-pointer whitespace-nowrap text-[16px] lg:text-[15px] xl:text-[16px] 3xl:text-[0.938vw]">
            What are you looking for today?
          </span>
          <Image
            src="/images/tonai.svg"
            width={80}
            height={50}
            alt="icon"
            className="w-[80px] xl:w-[100px] 3xl:w-[4.988vw] h-auto cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
