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

export default function AddUser({ visible, onHide }) {
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
              <div className=" text-[#212325]  font24 font-bold">Add New User</div>
            </div>
          </div>
          <div className="bg-[#F6F7F8] dark:bg-[#1F2A37] flex-1 overflow-y-auto">
            <div className="">
              <div className="p24 spacey20">
            
                  <label className="font14 font-medium text-InterfaceTexttitle1 mb-8">
                    Email <span className="text-red-500">*</span>
                  </label>
                 
                      <div className=" flex gap6 ">
                    
                        

                  <div className="relative  custom-input w-full">
                    <InputText
                      type="text"
                      className="w-full"
                      placeholder="Enter Email"
                    />
                  </div>
                        
                         <div className=" flex justify-end items-center"> 
                              <div
                onClick={() => setShow(true)}
                className="font16 font-[400] py6 px15 flex items-center justify-center w-[80px] xl:w-[80px] 3xl:w-[4.113vw] border-[#ae9be7] rounded6 bg-[#EDE8FF]  cursor-pointer  text-[#645592]"
              >
               Search
              </div>
                         </div>
                         <div> 
                            
                            
                             </div>
                </div>
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    First Name <span className="text-red-500">*</span>
                  </label>

                  <div className="relative  custom-input">
                    <InputText
                      type="text"
                      className="w-full"
                      placeholder="Enter First Name"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Last Name <span className="text-red-500">*</span>
                  </label>

                  <div className="relative  custom-input">
                    <InputText
                      type="text"
                      className="w-full"
                      placeholder="Enter First Name"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Designation <span className="text-red-500">*</span>
                  </label>
                  <div className="custom-dropdown">
                    <Dropdown
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.value)}
                      options={category}
                      optionLabel="name"
                      placeholder="Select Designation"
                      filterDelay={400}
                      filter
                      className="w-full customicon"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>

                  <PhoneInput 
                  placeholder='Enter Phone Number'/>
                </div>
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <div className="custom-dropdown">
                    <Dropdown
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.value)}
                      options={category}
                      optionLabel="name"
                      placeholder="Active"
                      filterDelay={400}
                      filter
                      className="w-full customicon"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Company Name <span className="text-red-500">*</span>
                  </label>

                  <div className="relative  custom-input">
                    <InputText
                      type="text"
                      className="w-full custominputDisabled"
                      placeholder="Redington"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Country of Business <span className="text-red-500">*</span>
                  </label>

                  <div className="relative  custom-input">
                    <InputText
                      type="text"
                      className="w-full custominputDisabled"
                      placeholder="UAE"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <div className="custom-dropdown">
                    <Dropdown
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.value)}
                      options={category}
                      optionLabel="name"
                      placeholder="Select Role"
                      filterDelay={400}
                      filter
                      className="w-full customicon"
                    />
                  </div>
                </div>

                <div className="py18 flex gap6 items-center">
                  <Checkbox
                    onChange={(e) => setChecked(e.checked)}
                    checked={checked}
                    className="customcheckox"
                  />
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Authorized Signatory
                  </label>
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
