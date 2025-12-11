"use client";
import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Link from "next/link";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Calendar } from "primereact/calendar";
import Image from "next/image";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

export default function NewTicket({ visible, onHide }) {
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
    <div className="h-full">
      <Sidebar
        visible={visible}
        position="right"
        className="!w-full lg:!w-[500px] xl:!w-[700px] 2xl:!w-[39.063vw] 3xl:!w-[39.063vw]  customsidebar2 bg-[#F6F7F8] rounded8"
        onHide={onHide}
        blockScroll={true}
      >
        <div className="flex flex-col  mb30">
          <div className="border-top-left-radius: 1rem flex-none">
            <div className=" bg-[#fff] p24 rounded-tl-[10px]">
              <div className=" text-[#212325]  font24 font-bold">
                New Ticket
              </div>
            </div>
          </div>
          <div className="bg-[#F6F7F8] dark:bg-[#1F2A37] flex-1 overflow-y-auto">
            <div className="p24">
              <div className=" spacey24 pb22 border-b border-solid border-[#C9D3DB]">
                <div className="grid grid-cols-2 gap20">
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                      First Name <span className="text-red-500">*</span>
                    </label>

                    <div className="relative  custom-input">
                      <InputText
                        type="text"
                        className="w-full"
                        placeholder="James"
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
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap20">
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                      Company Name
                    </label>

                    <div className="relative  custom-input">
                      <InputText
                        type="text"
                        className="w-full"
                        placeholder="Customer Name"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                      Email<span className="text-red-500">*</span>
                    </label>

                    <div className="relative  custom-input">
                      <InputText
                        type="text"
                        className="w-full"
                        placeholder="james.smith@outlook.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap20">
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                      Phone<span className="text-red-500">*</span>
                    </label>

                    <div className="relative  custom-input">
                      <InputText
                        type="text"
                        className="w-full"
                        placeholder="+971 50 111 8945"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" spacey24 pb22 mt24 mb20">
                <div className="grid grid-cols-2 gap20">
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                      Request Type <span className="text-red-500">*</span>
                    </label>
                    <div className="custom-dropdown">
                      <Dropdown
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.value)}
                        options={category}
                        optionLabel="name"
                        placeholder="Select Request Type"
                        filterDelay={400}
                        filter
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                      Category<span className="text-red-500">*</span>
                    </label>
                    <div className="custom-dropdown">
                      <Dropdown
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.value)}
                        options={category}
                        optionLabel="name"
                        placeholder="Select Category"
                        filterDelay={400}
                        filter
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                      Priority <span className="text-red-500">*</span>
                    </label>
                    <div className="relative  custom-input">
                      <InputText
                        type="text"
                        className="w-full"
                        placeholder="Type Here"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                      Description of Issue/Request{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative  custom-input">
                      <InputTextarea
                        autoResize
                        rows={5}
                        cols={30}
                        placeholder="Type Description ..."
                        className="w-full !h-[150px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1">
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                      Attachment <span className="text-red-500">*</span>
                    </label>
                    <div className="border border-dashed border-gray-300 rounded-lg bg-white p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-100 transition">
                      <input type="file" className="hidden" id="fileUpload" />

                      <div className="text-gray-400 mb-3">
                        <Image
                          src="/images/document-upload.svg"
                          width={40}
                          height={40}
                          alt="adduser"
                          className="inline-block"
                        />
                      </div>

                      <p className="text-[#3C4146] font-[500] font14">
                        Click to upload or drag and drop
                      </p>
                      <p className="font-[400] text-[#7F8488] font12 mt-1">
                        Max. File Size: 30MB
                      </p>

                      <button
                        onClick={() =>
                          document.getElementById("fileUpload").click()
                        }
                        className="mt-4 px14 py8 rounded-md bg-[#768FB5] text-white flex items-center gap-2"
                      >
                        <Image
                          src="/images/document-upload-white.svg"
                          width={18}
                          height={18}
                          alt="adduser"
                          className="inline-block"
                        />
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 left-0 flex-none">
          <div className="bg-[#fff] dark:bg-[#111928] p-[16px] xl:p-[16px] 3xl:p-[0.833vw] flex justify-end gap-4 rounded-bl-[10px]">
            <div className=" text-[#3C4146] font16 font-[500] py10 px20  border-solid border border-[#E5E7EB] rounded-lg   cursor-pointer cancel-btn-bg hover:bg-[#f6f6f7]">
              <Link onClick={onHide} href={""}>
                Cancel
              </Link>
            </div>

            <div
              onClick={() => setShow(true)}
              className="font16 font-[500] py10 px20  border-[#645592] rounded-lg bg-[#645592]  cursor-pointer hover:bg-[#455fb4] text-[#fff]"
            >
              Apply Filter
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
