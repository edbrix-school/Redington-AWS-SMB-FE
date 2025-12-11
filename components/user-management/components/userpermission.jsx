"use client";
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { Sidebar } from "primereact/sidebar";
import { Roboto } from "next/font/google";
import Image from "next/image";
// import { FiPlus, FiMinus } from "react-icons/fi";



const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});
export default function PermissionTable({ visible, onHide }) {
  const [rows, setRows] = useState([
    {
      id: 1,
      title: "Home Page",
      permissions: { read: true, create: false, edit: false, delete: true, download: true },
      expanded: false,
    },
    {
      id: 2,
      title: "Account Management",
      permissions: { read: true, create: true, edit: true, delete: true, download: true },
      expanded: false,
    },
    {
      id: 3,
      title: "Brand Management",
      permissions: { read: true, create: false, edit: false, delete: true, download: true },
      expanded: false,
    },
    {
      id: 4,
      title: "Order Management",
      permissions: { read: true, create: true, edit: true, delete: true, download: true },
      expanded: false,
    },
    {
      id: 5,
      title: "Catalog",
      permissions: { read: true, create: false, edit: false, delete: false, download: true },
      expanded: false,
    },
    {
      id: 6,
      title: "Settings",
      permissions: { read: true, create: false, edit: true, delete: false, download: false },
      expanded: false,
    },
    {
      id: 7,
      title: "Help Center",
      permissions: { read: true, create: false, edit: false, delete: false, download: true },
      expanded: false,
    },
    {
      id: 8,
      title: "Notifications",
      permissions: { read: true, create: true, edit: true, delete: false, download: false },
      expanded: false,
    },
    {
      id: 9,
      title: "Activity Log",
      permissions: { read: true, create: false, edit: false, delete: false, download: true },
      expanded: false,
    },
    {
      id: 10,
      title: "Analytics",
      permissions: { read: false, create: false, edit: false, delete: false, download: true },
      expanded: false,
    },
    {
      id: 11,
      title: "Quick Order",
      permissions: { read: true, create: true, edit: true, delete: true, download: true },
      expanded: false,
    },
  ]);

  const toggleExpand = (id) => {
    setRows((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, expanded: !r.expanded } : r
      )
    );
  };

  const togglePermission = (id, perm) => {
    setRows((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, permissions: { ...r.permissions, [perm]: !r.permissions[perm] } }
          : r
      )
    );
  };

  return (
     <Sidebar
            visible={visible}
            position="right"
            className="!w-[500px] lg:!w-[500px] xl:!w-[550px] 2xl:!w-[35.396vw] 3xl:!w-[32.396vw] customsidebar2 bg-[#F6F7F8] rounded8"
            onHide={onHide}
            dismissable={true}
            blockScroll={true}
          >

<div className="flex flex-col h-full">  


 <div className="border-top-left-radius: 1rem flex-none">
          <div className=" bg-[#fff] dark:bg-[#111928] p24 rounded-tl rounded8">
            <div className=" text-InterfaceTexttitle1  text-[22px] xl:text-[22px] 3xl:text-[1.146vw] font-semibold">
             User Access and Permission
            </div>
          </div>
        </div>

    <div className={`${roboto.variable } p24 bg-[#f5f5f5] flex-1 overflow-y-auto`}>
        
      <table className="w-full border-collapse font14 shadow-sm rounded6 overflow-hidden bg-[#fff]">
        <thead className="bg-[#E5E7EB] ">
          <tr>
            <th className="py12 px20 text-left w-60 text-[#212325]">Items</th>
            <th className="py12 px12 text-center text-[#212325]">Read</th>
            <th className="py12 px12 text-center text-[#212325]">Create</th>
            <th className="py12 px12 text-center text-[#212325]">Edit</th>
            <th className="py12 px12 text-center text-[#212325]">Delete</th>
            <th className="py12 px20 text-center text-[#212325]">Download</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <>  
            
            <tr className="border-b border-InterfaceStrokesoft1">
              <td className="p-3 flex items-center gap-2">
                <span
                  onClick={() => toggleExpand(row.id)}
                  className="cursor-pointer text-gray-600"
                >
                  {row.expanded ?  <Image
                                            src={"/images/add.svg"}
                                            width={20}
                                            height={20}
                                            alt="edit"
                                            className="w18 h-auto cursor-pointer"
                                          /> :  <Image
                                            src={"/images/add.svg"}
                                            width={20}
                                            height={20}
                                            alt="edit"
                                            className="w18 h-auto cursor-pointer"
                                          />
                                          
                                          }
                </span>
                {row.title}
              </td>

              {["read", "create", "edit", "delete", "download"].map((perm) => (
                <td key={perm} className="p-3 text-center">
                  <Checkbox
                    checked={row.permissions[perm]}
                    onChange={() => togglePermission(row.id, perm)}
                    className="cursor-pointer customcheckox"
                  />
                </td>
              ))}
            </tr>

            {/* Expanded Row Content */}
            {row.expanded && (
              <tr className="bg-[#FAFAFA] border-b border-InterfaceStrokesoft1">
                <td colSpan={6} className="p-4 text-gray-600 text-sm">
                  Additional details for <strong>{row.title}</strong> can be shown here.
                </td>
              </tr>
            )}
             </>
            
          ))}
        </tbody>
      </table>
    </div>
    <div className="flex-none bg-[#fff] flex justify-end gap-4 rounded-bl-[10px]">
          <div className=" p-[16px] xl:p-[16px] 3xl:p-[0.833vw] flex justify-end gap-4 rounded-bl-[10px]">
            <div className=" text-[#2C363F]  cancel-btn border-solid border border-[#C9D3DB]  rounded8 py6 px12 flex items-center justify-center cursor-pointer hover:bg-[#f6f6f7]">
             
                Cancel
             
            </div>

            <div
              onClick={() => setShow(true)}
              className="font14 py6 px14 font-[500] border-solid border-2  rounded-lg  submit-btn cursor-pointer  text-[#fff] bg-[#645592] hover:bg-[#534880]"
            >
              Submit
            </div>
          </div>
        </div>
</div>
          </Sidebar>
  );
}
