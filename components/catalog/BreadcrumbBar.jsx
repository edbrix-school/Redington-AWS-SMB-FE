"use client";

import React from "react";
import { BreadCrumb } from "primereact/breadcrumb";
import Image from "next/image";

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

  return (
    <div className="flex items-center justify-between pb-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <BreadCrumb className="customBreadcrumbs" model={items} home={home} />
      </div>
      <div className="flex flex-1 items-center justify-end gap-3">
        {/* Order by */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg border border-[#E4E4E4] bg-white px-3 py-2 text-[12px] text-interface-text-default"
        >
          <span>Order By: Relevance</span>
          <Image
            src="/assets/icons/arrowright2.svg"
            alt="Chevron down"
            width={14}
            height={14}
          />
        </button>

        {/* Right search (in-header) */}
        <div className="hidden items-center gap-2 rounded-lg border border-[#E4E4E4] bg-white px-3 py-2 text-[12px] text-interface-text-subtitle md:flex">
          <Image
            src="/assets/icons/search-outline.svg"
            alt="Search"
            width={14}
            height={14}
          />
          <input
            type="text"
            placeholder="search..."
            className="w-32 border-none bg-transparent text-[12px] text-interface-text-title placeholder:text-interface-text-subtitle focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
