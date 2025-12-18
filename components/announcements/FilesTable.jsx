"use client";
import Image from "next/image";
import Link from "next/link";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Paginator } from "primereact/paginator";
import { Menu } from "primereact/menu";
import React, { useState, useRef } from "react";
import { ViewAnnouncements } from "./popup/ViewAnnouncements";
import Filter from "./popup/Filter";

export const FilesTable = () => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  // Filter Popup State
  const [openFilter, setOpenFilter] = useState(false);

  // View Details State
  const [visibleRight, setVisibleRight] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Ref for the Menu
  const menu = useRef(null);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  // Menu Items logic
  const menuItems = [
    {
      template: (item, options) => (
        <div
          onClick={(e) => {
            setVisibleRight(true);
            options.onClick(e);
          }}
          className="flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md hover:bg-gray-50"
        >
          <i className="pi pi-eye text-gray-700 text-sm"></i>
          <span className="text-gray-700 text-sm">View</span>
        </div>
      ),
    },
  ];

  const announcementList = [
    {
      id: 1,
      date: "03/03/2025",
      type: "General",
      message: "System maintenance scheduled on March 5th...",
    },
    {
      id: 2,
      date: "03/03/2025",
      type: "General",
      message: "New employee recognition program launched...",
    },
    {
      id: 3,
      date: "03/03/2025",
      type: "Campaign",
      message: "Updated company leave policy is now live...",
    },
    {
      id: 4,
      date: "03/03/2025",
      type: "Campaign",
      message: "System maintenance scheduled on March 5th...",
    },
    {
      id: 5,
      date: "03/03/2025",
      type: "Social Campaign",
      message: "New employee recognition program launched...",
    },
    {
      id: 6,
      date: "03/03/2025",
      type: "Social Campaign",
      message: "Updated company leave policy is now live...",
    },
    {
      id: 7,
      date: "03/03/2025",
      type: "Campaign",
      message: "System maintenance scheduled on March 5th...",
    },
    {
      id: 8,
      date: "03/03/2025",
      type: "Campaign",
      message: "New employee recognition program launched...",
    },
    {
      id: 9,
      date: "03/03/2025",
      type: "Social Campaign",
      message: "Updated company leave policy is now live...",
    },
    {
      id: 10,
      date: "03/03/2025",
      type: "Social Campaign",
      message: "System maintenance scheduled on March 5th...",
    },
  ];

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
    date: { value: null, matchMode: "contains" },
    type: { value: null, matchMode: "contains" },
    message: { value: null, matchMode: "contains" },
  });

  const [globalFilter, setGlobalFilter] = useState("");

  const HeaderWithMenu = ({ title }) => {
    return (
      <div className="header-menu flex items-center justify-between w-full">
        <span className="text-interfacetextdefault2 font-medium">{title}</span>
        <div className="smb-more text-interfacetextdefault2 font12 flex justify-end cursor-pointer"></div>
      </div>
    );
  };

  const filterInput = (options) => {
    return (
      <InputText
        value={options.value || ""}
        onChange={(e) => options.filterApplyCallback(e.target.value)}
        placeholder="Search"
        className="p-inputtext-sm w-full custom-input1"
      />
    );
  };

  return (
    <div className="mx-[4.167vw] border border-interfacetextdefault shadow-lg rounded8 m-10 mt-4 bg-white relative">
      <Menu model={menuItems} popup ref={menu} id="popup_menu" />

      {/* --- UPDATED HEADER SECTION --- */}
      <div className="p15 flex flex-col md:flex-row justify-between items-center pb-0">
        {/* Left Side: Title & Count */}
        <div className="flex gap8 items-center pb22 md:pb-0">
          <div className="font16 text-InterfaceTexttitle1 font-semibold mr-2">
            All Announcements
          </div>
          <div className="text-InterfaceTextsubtitle font12">
            (Showing 10/100 Records)
          </div>
        </div>

        {/* Right Side: Search Bar & Filter Button */}
        <div className="flex gap-3 items-center pb22 md:pb-0">
          {/* Search Bar - Replica of Screenshot */}
          <div className="relative">
            <img
              src="/images/search-normal-2.svg"
              alt="search"
              width={16}
              height={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
            />
            <InputText
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="Search"
              className="p-inputtext-sm pl-10 text-gray-600 w-64 announcements-search"
            />
          </div>

          {/* Filter Button */}
          <div
            onClick={() => setOpenFilter(true)}
            className="cursor-pointer h-10 w36 flex items-center justify-center text-center border border-InterfaceStrokedefault bg-interfacesurfacecomponentmuted rounded-md hover:bg-[#ebeff3]"
          >
            <i className="smb-filter text-InterfaceTextsubtitle font14"></i>
          </div>
        </div>
      </div>
      {/* --- END HEADER SECTION --- */}

      <DataTable
        value={announcementList}
        stripedRows
        rows={10}
        className="custTable tableCustRed mt-4 custfiltericon" // Added mt-4 for spacing
        responsiveLayout="scroll"
        scrollable
        style={{ width: "100%" }}
        filters={filters}
        globalFilter={globalFilter}
        onFilter={(e) => setFilters(e.filters)}
        filterDisplay="row"
        emptyMessage={
          <div className="flex justify-center p-4">No Data Available.</div>
        }
      >
        <Column
          field="date"
          header="Notification Date"
          style={{ minWidth: "12rem" }}
          filter
          sortable
          filterElement={filterInput}
          body={(rowData) => (
            <span className="text-gray-700 font-medium">{rowData.date}</span>
          )}
        />

        <Column
          field="type"
          header="Announcement Type"
          style={{ minWidth: "14rem" }}
          filter
          sortable
          filterElement={filterInput}
          body={(rowData) => (
            <span className="text-gray-700">{rowData.type}</span>
          )}
        />

        <Column
          field="message"
          header="Announcement"
          style={{ minWidth: "25rem" }}
          filter
          sortable
          filterElement={filterInput}
          body={(rowData) => (
            <span className="text-gray-600 text-sm">{rowData.message}</span>
          )}
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
          filterElement={() => <div className="w-full"></div>}
        />
      </DataTable>

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

      <ViewAnnouncements
        visible={visibleRight}
        onHide={() => setVisibleRight(false)}
        data={selectedProduct}
      />
      <Filter visible={openFilter} onHide={() => setOpenFilter(false)} />
    </div>
  );
};
