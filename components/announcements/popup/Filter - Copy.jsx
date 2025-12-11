"use client";
import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Calendar as CalendarIcon, ChevronDown } from 'lucide-react'; // Imported Lucide Icon

// Ensure themes are loaded
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function Filter({ visible, onHide }) {
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [ticketCategory, setTicketCategory] = useState(null);
    const [createdBy, setCreatedBy] = useState(null);
    const [status, setStatus] = useState(null);

    const dropdownOptions = [
        { label: "All", value: "all" },
        { label: "Option 1", value: "opt1" },
        { label: "Option 2", value: "opt2" },
    ];

    return (
        <div>
            <Sidebar
                visible={visible}
                position="right"
                className="!w-full lg:!w-[450px] xl:!w-[450px] 2xl:!w-[27.5vw] 3xl:!w-[27.5vw] customsidebar2 bg-[#F6F7F8] rounded8"
                onHide={onHide}
                blockScroll={true}
                pt={{
                    closeButton: { className: "hidden" },
                    header: { className: "p-0" },
                    content: { className: "p-0 overflow-y-auto" },
                }}
            >
                <div className="flex flex-col h-full bg-[#F6F7F8]">

                    {/* HEADER */}
                    <div className="flex-none bg-white p-6 rounded-tl-[10px]">
                        <div className="text-[#212325] text-[24px] font-bold leading-none">
                            Apply Filter
                        </div>
                    </div>

                    {/* BODY */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">

                        {/* 1. Date Created (Using the Custom Layout from Code #1) */}
                        <div>
                            <label className="block text-[12px] font-bold text-[#344054] mb-[6px]">
                                Date Created
                            </label>

                            <div className="grid grid-cols-2 gap-4">
                                {/* From Date */}
                                <div className="relative w-full">
                                    <Calendar
                                        value={fromDate}
                                        onChange={(e) => setFromDate(e.value)}
                                        placeholder="From date"
                                        className="w-full"
                                        // Custom styling to match Code #1 structure but with Code #2 colors/height
                                        inputClassName="w-full h-[44px] px-3 py-2 text-[14px] text-[#101828] border border-[#D0D5DD] bg-white rounded-lg focus:outline-none focus:border-[#645592] placeholder:text-[#667085] shadow-none"
                                    />
                                    <CalendarIcon size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667085] pointer-events-none z-10" />
                                </div>

                                {/* To Date */}
                                <div className="relative w-full">
                                    <Calendar
                                        value={toDate}
                                        onChange={(e) => setToDate(e.value)}
                                        placeholder="To Date"
                                        className="w-full"
                                        // Custom styling to match Code #1 structure but with Code #2 colors/height
                                        inputClassName="w-full h-[44px] px-3 py-2 text-[14px] text-[#101828] border border-[#D0D5DD] bg-white rounded-lg focus:outline-none focus:border-[#645592] placeholder:text-[#667085] shadow-none"
                                    />
                                    <CalendarIcon size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667085] pointer-events-none z-10" />
                                </div>
                            </div>
                        </div>

                        {/* 2. Ticket Category */}
                        <div>
                            <label className="block text-[12px] font-bold text-[#344054] mb-[6px]">
                                Ticket Category
                            </label>

                            <Dropdown
                                value={ticketCategory}
                                onChange={(e) => setTicketCategory(e.value)}
                                options={dropdownOptions}
                                optionLabel="label"
                                placeholder="All"
                                className="w-full"
                                pt={{
                                    root: {
                                        className:
                                            "w-full h-[44px] border border-[#D0D5DD] rounded-lg bg-white px-3 flex items-center"
                                    },
                                    input: {
                                        className:
                                            "text-[14px] text-[#101828] placeholder:text-[#667085] p-0"
                                    },
                                    trigger: { className: "text-[#667085] w-[16px]" }
                                }}
                            />
                        </div>

                        {/* 3. Created by */}
                        <div>
                            <label className="block text-[12px] font-bold text-[#344054] mb-[6px]">
                                Created by
                            </label>

                            <Dropdown
                                value={createdBy}
                                onChange={(e) => setCreatedBy(e.value)}
                                options={dropdownOptions}
                                optionLabel="label"
                                placeholder="All"
                                className="w-full"
                                pt={{
                                    root: {
                                        className:
                                            "w-full h-[44px] border border-[#D0D5DD] rounded-lg bg-white px-3 flex items-center"
                                    },
                                    input: {
                                        className:
                                            "text-[14px] text-[#101828] placeholder:text-[#667085] p-0"
                                    },
                                    trigger: { className: "text-[#667085] w-[16px]" }
                                }}
                            />
                        </div>

                        {/* 4. Status */}
                        <div>
                            <label className="block text-[12px] font-bold text-[#344054] mb-[6px]">
                                Status
                            </label>

                            <Dropdown
                                value={status}
                                onChange={(e) => setStatus(e.value)}
                                options={dropdownOptions}
                                optionLabel="label"
                                placeholder="All"
                                className="w-full"
                                pt={{
                                    root: {
                                        className:
                                            "w-full h-[44px] border border-[#D0D5DD] rounded-lg bg-white px-3 flex items-center"
                                    },
                                    input: {
                                        className:
                                            "text-[14px] text-[#101828] placeholder:text-[#667085] p-0"
                                    },
                                    trigger: { className: "text-[#667085] w-[16px]" }
                                }}
                            />
                        </div>

                    </div>

                    {/* FOOTER */}
                    <div className="flex-none bg-white p-4 border-t border-[#E5E7EB] rounded-bl-[10px]">
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={onHide}
                                className="px-5 py-2.5 rounded-lg border border-[#D0D5DD] text-[#344054] font-semibold text-[14px] hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={onHide}
                                className="px-5 py-2.5 rounded-lg bg-[#645592] text-white font-semibold text-[14px] hover:bg-[#524479] transition-colors"
                            >
                                Apply Filter
                            </button>
                        </div>
                    </div>

                </div>
            </Sidebar>
        </div>
    );
}