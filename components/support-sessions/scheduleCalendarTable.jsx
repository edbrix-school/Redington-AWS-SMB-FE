"use client";

import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar"; // Import Sidebar
import SchedulePopup from "./schedulePopup";
export default function ScheduleCalendarTable() {
  const [visible, setVisible] = useState(false);

  const showSidebar = () => {
    setVisible(true);
  };

  const hideSidebar = () => {
    setVisible(false);
  };
  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <div className="p-4">
        <button type="button" onClick={showSidebar}>
          Open Sidebar
        </button>
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
  );
}
