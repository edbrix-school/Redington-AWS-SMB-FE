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
          <div className="col-span-1 flex items-center">
            <div className="ml-[80px] xl:ml-[100px] 2xl:ml-[120px] 3xl:ml-[7.292vw]">
              <div className="w-fit relative">
                <div className="flex justify-between items-baseline">
                  <Image src="/images/svg/logo-hero.svg" width="215" height="32" alt="logo" />
                  <div className="absolute -right-5 -top-10">
                    <Image src="/images/svg/flash.svg" width="95" height="95" alt="flash" />
                  </div>
                </div>
                <div className="font-archivo font-bold launchpad-bg text-[40px] lg:text-[60px] xl:text-[80px] 2xl:text-[102px] 3xl:text-[5.313vw]">Launchpad</div>
              </div>
              <div className="text-black font24 leading-[120%] mt24">One Platform to manage your multi-cloud infrastructure <br /> for all partners, vendors and customers</div>
              <div className="flex gap12 font-medium font18 mt-[22px] xl:mt-[26px] 2xl:mt-[31px] 3xl:mt-[1.615vw]">
                <Link href="" onClick={() => setShowCatalog(true)} className="text-[#5D9D4A]  border border-[#5D9D4A] bg-white rounded-full py10 px24">Find&Launch!</Link>
                <Link href="/about-us" className="text-[#3C4146] border border-[#BBC1C7] bg-[#F5F6F8]  rounded-full py10 px24">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex items-center">
            <Image
              src="/images/PreLogin.svg"
              alt="launchpad"
              width={1090}
              height={888}
              className="w-full"
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
