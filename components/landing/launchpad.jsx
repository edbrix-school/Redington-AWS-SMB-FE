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
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-2 pt24">
          <div
            className="col-span-1 flex items-center justify-center mt-[40px] px-[16px] sm:mt-[50px] lg:mt-0 lg:px-0"
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
                    priority
                    className="w-[120px] sm:w-[180px] lg:w-[215px] h-auto"
                  />

                  <div className="-mr-2 -mt-6 sm:-mr-3 sm:-mt-8 lg:-mr-5 lg:-mt-10">
                    <Image
                      src="/images/svg/flash.svg"
                      width={95}
                      height={95}
                      alt="flash"
                      priority
                      className="w-[50px] sm:w-[75px] lg:w-[95px] h-auto"
                    />
                  </div>
                </div>

                {/* Heading */}
                <div
                  className="font-archivo font-bold launchpad-bg text-[60px] sm:text-[52px] lg:text-[70px] xl:text-[80px] 2xl:text-[102px] 3xl:text-[5.313vw] leading-none"
                >
                  Launchpad
                </div>
              </div>

              {/* Description */}
              <div
                className="text-black leading-[120%] mt-[16px] text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px] max-w-[90%] sm:max-w-none mx-auto lg:mx-0"
              >
                One Platform to manage your multi-cloud infrastructure
                <br className="hidden sm:block" />
                for all partners, vendors and customers
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-row justify-center lg:justify-start gap-[12px] mt-[18px] xl:mt-[26px] 2xl:mt-[31px] 3xl:mt-[1.615vw]"
              >
                <Link
                  href=""
                  onClick={() => setShowCatalog(true)}
                  className="text-[#5D9D4A] border border-[#5D9D4A] bg-white rounded-full py-[10px] px-[24px] text-center hover:border-[#3C4146] hover:text-[#3C4146]"
                >
                  Find & Launch!
                </Link>

                <Link
                  href="/about-us"
                  className="text-[#3C4146] border border-[#BBC1C7] bg-[#F5F6F8] rounded-full py-[10px] px-[24px] text-center hover:border-[#5D9D4A] hover:text-[#5D9D4A]"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex items-center justify-center lg:justify-center-safe mt-8 lg:mt-0 px-4">
            <Image
              src="/images/PreLogin.svg"
              alt="launchpad"
              width={1090}
              height={888}
              priority
              className="w-full max-w-[350px] md:max-w-[600px] lg:max-w-[800px] h-auto"
            />
          </div>
        </div>
      </div >
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
