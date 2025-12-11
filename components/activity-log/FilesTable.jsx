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
    const [globalFilterValue, setGlobalFilterValue] = useState("");

    const [openFilter, setOpenFilter] = useState(false);
    const [openViewActivity, setOpenViewActivity] = useState(false);

    const [visibleRight, setVisibleRight] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const menuRef = useRef(null);

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
                    type="button"
                    onClick={(e) => {
                        setSelectedProduct(rowData);
                        menuRef.current.toggle(e);
                    }}
                    className="cursor-pointer bg-transparent border-none flex items-center justify-center text-gray-600 hover:text-gray-900"
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
        timeStamp: { value: null, matchMode: "contains" },
        activityType: { value: null, matchMode: "contains" },
        description: { value: null, matchMode: "contains" },
        user: { value: null, matchMode: "contains" },
        ipAddress: { value: null, matchMode: "contains" },
    });

    const HeaderWithMenu = ({ title }) => {
        return (
            <div className="flex items-center justify-between w-full">
                <span className="text-gray-800 font-medium text-xs">{title}</span>
                <div className="smb-more text-interfacetextdefault2 font12 flex justify-end cursor-pointer opacity-50"></div>
            </div>
        );
    };

    const filterInput = (options, placeholder = "") => {
        return (
            <div className="flex items-center w-full gap-2">
                <InputText
                    value={options.value || ""}
                    onChange={(e) => options.filterApplyCallback(e.target.value)}
                    className="p-inputtext-sm w-full border border-gray-300 rounded-md px-2 py-2 text-sm focus:outline-none focus:border-blue-500"
                    placeholder={placeholder}
                />
                <i className="smb-filter text-InterfaceTextsubtitle font12 ml-1"></i>
            </div>
        );
    };

    return (
        <div className="border border-interfacetextdefault shadow-lg rounded8 m-10 mt-4 bg-white relative">

            {/* Header */}
            <div className="p-4 flex justify-between items-center border-b border-gray-100 mb-2 ">
                <div className="flex gap8 items-center pb22 md:pb-0">
                    <div className="font16 text-InterfaceTexttitle1 font-semibold mr-2">
                        List of Records
                    </div>
                    <div className="text-InterfaceTextsubtitle font12">
                        (Showing 10/100 Records)
                    </div>
                </div>

                <div className="flex items-center">
                    <button className="p-2 cursor-pointer" onClick={() => setOpenFilter(true)}>
                        <i className="smb-filter text-InterfaceTextsubtitle font16 ml-2"></i>
                    </button>
                </div>
            </div>

            {/* Table */}
            <DataTable
                value={recordsList}
                stripedRows
                rows={10}
                className="custTable"
                responsiveLayout="scroll"
                style={{ width: "100%" }}
                filters={filters}
                onFilter={(e) => setFilters(e.filters)}
                filterDisplay="row"
                globalFilterFields={["timeStamp", "activityType", "description", "user", "ipAddress"]}
                emptyMessage={<div className="flex justify-center p-4">No Records Found.</div>}
                pt={{
                    thead: { className: "bg-gray-50" },
                    headerRow: { className: "text-gray-700" },
                }}
            >
                <Column field="timeStamp" header={<HeaderWithMenu title="Time Stamp" />} style={{ minWidth: "14rem" }} filter filterElement={(opts) => filterInput(opts, "")} showFilterMenu={false} body={(rowData) => <span className="text-gray-700 text-sm">{rowData.timeStamp}</span>} />

                <Column field="activityType" header={<HeaderWithMenu title="Activity Type" />} style={{ minWidth: "12rem" }} filter filterElement={(opts) => filterInput(opts, "")} showFilterMenu={false} body={(rowData) => <span className="text-gray-700 text-sm">{rowData.activityType}</span>} />

                <Column field="description" header={<HeaderWithMenu title="Description/ Details" />} style={{ minWidth: "14rem" }} filter filterElement={(opts) => filterInput(opts, "Abc")} showFilterMenu={false} body={(rowData) => <span className="text-gray-700 text-sm">{rowData.description}</span>} />

                <Column field="user" header={<HeaderWithMenu title="User" />} style={{ minWidth: "12rem" }} filter filterElement={(opts) => filterInput(opts, "Abc")} showFilterMenu={false} body={(rowData) => <span className="text-gray-700 text-sm">{rowData.user}</span>} />

                <Column field="ipAddress" header={<HeaderWithMenu title="IP Address" />} style={{ minWidth: "12rem" }} filter filterElement={(opts) => filterInput(opts, "Abc")} showFilterMenu={false} body={(rowData) => <span className="text-gray-700 text-sm">{rowData.ipAddress}</span>} />

                <Column
                    field="Action"
                    header={<HeaderWithMenu title="Action" />}
                    style={{ width: "5rem", textAlign: "center" }}
                    align="center"
                    body={actionBodyTemplate}
                    filter
                    filterElement={() => <div className="w-full h-10"></div>}
                    showFilterMenu={false}
                />
            </DataTable>

            {/* Dropdown Menu */}
            <Menu model={menuItems} popup ref={menuRef} className="custom-menu" />

            {/* Pagination */}
            <div className="relative mt-4">
                <Paginator
                    template="PrevPageLink PageLinks NextPageLink"
                    first={first}
                    rows={rows}
                    onPageChange={onPageChange}
                    totalRecords={1000}
                    className="justify-end !bg-transparent"
                    leftContent={
                        <span className="text-gray-500 font-medium text-sm ml-4 absolute left-0 top-1/2 -translate-y-1/2">
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
