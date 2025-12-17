"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CatalogPopup from "@/components/catalog/CatalogPopup";
import { Sidebar } from "primereact/sidebar";

const Launchpad = () => {
  const [showCatalog, setShowCatalog] = useState(false);

  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 pt24">
          <div
            className="col-span-1 flex items-center justify-center mt-[40px] px-[16px]
                sm:mt-[50px]
                lg:mt-0 lg:px-0"
          >
            <div>
              {/* Logo + Flash */}
              <div className="w-fit relative mx-auto lg:mx-0">
                <div className="flex justify-between items-baseline">
                  <Image
                    src="/images/svg/logo-hero.svg"
                    width={215}
                    height={32}
                    alt="logo"
                    className="w-[160px] sm:w-[180px] lg:w-[215px]"
                  />

                  <div className="-mr-3 -mt-8 lg:-mr-5 lg:-mt-10">
                    <Image
                      src="/images/svg/flash.svg"
                      width={95}
                      height={95}
                      alt="flash"
                      className="w-[60px] sm:w-[75px] lg:w-[95px]"
                    />
                  </div>
                </div>

                {/* Heading */}
                <div
                  className="font-archivo font-bold launchpad-bg
                      text-[44px]
                      sm:text-[52px]
                      lg:text-[70px]
                      xl:text-[80px]
                      2xl:text-[102px]
                      3xl:text-[5.313vw]"
                >
                  Launchpad
                </div>
              </div>

              {/* Description */}
              <div
                className="text-black leading-[120%] mt-[16px]
                    text-[14px]
                    sm:text-[16px]
                    lg:text-[18px]
                    xl:text-[20px]"
              >
                One Platform to manage your multi-cloud infrastructure
                <br className="hidden sm:block" />
                for all partners, vendors and customers
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-[12px] mt-[18px]
                    xl:mt-[26px]
                    2xl:mt-[31px]
                    3xl:mt-[1.615vw]"
              >
                <Link
                  href=""
                  onClick={() => setShowCatalog(true)}
                  className="text-[#5D9D4A] border border-[#5D9D4A] bg-white
                   rounded-full py-[10px] px-[24px]
                   text-center hover:border-[#3C4146] hover:text-[#3C4146]"
                >
                  Find & Launch!
                </Link>

                <Link
                  href="/about-us"
                  className="text-[#3C4146] border border-[#BBC1C7] bg-[#F5F6F8]
                   rounded-full py-[10px] px-[24px]
                   text-center hover:border-[#5D9D4A] hover:text-[#5D9D4A]"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex items-center justify-center lg:justify-center-safe">
            <Image
              src="/images/PreLogin.svg"
              alt="launchpad"
              width={1090}
              height={888}
              className="w-[200px] md:w-[600px] lg:w-[800px]  2xl:w-[56.771vw] 3xl:w-[56.771vw]"
            />
          </div>
        </div>
      </div>
      <Sidebar
        visible={showCatalog}
        onHide={() => setShowCatalog(false)}
        className="p-0  customsidebar popup-enter"
        blockScroll
      >
        <CatalogPopup
          open={showCatalog}
          onClose={() => setShowCatalog(false)}
        />
      </Sidebar>
    </>
  );
};

export default Launchpad;
