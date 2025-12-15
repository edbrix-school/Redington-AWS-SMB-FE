"use client";
import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Link from "next/link";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import Image from "next/image";

export default function FilterPopup({ visible, onHide }) {
  const [date, setDate] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const category = [
    { name: "Hardware Issue", code: "HW" },
    { name: "Software Issue", code: "SW" },
    { name: "Network Issue", code: "NW" },
    { name: "Access Request", code: "AR" },
    { name: "Email Issue", code: "EM" },
    { name: "Account Locked", code: "AL" },
    { name: "Password Reset", code: "PR" },
    { name: "System Outage", code: "SO" },
    { name: "Bug Report", code: "BR" },
    { name: "Other", code: "OT" },
  ];

  return (
    <div>
      <Sidebar
        visible={visible}
        position="right"
        className="!w-[450px] lg:!w-[480px] xl:!w-[530px] 2xl:!w-[28.5vw] 3xl:!w-[30.5vw]  customsidebar2 bg-[#F6F7F8] rounded8"
        onHide={onHide}
        blockScroll={true}
      >
        <div className="flex flex-col h-full">
          <div className="border-top-left-radius: 1rem flex-none">
            <div className=" bg-[#fff] p24 rounded-tl-[10px]">
              <div className=" text-[#212325]  font24 font-bold">
                Apply Filter
              </div>
            </div>
          </div>

          <div className="bg-[#F6F7F8] dark:bg-[#1F2A37] flex-1 overflow-y-auto ">
            <div className="">
              <div className="p24 spacey24">
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Date Created
                  </label>

                  <div className="grid grid-cols-2 gap10">
                    <div className="relative  custom-input">
                      <Calendar
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.value)}
                        dateFormat="mm/dd/yy"
                        placeholder="Select Date"
                        className="w-full p-inputtext-custom"
                      />
                      <div className="absolute right-3 top-[30%]">
                        {" "}
                        <Image
                          src="/images/calendar-icon.svg"
                          width="16"
                          height="16"
                          className="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px]"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <div className="relative custom-input">
                      <Calendar
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.value)}
                        dateFormat="mm/dd/yy"
                        placeholder="Select Date"
                        className="w-full p-inputtext-custom"
                      />
                      <div className="absolute right-3 top-[30%]">
                        {" "}
                        <Image
                          src="/images/calendar-icon.svg"
                          width="16"
                          height="16"
                          className="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px]"
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Ticket Category
                  </label>

                  <div className="grid grid-cols-1">
                    <div className="custom-dropdown">
                      <Dropdown
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.value)}
                        options={category}
                        optionLabel="name"
                        placeholder="Select a Category"
                        filterDelay={400}
                        filter
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Created By
                  </label>

                  <div className="grid grid-cols-1">
                    <div className="custom-dropdown">
                      <Dropdown
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.value)}
                        options={category}
                        optionLabel="name"
                        placeholder="Select Created By"
                        filterDelay={400}
                        filter
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Status
                  </label>

                  <div className="grid grid-cols-1">
                    <div className="custom-dropdown">
                      <Dropdown
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.value)}
                        options={category}
                        optionLabel="name"
                        placeholder="Select Created By"
                        filterDelay={400}
                        filter
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-none bg-[#fff] flex justify-end">
            <div className="bg-[#fff] dark:bg-[#111928] p-[16px] xl:p-[16px] 3xl:p-[0.833vw] flex justify-end gap-4 rounded-bl-[10px]">
              <div className=" text-[#3C4146] font16 font-[500] py10 px20  border-solid border border-[#E5E7EB] rounded-lg   cursor-pointer cancel-btn-bg hover:bg-[#f6f6f7]">
                <Link onClick={onHide} href={""}>
                  Cancel
                </Link>
              </div>

              <div className="font16 font-[500] py10 px20  border-[#645592] rounded-lg bg-[#645592]  cursor-pointer hover:bg-[#5c4c8d] text-[#fff]">
                Apply Filter
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
