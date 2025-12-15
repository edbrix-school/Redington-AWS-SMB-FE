"use client";

import Image from "next/image";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Paginator } from "primereact/paginator";
import React, { useState } from "react";
import ViewFileDetails from "./popup/ViewFileDetails";

export const FilesTable = () => {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [visibleRight, setVisibleRight] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    /* ================= FULL DATA (UNCHANGED) ================= */
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
            description: "Accelerate your software delivery with DevOps tools.",
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

    /* ================= HELPERS ================= */
    const docTypeTemplate = (rowData) => {
        let iconSrc = "/images/document-text-table.svg";
        if (rowData.docType === "Audio") iconSrc = "/images/audio-square.svg";
        else if (rowData.docType === "Video") iconSrc = "/images/video-square.svg";
        else if (rowData.docType === "Website") iconSrc = "/images/global-table.svg";

        return (
            <div className="flex items-center gap-2">
                <Image src={iconSrc} alt={rowData.docType} width={24} height={24} />
                <span className="text-[#667085] font-medium">
                    {rowData.docType}
                </span>
            </div>
        );
    };

    const actionBodyTemplate = (rowData) => (
        <div className="flex justify-center">
            <button
                onClick={() => {
                    setSelectedProduct(rowData);
                    setVisibleRight(true);
                }}
                className="bg-transparent border-none cursor-pointer"
            >
                <i className="pi pi-eye text-xl text-gray-500 hover:text-blue-600"></i>
            </button>
        </div>
    );

    const [filters, setFilters] = useState({
        title: { value: null, matchMode: "contains" },
        description: { value: null, matchMode: "contains" },
        category: { value: null, matchMode: "contains" },
        docType: { value: null, matchMode: "contains" },
        dateCreated: { value: null, matchMode: "contains" },
        lastUpdated: { value: null, matchMode: "contains" },
    });

    const HeaderWithMenu = ({ title }) => (
        <div className="header-menu flex items-center justify-between w-full">
            <span className="text-interfacetextdefault2 font-medium">
                {title}
            </span>
            <div className="smb-more"></div>
        </div>
    );

    // Same filter input as Announcements
    const filterInput = (options, placeholder = "") => (
        <InputText
            value={options.value || ""}
            onChange={(e) => options.filterApplyCallback(e.target.value)}
            placeholder={placeholder}
            className="p-inputtext-sm w-full custom-input1"
        />
    );

    return (
        <div className="border border-interfacetextdefault shadow-sm rounded-lg m-10 mt-4 bg-white relative">

            {/* ================= TOP HEADER SECTION (RESTORED) ================= */}
            <div className="p-4 flex flex-col md:flex-row justify-between items-center pb-0">

                {/* Left */}
                <div className="flex gap-2 items-center pb-4 md:pb-0">
                    <div className="font16 text-InterfaceTexttitle1 font-semibold">
                        All Files
                    </div>
                    <div className="text-InterfaceTextsubtitle font12">
                        (1024 Products)
                    </div>
                </div>

                {/* Right */}
                <div className="flex gap-3 items-center pb-4 md:pb-0">
                    <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
                        <Image src="/images/pi-th-large.svg" alt="" width={20} height={20} />
                    </button>
                    <button className="p-2 bg-purple-100 rounded hover:bg-purple-200">
                        <Image src="/images/grid-1.svg" alt="" width={20} height={20} />
                    </button>
                </div>
            </div>
            {/* ================= END TOP HEADER ================= */}

            <DataTable
                value={fileList}
                stripedRows
                rows={10}
                className="custTable mt-4"
                responsiveLayout="scroll"
                filters={filters}
                onFilter={(e) => setFilters(e.filters)}
                filterDisplay="row"
            >
                <Column field="title" header={<HeaderWithMenu title="Title" />} filter filterElement={(o) => filterInput(o)} body={(r) => <span className="font-medium">{r.title}</span>} />

                <Column field="description" header={<HeaderWithMenu title="Description" />} filter filterElement={(o) => filterInput(o, "Abc")} body={(r) => <span>{r.description}</span>} />

                <Column field="category" header={<HeaderWithMenu title="Category" />} filter filterElement={(o) => filterInput(o)} body={(r) => <span>{r.category}</span>} />

                <Column field="docType" header={<HeaderWithMenu title="Document Type" />} filter filterElement={(o) => filterInput(o)} body={docTypeTemplate} />

                {/* ONLY THESE TWO HAVE "Abc" */}
                <Column field="dateCreated" header={<HeaderWithMenu title="Date Created" />} filter filterElement={(o) => filterInput(o)} body={(r) => <span>{r.dateCreated}</span>} />

                <Column field="lastUpdated" header={<HeaderWithMenu title="Last Updated" />} filter filterElement={(o) => filterInput(o)} body={(r) => <span>{r.lastUpdated}</span>} />

                <Column
                    header="Action"
                    body={actionBodyTemplate}
                    align="center"
                    frozen
                    
                />
            </DataTable>

            <Paginator
                template="PrevPageLink PageLinks NextPageLink"
                first={first}
                rows={rows}
                onPageChange={onPageChange}
                totalRecords={1000}
                className="justify-end mt-3"
            />

            <ViewFileDetails
                visible={visibleRight}
                onHide={() => setVisibleRight(false)}
                data={selectedProduct}
            />
        </div>
    );
};
