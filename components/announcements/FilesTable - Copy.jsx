'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

// --- IMPORTS: ICONS ---
import {
    Filter, MoreHorizontal, Search, MoreVertical, Eye
} from 'lucide-react';

// --- IMPORTS: LOCAL DATA & COMPONENTS ---
// Ensure Filter.jsx is in the same folder, or update the path accordingly
import { Filter as FilterComponent } from './popup/Filter';
import { ViewAnnouncements } from './popup/ViewAnnouncements';
import { generateData } from './announcements-data';



/**
 * COMPONENT: ActionMenu
 * ---------------------
 * Handles the "Action" column dropdown logic. 
 * Renders the 3-dot menu and the "View" option.
 */
const ActionMenu = ({ rowData, activeMenuId, setActiveMenuId, onView }) => {
    const menuRef = useRef(null);
    const uniqueKey = rowData.uniqueId;

    // Check if this specific row's menu is currently active
    const isMenuOpen = activeMenuId === uniqueKey;

    // Handle clicks outside the menu to close it
    useClickOutside(menuRef, () => {
        if (isMenuOpen) setActiveMenuId(null);
    });

    const toggleMenu = (e) => {
        e.stopPropagation(); // Prevent row click events
        setActiveMenuId(isMenuOpen ? null : uniqueKey);
    };

    const handleViewClick = (e) => {
        e.stopPropagation();
        onView(rowData);
        setActiveMenuId(null);
    };

    return (
        <div className="relative inline-block text-left" ref={menuRef}>
            {/* 3-Dot Icon Button */}
            <button
                onClick={toggleMenu}
                className="flex items-center justify-center w-8 h-8 rounded-full text-gray-700 hover:bg-gray-100 transition-all"
            >
                <MoreVertical size={18} className="text-gray-600" />
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <div
                    className="absolute right-0 z-50 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    style={{ minWidth: '120px' }}
                >
                    <div className="py-1">
                        <button
                            onClick={handleViewClick}
                            className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-left"
                        >
                            <Eye size={14} />
                            View
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

/**
 * MAIN COMPONENT: FilesTable
 * --------------------------
 * The primary table component displaying announcements.
 */
export const FilesTable = () => {
    // --- STATE MANAGEMENT ---
    const [products, setProducts] = useState([]);
    const [first, setFirst] = useState(0); // Pagination: First index
    const [rows, setRows] = useState(10);  // Pagination: Rows per page

    // Filter Popup State
    const [openFilter, setOpenFilter] = useState(false);

    // View Details State (Placeholder for View action)
    const [visibleRight, setVisibleRight] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);



    // --- EFFECT: LOAD DATA ---
    useEffect(() => {
        // Generate mock data and assign a unique ID to each row for tracking
        const data = generateData(1000).map((p, index) => ({
            ...p,
            uniqueId: index
        }));
        setProducts(data);
    }, []);

    // --- EVENT HANDLERS ---
    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    // --- RENDERERS (TEMPLATES) ---

    // 1. Renders the 'Action' column with the button
    const actionBodyTemplate = (rowData) => {
        return (
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(rowData);
                    setVisibleRight(true);
                }}
                className="flex items-center justify-center w-8 h-8 rounded-full text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
            >
                <MoreVertical size={18} className="text-gray-600" />
            </button>
        );
    };

    // 2. Renders Date columns nicely formatted
    const dateBodyTemplate = (rowData, field) => (
        <span className="text-gray-600 text-sm">
            {rowData[field] ? rowData[field].toLocaleDateString('en-GB') : '-'}
        </span>
    );

    // 3. Custom Header for columns (Label + Input Filter + Icon)
    const customColumnHeader = (label, placeholder) => (
        <div className="flex flex-col gap-2 py-2">
            <div className="flex items-center justify-between">
                <span className="text-[12px] font-medium text-gray-600 uppercase tracking-wide">
                    {label}
                </span>
                {/* Don't show the 3-dot header menu on the Action column */}
                {label !== "Action" && <MoreHorizontal size={14} className="text-gray-400" />}
            </div>

            {/* Render column-specific search input if not Action column */}
            {label !== "Action" && (
                <div className="relative">
                    <input
                        type="text"
                        placeholder={placeholder}
                        className="w-full text-xs py-2 pl-3 pr-8 border border-gray-200 rounded bg-white focus:outline-none h-[34px]"
                    />
                    <Filter size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
            )}
        </div>
    );

    // 4. Main Table Header (Title, Global Search, Filter Button)
    const tableHeaderTemplate = (
        <div className="flex flex-col gap-3 py-5 px-5 bg-white border-b border-gray-200">
            <div className="flex justify-between items-center">
                {/* Title */}
                <h2 className="text-[18px] font-semibold text-gray-900">
                    All Announcements
                    <span className="text-gray-400 ml-2 text-sm">(Showing 1000 Records)</span>
                </h2>

                {/* Search & Filter Toolbar */}
                <div className="relative flex items-center">
                    {/* Search Box */}
                    <input
                        type="text"
                        placeholder="Search"
                        className="border border-gray-300 rounded-[6px] pl-9 pr-3 py-2 text-sm w-[250px]"
                    />
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                    {/* Filter Button - Triggers the Sidebar */}
                    <button
                        onClick={() => setOpenFilter(true)}
                        className="p-2 ml-2 border border-gray-300 rounded-[6px] text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer"
                        title="Open Filters"
                    >
                        <Filter size={18} />
                    </button>
                </div>
            </div>
        </div>
    );

    // --- MAIN RENDER ---
    return (
        <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-0">
            {/* PrimeReact DataTable */}
            <DataTable
                value={products}
                paginator
                header={tableHeaderTemplate}
                rows={rows}
                first={first}
                onPage={onPageChange}
                rowsPerPageOptions={[10, 20, 50, 100]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                tableStyle={{ minWidth: "100%" }}
                className="custom-table"
                rowClassName={(data, i) =>
                    i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"
                }
            >
                {/* Column 1: Date */}
                <Column
                    field="dateCreated"
                    header={customColumnHeader("Notification Date", "DD/MM/YYYY")}
                    body={(data) => dateBodyTemplate(data, "dateCreated")}
                    className="min-w-[160px] border-b border-gray-200"
                />

                {/* Column 2: Category */}
                <Column
                    field="category"
                    header={customColumnHeader("Announcement Type", "Type")}
                    body={(data) => <span className="text-gray-700">{data.category}</span>}
                    className="min-w-[160px] border-b border-gray-200"
                />

                {/* Column 3: Description */}
                <Column
                    field="description"
                    header={customColumnHeader("Announcement", "Abc")}
                    body={(data) => (
                        <span className="text-gray-600 block text-sm leading-relaxed">
                            {data.description}
                        </span>
                    )}
                    className="min-w-[450px] border-b border-gray-200"
                />

                {/* Column 4: Actions (3 dots) */}
                <Column
                    header={customColumnHeader("Action", "")}
                    body={actionBodyTemplate}
                    className="w-[120px] border-b border-gray-200 text-right pr-4"
                />
            </DataTable>

            {/* Filter Sidebar Component */}
            {/* Renders outside the table flow, handles its own visibility/animation */}
            <FilterComponent
                visible={openFilter}
                onHide={() => setOpenFilter(false)}
            />

            {/* View Announcement Details Popup */}
            <ViewAnnouncements
                visible={visibleRight}
                onHide={() => setVisibleRight(false)}
                data={selectedProduct}
            />
        </div>
    );
};