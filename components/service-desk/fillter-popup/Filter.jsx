import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronDown, X } from 'lucide-react';
import { Calendar } from 'primereact/calendar';

export const Filter = ({ visible, onHide }) => {
    const [show, setShow] = useState(visible);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    // Handle animation state
    useEffect(() => {
        if (visible) setShow(true);
        else {
            const timer = setTimeout(() => setShow(false), 300); // Wait for slide out
            return () => clearTimeout(timer);
        }
    }, [visible]);

    if (!show && !visible) return null;

    return (
        <div className={`fixed inset-0 z-[9999] overflow-hidden ${visible ? 'pointer-events-auto' : 'pointer-events-none'}`}>

            {/* Backdrop (Dark Overlay) */}
            <div
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'
                    }`}
                onClick={onHide}
            />

            {/* Sidebar Container */}
            <div
                className={`absolute right-0 top-0 h-full w-[400px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col rounded-l-3xl ${visible ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* --- CUSTOM CLOSE BUTTON (Floating Left) --- */}
                <button
                    onClick={onHide}
                    className="absolute left-[-70px] top-[40%] flex flex-col items-center justify-center w-[70px] h-[70px] bg-[#7e69d7] text-white rounded-l-lg shadow-lg hover:bg-[#6a55c2] transition-colors focus:outline-none"
                >
                    <div className="p-0.5 rounded-full border border-white/50 mb-1">
                        <X size={16} className="text-white" />
                    </div>
                    <span className="text-[11px] font-medium tracking-wide">Close</span>
                </button>

                {/* --- Header --- */}
                <div className="px-6 py-5 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900">Apply Filter</h2>
                </div>

                {/* --- Body (Scrollable) --- */}
                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 bg-[#FAFAFA]">

                    {/* Date Created */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-gray-700">Date Created</label>
                        <div className="flex gap-3">
                            <div className="relative w-full">
                                <Calendar
                                    value={fromDate}
                                    onChange={(e) => setFromDate(e.value)}
                                    placeholder="From date"
                                    className="w-full"
                                    inputClassName="w-full h-[42px] px-3 py-2 text-sm text-gray-700 border border-gray-200 bg-white rounded-lg focus:outline-none focus:border-purple-500 placeholder-gray-400"
                                />
                                <CalendarIcon size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                            <div className="relative w-full">
                                <Calendar
                                    value={toDate}
                                    onChange={(e) => setToDate(e.value)}
                                    placeholder="To Date"
                                    className="w-full"
                                    inputClassName="w-full h-[42px] px-3 py-2 text-sm text-gray-700 border border-gray-200 bg-white rounded-lg focus:outline-none focus:border-purple-500 placeholder-gray-400"
                                />
                                <CalendarIcon size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Dropdowns */}
                    <FilterSelect label="Ticket Category" placeholder="All" />
                    <FilterSelect label="Created by" placeholder="All" />
                    <FilterSelect label="Status" placeholder="All" />

                </div>

                {/* --- Footer --- */}
                <div className="p-6 border-t border-gray-100 flex justify-end gap-3 bg-white">
                    <button
                        onClick={onHide}
                        className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onHide}
                        className="px-6 py-2.5 text-sm font-semibold text-white bg-[#6b50d6] rounded-lg hover:bg-[#5a42b8] transition-colors shadow-sm"
                    >
                        Apply Filter
                    </button>
                </div>
            </div>
        </div>
    );
};

// Helper Component for Dropdowns
const FilterSelect = ({ label, placeholder }) => (
    <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold text-gray-700">{label}</label>
        <div className="relative w-full">
            <select
                className="w-full h-[42px] px-3 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg appearance-none focus:outline-none focus:border-purple-500 cursor-pointer"
                defaultValue=""
            >
                <option value="" disabled hidden>{placeholder}</option>
                <option value="all">All</option>
                <option value="opt1">Option 1</option>
                <option value="opt2">Option 2</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
    </div>
);