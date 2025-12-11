"use client";
import React from "react";
import Image from "next/image";
import { Sidebar } from "primereact/sidebar";
import {
    ArrowLeft,
    Eye,
} from "lucide-react";

export default function ViewFileDetails({ visible, onHide, data }) {
    const FileListItem = ({ title, date, ActionIcon }) => (
        <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-white/10 rounded flex items-center justify-center text-white shrink-0">
                    <Image src="/images/FilePdf.svg" width={18} height={18} alt="PDF" className="text-gray-300" />
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-200 group-hover:text-white">
                        {title}
                    </p>
                    <p className="text-xs text-gray-400">{date}</p>
                </div>
            </div>

            <button className="text-gray-400 hover:text-white p-2 cursor-pointer">
                {typeof ActionIcon === 'string' ? (
                    <Image src={ActionIcon} width={16} height={16} alt="Action" />
                ) : (
                    <ActionIcon size={16} />
                )}
            </button>
        </div>
    );

    return (
        <Sidebar
            visible={visible}
            onHide={onHide}
            position="right"
            showCloseIcon={false}
            blockScroll={true}
            maskClassName="!bg-black/40"
            className="!w-full md:!w-[900px] !p-0 !border-none !shadow-2xl overflow-hidden"
        >
            <div className="h-full bg-white text-gray-900 flex flex-col">

                {/* STICKY HEADER */}
                <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
                    <div className="px-6 py-4 flex items-center justify-between">
                        <div className="flex items-start gap-4">
                            <button
                                onClick={onHide}
                                aria-label="Back"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <ArrowLeft size={20} />
                            </button>

                            <div>
                                <h1 className="text-lg font-semibold leading-tight">
                                    {data?.title || "Test file name 001"}
                                </h1>

                                <div className="mt-2 flex items-center gap-2">
                                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[10px] font-semibold rounded uppercase">
                                        {data?.category || "Web Hosting"}
                                    </span>
                                    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[10px] font-semibold rounded uppercase">
                                        Security
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* <button className="p-2 rounded hover:bg-gray-100">
                            <Edit3 size={18} />
                        </button> */}
                    </div>
                </div>

                {/* CONTENT SCROLL AREA */}
                <div className="flex-1 overflow-y-auto">
                    <div className="px-6 py-6">

                        {/* File Details Card */}
                        <div className="bg-slate-50 rounded-lg border border-gray-200 overflow-hidden">
                            <div className="px-5 py-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-sm font-semibold text-gray-700">File Details</h2>
                                    <button className="text-gray-500 hover:text-gray-700 p-1 cursor-pointer">
                                        <Image src="/images/edit.svg" width={16} height={16} alt="Edit" />
                                    </button>
                                </div>

                                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <p className="text-xs font-medium text-gray-500 mb-1">Name</p>
                                        <p className="text-sm font-semibold text-gray-900">
                                            {data?.title || "Test file name 001"}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-medium text-gray-500 mb-1">Category</p>
                                        <p className="text-sm font-semibold text-gray-900">{data?.category || "Product Information"}</p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-medium text-gray-500 mb-1">Type</p>
                                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                                            <Image src="/images/document-text.svg" width={16} height={16} alt="Document" />
                                            {data?.docType || "Document"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                            <div className="space-y-4">
                                <h3 className="text-base font-semibold">
                                    {data?.description || "Small and medium businesses looking for a hassle-free, secure, and robust web hosting solution."}
                                </h3>

                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>

                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-3 bg-white flex items-center justify-center">
                                <img
                                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop"
                                    alt="Workflow Diagram"
                                    className="w-full h-auto rounded"
                                />
                            </div>

                        </div>

                        {/* Footer Dark Section */}
                        <div className="mt-8 bg-[#0f172a] rounded-lg overflow-hidden">
                            <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Similar Documents */}
                                <div>
                                    <h4 className="text-gray-300 text-sm font-medium mb-4">Similar Documents</h4>

                                    <div className="space-y-3">
                                        <FileListItem
                                            title="Int. Manual V2.03"
                                            date="21 Jan 2023 11:23 AM"
                                            ActionIcon={Eye}
                                        />
                                        <FileListItem
                                            title="Int. Manual V2.03"
                                            date="21 Jan 2023 11:23 AM"
                                            ActionIcon={Eye}
                                        />
                                        <FileListItem
                                            title="Int. Manual V2.03"
                                            date="21 Jan 2023 11:23 AM"
                                            ActionIcon={Eye}
                                        />
                                    </div>
                                </div>

                                {/* Attachments */}
                                <div>
                                    <h4 className="text-gray-300 text-sm font-medium mb-4">Attachments</h4>

                                    <div className="space-y-3">
                                        <FileListItem
                                            title="Int. Manual V2.03"
                                            date="21 Jan 2023 11:23 AM"
                                            ActionIcon="/images/document-download.svg"
                                        />
                                        <FileListItem
                                            title="First Steps Training Video"
                                            date="21 Jan 2023 11:23 AM"
                                            ActionIcon="/images/document-download.svg"
                                        />
                                        <FileListItem
                                            title="Multi-Agent Website"
                                            date="21 Jan 2023 11:23 AM"
                                            ActionIcon="/images/document-download.svg"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </Sidebar>
    );
}
