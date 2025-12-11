import React, { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import moment from "moment";
import multiMonthPlugin from "@fullcalendar/multimonth";

export default function Index(props) {
  const { events, fetchsingleEvent, year } = props;
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const getFullDetials = (event) => {
    fetchsingleEvent(event.event.id);
  };

  const eventRender = (eventd) => {
    const { event, timeText } = eventd;
    let formattedTime;
    const time = event.title.split("[start_time]");
    if (time.length > 1) {
      formattedTime = new Date(time[1]).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true, // To use 12-hour format
      });

      formattedTime = formattedTime.replace("p.m.", "PM").replace("a.m.", "AM");
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "5px",
          textWrap: "wrap",
        }}
      >
        <div style={{ fontWeight: "600" }}>
          {time.length == 1 ? "All day" : formattedTime}{" "}
        </div>
        <div>{time.length == 1 ? event.title : time[2]}</div>
      </div>
    );
  };

  useEffect(() => {
    handleTabClick(0);
  }, [props]);

  const firstDate = moment([year, activeTab * 2]).format("YYYY-MM-DD");

  const month = new Date();
  const monthName = month.getMonth();
  const secondDate = moment([year, activeTab * 2 + 1]).format("YYYY-MM-DD");

  useEffect(() => {
    console.log("active", activeTab);
    if (monthName === 0 || monthName === 1) {
      setActiveTab(0);
    } else if (monthName === 2 || monthName === 3) {
      setActiveTab(1);
    } else if (monthName === 4 || monthName === 5) {
      setActiveTab(2);
    } else if (monthName === 6 || monthName === 7) {
      setActiveTab(3);
    } else if (monthName === 8 || monthName === 9) {
      setActiveTab(4);
    } else if (monthName === 10 || monthName === 11) {
      setActiveTab(5);
    }
  }, [year]);

  return (
    <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
      <TabList>
        <div className="grid grid-cols-6">
          <Tab>
            <div
              className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                          activeTab == 0
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
            >
              Jan / Feb
            </div>
          </Tab>
          <Tab>
            <div
              className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                          activeTab == 1
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
            >
              Mar / Apr
            </div>
          </Tab>
          <Tab>
            <div
              className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                          activeTab == 2
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
            >
              May / Jun
            </div>
          </Tab>
          <Tab>
            <div
              className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                          activeTab == 3
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
            >
              Jul / Aug
            </div>
          </Tab>
          <Tab>
            <div
              className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                          activeTab == 4
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
            >
              Sep / Oct
            </div>
          </Tab>
          <Tab>
            <div
              className={`text-[16px] xl:text-[0.833vw] font-medium py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                        ${
                          activeTab == 5
                            ? "text-[#FFF] bg-[#0F1F38] border rounded-t-[8px]"
                            : "text-[#9CA1AB] bg-[#F5F6F7]"
                        }`}
            >
              Nov / Dec
            </div>
          </Tab>
        </div>
      </TabList>
      <div>
        <TabPanel>
          <div className="full-calendar-sec full-calendar-listmonth bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
            <FullCalendar
              plugins={[multiMonthPlugin, listPlugin]}
              initialView="list"
              initialDate={firstDate}
              views={{
                list: {
                  type: "multiMonthYear",
                  duration: { months: 2 },
                  titleFormat: { year: "numeric", month: "long" },
                },
              }}
              headerToolbar={{
                left: "title",
                center: "",
                right: "",
              }}
              showNonCurrentDates={true}
              weekends={true}
              events={events}
              editable={true}
              eventClick={(e) => getFullDetials(e)}
              eventContent={eventRender}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="full-calendar-sec full-calendar-listmonth bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
            <FullCalendar
              plugins={[multiMonthPlugin, listPlugin]}
              initialView="list"
              initialDate={firstDate}
              views={{
                list: {
                  type: "multiMonthYear",
                  duration: { months: 2 },
                  titleFormat: { year: "numeric", month: "long" },
                },
              }}
              headerToolbar={{
                left: "title",
                center: "",
                right: "",
              }}
              showNonCurrentDates={true}
              weekends={true}
              events={events}
              editable={true}
              eventClick={(e) => getFullDetials(e)}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="full-calendar-sec full-calendar-listmonth bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
            <FullCalendar
              plugins={[multiMonthPlugin, listPlugin]}
              initialView="list"
              initialDate={firstDate}
              views={{
                list: {
                  type: "multiMonthYear",
                  duration: { months: 2 },
                  titleFormat: { year: "numeric", month: "long" },
                },
              }}
              headerToolbar={{
                left: "title",
                center: "",
                right: "",
              }}
              showNonCurrentDates={true}
              weekends={true}
              events={events}
              editable={true}
              eventClick={(e) => getFullDetials(e)}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="full-calendar-sec full-calendar-listmonth bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
            <FullCalendar
              plugins={[multiMonthPlugin, listPlugin]}
              initialView="list"
              initialDate={firstDate}
              views={{
                list: {
                  type: "multiMonthYear",
                  duration: { months: 2 },
                  titleFormat: { year: "numeric", month: "long" },
                },
              }}
              headerToolbar={{
                left: "title",
                center: "",
                right: "",
              }}
              showNonCurrentDates={true}
              weekends={true}
              events={events}
              editable={true}
              eventClick={(e) => getFullDetials(e)}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="full-calendar-sec full-calendar-listmonth bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
            <FullCalendar
              plugins={[multiMonthPlugin, listPlugin]}
              initialView="list"
              initialDate={firstDate}
              views={{
                list: {
                  type: "multiMonthYear",
                  duration: { months: 2 },
                  titleFormat: { year: "numeric", month: "long" },
                },
              }}
              headerToolbar={{
                left: "title",
                center: "",
                right: "",
              }}
              showNonCurrentDates={true}
              weekends={true}
              events={events}
              editable={true}
              eventClick={(e) => getFullDetials(e)}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="full-calendar-sec full-calendar-listmonth bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
            <FullCalendar
              plugins={[multiMonthPlugin, listPlugin]}
              initialView="list"
              initialDate={firstDate}
              views={{
                list: {
                  type: "multiMonthYear",
                  duration: { months: 2 },
                  titleFormat: { year: "numeric", month: "long" },
                },
              }}
              headerToolbar={{
                left: "title",
                center: "",
                right: "",
              }}
              showNonCurrentDates={true}
              weekends={true}
              events={events}
              editable={true}
              eventClick={(e) => getFullDetials(e)}
            />
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
}
