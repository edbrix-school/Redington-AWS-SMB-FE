"use client";

import React, { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar"; // Import Sidebar
import SchedulePopup from "./schedulePopup";
import { TabView, TabPanel } from "primereact/tabview";
import Image from "next/image";
import EventCalenderFilter from "../support-sessions/eventscalendar";
export default function ScheduleCalendarTable() {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeSession, setActiveSession] = useState(1);
  const sessions = {
    upcoming: [
      {
        id: 1,
        title: "Onboarding AWS S3",
        description:
          "Figma ipsum component variant main layer. Draft team clip figjam fill polygon pixel effect bullet. Hand font select figma object link.",
        date: "March 28, 2023",
        time: "6:00pm - 7:45pm",
        type: "Online",
      },
      {
        id: 2,
        title: "Webinar How to use the AWS ecosystem",
        description:
          "Figma ipsum component variant main layer. Draft team clip figjam fill polygon pixel effect bullet. Hand font select figma object link.",
        date: "March 28, 2023",
        time: "09:00pm - 10:00pm",
        type: "Online",
      },
      {
        id: 3,
        title: "Architecture Review",
        description:
          "Figma ipsum component variant main layer. Draft team clip figjam fill polygon pixel effect bullet. Hand font select figma object link.",
        date: "March 28, 2023",
        time: "09:00pm - 09:30pm",
        type: "Online",
      },
      {
        id: 4,
        title: "Troubleshooting",
        description:
          "Figma ipsum component variant main layer. Draft team clip figjam fill polygon pixel effect bullet. Hand font select figma object link.",
        date: "March 28, 2023",
        time: "09:00pm - 09:30pm",
        type: "Online",
      },
    ],
    completed: [
      {
        id: 1,
        title: "Webinar How to use the AWS ecosystem",
        description:
          "Figma ipsum component variant main layer. Draft team clip figjam fill polygon pixel effect bullet. Hand font select figma object link.",
        date: "March 15, 2023",
        time: "10:00am - 11:00am",
        type: "Online",
      },
      {
        id: 2,
        title: "Troubleshooting",
        description:
          "Figma ipsum component variant main layer. Draft team clip figjam fill polygon pixel effect bullet. Hand font select figma object link.",
        date: "March 16, 2023",
        time: "11:00am - 12:00pm",
        type: "Offline",
      },
    ],
  };

  const showSidebar = () => {
    setVisible(true);
  };

  const hideSidebar = () => {
    setVisible(false);
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveSession(1); // Set the first session as active when the page is loaded
  }, []);
  return (
    <>
      <div className="flex items-center justify-between mb16 mx-[2vw]">
        <h3 className="font20 text-[#fff] font-[700]">Your Sessions</h3>
        <div
          onClick={showSidebar}
          className="font14 py6 px14 border-[#5D9D4A] rounded-full bg-[#5D9D4A]  cursor-pointer text-[#fff]"
        >
          Schedule a Session
        </div>
      </div>
      <div className="flex flex-col mx-[2vw]">
        {/* Main Content */}
        <div className="mt-2">
          <div className="flex flex-col xl:flex-row w-full">
            {/* Left side: Upcoming and Completed Sessions */}
            <div className="xl:w-[39.01vw] w-full shrink-0 flex flex-col justify-between h-[750px]">
              <TabView
                className="tabview"
                activeIndex={activeTab}
                onTabChange={(e) => setActiveTab(e.index)}
              >
                <TabPanel header="Upcoming">
                  <div className="h-[600px] overflow-y-auto custom-scroll pr-2">
                    {sessions.upcoming.map((session, index) => {
                      const isActive = activeSession === session.id;
                      const borderColorClass =
                        index % 2 === 0 ? "border-[#7466AA]" : "border-[#019049]";
                      return (
                        <div
                          key={session.id}
                          onClick={() =>
                            setActiveSession(isActive ? null : session.id)
                          }
                          className={`bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col md:flex-row justify-between items-start md:items-center border-l-4 ${borderColorClass} cursor-pointer gap-4 md:gap-0`}
                        >
                          <div className="flex-1 w-full">
                            {(index === 0 || index === 1) && (
                              <p className="text-[#3C4146] font11">SR-112233</p>
                            )}
                            <h4
                              className={`text-[#212325] text-lg font-semibold ${isActive ? " font16 font700" : "font16 font500"
                                }`}
                            >
                              {session.title}
                            </h4>
                            {isActive && (
                              <>
                                <p className="text-[#3C4146] font-[13px]">
                                  {session.description}
                                </p>
                              </>
                            )}
                          </div>
                          <div className="w-full md:w-[70px] flex flex-row md:flex-col items-center justify-start md:justify-center p-2 border-b md:border-b-0 md:border-r border-[#E5E7EB] gap-2 md:gap-0">
                            <p
                              className={`text-[#3C4146]  ${isActive ? "active-day" : "inactive-day"
                                }`}
                            >
                              Wed
                            </p>
                            <p
                              className={`text-[#3C4146]  ${isActive ? "active-date" : "inactive-date"
                                }`}
                            >
                              28
                            </p>
                          </div>
                          <div className="flex-shrink-0 w-full md:w-[200px] p-2 md:pl-4">
                            <div className="flex items-start justify-start gap-2">
                              <Image
                                src="/assets/icons/clock.svg"
                                alt="clock"
                                width={20}
                                height={20}
                              />
                              <p
                                className={`text-[#7F8488]  ${isActive
                                  ? "text-[#3C4146] font-normal"
                                  : "font-normal"
                                  }`}
                              >
                                {session.time}
                              </p>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                              <Image
                                src="/assets/icons/location.svg"
                                alt="locatiob"
                                width={20}
                                height={20}
                              />
                              <p
                                className={`text-[#7F8488]  ${isActive
                                  ? "text-[#3C4146] font-normal"
                                  : "font-normal"
                                  }`}
                              >
                                {session.type}
                              </p>
                            </div>
                            {isActive && (
                              <div
                                className="flex items-center justify-start gap-2 cursor-pointer"
                                onClick={showSidebar}
                              >
                                <Image
                                  src="/assets/icons/view-icon.svg"
                                  alt="view"
                                  width={20}
                                  height={20}
                                />
                                <p
                                  className={`text-[#7F8488]  ${isActive
                                    ? "text-[#645592] font-normal"
                                    : "font-normal"
                                    }`}
                                >
                                  View
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </TabPanel>
                <TabPanel header="Completed">
                  <div className="h-[600px] overflow-y-auto custom-scroll pr-2">
                    {sessions.completed.map((session, index) => {
                      const isActive = activeSession === session.id;
                      const borderColorClass =
                        index % 2 === 0 ? "border-[#7466AA]" : "border-[#019049]";
                      return (
                        <div
                          key={session.id}
                          onClick={() =>
                            setActiveSession(isActive ? null : session.id)
                          }
                          className={`bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col md:flex-row justify-between items-start md:items-center border-l-4 ${borderColorClass} cursor-pointer gap-4 md:gap-0`}
                        >
                          <div className="flex-1 w-full">
                            {(index === 0 || index === 1) && (
                              <p className="text-[#3C4146] font11">SR-112233</p>
                            )}
                            <h4
                              className={`text-[#212325] text-lg font-semibold ${isActive ? " font17 font700" : "font17 font500"
                                }`}
                            >
                              {session.title}
                            </h4>
                            {isActive && (
                              <>
                                <p className="text-[#3C4146] font-[14px]">
                                  {session.description}
                                </p>
                              </>
                            )}
                          </div>
                          <div className="w-full md:w-[70px] flex flex-row md:flex-col items-center justify-start md:justify-center p-2 border-b md:border-b-0 md:border-r border-[#E5E7EB] gap-2 md:gap-0">
                            <p
                              className={`text-[#3C4146]  ${isActive ? "active-day" : "inactive-day"
                                }`}
                            >
                              Wed
                            </p>
                            <p
                              className={`text-[#3C4146]  ${isActive ? "active-date" : "inactive-date"
                                }`}
                            >
                              28
                            </p>
                          </div>
                          <div className="flex-shrink-0 w-full md:w-[200px] p-2 md:pl-4">
                            <div className="flex items-start justify-start gap-2">
                              <Image
                                src="/assets/icons/clock.svg"
                                alt="clock"
                                width={20}
                                height={20}
                              />
                              <p
                                className={`text-[#7F8488]  ${isActive
                                  ? "text-[#3C4146] font-normal"
                                  : "font-normal"
                                  }`}
                              >
                                {session.time}
                              </p>
                            </div>
                            <div className="flex items-center justify-start gap-2">
                              <Image
                                src="/assets/icons/location.svg"
                                alt="locatiob"
                                width={20}
                                height={20}
                              />
                              <p
                                className={`text-[#7F8488]  ${isActive
                                  ? "text-[#3C4146] font-normal"
                                  : "font-normal"
                                  }`}
                              >
                                {session.type}
                              </p>
                            </div>
                            {isActive && (
                              <div
                                className="flex items-center justify-start gap-2 cursor-pointer"
                                onClick={showSidebar}
                              >
                                <Image
                                  src="/assets/icons/view-icon.svg"
                                  alt="view"
                                  width={20}
                                  height={20}
                                />
                                <p
                                  className={`text-[#7F8488]  ${isActive
                                    ? "text-[#645592] font-normal"
                                    : "font-normal"
                                    }`}
                                >
                                  View
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </TabPanel>
              </TabView>
              <div className="mt-auto">
                <h3 className="font18 text-[#7F8488] font-normal">
                  Calendar Legend
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-3 mb-6 md:mb-0">
                  <button
                    type="button"
                    className="p7 rounded-[5.415px] font11 calendar-legend-Personal-btns cursor-pointer"
                  >
                    Personal Support Sessions
                  </button>

                  <button
                    type="button"
                    className="p7 rounded-[5.415px] bg-[#E7E6F3] text-[#5B4D80] font11 font-normal cursor-pointer"
                  >
                    Webinars
                  </button>

                  <button
                    type="button"
                    className="p7 rounded-[5.415px] bg-[#CDE3FF] text-[#1C6497] font11 font-normal cursor-pointer"
                  >
                    On Site Trainings
                  </button>

                  <button
                    type="button"
                    className="p7 rounded-[5.415px] bg-[#FFF6D3] text-[#8B5215] font11 font-normal cursor-pointer"
                  >
                    Live Sessions
                  </button>
                </div>
              </div>
            </div>

            {/* Right side: Calendar */}
            <div className="flex-1 md:pl-4 mt-8 xl:mt-0">
              {/* Calendar placeholder (we'll add functionality later) */}
              <div className="text-center bg-white rounded-t-[8px]">
                <EventCalenderFilter />
              </div>
            </div>
          </div>
        </div>
        {/* Side Drawer Component */}
        <Sidebar
          visible={visible}
          position="right"
          className="!w-full lg:!w-[450px] xl:!w-[450px] 2xl:!w-[27.5vw] 3xl:!w-[27.5vw]  customsidebar2 bg-[#F6F7F8] rounded8"
          onHide={hideSidebar}
          blockScroll={true}
        >
          <SchedulePopup open={visible} onClose={() => hideSidebar()} />
        </Sidebar>
      </div>
    </>
  );
}
