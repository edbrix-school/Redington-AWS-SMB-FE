"use client";

import Image from "next/image";
import { useState } from "react";

const INDUSTRY_SECTORS = [
  "Advertising & Marketing",
  "Aerospace & Satellite",
  "Agriculture",
  "Automotive",
  "Consumer Packaged Goods",
  "Education",
  "Energy & Utilities",
  "Engineering, Construction & Real Estate",
  "Financial Services",
];

const TABS = ["By Industry", "By Use Case", "By Organization Type"];

export default function CatalogSidebar({ selectedSector, onSectorSelect }) {
  const [activeTab, setActiveTab] = useState("By Industry");

  return (
    <aside className="w-full shrink-0 border-b border-neutral-200 bg-white px-4 pb-4 pt-4 xs:px-5 lg:h-full lg:w-[400px] lg:border-b-0 lg:border-r lg:px-6 lg:pb-6 lg:pt-6">
      {/* Logos row (placeholder – plug your actual brand logos here) */}
      <div className="flex items-center gap-2">
        {/* Replace with Image components for Redington / AWS logos as needed */}
        {/* <span className="rounded-md bg-catalog-search-gradient px-2 py-1 text-[18px] font-semibold text-interface-text-title">
          Redington | AWS
        </span> */}
        <Image
          src="/assets/icons/catalog-img.svg"
          alt="Search"
          width={150}
          height={150}
        />
      </div>

      {/* Catalog heading */}
      <h2 className="mt-4 font-nunito text-[32px] leading-[1] text-interface-text-default">
        Catalog
      </h2>

      {/* Figma ipsum text */}
      <p className="mt-3 max-w-xs font-inter text-[12px] leading-[18px] tracking-[-0.02em] text-interface-text-subtitle">
        Figma ipsum component variant main layer. Pen line scale layer variant
        export subtract shadow arrange outline. Project.
      </p>

      {/* Search bar */}
      <div className="mt-4">
        <label className="sr-only" htmlFor="catalog-search">
          Search catalog
        </label>

        <div className="flex items-center gap-2 border-[1px solid var(--Interface-Stroke-soft, #E5E7EB)]  bg-[linear-gradient(90.85deg,rgba(255,233,67,0.22)_5.05%,rgba(67,219,62,0.22)_97.08%)] p-[1px]">
          <div className="flex w-full items-center gap-2  px-3 py-1">
            <Image
              src="/assets/icons/search-outline.svg"
              alt="Search"
              width={25}
              height={25}
            />
            <input
              id="catalog-search"
              type="text"
              placeholder="Search"
              className="w-full border-none bg-transparent text-[15px] text-interface-text-title placeholder:text-interface-text-subtitle focus:outline-none"
            />
            <Image
              src="/assets/icons/i24support.svg"
              alt="Search"
              width={25}
              height={25}
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-4 flex flex-wrap gap-1 bg-[#F5F6F7] border-[#E5E7EB]">
        {TABS.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={[
                "rounded-lg cursor-pointer px-2 py-3 text-[11px] leading-none font-semibold font-opensans transition-colors",
                isActive
                  ? "bg-[#8078B9] text-white"
                  : "bg-[#F5F6F7] text-[#7f8488]",
              ].join(" ")}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Accordion list */}
      <div className="mt-5 h-[calc(100%-230px)] overflow-y-auto pr-1 lg:h-[calc(100%-260px)]">
        {/* If you later have extra groups like "Public Cloud", "Azure Reservation", you can split them here */}

        <ul className="space-y-1">
          {INDUSTRY_SECTORS.map((sector) => {
            const isSelected = sector === selectedSector;
            return (
              <li key={sector}>
                <button
                  type="button"
                  onClick={() => onSectorSelect(isSelected ? null : sector)}
                  className={[
                    "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors",
                    "font-inter text-[16px] leading-[24px] tracking-[-0.02em]",
                    isSelected
                      ? "bg-neutral-100 text-interface-text-title"
                      : "bg-transparent text-interface-text-title hover:bg-neutral-50",
                  ].join(" ")}
                >
                  <span className="truncate">{sector}</span>
                  <span className="ml-2 flex items-center gap-1 text-[12px] text-interface-text-subtitle">
                    <span className="hidden xs:inline">(12)</span>
                    <Image
                      src="/assets/icons/Icon.svg" // use your chevron icon
                      alt="Toggle"
                      width={16}
                      height={16}
                    />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* View more */}
        <button
          type="button"
          className="mt-3 text-[13px] font-medium text-interface-text-default underline underline-offset-2"
        >
          View More
        </button>
      </div>
    </aside>
  );
}
