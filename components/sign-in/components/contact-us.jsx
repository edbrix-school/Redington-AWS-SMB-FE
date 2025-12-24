
"use client";
import React from "react";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Link from "next/link";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";


export default function ContactUs({ visible, onHide }) {
  const workspacelist = [
    {
      BrandCategory: "AWS",
      SalesContactName: "Jane Cooper",
      EmailAddress: "bill.sanders@example.com",
      ContactNumber: "+971 555-0112",
    },
    {
      BrandCategory: "Commercial Market Place",
      SalesContactName: "Jane Cooper",
      EmailAddress: "bill.sanders@example.com",
      ContactNumber: "+971 555-0112",
    },
    {
      BrandCategory: "AWS",
      SalesContactName: "Jane Cooper",
      EmailAddress: "bill.sanders@example.com",
      ContactNumber: "+971 555-0112",
    },
    {
      BrandCategory: "Software Perpetual",
      SalesContactName: "Jane Cooper",
      EmailAddress: "bill.sanders@example.com",
      ContactNumber: "+971 555-0112",
    },
    {
      BrandCategory: "AWS",
      SalesContactName: "Jane Cooper",
      EmailAddress: "debbie.baker@example.com",
      ContactNumber: "+971 555-0112",
    },
    {
      BrandCategory: "AWS",
      SalesContactName: "Jane Cooper",
      EmailAddress: "bill.sanders@example.com",
      ContactNumber: "+971 555-0112",
    },
     {
      BrandCategory: "Software Perpetual",
      SalesContactName: "Jane Cooper",
      EmailAddress: "bill.sanders@example.com",
      ContactNumber: "+971 555-0112",
    },
     {
      BrandCategory: "Software Perpetual",
      SalesContactName: "Jane Cooper",
      EmailAddress: "bill.sanders@example.com",
      ContactNumber: "+971 555-0112",
    },
     {
      BrandCategory: "AWS",
      SalesContactName: "Jane Cooper",
      EmailAddress: "bill.sanders@example.com",
      ContactNumber: "+971 555-0112",
    }, {
      BrandCategory: "AWS",
      SalesContactName: "Jane Cooper",
      EmailAddress: "bill.sanders@example.com",
      ContactNumber: "+971 555-0112",
    },
  ];

  return (
    <div>
      <Sidebar
        visible={visible}
        position="right"
        className="!w-[500px] lg:!w-[500px] xl:!w-[750px] 2xl:!w-[45.396vw] customsidebar2 bg-[#F6F7F8] rounded8"
        onHide={onHide}
        blockScroll={true}
        
      >
        <div className="flex flex-col h-full"> 

        <div className="border-top-left-radius: 1rem flex-none">
          <div className=" bg-[#fff] dark:bg-[#111928] p-[24px] xl:p-[24px] 3xl:p-[1.25vw] rounded-tl-[10px]">
            <div className=" text-InterfaceTexttitle1  text-[22px] xl:text-[22px] 3xl:text-[1.146vw] font-semibold">
              Redington Sales Contacts
            </div>
          </div>
        </div>
        <div className="bg-[#F6F7F8] dark:bg-[#1F2A37] flex-1 overflow-y-auto">
          <div className="">
            <div className="p-[24px] xl:p-[24px] 3xl:p-[1.25vw] space-y-[22px]">
              <DataTable
                value={workspacelist}
                stripedRows 
                className="custTable tableCustRed custCheckBox custicon custTablegroup border border-[#f0f0f0] rounded8 shadow-lg"
                responsiveLayout="scroll"
                style={{ width: "100%" }}
                rows={10}
                dataKey="id"
                emptyMessage={
                  <div className="flex justify-center">No Data Available.</div>
                }
              >
                <Column
                  field="BrandCategory"
                  header="Brand Category"
                  style={{ minWidth: "11rem" }}
                ></Column>
                <Column
                  field="SalesContactName"
                  header="Sales Contact Name"
                  style={{ minWidth: "10rem" }}
                ></Column>
                <Column
                  field="EmailAddress"
                  header="Email Address"
                  style={{ minWidth: "12rem" }}
                ></Column>
                <Column
                  field="ContactNumber"
                  header="Contact Number"
                  style={{ minWidth: "10rem" }}
                ></Column>
              </DataTable>
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-0 right-0 left-0 flex-none">
          <div className="bg-[#fff] dark:bg-[#111928] p-[16px] xl:p-[16px] 3xl:p-[0.833vw] flex justify-end gap-4 rounded-bl-[10px]">
            <div className=" text-[#2C363F] dark:text-[#E0E3E9] cancleBg border-solid border border-[#C9D3DB] dark:border-[#374151] rounded-lg py-[6px] px-[12px] xl:px-[12px] 3xl:px-[0.625vw]  cursor-pointer hover:bg-[#f6f6f7]">
              <Link onClick={onHide} href={""}>
                Cancel
              </Link>
            </div>

            <div
              onClick={() => setShow(true)}
              className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] py-[6px] px-[12px] xl:px-[12px] 3xl:px-[0.625vw] border-solid border-2 border-[#3862ce] rounded-lg bg-[#3D65C9] dark:bg-[#1570EF]  cursor-pointer hover:bg-[#3B59BA] text-[#fff]"
            >
              Next
            </div>
          </div>
        </div> */}
        </div>
      </Sidebar>
    </div>
  );
}
