"use client";
import Image from "next/image";
import Link from "next/link";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Paginator } from "primereact/paginator";
import { Menu } from "primereact/menu";
import React, { useState, useRef } from "react";
// Ensure these components exist in your project or comment them out if testing
import { ViewFileDetails } from './popup/ViewFileDetails';

export const FilesTable = () => {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [globalFilterValue, setGlobalFilterValue] = useState("");

    // Filter Popup State
    const [openFilter, setOpenFilter] = useState(false);

    // View Details State
    const [visibleRight, setVisibleRight] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    // Data replicated from the screenshot
    const fileList = [
        {
            id: 1,
            title: "Getting Started with AWS Marketplace",
            description: "Discover how to browse, test, and deploy solutions from AWS...",
            category: "Product Info",
            docType: "Audio",
            dateCreated: "01/15/2023",
            lastUpdated: "01/01/2023",
        },
        {
            id: 2,
            title: "Cloud Security Best Practices",
            description: "Learn essential strategies to protect your cloud workloads.",
            category: "User Guide",
            docType: "Document",
            dateCreated: "01/10/2023",
            lastUpdated: "01/11/2023",
        },
        {
            id: 3,
            title: "Cost Optimization Tips",
            description: "Explore ways to control and reduce your AWS spend.",
            category: "Product Info",
            docType: "Video",
            dateCreated: "01/15/2023",
            lastUpdated: "01/17/2023",
        },
        {
            id: 4,
            title: "Migration Success Stories",
            description: "Read real-world examples of SMBs migrating to AWS.",
            category: "User Guide",
            docType: "Audio",
            dateCreated: "01/16/2023",
            lastUpdated: "01/07/2023",
        },
        {
            id: 5,
            title: "Compliance in the Cloud",
            description: "Understand how to meet regulatory requirements on AWS.",
            category: "Product Info",
            docType: "Website",
            dateCreated: "01/18/2023",
            lastUpdated: "01/03/2023",
        },
        {
            id: 6,
            title: "DevOps on AWS",
            description: "Accelerate your software delivery with DevOps tools and practices.",
            category: "User Guide",
            docType: "Video",
            dateCreated: "01/22/2023",
            lastUpdated: "01/09/2023",
        },
        {
            id: 7,
            title: "Data Analytics Essentials",
            description: "Unlock insights from your data with AWS analytics services.",
            category: "Product Info",
            docType: "Document",
            dateCreated: "01/08/2023",
            lastUpdated: "01/03/2023",
        },
        {
            id: 8,
            title: "Scaling Your Business on AWS",
            description: "Learn how to scale applications and infrastructure efficiently.",
            category: "User Guide",
            docType: "Website",
            dateCreated: "01/13/2023",
            lastUpdated: "01/06/2023",
        },
        {
            id: 9,
            title: "Cloud Security Best Practices",
            description: "Learn essential strategies to protect your cloud workloads.",
            category: "Product Info",
            docType: "Video",
            dateCreated: "01/08/2023",
            lastUpdated: "01/03/2023",
        },
        {
            id: 10,
            title: "Cost Optimization Tips",
            description: "Explore ways to control and reduce your AWS spend.",
            category: "User Guide",
            docType: "Website",
            dateCreated: "01/13/2023",
            lastUpdated: "01/06/2023",
        },
    ];

    // Helper to render Document Type Icons (simulated using PrimeIcons for replication)
    const docTypeTemplate = (rowData) => {
        let iconClass = "pi pi-file";
        if (rowData.docType === "Audio") iconClass = "pi pi-volume-up";
        else if (rowData.docType === "Video") iconClass = "pi pi-video";
        else if (rowData.docType === "Website") iconClass = "pi pi-globe";

        return (
            <div className="flex items-center gap-2 text-blue-600 cursor-pointer hover:underline">
                <i className={`${iconClass} text-lg`}></i>
                <span>{rowData.docType}</span>
            </div>
        );
    };

    // Action Column to match Screenshot (Eye Icon)
    const actionBodyTemplate = (rowData) => {
        return (
            <div className="flex justify-center items-center w-full">
                <button
                    type="button"
                    onClick={() => {
                        setSelectedProduct(rowData);
                        setVisibleRight(true);
                    }}
                    title="View Details"
                    className="cursor-pointer bg-transparent border-none flex items-center justify-center text-gray-500 hover:text-blue-600"
                >
                    <i className="pi pi-eye text-xl"></i>
                </button>
            </div>
        );
    };

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: "contains" },
        title: { value: null, matchMode: "contains" },
        description: { value: null, matchMode: "contains" },
        category: { value: null, matchMode: "contains" },
        docType: { value: null, matchMode: "contains" },
        dateCreated: { value: null, matchMode: "contains" },
        lastUpdated: { value: null, matchMode: "contains" },
    });

    const HeaderWithMenu = ({ title }) => {
        return (
            <div className="header-menu flex items-center justify-between w-full mb-2">
                <span className="text-gray-700 font-medium text-sm">{title}</span>
                <div className="smb-more text-interfacetextdefault2 font12 flex justify-end cursor-pointer opacity-50">
                    {/* Optional: Add sort/filter menu icon here if needed */}
                </div>
            </div>
        );
    };

    const filterInput = (options) => {
        return (
            <div className="flex items-center w-full">
                <InputText
                    value={options.value || ""}
                    onChange={(e) => options.filterApplyCallback(e.target.value)}
                    className="p-inputtext-sm w-full border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:border-blue-500"
                    placeholder=""
                />
                <i className="pi pi-filter ml-2 text-gray-400 text-xs"></i>
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
        <div className="border border-interfacetextdefault shadow-sm rounded-lg m-10 mt-4 bg-white relative">

            {/* Top Header Section */}
            <div className="p-4 flex flex-col md:flex-row justify-between items-center pb-0">

                {/* Title */}
                <div className="flex gap-2 items-center pb-4 md:pb-0">
                    <div className="text-lg text-gray-800 font-bold">
                        All Files
                    </div>
                    <div className="text-gray-400 text-sm">
                        (1024 Products)
                    </div>
                </div>

                {/* Action Buttons (Right Side) */}
                <div className="flex gap-3 items-center pb-4 md:pb-0">
                    {/* Add any top-right buttons here (e.g. Layout switcher from screenshot) */}
                    <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
                        <i className="pi pi-th-large text-gray-500"></i>
                    </button>
                    <button className="p-2 bg-purple-100 rounded hover:bg-purple-200">
                        <i className="pi pi-list text-purple-600"></i>
                    </button>
                </div>
            </div>

            {/* Table */}
            <DataTable
                value={fileList}
                stripedRows
                rows={10}
                className="custTable mt-4"
                responsiveLayout="scroll"
                style={{ width: "100%" }}
                filters={filters}
                onFilter={(e) => setFilters(e.filters)}
                filterDisplay="row"
                globalFilterFields={['title', 'description', 'category', 'docType']}
                emptyMessage={
                    <div className="flex justify-center p-4">No Files Found.</div>
                }
            >
                {/* 1. Title */}
                <Column
                    field="title"
                    header={<HeaderWithMenu title="Title" />}
                    style={{ minWidth: "16rem" }}
                    filter
                    filterElement={filterInput}
                    showFilterMenu={false}
                    body={(rowData) => <span className="text-gray-700 font-medium">{rowData.title}</span>}
                />

                {/* 2. Description */}
                <Column
                    field="description"
                    header={<HeaderWithMenu title="Description" />}
                    style={{ minWidth: "20rem" }}
                    filter
                    filterElement={filterInput}
                    showFilterMenu={false}
                    body={(rowData) => <span className="text-gray-600 text-sm truncate block w-full" title={rowData.description}>{rowData.description}</span>}
                />

                {/* 3. Category */}
                <Column
                    field="category"
                    header={<HeaderWithMenu title="Category" />}
                    style={{ minWidth: "10rem" }}
                    filter
                    filterElement={filterInput}
                    showFilterMenu={false}
                    body={(rowData) => <span className="text-gray-700">{rowData.category}</span>}
                />

                {/* 4. Document Type */}
                <Column
                    field="docType"
                    header={<HeaderWithMenu title="Document Type" />}
                    style={{ minWidth: "12rem" }}
                    filter
                    filterElement={filterInput}
                    showFilterMenu={false}
                    body={docTypeTemplate}
                />

                {/* 5. Date Created */}
                <Column
                    field="dateCreated"
                    header={<HeaderWithMenu title="Date Created" />}
                    style={{ minWidth: "10rem" }}
                    filter
                    filterElement={filterInput}
                    showFilterMenu={false}
                    body={(rowData) => <span className="text-gray-700">{rowData.dateCreated}</span>}
                />

                {/* 6. Last Updated */}
                <Column
                    field="lastUpdated"
                    header={<HeaderWithMenu title="Last Updated" />}
                    style={{ minWidth: "10rem" }}
                    filter
                    filterElement={filterInput}
                    showFilterMenu={false}
                    body={(rowData) => <span className="text-gray-700">{rowData.lastUpdated}</span>}
                />

                {/* 7. Action */}
                <Column
                    field="Action"
                    header="Action"
                    style={{ minWidth: "4rem", textAlign: "center" }}
                    alignFrozen="right"
                    align="center"
                    frozen
                    body={actionBodyTemplate}
                    // Empty filter element to align the table header row height
                    filter
                    filterElement={() => <div className="w-full h-8"></div>}
                    showFilterMenu={false}
                />
            </DataTable>

            {/* Paginator */}
            <div className="relative border-t border-gray-100">
                <Paginator
                    template="PrevPageLink PageLinks NextPageLink"
                    first={first}
                    rows={rows}
                    onPageChange={onPageChange}
                    totalRecords={1000} // Set to 1000 as per screenshot
                    className="justify-end"
                    leftContent={
                        <span className="text-gray-400 text-xs ml-4 absolute left-4 top-1/2 -translate-y-1/2">
                            Showing 1-10 of 1000
                        </span>
                    }
                />
            </div>

            {/* View Details Popup */}
            <ViewFileDetails
                visible={visibleRight}
                onHide={() => setVisibleRight(false)}
                data={selectedProduct}
            />

        </div>
    );
}