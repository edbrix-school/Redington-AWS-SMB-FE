import React, { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import multiMonthPlugin from "@fullcalendar/multimonth";
import moment from "moment";

const CalenderPage = (props) => {
  const { events, fetchsingleEvent, year } = props;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const firstDate = moment([year, activeTab * 2]).format("YYYY-MM-DD");
  const month = new Date();
  const monthName = month.getMonth();
  const getFullDetials = (event) => {
    fetchsingleEvent(event.event.id);
  };

  const eventRender = (eventd) => {
    const { event, timeText } = eventd;
    console.log("event-------->event", event.title);

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

  // const eventRender = ({ event, timeText }) => {
  //   let formattedTime = event.start.toLocaleTimeString('en-US', {
  //     hour: 'numeric',
  //     minute: 'numeric',
  //     hour12: true, // To use 12-hour format
  //   });

  //   formattedTime = formattedTime.replace('p.m.', 'PM').replace('a.m.', 'AM');
  //   const returnConcatedText = event.title.length > 15 ? event.title.substring(0,15) + '...' : event.title
  //   return (
  //     <div>
  //       {!event.allDay && <span>{formattedTime} </span>}
  //       <span>{returnConcatedText}</span>
  //     </div>
  //   );
  // };

  const [loadCalendar, setLoadCalendar] = useState(false);
  useEffect(() => {
    handleTabClick(0);
    let timeoutId = setTimeout(() => {
      setLoadCalendar(true);
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [props]);

  useEffect(() => {
    // if(activeTab === 0){
    //   // Setting active tab other than available tabs for loading calendar after changing year
    //   setActiveTab(15)
    // }
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
    <div>
      <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
        <TabList>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            <Tab>
              <div
                className={`text-[14px] lg:text-[16px] xl:text-[0.833vw] font-medium py-[10px] lg:py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
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
                className={`text-[14px] lg:text-[16px] xl:text-[0.833vw] font-medium py-[10px] lg:py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
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
                className={`text-[14px] lg:text-[16px] xl:text-[0.833vw] font-medium py-[10px] lg:py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
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
                className={`text-[14px] lg:text-[16px] xl:text-[0.833vw] font-medium py-[10px] lg:py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
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
                className={`text-[14px] lg:text-[16px] xl:text-[0.833vw] font-medium py-[10px] lg:py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
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
                className={`text-[14px] lg:text-[16px] xl:text-[0.833vw] font-medium py-[10px] lg:py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
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
            <div className="full-calendar-sec full-calendar-month bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
              {loadCalendar && (
                <FullCalendar
                  plugins={[multiMonthPlugin]}
                  initialView="multiMonthYear"
                  initialDate={firstDate}
                  multiMonthMaxColumns="1"
                  views={{
                    multiMonthYear: {
                      type: "multiMonthYear",
                      duration: { months: 2 },
                      titleFormat: { year: "numeric", month: "long" },
                      //   visibleRange: {
                      //     start: `${year}-01-01`, // March 1, 2023
                      //     end: `${year}-02-29`, // April 30, 2023
                      //   },
                    },
                  }}
                  headerToolbar={{
                    left: "",
                    center: "",
                    right: "",
                  }}
                  showNonCurrentDates={true}
                  eventClick={(e) => getFullDetials(e)}
                  weekends={true}
                  weekNumbers={true}
                  events={events}
                  editable={true}
                  eventContent={eventRender}
                />
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="full-calendar-sec full-calendar-month bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
              {loadCalendar && (
                <FullCalendar
                  plugins={[multiMonthPlugin]}
                  initialView="multiMonthYear"
                  initialDate={firstDate}
                  multiMonthMaxColumns="1"
                  views={{
                    multiMonthYear: {
                      type: "multiMonthYear",
                      duration: { months: 2 },
                      titleFormat: { year: "numeric", month: "long" },
                      // visibleRange: {
                      //   start: `${year}-01-01`, // March 1, 2023
                      //   end: `${year}-02-29`,   // April 30, 2023
                      // },
                    },
                  }}
                  headerToolbar={{
                    left: "",
                    center: "",
                    right: "",
                  }}
                  showNonCurrentDates={true}
                  eventClick={(e) => getFullDetials(e)}
                  weekends={true}
                  events={events}
                  editable={true}
                />
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="full-calendar-sec full-calendar-month bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
              {loadCalendar && (
                <FullCalendar
                  plugins={[multiMonthPlugin]}
                  initialView="multiMonthYear"
                  initialDate={firstDate}
                  multiMonthMaxColumns="1"
                  views={{
                    multiMonthYear: {
                      type: "multiMonthYear",
                      duration: { months: 2 },
                      titleFormat: { year: "numeric", month: "long" },
                      // visibleRange: {
                      //   start: `${year}-01-01`, // March 1, 2023
                      //   end: `${year}-02-29`,   // April 30, 2023
                      // },
                    },
                  }}
                  headerToolbar={{
                    left: "",
                    center: "",
                    right: "",
                  }}
                  showNonCurrentDates={true}
                  eventClick={(e) => getFullDetials(e)}
                  weekends={true}
                  events={events}
                  editable={true}
                />
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="full-calendar-sec full-calendar-month bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
              {loadCalendar && (
                <FullCalendar
                  plugins={[multiMonthPlugin]}
                  initialView="multiMonthYear"
                  initialDate={firstDate}
                  multiMonthMaxColumns="1"
                  views={{
                    multiMonthYear: {
                      type: "multiMonthYear",
                      duration: { months: 2 },
                      titleFormat: { year: "numeric", month: "long" },
                      // visibleRange: {
                      //   start: `${year}-01-01`, // March 1, 2023
                      //   end: `${year}-02-29`,   // April 30, 2023
                      // },
                    },
                  }}
                  headerToolbar={{
                    left: "",
                    center: "",
                    right: "",
                  }}
                  showNonCurrentDates={true}
                  eventClick={(e) => getFullDetials(e)}
                  weekends={true}
                  events={events}
                  editable={true}
                />
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="full-calendar-sec full-calendar-month bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
              {loadCalendar && (
                <FullCalendar
                  plugins={[multiMonthPlugin]}
                  initialView="multiMonthYear"
                  initialDate={firstDate}
                  multiMonthMaxColumns="1"
                  views={{
                    multiMonthYear: {
                      type: "multiMonthYear",
                      duration: { months: 2 },
                      titleFormat: { year: "numeric", month: "long" },
                      // visibleRange: {
                      //   start: `${year}-01-01`, // March 1, 2023
                      //   end: `${year}-02-29`,   // April 30, 2023
                      // },
                    },
                  }}
                  headerToolbar={{
                    left: "",
                    center: "",
                    right: "",
                  }}
                  showNonCurrentDates={true}
                  eventClick={(e) => getFullDetials(e)}
                  weekends={true}
                  events={events}
                  editable={true}
                />
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="full-calendar-sec full-calendar-month bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw]">
              {loadCalendar && (
                <FullCalendar
                  plugins={[multiMonthPlugin]}
                  initialView="multiMonthYear"
                  initialDate={firstDate}
                  multiMonthMaxColumns="1"
                  views={{
                    multiMonthYear: {
                      type: "multiMonthYear",
                      duration: { months: 2 },
                      titleFormat: { year: "numeric", month: "long" },
                      // visibleRange: {
                      //   start: `${year}-01-01`, // March 1, 2023
                      //   end: `${year}-02-29`,   // April 30, 2023
                      // },
                    },
                  }}
                  headerToolbar={{
                    left: "",
                    center: "",
                    right: "",
                  }}
                  showNonCurrentDates={true}
                  eventClick={(e) => getFullDetials(e)}
                  weekends={true}
                  events={events}
                  editable={true}
                />
              )}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default CalenderPage;
