"use client";
import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Link from "next/link";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import PhoneInput from "@/components/common/phone-input";
import { InputTextarea } from "primereact/inputtextarea";

export default function RegisterPopup({ visible, onHide }) {
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
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <Sidebar
        visible={visible}
        position="right"
        className="!w-[450px] lg:!w-[480px] xl:!w-[580px] 2xl:!w-[32.5vw] 3xl:!w-[35.5vw]  customsidebar2 bg-[#F6F7F8] rounded8"
        onHide={onHide}
        blockScroll={true}
      >
        <div className="flex flex-col h-full">
          <div className="border-top-left-radius: 1rem flex-none">
            <div className=" bg-[#fff] p24 rounded-tl-[10px]">
              <div className=" text-[#212325]  font24 font-bold">Event Registration</div>
            </div>
          </div>
          

<div className="bg-[#F6F7F8] dark:bg-[#1F2A37] flex-1 overflow-y-auto ">
           
              <div className=" spacey24 p24 ">
                 <div className="grid grid-cols-1 spacey24">
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                      Title 
                    </label>
                    <div className="relative  custom-input">
                      <InputText
                        type="text"
                        className="w-full"
                        placeholder="Type Here"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                     Description
                      
                    </label>
                    <div className="relative  custom-input">
                      <InputTextarea
                        autoResize
                        rows={5}
                        cols={30}
                        placeholder="Event Description"
                        className="w-full !h-[150px]"
                      />
                    </div>
                  </div>
                </div>
               
                <div className="grid grid-cols-2 gap20">
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                     Date
                    </label>

                    <div className="relative  custom-input">
                      <InputText
                        type="text"
                        className="w-full"
                        placeholder="10/5/2025"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                      Location
                    </label>

                    <div className="relative  custom-input">
                      <InputText
                        type="text"
                        className="w-full"
                        placeholder="Online"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                      Name
                    </label>

                    <div className="relative  custom-input">
                      <InputText
                        type="text"
                        className="w-full"
                        placeholder="James Smith"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                      Company
                    </label>

                    <div className="relative  custom-input">
                      <InputText
                        type="text"
                        className="w-full"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                      Email ID
                    </label>

                    <div className="relative  custom-input">
                      <InputText
                        type="text"
                        className="w-full"
                        placeholder="james.smith@outlook.com"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                     Mobile Number
                    </label>

                    <div className="relative  custom-input">
                      <InputText
                        type="text"
                        className="w-full"
                        placeholder="+971 55 111 2626"
                      />
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

              <div
                onClick={() => setShow(true)}
                className="font16 font-[500] py10 px20  border-[#645592] rounded-lg bg-[#645592]  cursor-pointer hover:bg-[#5c4c8d] text-[#fff]"
              >
                Add User
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
