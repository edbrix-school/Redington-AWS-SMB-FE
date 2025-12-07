"use client";

import React, { useState } from "react";
import { BreadCrumb } from "primereact/breadcrumb";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function BreadcrumbBar({ selectedSector, count, onBack }) {
  // When no sector selected → show only "All Sectors"
  const home = {
    label: "All Sectors",
    template: () => (
      <button
        onClick={onBack}
        className={` border-t border-t-[3px] border-[#8078b9] rounded-sm cursor-pointer 
        ${
          selectedSector
            ? "text-interface-text-subtitle font-normal"
            : "text-interface-text-title font-semibold"
        }
      `}
      >
        All Sectors
      </button>
    ),
  };

  // When sector selected → show breadcrumb: All Sectors › Selected(Count)
  const items = selectedSector
    ? [
        {
          label: selectedSector,
          template: () => (
            <p className="text-interface-text-subtitle font-medium cursor-pointer">
              {selectedSector}{" "}
              <span className="text-interface-text-title">({count})</span>
            </p>
          ),
        },
      ]
    : [];
  const [selectedOrderBy, setSelectedOrderBy] = useState(null);
  const orderBy = [
    { name: "Relevance", code: "123" },
    { name: "Item2", code: "345" },
  ];
  return (
    <div className="flex items-center justify-between pb-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <BreadCrumb className="customBreadcrumbs" model={items} home={home} />
      </div>
      <div className="flex  items-center justify-end gap-3">
        {/* Order by */}
        <Dropdown
          value={selectedOrderBy}
          onChange={(e) => setSelectedOrderBy(e.value)}
          options={orderBy}
          optionLabel="name"
          placeholder="Order By: Relevance"
          className="customDropdown w-[177px] xl:w-[180px] 2xl:w-[180px] 3xl:w-[9.471vw] border border-[#E4E4E4] text-interface-text-default font12 font-normal"
        />

        {/* Right search (in-header) */}
        <div className="p-inputgroup flex-1 hidden items-center rounded-lg px-3 py-2 text-[12px] text-interface-text-subtitle md:flex">
          <Button icon="pi pi-search" className="customSearchButton" />
          <InputText
            placeholder="Search..."
            className="customInputText text-interface-text-default font12 font-normal"
          />
        </div>
      </div>
    </div>
  );
}
