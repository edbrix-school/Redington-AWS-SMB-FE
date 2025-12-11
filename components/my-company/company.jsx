"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { InputText } from "primereact/inputtext";
import Link from "next/link";
export const MyCompany = () => {
  const [selectedDomains, setSelectedDomains] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const [selectedSort, setSelectedSort] = useState(null);
  const Sort = [
    { name: "Month", code: "NY" },
    { name: "Year", code: "RM" },
  ];
  return (
    <div className="bg-white shaow1 relative z-20 p24 spacey24 rounded8 custom-shadow">
      <div className="flex flex-col  mb30">
        <div className="border-top-left-radius: 1rem flex-none">
          <div className=" bg-[#fff] p24 rounded-tl-[10px]">
            <div className=" text-[#212325]  font24 font-bold">Company</div>
          </div>
          <div className="flex justify-between px24">
            <div className="flex gap14 ">
              <button
                className="bg-BrandNeutralpure cursor-pointer py6 px14 font14 text-InterfaceSurfacecomponent rounded-full flex items-center gap-[4px] xl:gap-[4px] 3xl:gap-[0.26vw]"
                onClick={() => setOpenPopupNewTicket(true)}
              >
                <Image
                  src="/images/add-icon.svg"
                  width={16}
                  height={16}
                  alt="adduser"
                  className="inline-block w14 h-auto "
                />
                Add
              </button>
            </div>
            <div className="flex gap20">
              <div>
                <Dropdown
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.value)}
                  options={Sort}
                  optionLabel="name"
                  placeholder="Select Year/Month"
                  className="w300 custDropdown1 "
                  panelClassName="custDropdown1panel"
                />
              </div>
              <div
                className=" cursor-pointer h-full px14 flex items-center justify-center text-center border border-InterfaceStrokedefault bg-interfacesurfacecomponentmuted rounded8"
                onClick={() => setOpenPopup(true)}
              >
                <i className="smb-filter text-InterfaceTextsubtitle font14 "></i>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F6F7F8] dark:bg-[#1F2A37] flex-1 overflow-y-auto">
          <div className="p24">
            <div className=" spacey24 pb22">
              <div className="grid grid-cols-2 gap20">
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Company Name
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
                    Country
                  </label>

                  <div className="relative  custom-input">
                    <InputText
                      type="text"
                      className="w-full"
                      placeholder="UAE"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap20">
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Address
                  </label>

                  <div className="relative  custom-input">
                    <InputText
                      type="text"
                      className="w-full"
                      placeholder="No 55, Al Mankhool, Dubai"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap6">
                  <label className="font14 font-medium text-InterfaceTexttitle1">
                    Domain
                  </label>

                  <div className="relative  custom-input">
                    <MultiSelect
                      value={selectedDomains}
                      onChange={(e) => setSelectedDomains(e.value)}
                      options={cities}
                      optionLabel="name"
                      display="chip"
                      placeholder="Select Domain"
                      maxSelectedLabels={3}
                      className="w-full md:w-20rem"
                    />
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
            <Link href={""}>Cancel</Link>
          </div>

          <div className="font16 font-[500] py10 px20  border-[#645592] rounded-lg bg-[#645592]  cursor-pointer hover:bg-[#455fb4] text-[#fff]">
            Save
          </div>
        </div>
      </div>
    </div>
  );
};
