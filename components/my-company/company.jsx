"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { InputText } from "primereact/inputtext";
import Link from "next/link";
import AddUser from "../user-management/components/add-user";
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
  const [addUserpopup, setAddUser] = useState(false);
  return (
    <>
      <div className="bg-white shaow1 relative z-20 p24 spacey24 rounded8 custom-shadow mx-[2vw]">
        <div className="flex flex-col  mb30">
          <div className="border-top-left-radius: 1rem flex-none">
            <div className=" bg-[#fff] pb12 rounded-tl-[10px]">
              <div className=" text-[#212325]  font24 font-bold">
                My Company
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-2">
              <div className="flex gap14 ">
                <button
                  className="bg-BrandNeutralpure cursor-pointer py6 px14 font14 text-InterfaceSurfacecomponent rounded-full flex items-center gap-[4px] xl:gap-[4px] 3xl:gap-[0.26vw]"
                  onClick={() => setAddUser(true)}
                >
                  <Image
                    src="/images/add-icon.svg"
                    width={16}
                    height={16}
                    alt="adduser"
                    className="inline-block w15 h-auto "
                  />
                  Add
                </button>
              </div>
              <div className="flex gap20">
                <div className="relative custom-input">
                  <InputText
                    type="text"
                    className="w-[250px] customglobalsearch"
                    placeholder="Search "
                  />

                  <Image
                    src="/images/svg/search-normal.svg"
                    width={16}
                    height={16}
                    alt="search"
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4"
                  />
                </div>

                <div className=" cursor-pointer h-full px14 flex items-center justify-center text-center border border-InterfaceStrokedefault bg-interfacesurfacecomponentmuted hover:bg-[#eff0f1] rounded8">
                  <i className="smb-filter text-InterfaceTextsubtitle font14 "></i>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto ">
            <div className="py24">
              <div className=" spacey24 pb22">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap20">
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap20">
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

                    <div className="relative custommultiselect">
                      <MultiSelect
                        value={selectedDomains}
                        onChange={(e) => setSelectedDomains(e.value)}
                        options={cities}
                        optionLabel="name"
                        display="chip"
                        placeholder="Select Domain"
                        maxSelectedLabels={3}
                        className="w-full custommultiselect"
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

            <div className="font16 font-[500] py10 px20  border-[#645592] rounded-lg bg-[#645592]  cursor-pointer hover:bg-[#5c4c8d] text-[#fff]">
              Save
            </div>
          </div>
        </div>
      </div>
      <AddUser visible={addUserpopup} onHide={() => setAddUser(false)} />
    </>
  );
};
