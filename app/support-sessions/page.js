"use client";

import React from "react";
import { NavBar } from "../layout/NavBar";
import { SupportSessionsHeader } from "@/components/support-sessions";
import ScheduleCalendarTable from "@/components/support-sessions/scheduleCalendarTable";
export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <div className="">
        {" "}
        {/* Added padding for fixed TopBar + NavBar */}
        <NavBar />
        <SupportSessionsHeader />
        <main className="flex-grow -mt-27 relative z-20 px-4 md:px-8 pb-10">
          {" "}
          {/* Negative margin to overlap Hero */}
          <ScheduleCalendarTable />
        </main>
      </div>
    </div>
  );
}
