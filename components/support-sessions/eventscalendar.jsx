import { InputText } from "primereact/inputtext";
import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import CalenderPage from "../support-sessions/calendar";
import moment from "moment";

export default function EventCalenderFilter(props) {
  const [activeTab, setActiveTab] = useState(0);
  //   const [monthTab, setMonthTab] = useState(0);
  // const [year, setYear] = useState(new Date().getFullYear());
  //   const [searchEvent, setSearchEvent] = useState("");
  //   const [eventDetails, setEventDetails] = useState({});
  //   const [categories, setCategories] = useState([]);
  //   const [allCategroy, setAllCategory] = useState(false);
  //   const [categoryFilter, setCategoryFilter] = useState([]);
  const [year, setYear] = useState("2025");
  const YearList = [
    { name: new Date().getFullYear() - 2, value: new Date().getFullYear() - 2 },
    { name: new Date().getFullYear() - 1, value: new Date().getFullYear() - 1 },
    { name: new Date().getFullYear(), value: new Date().getFullYear() },
    { name: new Date().getFullYear() + 1, value: new Date().getFullYear() + 1 },
  ];
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Generate mock events for all months
    const y = year;
    const generatedEvents = [];

    const colors = [
      { class: "bg-[#F3E8FF] text-[#7E22CE]" }, // Purple
      { class: "bg-[#ECFDF5] text-[#047857]" }, // Green
      { class: "bg-[#EFF6FF] text-[#1D4ED8]" }, // Blue
      { class: "bg-[#FFFbeb] text-[#B45309]" }, // Orange
    ];

    for (let m = 0; m < 12; m++) {
      // Generate random number of events per month (e.g., 3 to 8)
      const numEvents = Math.floor(Math.random() * 6) + 3;

      for (let i = 0; i < numEvents; i++) {
        // Random day 1-28 to be safe
        const day = Math.floor(Math.random() * 27) + 1;
        const hour = Math.floor(Math.random() * 12) + 6; // 6am to 6pm
        const min = Math.random() > 0.5 ? "00" : "30";
        const color = colors[Math.floor(Math.random() * colors.length)];
        const id = Math.floor(Math.random() * 899999) + 100000;

        // Format: YYYY-MM-DDTHH:mm:ss
        const monthStr = (m + 1).toString().padStart(2, "0");
        const dayStr = day.toString().padStart(2, "0");
        const startTime = `${y}-${monthStr}-${dayStr}T${hour
          .toString()
          .padStart(2, "0")}:${min}:00`;

        generatedEvents.push({
          start: startTime,
          title: `[start_time]${startTime}[start_time]SR-${id}`,
          // You can add more data fields here (they will be available in event.extendedProps)
          // Example: customField: "My extra data",
          colorClass: color.class,
        });
      }
    }

    setEvents(generatedEvents);
  }, [year]);

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
    <div className="grid mt-[20px] lg:mt-[0.10vw] xl:mt-[0.9vw] 2xl:mt-[0vw] 3xl:-mt-[0vw] gap-[29px] lg:gap-[29px] xl:gap-[1.510vw] 2xl:gap-[1.510vw] 3xl:gap-[1.510vw] relative z-[2]">
      <div className="grid gap-[36px] xl:gap-[1.875vw]">
        <div>
          <CalenderPage events={events} year={year} activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}
