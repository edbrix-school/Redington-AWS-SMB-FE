"use client";
import Image from "next/image";
import React, { useState } from "react";

import { Sidebar } from "primereact/sidebar";
import AiChatboxPopup from "../catalog/AichatboxPopup";

export default function Searchbox() {
  const [visible, setVisible] = useState(false);
  const showSidebar = () => {
    setVisible(true);
  };
  const hideSidebar = () => {
    setVisible(false);
  };

  return (
    <>
      <div
        className="xl:max-w-lg  2xl:max-w-2xl  3xl:max-w-3xl relative cursor-pointer"
       
      >
        {/* Search Input Container - Updated Background Color */}
        <div className="relative h-[50px] lg:h-[50px] xl:h-[70px] 3xl:h-[4.167vw]  rounded-lg flex justify-between items-center overflow-hidden  search-box shadow-sm 
        p-[15px]  md:p-[20px] lg:p-[18px] xl:p-[22px] 2xl:p-[1vw] 3xl:p-[1.25vw]
        cursor-pointer" onClick={showSidebar}>
          {/* <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/90 px-6 text-lg font-medium"
                        /> */}
          <div className="font18 text-white font-medium">Search</div>
          <div className="h-full flex items-center justify-center cursor-pointer hover:opacity-100 transition-opacity">
            <Image
              src="/images/search-normal.svg"
              width={32}
              height={32}
              alt="search"
              className=""
            />
          </div>
        </div>
        <Sidebar
          visible={visible}
          onHide={() => hideSidebar()}
          className="p-0 z-[9999] customAichatboxsidebar !w-[53rem] lg:!w-[53rem] md:!w-[43rem] sm:!w-[100%]  "
          position="right"
        >
          <AiChatboxPopup open={visible} onClose={() => hideSidebar()} />
        </Sidebar>
      </div>
    </>
  );
}
