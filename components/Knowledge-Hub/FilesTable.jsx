"use client";

import Image from "next/image";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Paginator } from "primereact/paginator";
import React, { useState } from "react";
import ViewFileDetails from "./popup/ViewFileDetails";

export const FilesTable = () => {
    // Pagination State
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    // UI State
    const [visibleRight, setVisibleRight] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isGridView, setIsGridView] = useState(false); // Default to List (Table) View

    /* ================= FULL DATA ================= */
    const [fileList, setFileList] = useState([
        {
            id: 1,
            title: "Getting Started with AWS Marketplace",
            description: "Discover how to browse, test, and deploy solutions from AWS...",
            category: "Category 02",
            docType: "Audio",
            dateCreated: "01/15/2023",
            lastUpdated: "01/01/2023",
            count: 1
        },
        {
            id: 2,
            title: "Cloud Security Best Practices",
            description: "Learn essential strategies to protect your cloud workloads.",
            category: "Category 03",
            docType: "Document",
            dateCreated: "01/10/2023",
            lastUpdated: "01/11/2023",
            count: 1
        },
        {
            id: 3,
            title: "Cost Optimization Tips",
            description: "Explore ways to control and reduce your AWS spend.",
            category: "Category 02",
            docType: "Video",
            dateCreated: "01/15/2023",
            lastUpdated: "01/17/2023",
            count: 2
        },
        {
            id: 4,
            title: "Migration Success Stories",
            description: "Read real-world examples of SMBs migrating to AWS.",
            category: "Category 04",
            docType: "Audio",
            dateCreated: "01/16/2023",
            lastUpdated: "01/07/2023",
            count: 1
        },
        {
            id: 5,
            title: "Compliance in the Cloud",
            description: "Understand how to meet regulatory requirements on AWS.",
            category: "Category 01",
            docType: "Website",
            dateCreated: "01/18/2023",
            lastUpdated: "01/03/2023",
            count: 4
        },
        {
            id: 6,
            title: "DevOps on AWS",
            description: "Accelerate your software delivery with DevOps tools.",
            category: "Category 06",
            docType: "Video",
            dateCreated: "01/22/2023",
            lastUpdated: "01/09/2023",
            count: 1
        },
        {
            id: 7,
            title: "Data Analytics Essentials",
            description: "Unlock insights from your data with AWS analytics services.",
            category: "Category 05",
            docType: "Document",
            dateCreated: "01/08/2023",
            lastUpdated: "01/03/2023",
            count: 1
        },
        {
            id: 8,
            title: "Scaling Your Business on AWS",
            description: "Learn how to scale applications and infrastructure efficiently.",
            category: "Category 04",
            docType: "Website",
            dateCreated: "01/13/2023",
            lastUpdated: "01/06/2023",
            count: 1
        },
        {
            id: 9,
            title: "Cloud Security Best Practices",
            description: "Learn essential strategies to protect your cloud workloads.",
            category: "Category 03",
            docType: "Video",
            dateCreated: "01/08/2023",
            lastUpdated: "01/03/2023",
            count: 1
        },
        {
            id: 10,
            title: "Cost Optimization Tips",
            description: "Explore ways to control and reduce your AWS spend.",
            category: "Category 02",
            docType: "Website",
            dateCreated: "01/13/2023",
            lastUpdated: "01/06/2023",
            count: 3
        },
    ]);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    /* ================= ROW REORDER LOGIC ================= */
    const onRowReorder = (e) => {
        setFileList(e.value);
    };

    /* ================= HELPERS ================= */
    const getDocIcon = (type) => {
        if (type === "Audio") return "/images/audio-square.svg";
        if (type === "Video") return "/images/video-square.svg";
        if (type === "Website") return "/images/global-table.svg";
        return "/images/document-text-table.svg";
    };

    const docTypeTemplate = (rowData) => {
        return (
            <div className="flex items-center gap-2">
                <Image src={getDocIcon(rowData.docType)} alt={rowData.docType} width={24} height={24} />
                <span className="text-[#6480AB] font-medium">
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
                <Image src="/images/eye-white-bg.svg" width={20} height={20} alt="View" className="inline-block" />
            </button>
        </div>
    );

    // TEMPLATE: Title + Reorder Icon
    const titleBodyTemplate = (rowData) => {
        return (
            <div className="flex items-center gap-2">
                {/* Custom Reorder Handle inside Title Column */}
                <Image
                    src="/images/reorder-icon.svg"
                    alt="Reorder"
                    width={14}
                    height={14}
                    className="p-datatable-reorderablerow-handle cursor-move opacity-50 hover:opacity-100"
                />
                <span className="font-medium">{rowData.title}</span>
            </div>
        );
    };

    /* ================= GRID ITEM CARD ================= */
    const renderGridItem = (product) => {
        return (
            <div key={product.id} className="p-2">
                <div className="border border-gray-200 rounded-lg p-3 bg-white h-full hover:shadow-md transition-shadow flex flex-col relative">

                    {/* Header: Category + Menu */}
                    <div className="flex justify-between items-start mb-3">
                        <span className="bg-gray-100 text-gray-500 text-[10px] uppercase font-bold px-2 py-1 rounded">
                            {product.category}
                        </span>

                        <button
                            className="text-gray-400 hover:text-gray-600 cursor-pointer bg-transparent border-none"
                            onClick={() => {
                                setSelectedProduct(product);
                                setVisibleRight(true);
                            }}
                        >
                            <i className="pi pi-ellipsis-v text-xs"></i>
                        </button>
                    </div>

                    {/* Content: Icon + Title */}
                    <div className="flex items-start gap-2 mb-6">
                        <Image
                            src={getDocIcon(product.docType)}
                            alt={product.docType}
                            width={20}
                            height={20}
                            className="mt-1 shrink-0"
                        />
                        <div className="text-blue-600 font-semibold text-sm leading-snug break-words">
                            {product.title}
                            <span className="text-gray-400 font-normal ml-1">({product.count || 1})</span>
                        </div>
                    </div>

                    {/* Metadata Details */}
                    <div className="mt-auto flex flex-col gap-2">
                        <div className="text-[11px] flex flex-col">
                            <span className="text-gray-400 font-normal mb-0.5">Date Created :</span>
                            <span className="text-gray-700 font-medium">{product.dateCreated}</span>
                        </div>
                        <div className="text-[11px] flex flex-col">
                            <span className="text-gray-400 font-normal mb-0.5">Last Updated Date :</span>
                            <span className="text-gray-700 font-medium">{product.lastUpdated}</span>
                        </div>
                        <div className="text-[11px] flex flex-col">
                            <span className="text-gray-400 font-normal mb-0.5">Category :</span>
                            <span className="text-gray-900 font-bold">{product.category.split(' ')[0]} <span className="text-gray-900 font-bold">{product.category.split(' ')[1]}</span></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    /* ================= DATATABLE FILTERS ================= */
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

    const filterInput = (options, placeholder = "") => (
        <InputText
            value={options.value || ""}
            onChange={(e) => options.filterApplyCallback(e.target.value)}
            placeholder={placeholder}
            className="p-inputtext-sm w-full custom-input1"
        />
    );

    // Get current page data for the Grid View
    const currentGridData = fileList.slice(first, first + rows);

    return (
        <div className="border border-interfacetextdefault shadow-sm rounded-lg m-10 mt-4 bg-white relative min-h-[600px] flex flex-col">

            {/* ================= TOP HEADER ================= */}
            <div className="p-4 flex flex-col md:flex-row justify-between items-center pb-0">
                {/* Left */}
                <div className="flex gap-2 items-center pb-4 md:pb-0">
                    <div className="font16 text-InterfaceTexttitle1 font-semibold">
                        All Files
                    </div>
                    <div className="text-InterfaceTextsubtitle font12">
                        ({fileList.length} Products)
                    </div>
                </div>

                {/* Right Toggle Buttons */}
                <div className="flex gap-2 items-center pb-4 md:pb-0">
                    <button
                        onClick={() => setIsGridView(true)}
                        className={`p-2 rounded cursor-pointer border-none transition-colors flex items-center justify-center ${isGridView ? 'bg-purple-100 text-purple-600' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                        title="Grid View"
                    >
                        <Image src={isGridView ? "/images/pi-th-large-bold.svg" : "/images/pi-th-large.svg"} alt="Grid" width={18} height={18} className={isGridView ? "" : "opacity-60"} />
                    </button>
                    <button
                        onClick={() => setIsGridView(false)}
                        className={`p-2 rounded cursor-pointer border-none transition-colors flex items-center justify-center ${!isGridView ? 'bg-purple-100 text-purple-600' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                        title="List View"
                    >
                        <Image src={!isGridView ? "/images/grid-1-bold.svg" : "/images/grid-1.svg"} alt="List" width={18} height={18} className={!isGridView ? "" : "opacity-60"} />
                    </button>
                    {/* List Icon (Mapped to List View) */}
                    {/* <button
                        onClick={() => setIsGridView(false)}
                        className={`p-2 ml-1 rounded cursor-pointer border-none transition-colors flex items-center justify-center ${!isGridView ? 'bg-purple-100 text-purple-600' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                    >
                        <i className="pi pi-list" style={{ fontSize: '1.1rem' }}></i>
                    </button> */}
                </div>
            </div>

            {/* ================= CONTENT AREA ================= */}
            <div className="flex-grow">
                {isGridView ? (
                    // GRID VIEW
                    <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                            {currentGridData.map((item) => renderGridItem(item))}
                        </div>
                    </div>
                ) : (
                    // LIST VIEW: DataTable
                    <DataTable
                        value={fileList}
                        stripedRows
                        rows={10}
                        className="custTable mt-4 custfiltericon"
                        responsiveLayout="scroll"
                        filters={filters}
                        onFilter={(e) => setFilters(e.filters)}
                        filterDisplay="row"
                        paginator={false}
                        first={first}
                        reorderableRows={true} // Enable Row Reordering
                        onRowReorder={onRowReorder}
                    >
                        {/* 
                           Title Column with Embedded Reorder Icon
                           - No extra column.
                           - The 'p-datatable-reorderablerow-handle' class on the Image makes it draggable.
                        */}
                        <Column
                            field="title"
                            header="Title" 
                            sortable
                            filter
                            filterElement={(o) => filterInput(o)}
                            body={titleBodyTemplate} // Uses the custom template defined above
                        />

                        <Column field="description" header="Description" filter filterElement={(o) => filterInput(o, "Abc")} body={(r) => <span>{r.description}</span>} />
                        <Column field="category" header="Category" filter filterElement={(o) => filterInput(o)} body={(r) => <span>{r.category}</span>} />
                        <Column field="docType" header="Document Type" filter filterElement={(o) => filterInput(o)} body={docTypeTemplate} />
                        <Column field="dateCreated" header="Date Created"  filter filterElement={(o) => filterInput(o)} body={(r) => <span>{r.dateCreated}</span>} />
                        <Column field="lastUpdated" header="Last Updated" filter filterElement={(o) => filterInput(o)} body={(r) => <span>{r.lastUpdated}</span>} />
                        <Column header="Action" body={actionBodyTemplate} align="center" frozen />
                    </DataTable>
                )}
            </div>

            {/* ================= BOTTOM PAGINATOR ================= */}
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


            <ViewFileDetails
                visible={visibleRight}
                onHide={() => setVisibleRight(false)}
                data={selectedProduct}
            />
        </div>
    );
};