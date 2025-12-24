import React, { useState } from "react";
import { ChevronRight, Search } from "lucide-react";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { Sidebar } from "primereact/sidebar";
import AiChatboxPopup from "@/components/catalog/AichatboxPopup";
import Searchbox from "../common/searchbox";
import Link from 'next/link';

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
      <div className="relative overflow-hidden text-white min-h-[500px] flex flex-col justify-center support-base-banner-bg">
        <div className="mx-auto w-full relative z-10 px-[4.167vw]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-300 ">
            <Link href="/">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white font-medium">Support Sessions</span>
          </div>

          {/* Title */}
          <h1 className="font24 font-bold font-roboto mb-3">Support Sessions</h1>

          {/* Description */}
          <p className="text-[#EEEEF0]  font-normal my24 leading-[120%] font16 xl:w-xl 2xl:-w-2xl 3xl:w-[45.313vw]">
            Connect with our experts through dedicated support sessions -
            ensuring every query is addressed with clarity, care, and precision.
          </p>

          {/* Search Bar Section */}
          <Searchbox />
        </div>
      </div>

      <Sidebar
        visible={visible}
        onHide={() => hideSidebar()}
        className="p-0 z-[9999] customAichatboxsidebar !w-[53rem] lg:!w-[53rem] md:!w-[43rem] sm:!w-[100%] "
        position="right"
      >
        <AiChatboxPopup open={visible} onClose={() => hideSidebar()} />
      </Sidebar>
    </>
  );
};
