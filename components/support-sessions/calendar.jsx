import React, { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import multiMonthPlugin from "@fullcalendar/multimonth";
import dayGridPlugin from "@fullcalendar/daygrid";
import moment from "moment";

const CalenderPage = (props) => {
  const { events, fetchsingleEvent, year } = props;
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const getFullDetials = (event) => {
    fetchsingleEvent(event.event.id);
  };

  const [loadCalendar, setLoadCalendar] = useState(false);

  useEffect(() => {
    handleTabClick(0);
  }, [year]);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLoadCalendar(true);
    }, 200);
    return () => clearTimeout(timeoutId);
  }, []);

  const eventRender = (eventd) => {
    const { event } = eventd;
    const timeText = event.title.split("[start_time]");
    let formattedTime = "";
    if (timeText.length > 1) {
      formattedTime = new Date(timeText[1]).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      formattedTime = formattedTime.replace("p.m.", "pm").replace("a.m.", "am");
    }

    // Get color class from extendedProps (passed from parent) or default
    const colorClass = event.extendedProps?.colorClass || "bg-gray-100 text-gray-700";

    // Safety check for title format
    const displayTitle = timeText.length > 1 ? timeText[2] : event.title;

    return (
      <div className={`flex flex-col gap-0.5 w-full rounded px-1 py-0.5 overflow-hidden ${colorClass}`}>
        <div className="flex items-center gap-1 text-[10px] leading-tight font-medium">
          <span className="font-bold whitespace-nowrap">{formattedTime}</span>
          <span className="truncate">{displayTitle}</span>
        </div>
      </div>
    );
  };

  const MonthCalendar = ({ date, eventsList }) => {
    const monthLabel = moment(date).format("MMMM YYYY");
    return (
      <div className="mb-8">
        <div className="bg-[#F5F6F7] px-4 py-3 rounded-t-lg flex justify-between items-center border border-b-0 border-[#E5E7EB]">
          <span className="font-semibold text-[#19212A] text-lg">{monthLabel}</span>
          <span className="text-[#9EA3AA] text-sm italic">Total of Events: {eventsList.length}</span>
        </div>
        <div className="bg-white p-0 border border-[#E5E7EB] rounded-b-lg overflow-hidden custom-daygrid">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            initialDate={date}
            headerToolbar={false}
            dayHeaders={false}
            weekNumbers={true}
            weekNumberContent={(arg) => {
              return <div className="text-[10px] text-gray-400 font-medium pt-2">WEEK {arg.num}</div>
            }}
            dayCellContent={(arg) => {
              const dayName = moment(arg.date).format("ddd");
              return (
                <div className="flex items-start gap-1 p-2 text-sm text-[#5D636B]">
                  <span className="">{arg.dayNumberText}</span>
                  <span className="">{dayName}.</span>
                </div>
              )
            }}
            events={eventsList}
            eventContent={eventRender}
            height="auto"
            showNonCurrentDates={false}
            fixedWeekCount={false}
          />
        </div>
      </div>
    )
  }

  // Helper to get events for a specific month
  const getEventsForMonth = (dateStr) => {
    const m = moment(dateStr);
    return events.filter(e => {
      const eDate = moment(e.start || e.date);
      return eDate.isSame(m, 'month') && eDate.isSame(m, 'year');
    });
  }

  // Render logic for each tab panels content
  const renderTabContent = (tabIndex) => {
    if (!loadCalendar) return null;
    const startMonthIndex = tabIndex * 2;
    const firstMonthDate = moment([year, startMonthIndex]).startOf('month').format("YYYY-MM-DD");
    const secondMonthDate = moment([year, startMonthIndex + 1]).startOf('month').format("YYYY-MM-DD");

    const firstEvents = getEventsForMonth(firstMonthDate);
    const secondEvents = getEventsForMonth(secondMonthDate);

    return (
      <div className="full-calendar-sec bg-white py-[16px] xl:py-[1.25vw] px-[12px] xl:px-[0.833vw] h-[750px] overflow-y-auto custom-scroll">
        <MonthCalendar date={firstMonthDate} eventsList={firstEvents} />
        <MonthCalendar date={secondMonthDate} eventsList={secondEvents} />
      </div>
    )
  }

  return (
    <div>
      <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
        <TabList>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            <Tab>
              <div
                className={`text-[14px] lg:text-[16px] xl:text-[0.833vw] font-medium py-[10px] lg:py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer first-mon-custom
                     ${activeTab == 0
                    ? "text-[#FFF] bg-[#0F1F38] rounded-t-[8px]"
                    : "text-[#9CA1AB] bg-[#F5F6F7]"
                  }`}
              >
                Jan / Feb
              </div>
            </Tab>
            <Tab>
              <div
                className={`text-[14px] lg:text-[16px] xl:text-[0.833vw] font-medium py-[10px] lg:py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                     ${activeTab == 1
                    ? "text-[#FFF] bg-[#0F1F38]  rounded-t-[8px]"
                    : "text-[#9CA1AB] bg-[#F5F6F7]"
                  }`}
              >
                Mar / Apr
              </div>
            </Tab>
            <Tab>
              <div
                className={`text-[14px] lg:text-[16px] xl:text-[0.833vw] font-medium py-[10px] lg:py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                     ${activeTab == 2
                    ? "text-[#FFF] bg-[#0F1F38] rounded-t-[8px]"
                    : "text-[#9CA1AB] bg-[#F5F6F7]"
                  }`}
              >
                May / Jun
              </div>
            </Tab>
            <Tab>
              <div
                className={`text-[14px] lg:text-[16px] xl:text-[0.833vw] font-medium py-[10px] lg:py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                     ${activeTab == 3
                    ? "text-[#FFF] bg-[#0F1F38] rounded-t-[8px]"
                    : "text-[#9CA1AB] bg-[#F5F6F7]"
                  }`}
              >
                Jul / Aug
              </div>
            </Tab>
            <Tab>
              <div
                className={`text-[14px] lg:text-[16px] xl:text-[0.833vw] font-medium py-[10px] lg:py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer
                     ${activeTab == 4
                    ? "text-[#FFF] bg-[#0F1F38] rounded-t-[8px]"
                    : "text-[#9CA1AB] bg-[#F5F6F7]"
                  }`}
              >
                Sep / Oct
              </div>
            </Tab>
            <Tab>
              <div
                className={`text-[14px] lg:text-[16px] xl:text-[0.833vw] font-medium py-[10px] lg:py-[20px] xl:py-[1.042vw] xl:px-[1.875vw] px-[36px] text-center cursor-pointer last-mon-custom
                     ${activeTab == 5
                    ? "text-[#FFF] bg-[#0F1F38] rounded-t-[8px]"
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
            {renderTabContent(0)}
          </TabPanel>
          <TabPanel>
            {renderTabContent(1)}
          </TabPanel>
          <TabPanel>
            {renderTabContent(2)}
          </TabPanel>
          <TabPanel>
            {renderTabContent(3)}
          </TabPanel>
          <TabPanel>
            {renderTabContent(4)}
          </TabPanel>
          <TabPanel>
            {renderTabContent(5)}
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};
export default CalenderPage;
