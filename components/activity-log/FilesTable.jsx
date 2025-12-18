"use client";
import Image from "next/image";
import Link from "next/link";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Paginator } from "primereact/paginator";
import { Menu } from "primereact/menu";
import React, { useState, useRef } from "react";
import Filter from "./popup/Filter";
import ViewActivity from "./popup/ViewActivity";

export const FilesTable = () => {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [globalFilter, setGlobalFilter] = useState("");

    const [openFilter, setOpenFilter] = useState(false);
    const [openViewActivity, setOpenViewActivity] = useState(false);

    const [visibleRight, setVisibleRight] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const menu = useRef(null);

    // Dropdown menu items
    const menuItems = [
        {
            template: (item, options) => (
                <div
                    onClick={() => {
                        setOpenViewActivity(true);
                        options.onClick();
                    }}
                    className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md hover:bg-gray-50"
                >
                    <i className="pi pi-eye text-gray-700 text-sm"></i>
                    <span className="text-gray-700 text-sm">View</span>
                </div>
            ),
        },
    ];

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const recordsList = [
        { id: 1, timeStamp: "20/05/2025, 11:00 hrs", activityType: "Order Placed", description: "Order ID : #12345", user: "Robert Fox", ipAddress: "190.213.161.20" },
        { id: 2, timeStamp: "20/05/2025, 11:00 hrs", activityType: "Logged In", description: "Order ID : #12345", user: "Ralph Edwards", ipAddress: "186.186.166.98" },
        { id: 3, timeStamp: "20/05/2025, 11:00 hrs", activityType: "Product View", description: "Order ID : #12345", user: "Brooklyn Simmons", ipAddress: "123.152.99.118" },
        { id: 4, timeStamp: "20/05/2025, 11:00 hrs", activityType: "Profile Updated", description: "Order ID : #12345", user: "Theresa Webb", ipAddress: "123.152.99.118" },
        { id: 5, timeStamp: "20/05/2025, 11:00 hrs", activityType: "Cart Updated", description: "Order ID : #12345", user: "Albert Flores", ipAddress: "62.26.134.247" },
        { id: 6, timeStamp: "20/05/2025, 11:00 hrs", activityType: "Logged Out", description: "Order ID : #12345", user: "Darlene Robertson", ipAddress: "206.96.186.211" },
        { id: 7, timeStamp: "20/05/2025, 11:00 hrs", activityType: "Quote Requested", description: "Order ID : #12345", user: "Esther Howard", ipAddress: "190.213.161.20" },
        { id: 8, timeStamp: "20/05/2025, 11:00 hrs", activityType: "Logged In", description: "Order ID : #12345", user: "Jenny Wilson", ipAddress: "186.186.166.98" },
        { id: 9, timeStamp: "20/05/2025, 11:00 hrs", activityType: "Profile Updated", description: "Order ID : #12345", user: "Jane Cooper", ipAddress: "190.213.161.20" },
        { id: 10, timeStamp: "20/05/2025, 11:00 hrs", activityType: "Logged Out", description: "Order ID : #12345", user: "Marvin McKinney", ipAddress: "206.96.186.211" },
    ];

    // Action Column (Dropdown on click)
    const actionBodyTemplate = (rowData) => {
        return (
            <div className="flex justify-center items-center w-full">
                <button
                    onClick={(event) => {
                        setSelectedProduct(rowData);
                        menu.current.toggle(event);
                    }}
                    title="Options"
                    className="cursor-pointer bg-transparent border-none flex items-center justify-center"
                >
                    <img
                        src={"/images/more.svg"}
                        width={20}
                        height={20}
                        alt="options"
                        className="w18 h-auto cursor-pointer"
                    />
                </button>
            </div>
        );
    };

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: "contains" },
        timeStamp: { value: null, matchMode: "contains" },
        activityType: { value: null, matchMode: "contains" },
        description: { value: null, matchMode: "contains" },
        user: { value: null, matchMode: "contains" },
        ipAddress: { value: null, matchMode: "contains" },
    });

    const HeaderWithMenu = ({ title }) => {
        return (
            <div className="header-menu flex items-center justify-between w-full">
                <span className="text-interfacetextdefault2 font-medium">{title}</span>
                <div className="smb-more text-interfacetextdefault2 font12 flex justify-end cursor-pointer">
                </div>
            </div>
        );
    };

    // Modified filterInput to accept a custom placeholder
    const filterInput = (options, placeholderText = "") => {
        return (
            <InputText
                value={options.value || ""}
                onChange={(e) => options.filterApplyCallback(e.target.value)}
                placeholder={placeholderText}
                className="p-inputtext-sm w-full custom-input1"
            />
        );
    };

    return (
        <div className="mx-[4.167vw] border border-interfacetextdefault shadow-lg rounded8 m-10 mt-4 bg-white relative">

            <Menu model={menuItems} popup ref={menu} />

            {/* --- UPDATED HEADER SECTION --- */}
            <div className="p15 flex flex-col md:flex-row justify-between items-center pb-0">

                {/* Left Side: Title & Count */}
                <div className="flex gap8 items-center pb22 md:pb-0">
                    <div className="font16 text-InterfaceTexttitle1 font-semibold mr-2">
                        List of Records
                    </div>
                    <div className="text-InterfaceTextsubtitle font12">
                        (Showing 10/100 Records)
                    </div>
                </div>

                {/* Right Side: Search Bar & Filter Button */}
                <div className="flex gap-3 items-center pb22 md:pb-0">

                    {/* Filter Button */}
                    <div onClick={() => setOpenFilter(true)} className="cursor-pointer h-9 w36 flex items-center justify-center text-center">
                        <i className="smb-filter text-InterfaceTextsubtitle font18"></i>
                    </div>
                </div>
            </div>
            {/* --- END HEADER SECTION --- */}

            {/* Table */}
            <DataTable
                value={recordsList}
                stripedRows
                rows={10}
                className="custTable custfiltericon tableCustRed mt-4"
                responsiveLayout="scroll"
                scrollable
                style={{ width: "100%" }}
                filters={filters}
                onFilter={(e) => setFilters(e.filters)}
                filterDisplay="row"
                globalFilter={globalFilter}
                globalFilterFields={["timeStamp", "activityType", "description", "user", "ipAddress"]}
                emptyMessage={<div className="flex justify-center p-4">No Records Found.</div>}
            >
                {/* 1. TimeStamp - Icon restored */}
                <Column 
                    field="timeStamp" 
                    header="Time Stamp" 
                    style={{ minWidth: "14rem" }} 
                    filter 
                    sortable
                    filterElement={(opts) => filterInput(opts, "")} 
                    body={(rowData) => <span className="text-gray-700 text-sm">{rowData.timeStamp}</span>} 
                />

                {/* 2. Activity Type - Icon restored */}
                <Column 
                    field="activityType" 
                    header="Activity Type"
                    sortable
                    style={{ minWidth: "12rem" }} 
                    filter 
                    filterElement={(opts) => filterInput(opts, "")} 
                    body={(rowData) => <span className="text-gray-700 text-sm">{rowData.activityType}</span>} 
                />

                {/* 3. Description - Icon restored */}
                <Column 
                    field="description" 
                    header="Description/ Details"
                    sortable
                    style={{ minWidth: "14rem" }} 
                    filter 
                    filterElement={(opts) => filterInput(opts, "Abc")} 
                    body={(rowData) => <span className="text-gray-700 text-sm">{rowData.description}</span>} 
                />

                {/* 4. User - Icon restored */}
                <Column 
                    field="user" 
                    header="User"
                    sortable
                    style={{ minWidth: "12rem" }} 
                    filter 
                    filterElement={(opts) => filterInput(opts, "Abc")} 
                    body={(rowData) => <span className="text-gray-700 text-sm">{rowData.user}</span>} 
                />

                {/* 5. IP Address - Icon restored */}
                <Column 
                    field="ipAddress" 
                    header="IP Address"
                    sortable
                    style={{ minWidth: "12rem" }} 
                    filter 
                    filterElement={(opts) => filterInput(opts, "Abc")} 
                    body={(rowData) => <span className="text-gray-700 text-sm">{rowData.ipAddress}</span>} 
                />

                {/* Action Column - Hiding menu intentionally here */}
                <Column
                    field="Action"
                    header="Action"
                    style={{ width: "5rem", textAlign: "center" }}
                    alignFrozen="right"
                    align="center"
                    frozen
                    body={actionBodyTemplate}
                    filter
                    filterElement={() => <div className="w-full"></div>}
                    showFilterMenu={false}
                />
            </DataTable>

            {/* Pagination */}
            <div className="relative custTablePaginator border-t border-gray-100">
                <Paginator
                    template="PrevPageLink PageLinks NextPageLink"
                    first={first}
                    rows={rows}
                    onPageChange={onPageChange}
                    totalRecords={1000}
                    className="justify-end"
                    leftContent={
                        <span className="text-gray-400 font-medium text-xs ml-4 absolute left-0 top-1/2 -translate-y-1/2">
                            Showing <span className="font-bold">1-10</span> of <span className="font-bold">1000</span>
                        </span>
                    }
                />
            </div>

            {/* Right-side Popups */}
            <Filter visible={openFilter} onHide={() => setOpenFilter(false)} />
            <ViewActivity visible={openViewActivity} onHide={() => setOpenViewActivity(false)} data={selectedProduct} />
        </div>
    );
};
