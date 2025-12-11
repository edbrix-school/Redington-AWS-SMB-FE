"use client";
import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Link from "next/link";
import Image from "next/image";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

export default function EditProfile({ visible, onHide }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const countries = [
    { name: "United Arab Emirates", code: "AE" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Kuwait", code: "KW" },
    { name: "Qatar", code: "QA" },
    { name: "Bahrain", code: "BH" },
    { name: "Oman", code: "OM" },
  ];

  return (
    <div className="h-full">
      <Sidebar
        visible={visible}
        position="right"
        className="!w-full lg:!w-[500px] xl:!w-[700px] 2xl:!w-[39.063vw] 3xl:!w-[39.063vw] customsidebar2 bg-[#F6F7F8] rounded8"
        onHide={onHide}
        blockScroll={true}
      >
        <div className="flex flex-col h-full">
          {/* Fixed Header */}
          <div className="flex-none bg-[#fff] p24 rounded-tl-[10px] border-b border-[#E5E7EB]">
            <div className="text-[#212325] font24 font-bold">
              Edit Profile Details
            </div>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto bg-[#F6F7F8] dark:bg-[#1F2A37]">
            <div className="p24">
              <div className="spacey24">
                {/* First Name and Last Name */}
                <div className="grid grid-cols-2 gap20">
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                      First Name
                    </label>
                    <div className="relative custom-input">
                      <InputText
                        type="text"
                        className="w-full"
                        placeholder="First Name"
                        defaultValue="James"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap6">
                    <label className="font14 font-medium text-InterfaceTexttitle1">
                      Last Name
                    </label>
                    <div className="relative custom-input">
                      <InputText
                        type="text"
                        className="w-full"
                        placeholder="Last Name"
                        defaultValue="Smith"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Name */}
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Company Name
                  </label>
                  <div className="relative custom-input">
                    <InputText
                      type="text"
                      className="w-full"
                      placeholder="Company Name"
                      defaultValue="Customer Name"
                    />
                  </div>
                </div>

                {/* Country of Business */}
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Country of Business
                  </label>
                  <div className="custom-dropdown">
                    <Dropdown
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.value)}
                      options={countries}
                      optionLabel="name"
                      placeholder="Select Country"
                      filter
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Email Address with Verified Badge and Verify Button */}
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Email Address
                  </label>
                  <div className="flex gap-3 items-center">
                    <div className="relative custom-input flex-1">
                      <InputText
                        type="email"
                        className="w-full pr-[90px]"
                        placeholder="Email Address"
                        defaultValue="testmail01@outlook.com"
                      />
                      <div className="absolute right-[12px] top-1/2 -translate-y-1/2 flex items-center gap-1 text-[#059669] font12 font-medium">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM6.4 12L2.4 8L3.52 6.88L6.4 9.76L12.48 3.68L13.6 4.8L6.4 12Z"
                            fill="#059669"
                          />
                        </svg>
                        Verified!
                      </div>
                    </div>
                    <button className="font14 font-medium py10 px20 border-solid border border-[#E5E7EB] rounded-lg cursor-pointer bg-[#F9FAFB] hover:bg-[#F3F4F6] text-[#D1D5DB] whitespace-nowrap flex items-center gap-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L3 7V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V7L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Verify
                    </button>
                  </div>
                </div>

                {/* Mobile Number with Verified Badge and Verify Button */}
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Mobile Number
                  </label>
                  <div className="flex gap-3 items-center">
                    <div className="relative custom-input flex-1">
                      <InputText
                        type="tel"
                        className="w-full pr-[90px]"
                        placeholder="Mobile Number"
                        defaultValue="+971 50 222 3333"
                      />
                      <div className="absolute right-[12px] top-1/2 -translate-y-1/2 flex items-center gap-1 text-[#059669] font12 font-medium">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM6.4 12L2.4 8L3.52 6.88L6.4 9.76L12.48 3.68L13.6 4.8L6.4 12Z"
                            fill="#059669"
                          />
                        </svg>
                        Verified!
                      </div>
                    </div>
                    <button className="font14 font-medium py10 px20 border-solid border border-[#E5E7EB] rounded-lg cursor-pointer bg-[#F9FAFB] hover:bg-[#F3F4F6] text-[#D1D5DB] whitespace-nowrap flex items-center gap-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L3 7V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V7L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Verify
                    </button>
                  </div>
                </div>

                {/* Designation */}
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Designation
                  </label>
                  <div className="relative custom-input">
                    <InputText
                      type="text"
                      className="w-full"
                      placeholder="Designation"
                    />
                  </div>
                </div>

                {/* Password with Change Password Button */}
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Password
                  </label>
                  <div className="relative custom-input">
                    <InputText
                      type={showPassword ? "text" : "password"}
                      className="w-full pr-[40px]"
                      placeholder="••••••••"
                      defaultValue="password123"
                    />
                    <div
                      className="absolute right-[12px] top-1/2 -translate-y-1/2 cursor-pointer text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        // Eye Off Icon (when password is visible)
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06M9.9 4.24C10.5883 4.0789 11.2931 3.99836 12 4C19 4 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.5719 9.14351 13.1984C8.99262 12.8248 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2218 9.18488 10.8538C9.34884 10.4859 9.58525 10.1546 9.88 9.88"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 1L23 23"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        // Eye Icon (when password is hidden)
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            r="3"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <button className="font14 font-medium py10 px20 border-[#645592] rounded-lg bg-[#645592] cursor-pointer hover:bg-[#455fb4] text-white whitespace-nowrap flex items-center justify-center gap-2 w-full sm:w-auto sm:self-end">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Footer */}
          <div className="flex-none bg-[#fff] dark:bg-[#111928] p-[16px] xl:p-[16px] 3xl:p-[0.833vw] flex justify-end gap-4 border-t border-[#E5E7EB] rounded-bl-[10px]">
            <div className="text-[#3C4146] font16 font-medium py10 px20 border-solid border border-[#E5E7EB] rounded-lg cursor-pointer cancel-btn-bg hover:bg-[#f6f6f7]">
              <Link onClick={onHide} href={""}>
                Cancel
              </Link>
            </div>

            <div className="font16 font-medium py10 px20 border-[#645592] rounded-lg bg-[#645592] cursor-pointer hover:bg-[#455fb4] text-white">
              Save
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
