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

export default function ViewTicket({ visible, onHide }) {
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
        className="!w-full lg:!w-[450px] xl:!w-[520px] 2xl:!w-[28.604vw] 3xl:!w-[28.604vw]  customsidebar2  rounded8"
        onHide={onHide}
        blockScroll={true}
      >
        <div className="flex flex-col  mb30">
          <div className="border-top-left-radius: 1rem flex-none">
            <div className=" bg-[#fff] p24 rounded-tl-[10px]">
              <div className=" text-[#212325]  font24 font-bold">
                Ticket: #SR-T12233
              </div>
            </div>
          </div>
          <div className=" overflow-y-auto h-full border-t border-[#E5E7EB]">
            <div className="p24">
              <div className="grid grid-cols-2 gap14">
                <div className="flex flex-col gap4 py20 border-b border-[#E5E7EB]">
                  <label className="font14 font-normal text-[#7F8488]">
                    First Name
                  </label>
                  <div className="font14 font-medium text-[#3C4146]">Alex</div>
                </div>
                <div className="flex flex-col gap4 py20 border-b border-[#E5E7EB]">
                  <label className="font14 font-normal text-[#7F8488]">
                    Last Name
                  </label>
                  <div className="font14 font-medium text-[#3C4146]">Smith</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap4 py20 border-b border-[#E5E7EB]">
                  <label className="font14 font-normal text-[#7F8488]">
                    Company Name
                  </label>
                  <div className="font14 font-medium text-[#3C4146]">
                    Hexalytics
                  </div>
                </div>

                <div className="flex flex-col gap4 py20 border-b border-[#E5E7EB]">
                  <label className="font14 font-normal text-[#7F8488]">
                    Email
                  </label>
                  <div className="font14 font-medium text-[#3C4146]">
                    a.smith@hexalytics.com
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap4 py20 border-b border-[#E5E7EB]">
                  <label className="font14 font-normal text-[#7F8488]">
                    Mobile Number
                  </label>
                  <div className="font14 font-medium text-[#3C4146]">
                    +971 55 111 4450
                  </div>
                </div>

                <div className="flex flex-col gap4 py20 border-b border-[#E5E7EB]">
                  <label className="font14 font-normal text-[#7F8488]">
                    Request Type
                  </label>
                  <div className="font14 font-medium text-[#3C4146]">
                    Service Request
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap4 py20 border-b border-[#E5E7EB]">
                  <label className="font14 font-normal text-[#7F8488]">
                    Category
                  </label>
                  <div className="font14 font-medium text-[#3C4146]">
                    Platform
                  </div>
                </div>

                <div className="flex flex-col gap4 py20 border-b border-[#E5E7EB]">
                  <label className="font14 font-normal text-[#7F8488]">
                    Priority
                  </label>
                  <div className="font14 font-medium text-[#3C4146]">
                    Medium
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col gap4 py20 border-b border-[#E5E7EB]">
                <label className="font14 font-normal text-[#7F8488]">
                  Description of Issue / Request
                </label>
                <div className="font14 font-medium text-[#3C4146]">
                  test Description...
                </div>
              </div>

              {/* Resolution Remarks */}
              <div className="flex flex-col gap4 py20 border-b border-[#E5E7EB]">
                <label className="font14 font-normal text-[#7F8488]">
                  Resolution Remarks
                </label>
                <div className="font14 font-medium text-[#3C4146]">
                  Resolution remarks from the solution Architect/Service Desk
                  Agent
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </Sidebar>
    </div>
  );
}
