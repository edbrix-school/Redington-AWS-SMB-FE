"use client";
import React from "react";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Image from "next/image";

export default function BlockUser({ visible, onHide }) {
  return (
    <div>
      <Sidebar
        visible={visible}
        position="right"
        className="!w-[500px] lg:!w-[500px] xl:!w-[550px] 2xl:!w-[35.396vw] 3xl:!w-[32.396vw] customsidebar2 bg-[#F6F7F8] rounded8"
        onHide={onHide}
        dismissable={true}
        blockScroll={true}
      >
        <div className="flex flex-col h-full">
          <div className="bg-InterfaceSurfacecomponent py120 ">
            <div className="flex justify-center mt40">
              <Image
                src="/images/danger.svg"
                width={100}
                height={100}
                alt="adduser"
                className="inline-block  w100 h-auto "
              />
            </div>

            <div className=" text-center">
              <div className="p24">
                <div className="mx30  text-center ">
                  <div className="font36 text-InterfaceTexttitle1 font-normal">
                    {" "}
                    Block This User?
                  </div>
                  <div className="text-InterfaceTextsubtitle font20 mx60 leading-[140%] mt10">
                    {" "}
                    Confirm to block the user account and content. User's orders
                    be visible to the admin
                  </div>
                </div>
                <div className="px130">
                  <div
                    onClick={onHide}
                    className="text-center flex justify-center mt40 cursor-pointer"
                  >
                    <button className="w220 flex items-center justify-center gap-[2px] xl:gap-[2px] 2xl:gap-[3px] cursor-pointer text-InterfaceSurfacecomponent bg-[#D42600] font16 font-medium py8  ">
                      <Image
                        src="/images/save-2.svg"
                        width={20}
                        height={20}
                        alt="logo"
                        className="w20 h-auto pr-[4px] xl:pr-[4px] 3xl:pr-[0.26vw]"
                      />
                      Yes, Delete
                    </button>
                  </div>
                  <div className="flex items-center justify-center w-full gap-[6px] xl:gap-[6px] 3xl:gap-[0.417vw] my18 px100">
                    <div className="flex-1 border-t border-InterfaceStrokedefault"></div>

                    <div className="text-InterfaceTextsubtitle font14 whitespace-nowrap">
                      Or
                    </div>

                    <div className="flex-1 border-t border-InterfaceStrokedefault"></div>
                  </div>
                  <div className="text-center flex justify-center   ">
                    <button
                      onClick={onHide}
                      className=" w220 flex items-center custom-button border border-[#E5E7EB] justify-center gap-[2px] xl:gap-[2px] 2xl:gap-[3px] cursor-pointer text-InterfaceTextdefault  font16 font-medium py8  "
                    >
                      <i className="smb-circle-close pr-[4px] xl:pr-[4px] 3xl:pr-[0.26vw] font-medium"></i>
                      No, Later
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
