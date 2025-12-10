'use client';

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Sidebar } from 'primereact/sidebar'; // Import Sidebar
import { generateData } from './knowledge-hub-data';

import {
    Eye, FileText, Video, Mic, Globe, LayoutGrid, List as ListIcon,
    Filter, MoreHorizontal, ArrowLeft, Pencil, Download, PlayCircle
} from 'lucide-react';
import classNames from 'classnames';

export const FilesTable = () => {
    const [products, setProducts] = useState([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    // State for Drawer
    const [visibleRight, setVisibleRight] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        setProducts(generateData(100));
    }, []);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    // --- Helper for Icons (Reused in Table and Drawer) ---
    const getFileIcon = (type, size = 14) => {
        switch (type) {
            case 'Audio': return <Mic size={size} className="text-[#6941C6]" />;
            case 'Video': return <Video size={size} className="text-[#3538CD]" />;
            case 'Website': return <Globe size={size} className="text-[#1570EF]" />;
            case 'Document':
            default: return <FileText size={size} className="text-[#344054]" />;
        }
    };

    const getFileIconBg = (type) => {
        switch (type) {
            case 'Audio': return "bg-[#EBE9FE]";
            case 'Video': return "bg-[#E0EAFF]";
            case 'Website': return "bg-[#D1E9FF]";
            case 'Document':
            default: return "bg-[#EAECF0]";
        }
    };

    // --- Templates ---

    const documentTypeBodyTemplate = (rowData) => {
        const icon = <div className={`p-1 rounded-full ${getFileIconBg(rowData.documentType)}`}>{getFileIcon(rowData.documentType)}</div>;

        let colorClass = "text-[#344054]";
        if (rowData.documentType === 'Audio') colorClass = "text-[#6941C6]";
        if (rowData.documentType === 'Video') colorClass = "text-[#3538CD]";
        if (rowData.documentType === 'Website') colorClass = "text-[#1570EF]";

        return (
            <div className={`flex items-center gap-2 font-medium`}>
                {icon}
                <span className={`text-sm ${colorClass}`}>{rowData.documentType}</span>
            </div>
        );
    };

    // 2. Action Template (Eye Icon) - FIXED CURSOR
    const actionBodyTemplate = (rowData) => {
        return (
            <button
                onClick={() => {
                    setSelectedProduct(rowData);
                    setVisibleRight(true);
                }}
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors cursor-pointer"
            >
                <Eye size={18} />
            </button>
        );
    };

    const dateBodyTemplate = (rowData, field) => {
        return (
            <span className="text-gray-500 text-sm font-normal">
                {rowData[field].toLocaleDateString('en-US', {
                    month: '2-digit', day: '2-digit', year: 'numeric'
                })}
            </span>
        );
    };

    const tableHeaderTemplate = (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-6 px-6 bg-white rounded-t-xl">
            <div>
                <h2 className="text-[18px] font-bold text-dark-900 font-roboto">All Files <span className="text-gray-400 text-sm font-normal ml-2">(2124 Products)</span></h2>
            </div>
            <div className="flex items-center gap-2">
                <button className="p-2 rounded hover:bg-gray-50 text-gray-400 transition-all cursor-pointer"><LayoutGrid size={20} /></button>
                <button className="p-2 rounded bg-[#F4EBFF] text-[#6941C6] shadow-sm cursor-pointer"><ListIcon size={20} /></button>
            </div>
        </div>
    );

    const customColumnHeader = (title, showFilter = true, placeholder = "") => {
        return (
            <div className="flex flex-col gap-2 w-full py-2">
                <div className="flex items-center justify-between mb-1">
                    <span className="text-[12px] font-medium text-gray-500">{title}</span>
                    <MoreHorizontal size={16} className="text-gray-300 cursor-pointer" />
                </div>
                {showFilter && (
                    <div className="relative">
                        <input
                            type="text"
                            placeholder={placeholder}
                            className="w-full text-xs py-2 pl-3 pr-8 border border-gray-200 rounded-[6px] bg-white focus:outline-none focus:border-primary-green transition-colors placeholder-gray-300 h-[36px]"
                        />
                        <Filter size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                )}
            </div>
        );
    };

    // --- Side Drawer Content Component ---
    const DrawerContent = ({ data }) => {
        if (!data) return null;

        return (
            <div className="flex flex-col h-full font-roboto">
                {/* Custom Header */}
                <div className="px-6 py-4 border-b border-gray-100 flex items-start justify-between bg-white sticky top-0 z-10">
                    <div className="flex items-start gap-3">
                        <button onClick={() => setVisibleRight(false)} className="mt-1 text-gray-400 hover:text-gray-600 cursor-pointer">
                            <ArrowLeft size={20} />
                        </button>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">{data.title}</h2>
                            <div className="flex gap-2 mt-2">
                                <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Web Hosting</span>
                                <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Security</span>
                            </div>
                        </div>
                    </div>
                    <button className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-gray-700 cursor-pointer">
                        <Pencil size={18} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {/* File Details Strip */}
                    <div className="bg-[#F9FAFB] px-8 py-6 grid grid-cols-3 gap-4 border-b border-gray-100">
                        <div>
                            <span className="text-xs text-gray-400 block mb-1">Name</span>
                            <span className="text-sm font-medium text-gray-700">{data.title}</span>
                        </div>
                        <div>
                            <span className="text-xs text-gray-400 block mb-1">Category</span>
                            <span className="text-sm font-medium text-gray-700">{data.category}</span>
                        </div>
                        <div>
                            <span className="text-xs text-gray-400 block mb-1">Type</span>
                            <div className="flex items-center gap-2">
                                <div className={`p-1 rounded-full ${getFileIconBg(data.documentType)}`}>
                                    {getFileIcon(data.documentType, 12)}
                                </div>
                                <span className="text-sm font-medium text-gray-700">{data.documentType}</span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-3 text-lg">
                                Small and medium businesses looking for a hassle-free, secure, and robust web hosting solution.
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                        {/* Image Area */}
                        <div className="border border-gray-200 rounded-lg p-2 bg-white shadow-sm flex items-start justify-center min-h-[200px]">
                            <img
                                src="images/knowledge-hub/Architecture-Diagram.webp"
                                alt="Architecture Diagram"
                                className="w-full h-auto object-contain rounded"
                            />
                        </div>
                    </div>

                    {/* Dark Footer Section (Similar Documents & Attachments) */}
                    <div className="bg-[#101828] p-8 text-white mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Similar Documents */}
                            <div>
                                <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">Similar Documents</h4>
                                <div className="space-y-3">
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} className="flex items-center justify-between bg-[#1D2939] p-3 rounded-lg border border-[#344054]">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-[#101828] rounded border border-[#344054]">
                                                    <FileText size={16} className="text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-white">Int. Manual V2.03</p>
                                                    <p className="text-xs text-gray-400">21 Jan 2023 11:23 AM</p>
                                                </div>
                                            </div>
                                            <button className="text-gray-400 hover:text-white cursor-pointer"><Download size={16} /></button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Attachments */}
                            <div>
                                <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">Attachments</h4>
                                <div className="space-y-3">
                                    {/* Item 1 */}
                                    <div className="flex items-center justify-between bg-[#1D2939] p-3 rounded-lg border border-[#344054]">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-[#101828] rounded border border-[#344054]">
                                                <FileText size={16} className="text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-white">Tech Specs.pdf</p>
                                                <p className="text-xs text-gray-400">21 Jan 2023 11:23 AM</p>
                                            </div>
                                        </div>
                                        <button className="text-gray-400 hover:text-white cursor-pointer"><Download size={16} /></button>
                                    </div>
                                    {/* Item 2 */}
                                    <div className="flex items-center justify-between bg-[#1D2939] p-3 rounded-lg border border-[#344054]">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-[#101828] rounded border border-[#344054]">
                                                <PlayCircle size={16} className="text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-white">First Steps Training Video</p>
                                                <p className="text-xs text-gray-400">21 Jan 2023 11:23 AM</p>
                                            </div>
                                        </div>
                                        <button className="text-gray-400 hover:text-white cursor-pointer"><Download size={16} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-gray-50 rounded-xl relative z-20 min-h-screen">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <DataTable
                    value={products}
                    header={tableHeaderTemplate}
                    paginator
                    rows={rows}
                    first={first}
                    onPage={onPageChange}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: '60rem' }}
                    className="custom-table"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first}-{last} of {totalRecords}"
                    rowClassName={(data, options) => classNames({
                        'bg-[#F9FAFB]': options.index % 2 === 0,
                        'bg-[#F5F6F7]': options.index % 2 !== 0
                    })}
                >
                    <Column field="title" header={customColumnHeader("Title", true, "")} body={(data) => <span className="font-medium text-gray-800 text-sm">{data.title}</span>} className="min-w-[250px] border-b border-gray-100" />
                    <Column field="description" header={customColumnHeader("Description", true, "Abc")} body={(data) => <span className="text-gray-500 text-sm truncate block max-w-xs">{data.description}</span>} className="min-w-[300px] border-b border-gray-100" />
                    <Column field="category" header={customColumnHeader("Category", true, "")} body={(data) => <span className="text-gray-700 text-sm">{data.category}</span>} className="min-w-[150px] border-b border-gray-100" />
                    <Column field="documentType" header={customColumnHeader("Document Type", true, "")} body={documentTypeBodyTemplate} className="min-w-[160px] border-b border-gray-100" />
                    <Column field="dateCreated" header={customColumnHeader("Date Created", true, "")} body={(data) => dateBodyTemplate(data, 'dateCreated')} className="min-w-[140px] border-b border-gray-100" />
                    <Column field="lastUpdated" header={customColumnHeader("Last Updated", true, "")} body={(data) => dateBodyTemplate(data, 'lastUpdated')} className="min-w-[140px] border-b border-gray-100" />
                    <Column header={customColumnHeader("Action", false)} body={actionBodyTemplate} className="w-20 text-center border-b border-gray-100" />
                </DataTable>
            </div>

            {/* Side Drawer Component */}
            <Sidebar
                visible={visibleRight}
                position="right"
                onHide={() => setVisibleRight(false)}
                className="w-full md:w-[60%] lg:w-[50%] p-0 custom-sidebar" // p-0 removes default padding
                showCloseIcon={false} // Hiding default close icon to use our custom header
                style={{ width: '900px', maxWidth: '100vw' }} // Force width like SS
            >
                <DrawerContent data={selectedProduct} />
            </Sidebar>
        </div>
    );
};