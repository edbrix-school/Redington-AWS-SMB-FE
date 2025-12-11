"use client";

import React, { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar"; // Import Sidebar
import SchedulePopup from "./schedulePopup";
import { TabView, TabPanel } from "primereact/tabview";
import Image from "next/image";

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
        time: "09:00 - 09:30",
        type: "Online",
      },
      {
        id: 3,
        title: "Architecture Review",
        description:
          "Figma ipsum component variant main layer. Draft team clip figjam fill polygon pixel effect bullet. Hand font select figma object link.",
        date: "March 28, 2023",
        time: "09:00 - 09:30",
        type: "Online",
      },
      {
        id: 4,
        title: "Troubleshooting",
        description:
          "Figma ipsum component variant main layer. Draft team clip figjam fill polygon pixel effect bullet. Hand font select figma object link.",
        date: "March 28, 2023",
        time: "09:00 - 09:30",
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
      <div>
        <h3 className="your-sessions">Your Sessions</h3>
      </div>
      <div className="flex flex-col">
        {/* Main Content */}
        <div>
          <div className="flex">
            {/* Left side: Upcoming and Completed Sessions */}
            <div className="w-1/3 bg-gray-50">
              <TabView
                className="tabview"
                activeIndex={activeTab}
                onTabChange={(e) => setActiveTab(e.index)}
              >
                <TabPanel header="Upcoming">
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
                        className={`bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center border-l-4 ${borderColorClass} cursor-pointer`}
                      >
                        <div className="flex-1">
                          {(index === 0 || index === 1) && (
                            <p className="text-[#3C4146] font11">SR-112233</p>
                          )}
                          <h4
                            className={`text-[#212325] text-lg font-semibold ${
                              isActive ? " font17 font700" : "font17 font500"
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
                        <div className="p-2 border-r broder-r-[0.7px solid #E5E7EB]">
                          <p
                            className={`text-[#3C4146]  ${
                              isActive ? "active-day" : "inactive-day"
                            }`}
                          >
                            Wed
                          </p>
                          <p
                            className={`text-[#3C4146]  ${
                              isActive ? "active-date" : "inactive-date"
                            }`}
                          >
                            28
                          </p>
                        </div>
                        <div className="flex-shrink-0 text-right p-2">
                          <div className="flex items-start justify-start gap-2">
                            <Image
                              src="/assets/icons/clock.svg"
                              alt="clock"
                              width={20}
                              height={20}
                            />
                            <p
                              className={`text-[#7F8488]  ${
                                isActive
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
                              className={`text-[#7F8488]  ${
                                isActive
                                  ? "text-[#3C4146] font-normal"
                                  : "font-normal"
                              }`}
                            >
                              {session.type}
                            </p>
                          </div>
                          {isActive && (
                            <div
                              className="flex items-center justify-start gap-2"
                              onClick={showSidebar}
                            >
                              <Image
                                src="/assets/icons/view-icon.svg"
                                alt="view"
                                width={20}
                                height={20}
                              />
                              <p
                                className={`text-[#7F8488]  ${
                                  isActive
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
                </TabPanel>
                <TabPanel header="Completed">
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
                        className={`bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center border-l-4 ${borderColorClass} cursor-pointer`}
                      >
                        <div className="flex-1">
                          {(index === 0 || index === 1) && (
                            <p className="text-[#3C4146] font11">SR-112233</p>
                          )}
                          <h4
                            className={`text-[#212325] text-lg font-semibold ${
                              isActive ? " font17 font700" : "font17 font500"
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
                        <div className="p-2 border-r broder-r-[0.7px solid #E5E7EB]">
                          <p
                            className={`text-[#3C4146]  ${
                              isActive ? "active-day" : "inactive-day"
                            }`}
                          >
                            Wed
                          </p>
                          <p
                            className={`text-[#3C4146]  ${
                              isActive ? "active-date" : "inactive-date"
                            }`}
                          >
                            28
                          </p>
                        </div>
                        <div className="flex-shrink-0 text-right p-2">
                          <div className="flex items-start justify-start gap-2">
                            <Image
                              src="/assets/icons/clock.svg"
                              alt="clock"
                              width={20}
                              height={20}
                            />
                            <p
                              className={`text-[#7F8488]  ${
                                isActive
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
                              className={`text-[#7F8488]  ${
                                isActive
                                  ? "text-[#3C4146] font-normal"
                                  : "font-normal"
                              }`}
                            >
                              {session.type}
                            </p>
                          </div>
                          {isActive && (
                            <div
                              className="flex items-center justify-start gap-2"
                              onClick={showSidebar}
                            >
                              <Image
                                src="/assets/icons/view-icon.svg"
                                alt="view"
                                width={20}
                                height={20}
                              />
                              <p
                                className={`text-[#7F8488]  ${
                                  isActive
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
                    // return (
                    //   <div
                    //     key={session.id}
                    //     onClick={() =>
                    //       setActiveSession(isActive ? null : session.id)
                    //     }
                    //     className={`bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center border-l-4 ${borderColorClass} cursor-pointer`}
                    //   >
                    //     <div className="flex-1">
                    //       <h4
                    //         className={`text-lg font-semibold ${
                    //           isActive ? "font-bold" : "font-normal"
                    //         }`}
                    //       >
                    //         {session.title}
                    //       </h4>
                    //       {isActive && (
                    //         <>
                    //           <p className="text-sm text-gray-600">
                    //             {session.description}
                    //           </p>
                    //         </>
                    //       )}
                    //     </div>
                    //     <div className="flex-shrink-0 text-right p-2">
                    //       <div className="flex items-center justify-start gap-2">
                    //         <Image
                    //           src="/assets/icons/clock.svg"
                    //           alt="clock"
                    //           width={20}
                    //           height={20}
                    //         />
                    //         <p className="text-gray-600">{session.time}</p>
                    //       </div>
                    //       <div className="flex items-center justify-start gap-2">
                    //         <Image
                    //           src="/assets/icons/location.svg"
                    //           alt="location"
                    //           width={20}
                    //           height={20}
                    //         />
                    //         <p className="text-gray-600">{session.type}</p>
                    //       </div>
                    //       {isActive && (
                    //         <div
                    //           className="flex items-center justify-start gap-2"
                    //           onClick={showSidebar}
                    //         >
                    //           <Image
                    //             src="/assets/icons/view-icon.svg"
                    //             alt="view"
                    //             width={20}
                    //             height={20}
                    //           />
                    //           <p className="text-gray-600">View</p>
                    //         </div>
                    //       )}
                    //     </div>
                    //   </div>
                    // );
                  })}
                </TabPanel>
              </TabView>
              <div>
                <h3 className="font20 text-[#7F8488] font-normal">
                  Calendar Legend
                </h3>
                <div className="flex items-center lg:flex-row md:flex-row sm:flex-col gap-2 mt-3">
                  <button
                    type="button"
                    className="p7 rounded-[5.415px] font11 calendar-legend-Personal-btns"
                  >
                    Personal Support Sessions
                  </button>

                  <button
                    type="button"
                    className="p7 rounded-[5.415px] bg-[#E7E6F3] text-[#5B4D80] font11 font-normal"
                  >
                    Webinars
                  </button>

                  <button
                    type="button"
                    className="p7 rounded-[5.415px] bg-[#CDE3FF] text-[#1C6497] font11 font-normal"
                  >
                    On Site Trainings
                  </button>

                  <button
                    type="button"
                    className="p7 rounded-[5.415px] bg-[#FFF6D3] text-[#8B5215] font11 font-normal"
                  >
                    Live Sessions
                  </button>
                </div>
              </div>
            </div>

            {/* Right side: Calendar */}
            <div className="w-2/3 p-4 bg-white">
              {/* Calendar placeholder (we'll add functionality later) */}
              <div className="text-center">
                <h3 className="text-xl font-semibold">Calendar</h3>
                <p>Calendar content will go here.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Side Drawer Component */}
        <Sidebar
          visible={visible}
          onHide={() => hideSidebar()}
          className="p-0 z-[9999] customSchedulesidebar !w-[30rem] lg:!w-[40rem] md:!w-[30rem] sm:!w-[100%] "
          position="right"
        >
          <SchedulePopup open={visible} onClose={() => hideSidebar()} />
        </Sidebar>
      </div>
    </>
  );
}
