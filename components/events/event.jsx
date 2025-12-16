"use client";
import React, { useState, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import SimplebarChart from "../common/charts/simplebarchart";
import RegisterPopup from "./components/register-popup";
import FilterPopup from "./components/filter";

const AllData = [
  {
    name: "Ticket Name  #32135",
    ticketname: "Data Analytics in the Cloud",
    icon: "/assets/icons/advertise-icon.svg",
    count: 12,
  },
  {
    name: "Ticket Name  #321356",
    ticketname: "Data Analytics in the Cloud",
    icon: "/assets/icons/aerospace-icon.svg",
    count: 16,
  },
];

const Open = [
  {
    name: "Ticket Name #45221",
    ticketname: "Data Analytics in the Cloud",
    icon: "/assets/icons/advertise-icon.svg",
    count: 12,
  },
  {
    name: "Ticket Name #45222",
    ticketname: "Data Analytics in the Cloud",
    icon: "/assets/icons/aerospace-icon.svg",
    count: 16,
  },
  {
    name: "Ticket Name #45223",
    ticketname: "Data Analytics in the Cloud",
    icon: "/assets/icons/agriculture-icon.svg",
    count: 10,
  },
];

const InReview = [
  {
    name: "Ticket Name #55231",
    ticketname: "Data Analytics in the Cloud",
    icon: "/assets/icons/advertise-icon.svg",
    count: 12,
  },
  {
    name: "Ticket Name #55232",
    ticketname: "Data Analytics in the Cloud",
    icon: "/assets/icons/aerospace-icon.svg",
    count: 16,
  },
];

const Closed = [
  {
    name: "Ticket Name #66891",
    ticketname: "Data Analytics in the Cloud",
    icon: "/assets/icons/advertise-icon.svg",
    count: 12,
  },
  {
    name: "Ticket Name #66892",
    ticketname: "Data Analytics in the Cloud",
    icon: "/assets/icons/aerospace-icon.svg",
    count: 16,
  },
];


export const Events = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [activeIndex, setActiveIndex] = useState([-1]);

  const sectorDataMap = {
    All: AllData,
    Open: Open,
    "In-review": InReview,
    Closed: Closed,
  };
  const selectedData = sectorDataMap[activeTab];

  const [selectedSort, setSelectedSort] = useState(null);
  const Sort = [
    { name: "Month", code: "NY" },
    { name: "Year", code: "RM" },
  ];

  const TABS = ["All", "Registered", "Upcoming", "Completed"];

  const DATA_MAP = {
    All: AllData,
    Open: Open,
    "In-review": InReview,
    Closed: Closed,
  };

  const filteredData = DATA_MAP[activeTab] || [];
  const op = useRef(null);

  const [openPopup, setOpenPopup] = useState(false);
  const [openFilterPopup, setOpenFilterPopup] = useState(false);
  return (
    <>  
    
    <div className="bg-white shaow1 relative z-20 p24 spacey24 rounded8 shadow-sm">
      <div>
        <div className=" items-center inline-flex rounded8 border border-[#E5E7EB] bg-[#F5F6F7] overflow-hidden">
          {TABS.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
            ${activeTab === tab ? "bg-[#8078B9] text-white" : "text-[#6f7480]  cursor-pointer "}
            text-center font-medium font12 py6 px12
            ${index !== TABS.length - 1 ? " border-[#E5E7EB]  cursor-pointer " : ""}
          `}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-1 h-[calc(100%-230px)] pr-1 lg:h-[calc(100%-260px)] ">
          <div className="flex justify-end my24">
            <div className="flex gap20 justify-end items-center">
              <div>
                <Dropdown
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.value)}
                  options={Sort}
                  optionLabel="name"
                  placeholder="Select Year/Month"
                  className="w300 custDropdown1 "
                  panelClassName="custDropdown1panel"
                />
              </div>
              <div onClick={()=> setOpenFilterPopup(true)}
                className=" cursor-pointer h-full px14 flex items-center justify-center text-center border border-InterfaceStrokedefault bg-interfacesurfacecomponentmuted hover:bg-[#e9e8f0] rounded8"
                
              >
                <i className="smb-filter text-InterfaceTextsubtitle font16 "></i>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-7 gap20 overflow-y-auto  items-stretch">
            <div
              className=" col-span-4"
              activeIndex={activeIndex}
              // onTabChange={(e) => setActiveIndex(e.index)}
            >
              <div className="h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[210px] 3xl:h-[10.417vw] spacey24 mb-[12px]">
                <div className="spacey24 shadow-sm p16 border border-[#f3f5f8] mb-[12px] rounded8 h-full flex flex-col">
                  <div className="flex justify-between gap-4">
                    <div className="flex gap8">
                      <div>
                        {" "}
                        <i className="text-[#3C4146] smb-ticket1 text16 "></i>
                      </div>
                      <h3 className="text-[#3C4146] font18 font-semibold leading-[120%]">
                        Upcoming
                      </h3>
                    </div>
                    <div className="flex gap24 items-center">
                      <div className="bg-[#E5E7EB] leading-none font-[400] cursor-pointer py6 px14 font14 text-[#306538] rounded4 uppercase">
                        5/10/2025
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[#3C4146] font24 font-bold leading-[120%]">
                      Data Analytics in the Cloud
                    </h1>
                    <p className="mt12 text-[#7F8488] font14 font-[400] leading-tight">
                      Discover how to leverage cloud-based data analytics tools
                      and techniques to gain insights from your data. This
                      workshop covers data warehousing, big data processing, and
                      machine learning in the cloud.
                    </p>
                  </div>
                  <div className="flex justify-end mt-auto">
                    <div>
                      <div className="flex gap20">
                        <div onClick={()=> setOpenPopup(true)} className="flex gap14 ">
                          <button className="bg-BrandNeutralpure leading-[110%] cursor-pointer py4 px-[8px] font12 text-InterfaceSurfacecomponent rounded4 flex items-center gap-[4px] xl:gap-[4px] 3xl:gap-[0.26vw]">
                            Register
                          </button>
                        </div>
                        <div className="flex gap14 ">
                          <button className="bg-[#FFB5A5] leading-[110%] cursor-pointer py4 px-[8px] font12 text-InterfaceSurfacecomponent rounded4 flex items-center gap-[4px] xl:gap-[4px] 3xl:gap-[0.26vw]">
                            Online
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[210px] 3xl:h-[10.417vw] spacey24 mb-[12px]">
                <div className="spacey24 shadow-sm p16 border border-[#f3f5f8] mb-[12px] rounded8 h-full flex flex-col">
                  <div className="flex justify-between gap-4">
                    <div className="flex gap8">
                      <div>
                        {" "}
                        <i className="text-[#3C4146] smb-ticket1 text16 "></i>
                      </div>
                      <h3 className="text-[#3C4146] font18 font-semibold leading-[120%]">
                        Upcoming
                      </h3>
                    </div>
                    <div className="flex gap24 items-center">
                      <div className="bg-[#E5E7EB] leading-none font-[400] cursor-pointer py6 px14 font14 text-[#306538] rounded4 uppercase">
                        5/10/2025
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[#3C4146] font24 font-bold leading-[120%]">
                      Data Analytics in the Cloud
                    </h1>
                    <p className="mt12 text-[#7F8488] font14 font-[400] leading-tight">
                      Discover how to leverage cloud-based data analytics tools
                      and techniques to gain insights from your data. This
                      workshop covers data warehousing, big data processing, and
                      machine learning in the cloud.
                    </p>
                  </div>
                  <div className="flex justify-end mt-auto">
                    <div>
                      <div className="flex gap20">
                        <div onClick={()=> setOpenPopup(true)} className="flex gap14 ">
                          <button className="bg-BrandNeutralpure leading-[110%] cursor-pointer py4 px-[8px] font12 text-InterfaceSurfacecomponent rounded4 flex items-center gap-[4px] xl:gap-[4px] 3xl:gap-[0.26vw]">
                            Register
                          </button>
                        </div>
                        <div className="flex gap14 ">
                          <button className="bg-[#FFB5A5] leading-[110%] cursor-pointer py4 px-[8px] font12 text-InterfaceSurfacecomponent rounded4 flex items-center gap-[4px] xl:gap-[4px] 3xl:gap-[0.26vw]">
                            Online
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[210px] 3xl:h-[10.417vw] spacey24 mb-[12px]">
                <div className="spacey24 shadow-sm p16 border border-[#f3f5f8] mb-[12px] rounded8 h-full flex flex-col">
                  <div className="flex justify-between gap-4">
                    <div className="flex gap8">
                      <div>
                        {" "}
                        <i className="text-[#3C4146] smb-ticket1 text16 "></i>
                      </div>
                      <h3 className="text-[#3C4146] font18 font-semibold leading-[120%]">
                        Upcoming
                      </h3>
                    </div>
                    <div className="flex gap24 items-center">
                      <div className="bg-[#E5E7EB] leading-none font-[400] cursor-pointer py6 px14 font14 text-[#306538] rounded4 uppercase">
                        5/10/2025
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[#3C4146] font24 font-bold leading-[120%]">
                      Data Analytics in the Cloud
                    </h1>
                    <p className="mt12 text-[#7F8488] font14 font-[400] leading-tight">
                      Discover how to leverage cloud-based data analytics tools
                      and techniques to gain insights from your data. This
                      workshop covers data warehousing, big data processing, and
                      machine learning in the cloud.
                    </p>
                  </div>
                  <div className="flex justify-end mt-auto">
                    <div>
                      <div className="flex gap20">
                        <div onClick={()=> setOpenPopup(true)} className="flex gap14 ">
                          <button className="bg-BrandNeutralpure leading-[110%] cursor-pointer py4 px-[8px] font12 text-InterfaceSurfacecomponent rounded4 flex items-center gap-[4px] xl:gap-[4px] 3xl:gap-[0.26vw]">
                            Register
                          </button>
                        </div>
                        <div className="flex gap14 ">
                          <button className="bg-[#FFB5A5] leading-[110%] cursor-pointer py4 px-[8px] font12 text-InterfaceSurfacecomponent rounded4 flex items-center gap-[4px] xl:gap-[4px] 3xl:gap-[0.26vw]">
                            Online
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" col-span-3">
              <div className="h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[210px] 3xl:h-[10.417vw] spacey24 col-span-1 shadow-sm p16 border border-[#f3f5f8] mb-[12px] rounded8 flex">
                <SimplebarChart />
              </div>
              <div className="h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[210px] 3xl:h-[10.417vw] spacey24 col-span-1 shadow-sm p16 border border-[#f3f5f8] mb-[12px] rounded8 flex">
                <SimplebarChart />
              </div>
              <div className="h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[210px] 3xl:h-[10.417vw] spacey24 col-span-1 shadow-sm p16 border border-[#f3f5f8] mb-[12px] rounded8  flex">
                <SimplebarChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RegisterPopup visible={openPopup} onHide={()=>setOpenPopup (false)}/>
        <FilterPopup visible={openFilterPopup} onHide={()=>setOpenFilterPopup (false)}/>
     </>
  );
};
