import React, { useState } from "react";
import { ChevronRight, Search } from "lucide-react";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { Sidebar } from "primereact/sidebar";
import AiChatboxPopup from "@/components/catalog/AichatboxPopup";

export const SupportSessionsHeader = () => {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  const showSidebar = () => {
    setVisible(true);
  };

  const hideSidebar = () => {
    setVisible(false);
  };
  return (
    <>
      <div className="relative overflow-hidden text-white py-12 px-4 md:px-8 min-h-[340px] flex flex-col justify-center">
        {/* Background Image from Figma */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/freeepik-expand.png"
            alt="Support Sessions Background"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-dark-900/30"></div>
        </div>

        <div className="max-w-8xl mx-auto w-full relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-300 mb-6">
            <span>Home</span>
            <ChevronRight size={12} />
            <span className="text-white font-medium">Support Sessions</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold font-roboto mb-3">
            Support Sessions
          </h1>

          {/* Description */}
          <p className="text-gray-200 max-w-2xl mb-10 text-base font-normal leading-relaxed">
            Connect with our experts through dedicated support sessions -
            ensuring every query is addressed with clarity, care, and precision.
          </p>

          {/* Search Bar Section */}
          <div className="max-w-2xl relative" onClick={showSidebar}>
            {/* Search Input Container - Updated Background Color */}
            <div className="relative h-14 rounded-lg flex items-center overflow-hidden search-input">
              <InputText
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="supportSearchInput w-full font16"
                placeholder="Search"
              />

              <div className="px-6 h-full flex items-center justify-center cursor-pointer hover:opacity-100 transition-opacity">
                <Search size={24} className="text-white" />
              </div>
            </div>

            {/* Decorative element - Added cursor-pointer */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block opacity-90 rotate-180 cursor-pointer hover:opacity-100 transition-opacity">
              <svg
                width="70"
                height="70"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Purple Chevron */}
                <path d="M20 20 L55 20 L75 40 L40 40 Z" fill="#59B557" />
                <path d="M20 20 L20 55 L40 75 L40 40 Z" fill="#4A9C49" />

                {/* Green Chevron */}
                <path d="M40 40 L75 40 L95 60 L60 60 Z" fill="#8078B9" />
                <path d="M40 40 L40 75 L60 95 L60 60 Z" fill="#6A629A" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Sidebar
        visible={visible}
        onHide={() => hideSidebar()}
        className="p-0 z-[9999] customAichatboxsidebar !w-[60rem] lg:!w-[60rem] md:!w-[50rem] sm:!w-[100%] "
        position="right"
      >
        <AiChatboxPopup open={visible} onClose={() => hideSidebar()} />
      </Sidebar>
    </>
  );
};
