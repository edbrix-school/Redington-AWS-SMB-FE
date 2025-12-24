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

export default function Filter({ visible, onHide }) {
    const [date, setDate] = React.useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    const category = [
        { name: 'Activity Type1', code: 'AT1' },
        { name: 'Activity Type2', code: 'AT2' },
        { name: 'Activity Type3', code: 'AT3' },
        { name: 'Activity Type4', code: 'AT4' },
        { name: 'Activity Type5', code: 'AT5' },
        { name: 'Activity Type6', code: 'AT6' }
    ];

    const users = [
        { name: 'User 1', code: 'U1' },
        { name: 'User 2', code: 'U2' },
        { name: 'User 3', code: 'U3' },
        { name: 'User 4', code: 'U4' },
        { name: 'User 5', code: 'U5' },
        { name: 'User 6', code: 'U6' }
    ];
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
                        <div className="sidebar-header">
                            <div className=" text-[#212325]  font24 font-bold">
                                Apply Filter
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#F6F7F8] dark:bg-[#1F2A37] flex-1 overflow-y-auto">
                        <div className="">
                            <div className="p24 spacey24">
                                <div className="flex flex-col gap6">
                                    <label className="font14 font-medium text-InterfaceTexttitle1">
                                        Activity Date Range
                                    </label>

                                    <div className="grid grid-cols-2 gap10">
                                        <div className="relative  custom-input">
                                            <Calendar
                                                id="date"
                                                value={date}
                                                onChange={(e) => setDate(e.value)}
                                                dateFormat="mm/dd/yy"
                                                placeholder="Select Date"
                                                className="w-full p-inputtext-custom"
                                            />
                                            <div className="absolute right-3 top-[30%]"> <img src="/images/calendar-icon.svg" width="16" height="16" className="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px]" alt="icon" /></div>
                                        </div>
                                        <div className="relative custom-input">
                                            <Calendar
                                                id="date"
                                                value={date}
                                                onChange={(e) => setDate(e.value)}
                                                dateFormat="mm/dd/yy"
                                                placeholder="Select Date"
                                                className="w-full p-inputtext-custom"
                                            />
                                            <div className="absolute right-3 top-[30%]"> <img src="/images/calendar-icon.svg" width="16" height="16" className="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px]" alt="icon" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap6">
                                    <label className="font14 font-medium text-InterfaceTexttitle1">
                                        Activity Type
                                    </label>

                                    <div className="grid grid-cols-1">
                                        <div className="custom-dropdown">
                                            <Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.value)} options={category} optionLabel="name" placeholder="Select a Category"
                                                filterDelay={400} filter className="w-full" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap6">
                                    <label className="font14 font-medium text-InterfaceTexttitle1">
                                        User
                                    </label>

                                    <div className="grid grid-cols-1">
                                        <div className="custom-dropdown">
                                            <Dropdown value={selectedUser} onChange={(e) => setSelectedUser(e.value)} options={users} optionLabel="name" placeholder="Select a User"
                                                filterDelay={400} filter className="w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 left-0 flex-none">
                        <div className="sidebar-footer">
                            <div className="btn-secondary">
                                <Link onClick={onHide} href={""}>
                                    Cancel
                                </Link>
                            </div>

                            <div
                                onClick={() => setShow(true)}
                                className="btn-primary"
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
