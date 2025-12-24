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
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },

  ];

  return (
    <>
      <div
        className={`${roboto.variable} w-full fixed top-0 left-0 bg-[#232823] mb-[58px] 3xl:mb-[3.021vw] z-[999] `}
      >
        {/* NAVBAR */}
        <div className="relative flex items-center justify-start lg:justify-between px-[5px] gap-4 lg:gap-0 xl:gap-4 xl:px-[20px] 3xl:px-[1.875vw] py-[7px] lg:py-[8px] xl:py-[10px] 2xl:py-[10px] 3xl:py-[0.533vw]">
          {/* LEFT SECTION */}
          <div className="flex items-center gap-[16px] xl:gap-[16px] 3xl:gap-[0.938vw]">
            <div className="flex divide-x divide-[#494949] items-center">
              <div className="pr-[10px] xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[0.729vw]">
                <Link href="/" className="cursor-pointer">
                  <Image
                    src="/images/redington-logo.svg"
                    width={100}
                    height={22}
                    alt="logo"
                    priority
                    className="w-[70px] lg:w-[80px] xl:w-[80px] 3xl:w-[5.108vw] h-auto"
                  />
                </Link>
              </div>
              <Image
                src="/images/aws.svg"
                width={100}
                height={20}
                alt="aws"
                priority
                className="w-[30px] lg:w-[32px] xl:w-[34px] 3xl:w-[2.104vw] h-auto ml-[10px]"
              />
            </div>

            {/* MIDDLE BUTTONS */}
            <div
              className="flex items-center gap-[14px] xl:gap-[19px] 3xl:gap-[1.033vw] cursor-pointer"
              onClick={() => setShowCatalog(true)}
            >
              <i className="smb-flash-light text-[#5CB456] text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[1.294vw]"></i>
              <div className="py-[4px] lg:py-[3px] xl:py-[3px] 3xl:py-[0.217vw] flex items-center justify-center gap-[4px] lg:gap-[7px] xl:gap-[8px] 2xl:gap-[9px] 3xl:gap-[0.521vw] text-white px-[12px] lg:px-[14px] xl:px-[18px] 3xl:px-[1.225vw] cursor-pointer rounded-[2px] xl:rounded-[3px] 3xl:rounded-[3px] bg-[#019049]">
                <i className="smb-book text-[#fff] text-[17px] xl:text-[18px] 3xl:text-[1.038vw]"></i>
                <div className="text-[13px] lg:text-[12px] xl:text-[12px] 3xl:text-[0.729vw] font-medium py-[3px] xl:py-[3px] 3xl:py-[0.217vw]">
                  Catalog
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT SECTION WRAPPER - FLEX CONTAINER FOR ALIGNMENT */}
          <div className="flex items-center gap-[12px] lg:gap-[10px] xl:gap-[20px] 3xl:gap-[1.563vw] pr-[10px] lg:pr-[2px] xl:pr-[12px] 3xl:pr-[1.25vw]">

            {/* DESKTOP ONLY ITEMS: Support, Contact, Language */}
            <div className="hidden lg:flex items-center gap-[12px] lg:gap-[10px] xl:gap-[20px] 3xl:gap-[1.563vw] text-white">
              <div className="cursor-pointer text-[12px] lg:text-[12px]  xl:text-[11px] 2xl:text-[0.729vw] 3xl:text-[0.729vw] font-medium">
                Support
              </div>
              <div className="cursor-pointer text-[12px] lg:text-[11px]  xl:text-[11px] 2xl:text-[0.729vw] 3xl:text-[0.729vw] font-medium">
                Contact Us
              </div>
              <div className="flex items-center gap-[4px] xl:gap-[4px] 2xl:gap-[6px] text-[14px] font-medium mx-[6px] lg:mx-[4px] xl:mx-[6px] 2xl:mx-[10px] 3xl:mx-[0.625vw]">
                <i className="smb-global text-[#fff] text-[15px] xl:text-[15px] 2xl:text-[15px] 3xl:text-[0.833vw]"></i>
                <Dropdown
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  options={cities}
                  optionLabel="name"
                  placeholder="English - EN"
                  panelClassName="custDropdown1panel"
                  className="w-[95px] xl:w-[105px] 2xl:w-[110px] 3xl:w-[5.871vw] text-[12px] lg:text-[12px]  xl:text-[11px] 2xl:text-[0.729vw] 3xl:text-[0.729vw] topdropdown"
                />
              </div>
            </div>

            {/* ALWAYS VISIBLE: SIGN IN (Adjusted gap for mobile) */}
            {/* User requested to move Sign In to Hamburger on Mobile, so this should be HIDDEN on mobile now? 
                "Add sign-in to the Hamburger" implies it's in the menu.
                "Change the Hamburger icon to the user icon... When I click on this icon or the sign-in icon the dropdown opens" 
                This suggests the trigger IS the user icon. 
                So we hide the explicit Link on mobile, and show the Trigger.
            */}
            <div className="hidden lg:flex cursor-pointer gap-[16px] lg:gap-[16px] xl:gap-[16px] 3xl:gap-[1.238vw] items-center lg:pl-[2px] xl:pl-[4px] 2xl:pl-[8px] 3xl:pl-[0.521vw] text-white shrink-0">
              <Link href={"/sign-in"}>
                <div className="flex items-center gap-[8px] xl:gap-[8px] 3xl:gap-[0.938vw]">
                  <i className="smb-logout font14 block lg:block"></i>
                  <div className="text-[12px] lg:text-[12px]  xl:text-[11px] 2xl:text-[0.729vw] 3xl:text-[0.729vw] font-medium whitespace-nowrap">
                    Sign In
                  </div>
                </div>
              </Link>
              <Image
                src="/images/user-square.svg"
                width={30}
                height={30}
                alt="logo"
                priority
                className="w-[26px] lg:w-[24px] xl:w-[26px] 3xl:w-[1.323vw] h-[26px] lg:h-[24px] xl:h-[26px] 3xl:h-[1.323vw] "
              />
            </div>

            {/* MOBILE MENU TRIGGER (User Icon + Arrow) */}
            <div className="lg:hidden flex items-center gap-1 ml-2 cursor-pointer shrink-0" onClick={() => setShowMobileSidebar(true)}>
              <Image
                src="/images/user-square.svg"
                width={30}
                height={30}
                alt="user menu"
                priority
                className="w-[26px] h-[26px] shrink-0"
              />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* CENTER GRADIENT INSIDE NAVBAR */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
          <div className="custom-gradient flex items-center gap-[12px] lg:gap-[12px] xl:gap-[12px] 3xl:gap-[0.625vw] px-[10px] lg:px-[10px] xl:px-[20px] 2xl:px-[60px] 3xl:px-[9.208vw] py-[9px] lg:py-[0.891vw] xl:py-[0.550vw] 2xl:py-[0.469vw] 3xl:py-[0.659vw] rounded-md">
            <span className="text-[#fff] cursor-pointer whitespace-nowrap text-[12px] lg:text-[12px]  xl:text-[12px] 2xl:text-[0.833vw] 3xl:text-[0.833vw]">
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
      {/* Sidebar */}
      <Sidebar
        visible={showCatalog}
        onHide={() => setShowCatalog(false)}
        className="p-0 customsidebar popup-enter closecustomsidebar "
        blockScroll
      >
        <CatalogPopup
          open={showCatalog}
          onClose={() => setShowCatalog(false)}
        />
      </Sidebar>

      {/* MOBILE SIDEBAR */}
      <Sidebar
        visible={showMobileSidebar}
        onHide={() => setShowMobileSidebar(false)}
        position="right"
        className="!bg-[#232823] w-[85vw] sm:w-[375px] border-l border-[#494949] customsidebar"
        style={{ backgroundColor: '#232823' }}
      >
        <div className="flex flex-col gap-6 p-4 text-white h-full bg-[#232823]">
          <div className="flex items-center justify-between mb-2">
            <Image
              src="/images/redington-logo.svg"
              width={100}
              height={22}
              alt="logo"
              className="w-[100px] h-auto"
            />
            <svg
              onClick={() => setShowMobileSidebar(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-white cursor-pointer"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>

          <div className="flex flex-col gap-6">
            <div className="custom-gradient flex items-center justify-between p-3 rounded-md">
              <span className="text-[12px] font-medium text-white">What are you looking for today?</span>
              <Image
                src="/images/tonai.svg"
                width={60}
                height={40}
                alt="icon"
                className="w-[50px] h-auto"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="cursor-pointer text-[14px] font-medium border-b border-[#494949] pb-3 text-white hover:text-[#5CB456] transition-colors">
                Support
              </div>
              <div className="cursor-pointer text-[14px] font-medium border-b border-[#494949] pb-3 text-white hover:text-[#5CB456] transition-colors">
                Contact Us
              </div>

              <div className="flex items-center justify-between border-b border-[#494949] pb-3">
                <div className="flex items-center gap-2">
                  <i className="smb-global text-white text-[16px]"></i>
                  <span className="text-[14px] font-medium text-white">Language</span>
                </div>
                <Dropdown
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  options={cities}
                  optionLabel="name"
                  placeholder="EN"
                  className="w-[80px] text-[12px]"
                />
              </div>

              {/* SIGN IN LINK IN SIDEBAR */}
              <Link href={"/sign-in"} onClick={() => setShowMobileSidebar(false)}>
                <div className="flex items-center justify-between pt-2 group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/user-square.svg"
                      width={24}
                      height={24}
                      alt="user"
                      className="grayscale group-hover:grayscale-0 transition-all"
                    />
                    <span className="text-[14px] font-medium text-white group-hover:text-[#5CB456] transition-colors">Sign In</span>
                  </div>
                  <i className="smb-logout font14 text-white group-hover:text-[#5CB456] transition-colors"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}

