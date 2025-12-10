"use client";
import React, { useEffect, useState } from 'react';
import {
    X,
    ArrowLeft,
    Edit3,
    FileText,
    Eye,
    File,
    Download,
    Clock
} from 'lucide-react';

export const ViewFileDetails = ({ visible, onHide, data }) => {
    const [show, setShow] = useState(visible);

    // Handle animation state - exact logic from original file
    useEffect(() => {
        if (visible) setShow(true);
        else {
            const timer = setTimeout(() => setShow(false), 300);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    if (!show && !visible) return null;

    // Helper to render the small PDF list items in the footer
    const FileListItem = ({ title, date, actionIcon: ActionIcon }) => (
        <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-white/10 rounded flex items-center justify-center text-white shrink-0">
                    <File size={20} className="text-gray-300" />
                    <span className="sr-only">PDF</span>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-200 group-hover:text-white">{title}</p>
                    <p className="text-xs text-gray-500">{date}</p>
                </div>
            </div>
            <button className="text-gray-400 hover:text-white p-2">
                <ActionIcon size={18} />
            </button>
        </div>
    );

    return (
        <div className={`fixed inset-0 z-[9999] overflow-hidden ${visible ? 'pointer-events-auto' : 'pointer-events-none'}`}>

            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'
                    }`}
                onClick={onHide}
            />

            {/* Sidebar Container - Widened to 900px to fit the specific design layout */}
            <div
                className={`absolute right-0 top-0 h-full w-full md:w-[900px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${visible ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto">

                    {/* --- Top Navigation --- */}
                    <div className="px-8 pt-8 pb-4 flex items-center gap-4">
                        <button
                            onClick={onHide}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <div className="flex flex-col">
                            <h2 className="text-xl font-bold text-gray-900">
                                {data?.title || "Test file name 001"}
                            </h2>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold tracking-wider rounded uppercase">
                                    Web Hosting
                                </span>
                                <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold tracking-wider rounded uppercase">
                                    Security
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* --- File Details Card (Gray Box) --- */}
                    <div className="px-8 py-4">
                        <div className="bg-slate-50 rounded-xl p-6 relative">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-bold text-gray-800 text-lg">File Details</h3>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <Edit3 size={20} />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <p className="text-xs font-semibold text-gray-500 mb-1">Name</p>
                                    <p className="text-sm font-medium text-gray-900">
                                        {data?.title || "Test file name 001"}
                                    </p>
                                </div>
                                <div className="md:border-l md:border-gray-200 md:pl-6">
                                    <p className="text-xs font-semibold text-gray-500 mb-1">Category</p>
                                    <p className="text-sm font-medium text-gray-900">Product Information</p>
                                </div>
                                <div className="md:border-l md:border-gray-200 md:pl-6">
                                    <p className="text-xs font-semibold text-gray-500 mb-1">Type</p>
                                    <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                                        <FileText size={16} />
                                        <span>Document</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- Main Content (Split Layout) --- */}
                    <div className="px-8 py-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Text Content */}
                        <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                            <h4 className="text-gray-900 font-semibold text-base">
                                Small and medium businesses looking for a hassle-free, secure, and robust web hosting solution.
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                        {/* Diagram/Image Content */}
                        <div className="border border-gray-200 rounded-lg p-2 bg-white flex items-center justify-center">
                            {/* Placeholder for the Flowchart Diagram */}
                            <img
                                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop"
                                alt="Workflow Diagram"
                                className="w-full h-auto rounded object-cover opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>

                    {/* --- Footer (Dark Section) --- */}
                    <div className="mt-8 bg-[#0f172a] p-8 pb-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Similar Documents Column */}
                            <div>
                                <h4 className="text-gray-400 text-sm font-medium mb-4">Similar Documents</h4>
                                <div className="space-y-3">
                                    <FileListItem
                                        title="Int. Manual V2.03"
                                        date="21 Jan 2023 11:23 AM"
                                        actionIcon={Eye}
                                    />
                                    <FileListItem
                                        title="Int. Manual V2.03"
                                        date="21 Jan 2023 11:23 AM"
                                        actionIcon={Eye}
                                    />
                                    <FileListItem
                                        title="Int. Manual V2.03"
                                        date="21 Jan 2023 11:23 AM"
                                        actionIcon={Eye}
                                    />
                                </div>
                            </div>

                            {/* Attachments Column */}
                            <div>
                                <h4 className="text-gray-400 text-sm font-medium mb-4">Attachments</h4>
                                <div className="space-y-3">
                                    <FileListItem
                                        title="Int. Manual V2.03"
                                        date="21 Jan 2023 11:23 AM"
                                        actionIcon={FileText}
                                    />
                                    <FileListItem
                                        title="First Steps Training Video"
                                        date="21 Jan 2023 11:23 AM"
                                        actionIcon={FileText}
                                    />
                                    <FileListItem
                                        title="Multi-Agent Website"
                                        date="21 Jan 2023 11:23 AM"
                                        actionIcon={FileText}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};