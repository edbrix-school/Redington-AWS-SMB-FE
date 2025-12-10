"use client";
import Image from "next/image";
import Link from "next/link";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Paginator } from "primereact/paginator";
import React, { useState } from "react";

export default function Tabel() {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const workspacelist = [
    {
      FirstName: "Bessie ",
      LastName: "Cooper",
      MobileNumber: "+971 50 111 11111",
      Email: "will.s@outlook.com",
      Role: "Admin",
      Status: "Active",
      AuthorizedSignatory: "Yes",
    },
    {
      FirstName: "Bessie ",
      LastName: "Cooper",
      MobileNumber: "+971 50 111 11111",
      Email: "will.s@outlook.com",
      Role: "Admin",
      Status: "Active",
      AuthorizedSignatory: "Yes",
    },
    {
      FirstName: "Bessie ",
      LastName: "Cooper",
      MobileNumber: "+971 50 111 11111",
      Email: "will.s@outlook.com",
      Role: "Admin",
      Status: "Active",
      AuthorizedSignatory: "Yes",
    },
    {
      FirstName: "Bessie ",
      LastName: "Cooper",
      MobileNumber: "+971 50 111 11111",
      Email: "will.s@outlook.com",
      Role: "Admin",
      Status: "Active",
      AuthorizedSignatory: "Yes",
    },
    {
      FirstName: "Bessie ",
      LastName: "Cooper",
      MobileNumber: "+971 50 111 11111",
      Email: "will.s@outlook.com",
      Role: "Admin",
      Status: "Active",
      AuthorizedSignatory: "Yes",
    },
    {
      FirstName: "Bessie ",
      LastName: "Cooper",
      MobileNumber: "+971 50 111 11111",
      Email: "will.s@outlook.com",
      Role: "Admin",
      Status: "Active",
      AuthorizedSignatory: "Yes",
    },
  ];

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex justify-center items-center gap-[16px] xl:gap-[0.833vw] w-full">
        <Link
          href={`/common/supportgroup/edit`}
          title="Edit"
          className="cursor-pointer"
        >
          <Image src={"/images/more.svg"} width={20} height={20} alt="edit" />
        </Link>
      </div>
    );
  };

  // 🔥 Filters state
  const [filters, setFilters] = useState({
    BrandCategory: { value: null, matchMode: "contains" },
    SalesContactName: { value: null, matchMode: "contains" },
    EmailAddress: { value: null, matchMode: "contains" },
    ContactNumber: { value: null, matchMode: "contains" },
  });
  const HeaderWithMenu = ({ title }) => {
    return (
      <div className="header-menu flex items-center justify-between w-full">
        <span className="text-interfacetextdefault2">{title}</span>
        <div className="smb-more text-interfacetextdefault2  font12 flex justify-end cursor-pointer"></div>
      </div>
    );
  };

  // 🔥 Common filter input template
  const filterInput = (options) => {
    return (
      <InputText
        value={options.value || ""}
        onChange={(e) => options.filterApplyCallback(e.target.value)}
        placeholder="Search"
        className="p-inputtext-sm w-full custom-input"
      />
    );
  };

  return (
    <div className="border border-interfacetextdefault shadow-lg rounded8 m-10 mt-4">
      <div className="p15">
        <div className="flex gap-[4px] items-center pb-6">
          <div className="font16 text-InterfaceTexttitle1 font-semibold">
            All Announcements
          </div>
          <div className="text-InterfaceTextsubtitle font12">
            (Showing 10/100 Records)
          </div>
        </div>
        <div className="flex justify-between py10">
          <div className="flex gap14 ">
            <button className="bg-BrandNeutralpure cursor-pointer py6 px14 font14 text-InterfaceSurfacecomponent rounded20 flex items-center gap-[4px] xl:gap-[4px] 3xl:gap-[0.26vw]">
              <Image
                src="/images/user-add.svg"
                width={16}
                height={16}
                alt="adduser"
                className="inline-block "
              />
              Add New User
            </button>
            <button className="bg-BrandNeutralpure cursor-pointer py6 px14 font14 text-InterfaceSurfacecomponent rounded20 flex items-center gap-[4px] xl:gap-[4px] 3xl:gap-[0.26vw]">
              <Image
                src="/images/import.svg"
                width={16}
                height={16}
                alt="adduser"
                className="inline-block "
              />
              Download
            </button>
          </div>
          <div className="flex gap20">
            <div>
              <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select Year/Month"
                className="w300 custDropdown1 "
                panelClassName="custDropdown1panel"
              />
            </div>
            <div className=" cursor-pointer h-full w36 flex items-center justify-center text-center border border-InterfaceStrokedefault bg-interfacesurfacecomponentmuted rounded8">
              <i className="smb-filter text-InterfaceTextsubtitle font12 "></i>
            </div>
          </div>
        </div>
      </div>
      <DataTable
        value={workspacelist}
        stripedRows
        rows={10}
        className="custTable tableCustRed custCheckBox custicon custTablegroup "
        responsiveLayout="scroll"
        style={{ width: "100%" }}
        filters={filters}
        scrollable
        onFilter={(e) => setFilters(e.filters)}
        filterDisplay="row"
        emptyMessage={
          <div className="flex justify-center">No Data Available.</div>
        }
      >
        <Column
          field="FirstName"
          header={<HeaderWithMenu title="First Name" />}
          style={{ minWidth: "11rem" }}
          filter
          filterElement={filterInput}
        />

        <Column
          field="LastName"
          header={<HeaderWithMenu title="Last Name" />}
          style={{ minWidth: "10rem" }}
          filter
          filterElement={filterInput}
        />

        <Column
          field="MobileNumber"
          header={<HeaderWithMenu title="Mobile Number" />}
          style={{ minWidth: "12rem" }}
          filter
          filterElement={filterInput}
        />

        <Column
          field="Email"
          header={<HeaderWithMenu title="Email" />}
          style={{ minWidth: "10rem" }}
          filter
          filterElement={filterInput}
        />
        <Column
          field="Role"
          header={<HeaderWithMenu title="Role" />}
          style={{ minWidth: "10rem" }}
          filter
          filterElement={filterInput}
        />
        <Column
          field="Status"
          header={<HeaderWithMenu title="Status" />}
          style={{ minWidth: "10rem" }}
          filter
          filterElement={filterInput}
        />
        <Column
          field="AuthorizedSignatory"
          header={<HeaderWithMenu title="Authorized Signatory" />}
          style={{ minWidth: "13rem" }}
          filter
          filterElement={filterInput}
        />
        <Column
          field="Action"
          header="Action"
          style={{ minWidth: "3rem" }}
          className="action-shadow-table"
          alignFrozen="right"
          align="center"
          frozen
          body={actionBodyTemplate}
          filterElement={filterInput}
        />
      </DataTable>
      <div className="relative custTablePaginator">
        <Paginator
          template="CurrentPageReport RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
          currentPageReportTemplate={`Row per page of 100`}
          first={first}
          rows={rows}
          onPageChange={onPageChange}
          totalRecords={100}
        />
      </div>
    </div>
  );
}
