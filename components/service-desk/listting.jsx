"use client";
import React, { useState, useEffect, useRef } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import Image from "next/image";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { OverlayPanel } from "primereact/overlaypanel";
import Link from "next/link";
import Filter from "./fillter-popup/Filter";
import NewTicket from "./new-ticket/add";
import ViewTicket from "./ticket-view/view";

const AllData = [
  {
    name: "Ticket Name  #32135",
    ticketname: "Unable to reset password",
    icon: "/assets/icons/advertise-icon.svg",
    count: 12,
  },
  {
    name: "Ticket Name  #321356",
    ticketname: "Unable to access shared drive",
    icon: "/assets/icons/aerospace-icon.svg",
    count: 16,
  },
  {
    name: "Ticket Name  #3267135",
    ticketname: "VPN connection keeps disconnecting",
    icon: "/assets/icons/agriculture-icon.svg",
    count: 10,
  },
  {
    name: "Ticket Name  #3267136",
    ticketname: "Email not syncing on Outlook",
    icon: "/assets/icons/automotive-icon.svg",
    count: 8,
  },
  {
    name: "Ticket Name  #3267137",
    ticketname: "Account locked due to failed logins",
    icon: "/assets/icons/consumer-icon.svg",
    count: 12,
  },
];

const Open = [
  {
    name: "Ticket Name #45221",
    ticketname: "Laptop running slow after update",
    icon: "/assets/icons/advertise-icon.svg",
    count: 12,
  },
  {
    name: "Ticket Name #45222",
    ticketname: "Shared folder permission issue",
    icon: "/assets/icons/aerospace-icon.svg",
    count: 16,
  },
  {
    name: "Ticket Name #45223",
    ticketname: "Printer not connecting to network",
    icon: "/assets/icons/agriculture-icon.svg",
    count: 10,
  },
  {
    name: "Ticket Name #45224",
    ticketname: "Two-factor authentication not working",
    icon: "/assets/icons/automotive-icon.svg",
    count: 8,
  },
  {
    name: "Ticket Name #45225",
    ticketname: "Service request form error",
    icon: "/assets/icons/consumer-icon.svg",
    count: 12,
  },
  {
    name: "Ticket Name #45226",
    ticketname: "Unable to update profile information",
    icon: "/assets/icons/education-icon.svg",
    count: 12,
  },
  {
    name: "Ticket Name #45227",
    ticketname: "High CPU usage on system",
    icon: "/assets/icons/energy-icon.svg",
    count: 12,
  },
  {
    name: "Ticket Name #45228",
    ticketname: "Email forwarding not working",
    icon: "/assets/icons/engineering-icon.svg",
    count: 12,
  },
  {
    name: "Ticket Name #45229",
    ticketname: "Application crash on startup",
    icon: "/assets/icons/finance-icon.svg",
    count: 12,
  },
];

const InReview = [
  {
    name: "Ticket Name #55231",
    ticketname: "SLA breach warning triggered",
    icon: "/assets/icons/advertise-icon.svg",
    count: 12,
  },
  {
    name: "Ticket Name #55232",
    ticketname: "Performance issue after deployment",
    icon: "/assets/icons/aerospace-icon.svg",
    count: 16,
  },
  {
    name: "Ticket Name #55233",
    ticketname: "User onboarding access delay",
    icon: "/assets/icons/agriculture-icon.svg",
    count: 10,
  },
  {
    name: "Ticket Name #55234",
    ticketname: "Incorrect ticket auto-assignment",
    icon: "/assets/icons/automotive-icon.svg",
    count: 8,
  },
  {
    name: "Ticket Name #55235",
    ticketname: "Service catalog item not loading",
    icon: "/assets/icons/consumer-icon.svg",
    count: 12,
  },
];

