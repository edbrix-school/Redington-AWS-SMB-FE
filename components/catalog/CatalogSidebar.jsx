"use client";

import Image from "next/image";
import { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";

const industrySector = [
  {
    name: "Advertising & Marketing",
    icon: "/assets/icons/advertise-icon.svg",
    count: 12,
  },
  {
    name: "Aerospace & Satellite",
    icon: "/assets/icons/aerospace-icon.svg",
    count: 16,
  },
  {
    name: "Agriculture",
    icon: "/assets/icons/agriculture-icon.svg",
    count: 10,
  },
  { name: "Automotive", icon: "/assets/icons/automotive-icon.svg", count: 8 },
  {
    name: "Consumer Packaged Goods",
    icon: "/assets/icons/consumer-icon.svg",
    count: 12,
  },
  { name: "Education", icon: "/assets/icons/education-icon.svg", count: 12 },
  {
    name: "Energy & Utilities",
    icon: "/assets/icons/energy-icon.svg",
    count: 12,
  },
  // {
  //   name: "Engineering, Construction & Real Estate",
  //   icon: "/assets/icons/engineering-icon.svg",
  //   count: 12,
  // },
  {
    name: "Financial Services",
    icon: "/assets/icons/finance-icon.svg",
    count: 12,
  },
];
const byUseCase = [
  {
    name: "Artificial Intelligence",
    icon: "/assets/icons/advertise-icon.svg",
    count: 12,
  },
  {
    name: "Archiving",
    icon: "/assets/icons/aerospace-icon.svg",
    count: 16,
  },
  {
    name: "Backup and Restore",
    icon: "/assets/icons/agriculture-icon.svg",
    count: 10,
  },
  { name: "Blockchain", icon: "/assets/icons/automotive-icon.svg", count: 8 },
  {
    name: "Cloud Migration",
    icon: "/assets/icons/consumer-icon.svg",
    count: 12,
  },
  {
    name: "Cloud Operations",
    icon: "/assets/icons/education-icon.svg",
    count: 12,
  },
  {
    name: "Containers",
    icon: "/assets/icons/energy-icon.svg",
    count: 12,
  },
  {
    name: "Content Delivery",
    icon: "/assets/icons/engineering-icon.svg",
    count: 12,
  },
  {
    name: "Database Migration",
    icon: "/assets/icons/finance-icon.svg",
    count: 12,
  },
];
const byOrganizationType = [
  {
    name: "Enterprise",
    icon: "/assets/icons/advertise-icon.svg",
    count: 12,
  },
  {
    name: "Public Sector",
    icon: "/assets/icons/aerospace-icon.svg",
    count: 16,
  },
  {
    name: "Small & Medium Business",
    icon: "/assets/icons/agriculture-icon.svg",
    count: 10,
  },
  { name: "Startups", icon: "/assets/icons/automotive-icon.svg", count: 8 },
  {
    name: "Software and Technology",
    icon: "/assets/icons/consumer-icon.svg",
    count: 12,
  },
];
const TABS = ["By Industry", "By Use Case", "By Organization Type"];

export default function CatalogSidebar({ selectedSector, onSectorSelect }) {
  const [activeTab, setActiveTab] = useState("By Industry");
  const [activeIndex, setActiveIndex] = useState([-1]);
  const sectorDataMap = {
    "By Industry": industrySector,
    "By Use Case": byUseCase,
    "By Organization Type": byOrganizationType,
  };
  const selectedData = sectorDataMap[activeTab];
  return (
    <div className="w-1/2 shrink-0 border-b border-neutral-200 bg-white px-4 pb-4 pt-4 xs:px-5 lg:h-full lg:w-[400px] lg:border-b-0 lg:border-r lg:px-6 lg:pb-6 lg:pt-6">
      <div className="flex items-center gap-2">
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
              onClick={() => {
                setActiveTab(tab);
                setActiveIndex([-1]); // Reset accordion when changing tabs
              }}
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
        <Accordion
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
        >
          {selectedData.map((sector) => {
            return (
              <AccordionTab
                key={sector.name}
                header={
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2 w-full">
                      <Image
                        src={sector.icon}
                        alt={sector.name}
                        width={20}
                        height={20}
                      />
                      <span className="text-[16px] font-inter text-interface-text-title truncate w-[calc(100%-40px)]">
                        {" "}
                        {/* Truncation with dynamic width */}
                        {sector.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-interface-text-subtitle">
                      <span>({sector.count})</span>
                      <Image
                        src="/assets/icons/arrow-right.svg"
                        alt="Accordion Toggle"
                        width={16}
                        height={16}
                        className="transition-transform duration-300 transform rotate-0 group-open:rotate-180" // Handle rotation on toggle
                      />
                    </div>
                  </div>
                }
              >
                <div className="text-[12px] text-interface-text-subtitle">
                  {/* Add sector details or other content for each sector here */}
                  This is the content for {sector.name}.
                </div>
              </AccordionTab>
            );
          })}
        </Accordion>
        {/* <Accordion activeIndex={1}>
          {byUseCase.map((sector) => {
            return (
              <AccordionTab
                key={sector.name}
                header={
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Image
                        src={sector.icon}
                        alt={sector.name}
                        width={20}
                        height={20}
                      />
                      <span className="text-[16px] font-inter text-interface-text-title truncate">
                        {sector.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-interface-text-subtitle">
                      <span>({sector.count})</span>
                      <Image
                        src="/assets/icons/arrow-right.svg"
                        alt="Accordion Toggle"
                        width={16}
                        height={16}
                        className="transition-transform duration-300 transform"
                      />
                    </div>
                  </div>
                }
              >
                <div className="text-[12px] text-interface-text-subtitle">
                  This is the content for {sector.name}.
                </div>
              </AccordionTab>
            );
          })}
        </Accordion>
        <Accordion activeIndex={2}>
          {byOrganizationType.map((sector) => {
            return (
              <AccordionTab
                key={sector.name}
                header={
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Image
                        src={sector.icon}
                        alt={sector.name}
                        width={20}
                        height={20}
                      />
                      <span className="text-[16px] font-inter text-interface-text-title truncate">
                        {sector.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-interface-text-subtitle">
                      <span>({sector.count})</span>
                      <Image
                        src="/assets/icons/arrow-right.svg"
                        alt="Accordion Toggle"
                        width={16}
                        height={16}
                        className="transition-transform duration-300 transform"
                      />
                    </div>
                  </div>
                }
              >
                <div className="text-[12px] text-interface-text-subtitle">
                  This is the content for {sector.name}.
                </div>
              </AccordionTab>
            );
          })}
        </Accordion> */}

        {/* View more */}
        <div className="flex justify-center mt-3">
          <button
            type="button"
            className="text-[13px] font-medium text-interface-text-default"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
