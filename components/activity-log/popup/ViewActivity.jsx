
"use client";
import React from "react";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Link from "next/link";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";


export default function ViewActivity({ visible, onHide }) {


    return (
        <div>
            <Sidebar
                visible={visible}
                position="right"
                className="!w-full lg:!w-[450px] xl:!w-[450px] 2xl:!w-[27.5vw] 3xl:!w-[27.5vw]  customsidebar2 bg-[#F6F7F8] rounded8"
                onHide={onHide}
                blockScroll={true}

            >
                <div className="flex flex-col h-full">

                    <div className="border-top-left-radius: 1rem flex-none">
                        <div className=" bg-[#fff] p24 rounded-tl-[10px]">
                            <div className=" text-[#212325]  font24 font-bold">
                                View
                            </div>
                        </div>
                    </div>

                    <div className=" overflow-y-auto h-full border-t border-[#E5E7EB]">
                        <div className="p24">
                            {/* Row 1: Full Timestamp & Activity */}
                            <div className="grid grid-cols-2 gap14 pb-2">
                                <div className="flex flex-col gap4 py10 border-b border-[#E5E7EB]">
                                    <label className="font12 font-normal text-[#7F8488]">
                                        Full Timestamp
                                    </label>
                                    <div className="font14 font-semibold text-[#3C4146]">20/05/2025, 11:00 hrs</div>
                                </div>
                                <div className="flex flex-col gap4 py10 border-b border-[#E5E7EB]">
                                    <label className="font12 font-normal text-[#7F8488]">
                                        Activity
                                    </label>
                                    <div className="font14 font-semibold text-[#3C4146]">Order Placed</div>
                                </div>
                            </div>

                            {/* Row 2: Event Specific Data Fields & Performed by */}
                            <div className="grid grid-cols-2 gap14 pb-2">
                                <div className="flex flex-col gap4 py10 border-b border-[#E5E7EB]">
                                    <label className="font12 font-normal text-[#7F8488]">
                                        Event Specific Data Fields
                                    </label>
                                    <div className="font14 font-semibold text-[#3C4146]">
                                        Order ID : #12345
                                    </div>
                                </div>

                                <div className="flex flex-col gap4 py10 border-b border-[#E5E7EB]">
                                    <label className="font12 font-normal text-[#7F8488]">
                                        Performed by (User, System, API)
                                    </label>
                                    <div className="font14 font-semibold text-[#3C4146]">
                                        Robert Fox
                                    </div>
                                </div>
                            </div>

                            {/* Row 3: IP Address */}
                            <div className="grid grid-cols-2 gap14">
                                <div className="flex flex-col gap4 py10 border-b border-[#E5E7EB]">
                                    <label className="font12 font-normal text-[#7F8488]">
                                        IP Address
                                    </label>
                                    <div className="font14 font-semibold text-[#3C4146]">
                                        120.4.199.254
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
                </div>
            </Sidebar>
        </div>
    );
}
