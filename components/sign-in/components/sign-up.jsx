"use client";
import React from "react";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Image from "next/image";

export default function SignUp({ visible, onHide }) {
  return (
    <div>
      <Sidebar
        visible={visible}
        position="right"
        className="!w-[500px] lg:!w-[500px] xl:!w-[550px] 2xl:!w-[35.396vw] 3xl:!w-[32.396vw] customsidebar2 bg-[#F6F7F8] rounded8"
        onHide={onHide}
        blockScroll={true}
      >
        <div className="flex flex-col h-full">
          <div className="border-top-left-radius: 1rem flex-none">
            <div className=" bg-InterfaceSurfacecomponent p-[24px] xl:p-[24px] 3xl:p-[1.25vw] rounded-tl-[10px] border-b-[2px] border-InterfaceStrokedefault">
              <div className=" text-InterfaceTexttitle1  text-[22px] xl:text-[22px] 3xl:text-[1.146vw] font-semibold">
                Sign Up
              </div>
            </div>
          </div>
          <div className="bg-InterfaceSurfacecomponent  flex-1 overflow-y-auto">
            <div className=" text-center">
              <div className="p-[24px] xl:p-[24px] 3xl:p-[1.25vw] space-y-[22px]">
                <div className="mx-[30px] mt-[80px] text-center ">
                  <div className="font36 text-InterfaceTexttitle1 font-normal">
                    {" "}
                    Welcome! to Redington AWS <br />
                    SMB Platform
                  </div>
                  <div className="text-InterfaceTextsubtitle font20 mx60 leading-[140%] ">
                    {" "}
                    Join Redington AWS SMB Platform to explore our diverse
                    catalog with 25,000+ solutions from AWS and 2,500+ partners
                  </div>
                </div>
                <div className="text-center flex justify-center ">
                  <button className="flex items-center justify-center gap-[2px] xl:gap-[2px] 2xl:gap-[3px] cursor-pointer text-InterfaceSurfacecomponent bg-BrandPrimarypure border border-BrandPrimary800 hover:bg-BrandPrimary800 font16 font-medium py6  px14">
                    <Image
                      src="/images/profile-add.svg"
                      width={20}
                      height={20}
                      alt="logo"
                      className="w18 h-auto"
                    />
                    Register with Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
