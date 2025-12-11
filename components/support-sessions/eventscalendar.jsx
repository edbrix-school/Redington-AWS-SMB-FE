import { InputText } from "primereact/inputtext";
import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Checkbox } from "primereact/checkbox";
import CalenderPage from "../support-sessions/calendar";
import ListMonth from "../support-sessions/listmonth";
import moment from "moment";

export default function EventCalenderFilter(props) {
  const [activeTab, setActiveTab] = useState(0);
  //   const [monthTab, setMonthTab] = useState(0);
  const [year, setYear] = useState(new Date().getFullYear());
  //   const [searchEvent, setSearchEvent] = useState("");
  //   const [eventDetails, setEventDetails] = useState({});
  //   const [categories, setCategories] = useState([]);
  //   const [allCategroy, setAllCategory] = useState(false);
  //   const [categoryFilter, setCategoryFilter] = useState([]);
  // const [year, setYear] = useState('2024');
  const YearList = [
    { name: new Date().getFullYear() - 2, value: new Date().getFullYear() - 2 },
    { name: new Date().getFullYear() - 1, value: new Date().getFullYear() - 1 },
    { name: new Date().getFullYear(), value: new Date().getFullYear() },
    { name: new Date().getFullYear() + 1, value: new Date().getFullYear() + 1 },
  ];
  const [events, setEvents] = useState([]);

  //   const checkboxChecked = (index) => {
  //     console.log(index);
  //   };
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  //   const handleMonthClick = (index) => {
  //     setMonthTab(index);
  //   };

  return (
    <div className="grid gap-[29px] xl:gap-[1.510vw] relative z-[2]">
      <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
        <div className="grid gap-[36px] xl:gap-[1.875vw]">
          <div>
            <TabPanel>
              <CalenderPage
                events={events}
                year={year}
                // fetchsingleEvent={fetchsingleEvent}
                activeTab={activeTab}
              />
            </TabPanel>
            <TabPanel>
              <ListMonth
                events={events}
                year={year}
                // fetchsingleEvent={fetchsingleEvent}
                activeTab={activeTab}
              />
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