const Closed = [
  {
    name: "Ticket Name #66891",
    ticketname: "Password reset completed successfully",
    icon: "/assets/icons/advertise-icon.svg",
    count: 12,
  },
  {
    name: "Ticket Name #66892",
    ticketname: "Email issue resolved",
    icon: "/assets/icons/aerospace-icon.svg",
    count: 16,
  },
  {
    name: "Ticket Name #66893",
    ticketname: "Printer driver updated",
    icon: "/assets/icons/agriculture-icon.svg",
    count: 10,
  },
  {
    name: "Ticket Name #66894",
    ticketname: "Network downtime issue fixed",
    icon: "/assets/icons/automotive-icon.svg",
    count: 8,
  },
  {
    name: "Ticket Name #66895",
    ticketname: "Access granted successfully",
    icon: "/assets/icons/consumer-icon.svg",
    count: 12,
  },
];

const TABS = ["All", "Open", "In-review", "Closed"];
export const ServicesDeskList = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [activeIndex, setActiveIndex] = useState([-1]);
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const sectorDataMap = {
    All: AllData,
    Open: Open,
    "In-review": InReview,
    Closed: Closed,
  };
  const selectedData = sectorDataMap[activeTab];
  const showSidebar = () => {
    setVisible(true);
  };
  const getTitle = () => {
    switch (activetab) {
      case 0:
        return "Human Resource";
      case 1:
        return "Current Staff View";
      case 2:
        return "Employee Directory";
      case 3:
        return "Employee Comparison";
      case 4:
        if (isAttrition == true) {
          return "Attrition";
        } else {
          return "Employee Movement";
        } // Add for Attrition if needed
      default:
        return "Human Resource";
    }
  };
  const [activetab, setactivetab] = useState(0);
  const [selectedSort, setSelectedSort] = useState(null);
  const Sort = [
    { name: "Month", code: "NY" },
    { name: "Year", code: "RM" },
  ];

  const TABS = ["All", "Open", "In-review", "Closed"];

  const DATA_MAP = {
    All: AllData,
    Open: Open,
    "In-review": InReview,
    Closed: Closed,
  };

  const filteredData = DATA_MAP[activeTab] || [];
  const op = useRef(null);

  const [openpopup, setOpenPopup] = useState(false);
  const [openpopupnewticket, setOpenPopupNewTicket] = useState(false);
  const [openpopupviewticket, setOpenPopupViewTicket] = useState(false);
  return (
    <div className="bg-white shaow1 relative z-20 p24 spacey24 rounded8 shadow-sm mx-[4.167vw]">
      <div>
        <div className=" items-center inline-flex rounded-[8px] border border-[#E5E7EB] bg-[#F5F6F7] overflow-hidden">
          {TABS.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
            ${activeTab === tab ? "bg-[#8078B9] text-white" : "text-[#6f7480]  cursor-pointer"}
            text-center font-semibold text-[14px] py6 px12
            ${index !== TABS.length - 1 ? "border-r border-[#E5E7EB]  cursor-pointer" : ""}
          `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Accordion list */}
        <div className="mt-1 h-[calc(100%-230px)] overflow-y-auto pr-1 lg:h-[calc(100%-260px)]">
          <div className="flex justify-between my24">
            <div className="flex gap14 ">
              <button
                className="bg-BrandNeutralpure cursor-pointer py6 px14 font14 text-InterfaceSurfacecomponent rounded-full flex items-center gap-[4px] xl:gap-[4px] 3xl:gap-[0.26vw]"
                onClick={() => setOpenPopupNewTicket(true)}
              >
                <Image
                  src="/images/add-icon.svg"
                  width={16}
                  height={16}
                  alt="adduser"
                  className="inline-block w14 h-auto "
                />
                New Ticket
              </button>
            </div>
            <div className="flex gap20">
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
              <div
                className=" cursor-pointer h-full px14 flex items-center justify-center text-center border border-InterfaceStrokedefault bg-interfacesurfacecomponentmuted rounded8"
                onClick={() => setOpenPopup(true)}
              >
                <i className="smb-filter text-InterfaceTextsubtitle font14 "></i>
              </div>
            </div>
          </div>
          <div
            className="h-[800px]  3xl:h-[36.458vw] overflow-auto"
            activeIndex={activeIndex}
            onTabChange={(e) => setActiveIndex(e.index)} // Update accordion active state on tab change
          >
            {selectedData.map((sector, index) => {
              return (
                <div key={sector.name}>
                  <div className="spacey24 shaow2 p16 border-b border-[#E5E7EB] mb-[12px]">
                    <div className="flex justify-between gap-4">
                      <div className="flex gap8">
                        <div>
                          {" "}
                          <i className="text-[#3C4146] smb-ticket1 text16 "></i>
                        </div>
                        <h3 className="text-[#3C4146] font18 font-semibold leading-[120%]">
                          {" "}
                          {sector.name}
                        </h3>
                      </div>
                      <div className="flex gap24 items-center">
                        <div className="bg-[#EEFFF5] font-[400] cursor-pointer py6 px14 font14 text-[#306538] rounded4 uppercase">
                          In review
                        </div>
                        <div>
                          {" "}
                          <i
                            className="text-[#3C4146] smb-square-more font20 cursor-pointer"
                            onClick={(e) => op.current.toggle(e)}
                          ></i>
                          <OverlayPanel
                            ref={op}
                            className="w-[160px] custom-op rounded8"
                          >
                            <div className="flex flex-col text-[#3C4146] font14 font-[400]">
                              <Link
                                href="#"
                                onClick={() => setOpenPopupViewTicket(true)}
                                className=" leading-[140%] py4 px4"
                              >
                                View
                              </Link>
                              <Link
                                href="#"
                                className=" leading-[140%] py4 px4"
                              >
                                Cancel
                              </Link>
                            </div>
                          </OverlayPanel>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-[#3C4146] font24 font-bold leading-[120%]">
                        {sector.ticketname}
                      </h1>
                      <p className="mt12 text-[#7F8488] font16 font-[400] leading-tight">
                        Figma ipsum component variant main layer. Draft polygon
                        plugin mask boolean community comment. Mask effect
                        horizontal image overflow plugin. Boolean union
                        duplicate vertical polygon asset object main outline.
                        Polygon outline content arrow plugin distribute polygon
                        overflow asset auto. Export bold bold invite
                        strikethrough. Follower rectangle clip figjam layer
                        pixel.
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <div className="mt24 flex gap8">
                        <Image
                          src="/images/profile-img.png"
                          width="24"
                          height="24"
                          alt="profile"
                          rounded-full
                        />
                        {/* profile-img */}

                        <h1 className="text-[#3C4146] font16 font-[500] leading-[120%]">
                          Jhon Doe
                        </h1>
                      </div>
                      <div>
                        <div className="flex gap20">
                          <div className="flex gap14 ">
                            <button className="bg-BrandNeutralpure cursor-pointer py4 px-[8px] font14 text-InterfaceSurfacecomponent rounded8 flex items-center gap-[4px] xl:gap-[4px] 3xl:gap-[0.26vw]">
                              View Ticket
                              <div>
                                {" "}
                                <Image
                                  src="/images/eye-icon.svg"
                                  width="14"
                                  height="14"
                                  alt="icon"
                                />
                              </div>
                            </button>
                          </div>
                          <div className="flex gap14 ">
                            <button className="bg-[#FFB5A5] cursor-pointer py4 px-[8px] font14 text-InterfaceSurfacecomponent rounded8 flex items-center gap-[4px] xl:gap-[4px] 3xl:gap-[0.26vw]">
                              Cancel
                              <div>
                                {" "}
                                <Image
                                  src="/images/close-circle.svg"
                                  width="14"
                                  height="14"
                                  alt="icon"
                                />
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <NewTicket
        visible={openpopupnewticket}
        onHide={() => setOpenPopupNewTicket(false)}
      />
      <ViewTicket
        visible={openpopupviewticket}
        onHide={() => setOpenPopupViewTicket(false)}
      />

      <Filter visible={openpopup} onHide={() => setOpenPopup(false)} />
    </div>
  );
};
