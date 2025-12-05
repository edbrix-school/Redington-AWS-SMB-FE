"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import CatalogPopup from "@/components/catalog/CatalogPopup";
import { Dropdown } from "primereact/dropdown";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

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
    <div
      className={`${roboto.variable} w-full fixed top-0 left-0 bg-[#232823]`}
    >
      {/* NAVBAR */}
      <div className="relative flex items-center justify-between px-[20px] xl:px-[20px] 3xl:px-[1.875vw] py-[7px] lg:py-[8px] xl:py-[10px] 2xl:py-[10px] 3xl:py-[0.533vw]">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-[16px] xl:gap-[16px] 3xl:gap-[0.938vw]">
          <div className="flex divide-x divide-[#494949] items-center">
            <div className="pr-[10px] xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[0.729vw]">
              <Image
                src="/images/redington-logo.svg"
                width={100}
                height={22}
                alt="logo"
                className="w-[70px] lg:w-[80px] xl:w-[80px] 3xl:w-[5.108vw] h-auto"
              />
            </div>
            <Image
              src="/images/aws.svg"
              width={100}
              height={20}
              alt="aws"
              className="w-[30px] lg:w-[32px] xl:w-[34px] 3xl:w-[2.104vw] h-auto ml-[10px]"
            />
          </div>

          {/* MIDDLE BUTTONS */}
          <div
            className="flex items-center gap-[14px] xl:gap-[19px] 3xl:gap-[1.033vw]"
            onClick={() => setShowCatalog(true)}
          >
            <i className="smb-flash-light text-[#5CB456] text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[1.294vw]"></i>
            <div className="py-[4px] lg:py-[3px] xl:py-[3px] 3xl:py-[0.217vw] flex items-center justify-center gap-[4px] lg:gap-[7px] xl:gap-[8px] 2xl:gap-[9px] 3xl:gap-[0.521vw] text-white px-[12px] lg:px-[14px] xl:px-[18px] 3xl:px-[1.225vw] cursor-pointer rounded-[2px] xl:rounded-[3px] 3xl:rounded-[3px] bg-[#019049]">
              <i className="smb-book text-[#fff] text-[17px] xl:text-[18px] 3xl:text-[1.038vw]"></i>
              <div className="text-[13px] lg:text-[12px] xl:text-[13px] 3xl:text-[0.729vw] font-medium py-[3px] xl:py-[3px] 3xl:py-[0.217vw]">
                Catalog
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <Sidebar
          visible={showCatalog}
          onHide={() => setShowCatalog(false)}
          className="p-0 z-[9999] customsidebar"
          style={{ width: "1200px" }}
        >
          <CatalogPopup
            open={showCatalog}
            onClose={() => setShowCatalog(false)}
          />
        </Sidebar>
        {/* RIGHT SECTION */}
        <div className="flex items-center gap-[12px] lg:gap-[10px] xl:gap-[20px] 3xl:gap-[1.563vw] text-white pr-[2px] xl:pr-[12px] 3xl:pr-[1.25vw]">
          <div className="cursor-pointer text-[12px] lg:text-[12px] xl:text-[13px] 3xl:text-[0.729vw] font-medium">
            Support
          </div>
          <div className="cursor-pointer text-[12px] lg:text-[12px] xl:text-[13px] 3xl:text-[0.729vw] font-medium">
            Contact Us
          </div>
          <div className="flex items-center gap-[6px] text-[14px] font-medium mx-[6px] lg:mx-[4px] xl:mx-[6px] 2xl:mx-[10px] 3xl:mx-[0.625vw]">
            <i className="smb-global text-[#fff] text-[15px] xl:text-[15px] 2xl:text-[15px] 3xl:text-[0.833vw]"></i>
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="English - EN"
              className="w-[90px] xl:w-[100px] 2xl:w-[110px] 3xl:w-[5.471vw] topdropdown"
            />
          </div>

          <div className="cursor-pointer flex gap-[16px] lg:gap-[16px] xl:gap-[16px] 3xl:gap-[1.238vw] items-center lg:pl-[2px] xl:pl-[4px] 2xl:pl-[8px] 3xl:pl-[0.521vw]">
            <Link href={"/sign-in"}>
              <div className="flex items-center gap-[8px] xl:gap-[8px] 3xl:gap-[0.938vw]">
                <i className="smb-logout font14"></i>
                <div className="text-[12px] lg:text-[12px] xl:text-[13px] 3xl:text-[0.729vw] font-medium">
                  Sign In
                </div>
              </div>
            </Link>
            <Image
              src="/images/user-square.svg"
              width={30}
              height={30}
              alt="logo"
              className="w-[26px] lg:w-[24px] xl:w-[26px] 3xl:w-[1.323vw] h-[26px] lg:h-[24px] xl:h-[26px] 3xl:h-[1.323vw] "
            />
          </div>
        </div>
      </div>

      {/* CENTER GRADIENT INSIDE NAVBAR */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="custom-gradient flex items-center gap-[12px] lg:gap-[12px] xl:gap-[12px] 3xl:gap-[0.625vw] px-[10px] lg:px-[10px] xl:px-[40px] 2xl:px-[60px] 3xl:px-[9.208vw] py-[9px] lg:py-[0.891vw] xl:py-[0.681vw] 2xl:py-[0.521vw] 3xl:py-[0.659vw] rounded-md">
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
