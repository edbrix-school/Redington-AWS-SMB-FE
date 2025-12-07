import { useState } from "react";
import Image from "next/image";
import { Accordion, AccordionTab } from "primereact/accordion";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

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
  { name: "Archiving", icon: "/assets/icons/aerospace-icon.svg", count: 16 },
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
  { name: "Containers", icon: "/assets/icons/energy-icon.svg", count: 12 },
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
  { name: "Enterprise", icon: "/assets/icons/advertise-icon.svg", count: 12 },
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
  const [value, setValue] = useState("");
  const sectorDataMap = {
    "By Industry": industrySector,
    "By Use Case": byUseCase,
    "By Organization Type": byOrganizationType,
  };

  const selectedData = sectorDataMap[activeTab];

  return (
    <div className="shrink-0 border-b border-neutral-200 bg-white px-4 pb-4 pt-4 xs:px-5 lg:h-full lg:border-b-0 lg:border-r lg:px-6 lg:pb-6 lg:pt-6">
      <div className="flex items-center gap-2">
        <Image
          src="/assets/icons/catalog-img.svg"
          alt="Search"
          width={150}
          height={150}
        />
      </div>

      <h2 className="mt-4 font32 font-normal leading-[1] text-interface-text-default1">
        Catalog
      </h2>

      <p className="mt-3 font12 text-InterfaceTextsubtitle">
        Figma ipsum component variant main layer. Pen line scale layer variant
        export subtract shadow arrange outline. Project.
      </p>

      {/* Search bar */}
      <div className="mt-4">
        <label className="sr-only" htmlFor="catalog-search">
          Search catalog
        </label>
        <div className="flex items-center gap-2 border-[1px solid var(--Interface-Stroke-soft, #E5E7EB)] bg-[linear-gradient(90.85deg,rgba(255,233,67,0.22)_5.05%,rgba(67,219,62,0.22)_97.08%)] p-[1px]">
          <div className="flex w-full items-center gap-2  px-3 py-1 cursor-pointer">
            <Image
              src="/assets/icons/search-outline.svg"
              alt="Search"
              width={25}
              height={25}
            />
            <InputText
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="customSearchInput w-full font16 "
              placeholder="Search"
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
            <Button
              key={tab}
              type="button"
              onClick={() => {
                setActiveTab(tab);
                setActiveIndex([-1]); // Reset accordion when changing tabs
              }}
              className={[
                "customCatalogButton cursor-pointer px-2 py-3 font10 font-semibold",
                isActive ? "active" : "",
              ].join(" ")}
            >
              {tab}
            </Button>
          );
        })}
      </div>

      {/* Accordion list */}
      <div className="mt-5 h-[calc(100%-230px)] overflow-y-auto pr-1 lg:h-[calc(100%-260px)]">
        <Accordion
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)} // Update accordion active state on tab change
          className="customAccordian"
        >
          {selectedData.map((sector, index) => {
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
                      <span className="font16 text-InterfaceTexttitle1 truncate w-[calc(100%-40px)]">
                        {sector.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <span className="font16 text-interface-text-default1">
                        ({sector.count})
                      </span>
                      <Image
                        src="/assets/icons/arrowright2.svg"
                        alt="Accordion Toggle"
                        width={16}
                        height={16}
                        className={`font16 text-interface-text-default1 transition-transform duration-300 transform ${
                          activeIndex === index ? "rotate-180" : "rotate-0"
                        }`} // Apply rotation to the arrow based on the active state
                      />
                    </div>
                  </div>
                }
              >
                <div className="flex flex-col gap-4">
                  <p className="font12 text-interface-text-subtitle">
                    Public Cloud
                  </p>

                  <div className="flex items-center gap-2">
                    <p className="font12 text-interface-text-subtitle">
                      Azure Reservation
                    </p>
                    <span className="font12 text-interface-text-subtitle">
                      (18)
                    </span>
                  </div>
                </div>
              </AccordionTab>
            );
          })}
        </Accordion>

        {/* View more */}
        <div className="flex justify-center mt-3">
          <button
            type="button"
            className="font14 font-medium text-interface-text-default"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
