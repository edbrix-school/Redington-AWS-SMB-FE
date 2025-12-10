"use client";
import Image from "next/image";
import Link from "next/link";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Paginator } from "primereact/paginator";
import { Menu } from "primereact/menu"; // 1. Import Menu
import React, { useState, useRef } from "react";
import { ViewAnnouncements } from './popup/ViewAnnouncements';
import { Filter as FilterComponent } from './popup/Filter';

export const FilesTable = () => {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [globalFilterValue, setGlobalFilterValue] = useState("");

    // Filter Popup State
    const [openFilter, setOpenFilter] = useState(false);

    // View Details State
    const [visibleRight, setVisibleRight] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // 2. Ref for the Menu
    const menu = useRef(null);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    // 3. Menu Items logic
    const menuItems = [
        {
            label: 'View',
            icon: 'pi pi-eye',
            command: () => {
                // Opens the existing View Popup
                setVisibleRight(true);
            }
        },
        // {
        //     label: 'Edit',
        //     icon: 'pi pi-pencil',
        //     command: () => {
        //         console.log("Edit clicked for:", selectedProduct);
        //         // Add your edit logic here
        //     }
        // },
        // {
        //     label: 'Delete',
        //     icon: 'pi pi-trash',
        //     className: 'text-red-500',
        //     command: () => {
        //         console.log("Delete clicked for:", selectedProduct);
        //         // Add your delete logic here
        //     }
        // }
    ];

    const announcementList = [
        {
            id: 1,
            date: "03/03/2025",
            type: "General",
            message: "System maintenance scheduled on March 5th from 1:00 AM to 3:00 AM. Please save your work in advance",
        },
        {
            id: 2,
            date: "03/03/2025",
            type: "General",
            message: "New employee recognition program launched! Nominate your colleagues by March 10th.",
        },
        {
            id: 3,
            date: "03/03/2025",
            type: "Campaign",
            message: "Updated company leave policy is now live on the HR portal. Please review the changes",
        },
        {
            id: 4,
            date: "03/03/2025",
            type: "Campaign",
            message: "System maintenance scheduled on March 5th from 1:00 AM to 3:00 AM. Please save your work in advance",
        },
        {
            id: 5,
            date: "03/03/2025",
            type: "Social Campaign",
            message: "New employee recognition program launched! Nominate your colleagues by March 10th.",
        },
        {
            id: 6,
            date: "03/03/2025",
            type: "Social Campaign",
            message: "Updated company leave policy is now live on the HR portal. Please review the changes",
        },
        {
            id: 7,
            date: "03/03/2025",
            type: "Campaign",
            message: "System maintenance scheduled on March 5th from 1:00 AM to 3:00 AM. Please save your work in advance",
        },
        {
            id: 8,
            date: "03/03/2025",
            type: "Campaign",
            message: "New employee recognition program launched! Nominate your colleagues by March 10th.",
        },
        {
            id: 9,
            date: "03/03/2025",
            type: "Social Campaign",
            message: "Updated company leave policy is now live on the HR portal. Please review the changes",
        },
        {
            id: 10,
            date: "03/03/2025",
            type: "Social Campaign",
            message: "System maintenance scheduled on March 5th from 1:00 AM to 3:00 AM. Please save your work in advance",
        },
    ];

    // 4. Action Column Updated to trigger Menu
    const actionBodyTemplate = (rowData) => {
        return (
            <div className="flex justify-center items-center w-full">
                <button
                    onClick={(event) => {
                        setSelectedProduct(rowData); // Set the current row data
                        menu.current.toggle(event);  // Toggle the menu
                    }}
                    title="Options"
                    className="cursor-pointer bg-transparent border-none flex items-center justify-center"
                >
                    <Image
                        src={"/images/more.svg"}
                        width={20}
                        height={20}
                        alt="options"
                        className="w18 h-auto cursor-pointer hover:opacity-100"
                    />
                </button>
            </div>
        );
    };

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: "contains" },
        date: { value: null, matchMode: "contains" },
        type: { value: null, matchMode: "contains" },
        message: { value: null, matchMode: "contains" },
    });

    const HeaderWithMenu = ({ title }) => {
        return (
            <div className="header-menu flex items-center justify-between w-full">
                <span className="text-interfacetextdefault2 font-medium">{title}</span>
                <div className="smb-more text-interfacetextdefault2 font12 flex justify-end cursor-pointer opacity-50">
                </div>
            </div>
        );
    };

    const filterInput = (options) => {
        return (
            <div className="flex items-center w-full gap-2">
                <InputText
                    value={options.value || ""}
                    onChange={(e) => options.filterApplyCallback(e.target.value)}
                    className="p-inputtext-sm w-full custom-input border-gray-200"
                />
            </div>
        );
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters["global"].value = value;
        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    return (
        <div className="border border-interfacetextdefault shadow-lg rounded8 m-10 mt-4 bg-white relative">
            
            {/* 5. The Popup Menu Component */}
            <Menu model={menuItems} popup ref={menu} id="popup_menu" />

            {/* Top Header Section */}
            <div className="p15 flex flex-col md:flex-row justify-between items-center pb-0">

                {/* Title */}
                <div className="flex gap8 items-center pb22 md:pb-0">
                    <div className="font16 text-InterfaceTexttitle1 font-semibold mr-2">
                        All Announcements
                    </div>
                    <div className="text-InterfaceTextsubtitle font12">
                        (Showing 10/100 Records)
                    </div>
                </div>

                {/* Global Search & Filter Button */}
                <div className="flex gap10 items-center pb22 md:pb-0">
                    <div className="relative">
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <i className="pi pi-search"></i>
                        </span>
                        <InputText
                            value={globalFilterValue}
                            onChange={onGlobalFilterChange}
                            placeholder="Search"
                            className="pl-9 py-2 border border-gray-200 rounded-md text-sm w-64 bg-gray-50 focus:bg-white transition-colors"
                        />
                    </div>
                    <div onClick={() => setOpenFilter(true)} className="cursor-pointer h-full p-2 flex items-center justify-center text-center border border-InterfaceStrokedefault bg-white rounded-md hover:bg-gray-50 ml-2">
                        <i className="pi pi-filter text-gray-500"></i>
                    </div>
                </div>
            </div>

            {/* Table */}
            <DataTable
                value={announcementList}
                stripedRows
                rows={10}
                className="custTable tableCustRed"
                responsiveLayout="scroll"
                style={{ width: "100%" }}
                filters={filters}
                onFilter={(e) => setFilters(e.filters)}
                filterDisplay="row"
                emptyMessage={
                    <div className="flex justify-center p-4">No Data Available.</div>
                }
            >
                <Column
                    field="date"
                    header={<HeaderWithMenu title="Notification Date" />}
                    style={{ minWidth: "12rem" }}
                    filter
                    filterElement={filterInput}
                    body={(rowData) => <span className="text-gray-700 font-medium">{rowData.date}</span>}
                />

                <Column
                    field="type"
                    header={<HeaderWithMenu title="Announcement Type" />}
                    style={{ minWidth: "14rem" }}
                    filter
                    filterElement={filterInput}
                    body={(rowData) => <span className="text-gray-700">{rowData.type}</span>}
                />

                <Column
                    field="message"
                    header={<HeaderWithMenu title="Announcement" />}
                    style={{ minWidth: "25rem" }}
                    filter
                    filterElement={filterInput}
                    body={(rowData) => <span className="text-gray-600 text-sm">{rowData.message}</span>}
                />

                <Column
                    field="Action"
                    header="Action"
                    style={{ minWidth: "4rem", textAlign: "center" }}
                    className="action-shadow-table"
                    alignFrozen="right"
                    align="center"
                    frozen
                    body={actionBodyTemplate}
                    filter
                    filterElement={() => <div className="w-full"></div>}
                />
            </DataTable>

            {/* Paginator */}
            <div className="relative custTablePaginator border-t border-gray-100">
                <Paginator
                    template="PrevPageLink PageLinks NextPageLink"
                    first={first}
                    rows={rows}
                    onPageChange={onPageChange}
                    totalRecords={100}
                    className="justify-end"
                    leftContent={
                        <span className="text-gray-400 text-xs ml-4 absolute left-4 top-1/2 -translate-y-1/2">
                            Showing 1-10 of 1000
                        </span>
                    }
                />
            </div>

            {/* View Announcement Details Popup */}
            <ViewAnnouncements
                visible={visibleRight}
                onHide={() => setVisibleRight(false)}
                data={selectedProduct}
            />
            {/* Filter Popup */}
            <FilterComponent
                visible={openFilter}
                onHide={() => setOpenFilter(false)}
            />

        </div>
    );
}