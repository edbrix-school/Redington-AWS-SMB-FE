"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Sidebar } from "primereact/sidebar";
import { ArrowLeft, Eye } from "lucide-react";
import CatalogPopup from "@/components/catalog/CatalogPopup"; // Added import for CatalogPopup

export default function ViewFileDetails({ visible, onHide }) {
    // Added state to control showing CatalogPopup
    const [showCatalog, setShowCatalog] = useState(false);

    const FileListItem = ({ title, date, ActionIcon }) => (
        <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-white/10 rounded flex items-center justify-center shrink-0">
                    <img src="/images/FilePdf.svg" width={18} height={18} alt="PDF" />
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-200 group-hover:text-white">
                        {title}
                    </p>
                    <p className="text-xs text-gray-400">{date}</p>
                </div>
            </div>

            <button className="text-gray-400 hover:text-white p-2 cursor-pointer">
                {typeof ActionIcon === "string" ? (
                    <img src={ActionIcon} width={16} height={16} alt="Action" />
                ) : (
                    <ActionIcon size={16} />
                )}
            </button>
        </div>
    );

    return (
        <>
            <Sidebar
                visible={visible}
                onHide={onHide}
                position="right"
                showCloseIcon={false}
                blockScroll
                maskClassName="!bg-black/40"
                className="!w-full md:!w-[900px] !p-0 !border-none overflow-hidden customsidebar2"
            >
                <div className="h-full bg-white flex flex-col">

                    {/* HEADER */}
                    <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
                        <div className="px-6 py-4 flex items-center gap-4">
                            {/* Modified button to open CatalogPopup instead of hiding the sidebar */}
                            <button onClick={() => setShowCatalog(true)} className="cursor-pointer">
                                <img src="/images/arrowleft.svg" width={20} height={20} alt="Back" className="text-gray-600" />
                            </button>

                            <div>
                                <h1 className="text-lg font-semibold">
                                    Test file name 001
                                </h1>

                                <div className="mt-2 flex gap-2">
                                    <span className="px-2 py-0.5 bg-gray-100 text-[10px] font-semibold rounded uppercase">
                                        Web Hosting
                                    </span>
                                    <span className="px-2 py-0.5 bg-gray-100 text-[10px] font-semibold rounded uppercase">
                                        Security
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1 overflow-y-auto px-6 py-6">

                        {/* FILE DETAILS – UPDATED DIVIDERS */}
                        <div className="relative rounded-xl border border-gray-200 bg-gradient-to-br from-[#f6f6fb] via-[#f4f5f9] to-[#f1f2f6]">

                            {/* Header */}
                            <div className="flex items-center justify-between px-6 pt-5">
                                <div>
                                    {/* Accent line */}
                                    <span className="block w-10 h-[2px] bg-[#645592] rounded mb-2" />

                                    <h2 className="text-sm font-semibold text-gray-800">
                                        File Details
                                    </h2>
                                </div>
                                <button className="p-1 text-gray-500 hover:text-gray-700 cursor-pointer">
                                    <img src="/images/edit.svg" width={18} height={18} alt="Edit" />
                                </button>
                            </div>

                            {/* Details */}
                            <div className="relative grid grid-cols-1 md:grid-cols-3 px-6 pb-6 mt-5">

                                {/* TALLER Vertical dividers */}
                                <span className="hidden md:block absolute left-1/3 top-1 bottom-1 w-px bg-gradient-to-b from-transparent via-purple-300 to-transparent" />
                                <span className="hidden md:block absolute left-2/3 top-1 bottom-1 w-px bg-gradient-to-b from-transparent via-purple-300 to-transparent" />

                                {/* Name */}
                                <div className="pr-6">
                                    <p className="text-xs text-gray-500 mb-1">Name</p>
                                    <p className="text-sm font-medium text-gray-900">
                                        Test file name 001
                                    </p>
                                </div>

                                {/* Category */}
                                <div className="px-0 md:px-6 mt-4 md:mt-0">
                                    <p className="text-xs text-gray-500 mb-1">Category</p>
                                    <p className="text-sm font-medium text-gray-900">
                                        Product Information
                                    </p>
                                </div>

                                {/* Type */}
                                <div className="pl-0 md:pl-6 mt-4 md:mt-0">
                                    <p className="text-xs text-gray-500 mb-1">Type</p>
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                                        <img
                                            src="/images/document-text.svg"
                                            width={18}
                                            height={18}
                                            alt="Document"
                                        />
                                        Document
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* MAIN CONTENT */}
                        <div className="mt-6 grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-base font-semibold mb-3">
                                    Small and medium businesses looking for a hassle-free, secure, and robust web hosting solution.
                                </h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-3 bg-white">
                                <img
                                    src="/images/ViewFileDetails.png"
                                    alt="Workflow"
                                    className="w-full rounded"
                                />
                            </div>
                        </div>

                        {/* BOTTOM SECTION */}
                        <div className="mt-8 bg-[#0f172a] rounded-lg border border-white/10">
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">

                                <div className="p-6">
                                    <div>
                                        {/* Accent line */}
                                        <span className="block w-10 h-[2px] bg-[#645592] rounded mb-2" />

                                        <h4 className="text-gray-300 text-sm mb-4">
                                            Similar Documents
                                        </h4>
                                    </div>

                                    <div className="space-y-3">
                                        <FileListItem title="Int. Manual V2.03" date="21 Jan 2023 11:23 AM" ActionIcon={Eye} />
                                        <FileListItem title="Int. Manual V2.03" date="21 Jan 2023 11:23 AM" ActionIcon={Eye} />
                                        <FileListItem title="Int. Manual V2.03" date="21 Jan 2023 11:23 AM" ActionIcon={Eye} />
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div>
                                        {/* Accent line */}
                                        <span className="block w-10 h-[2px] bg-[#645592] rounded mb-2" />

                                        <h4 className="text-gray-300 text-sm mb-4">
                                            Attachments
                                        </h4>
                                    </div>

                                    <div className="space-y-3">
                                        <FileListItem title="Int. Manual V2.03" date="21 Jan 2023 11:23 AM" ActionIcon="/images/document-download.svg" />
                                        <FileListItem title="First Steps Training Video" date="21 Jan 2023 11:23 AM" ActionIcon="/images/document-download.svg" />
                                        <FileListItem title="Multi-Agent Website" date="21 Jan 2023 11:23 AM" ActionIcon="/images/document-download.svg" />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </Sidebar>
            <Sidebar
                visible={showCatalog}
                onHide={() => setShowCatalog(false)}
                className="!w-full md:!w-[90vw] !p-0 !border-none overflow-hidden customsidebar"
                blockScroll
                position="right"
                showCloseIcon={false}

            >
                <CatalogPopup
                    open={true}
                    onClose={() => setShowCatalog(false)}
                />
            </Sidebar>


        </>
    );
}
