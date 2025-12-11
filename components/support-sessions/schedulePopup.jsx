"use client";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import Image from "next/image";
import Link from "next/link";

import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

export default function SchedulePopup({ open, onClose }) {
  const [date, setDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [notes, setNotes] = useState("");
  const [selectedParticipants, setSelectedParticipants] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  if (!open) return null;
  const category = [
    { name: "Hardware Issue", code: "HW" },
    { name: "Software Issue", code: "SW" },
    { name: "Network Issue", code: "NW" },
    { name: "Access Request", code: "AR" },
    { name: "Email Issue", code: "EM" },
    { name: "Account Locked", code: "AL" },
    { name: "Password Reset", code: "PR" },
    { name: "System Outage", code: "SO" },
    { name: "Bug Report", code: "BR" },
    { name: "Other", code: "OT" },
  ];

  const slots = [
    { name: "9:00 AM - 10:00 AM", value: "9-10" },
    { name: "10:00 AM - 11:00 AM", value: "10-11" },
    { name: "11:00 AM - 12:00 PM", value: "11-12" },
  ];

  const participantsList = [
    { name: "Participant 1", value: "part1" },
    { name: "Participant 2", value: "part2" },
    { name: "Participant 3", value: "part3" },
  ];
  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form Submitted", {
      category,
      date,
      slot,
      notes,
      participants,
    });
    onClose();
  };
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="flex justify-between border-top-left-radius: 1rem ">
          <div className=" bg-[#fff] p24 rounded-tl-[10px]">
            <div className=" text-[#212325]  font24 font-bold">
              Schedule a Session
            </div>
          </div>
          <div className="p24 ">
            <Button label="Completed" className="schedule-status-btn" />
          </div>
        </div>
        <div className="bg-[#F6F7F8] dark:bg-[#1F2A37] flex-1 overflow-y-auto">
          <div className="">
            <div className="p24 spacey24">
              <div className="flex flex-col gap6">
                <label className="font14 font-medium text-InterfaceTexttitle1">
                  Category
                </label>

                <div className="grid grid-cols-1">
                  <div className="custom-dropdown">
                    <Dropdown
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.value)}
                      options={category}
                      optionLabel="name"
                      placeholder="Select a Category"
                      filterDelay={400}
                      filter
                      className="w-full dropdown-support-session"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap6">
                <label className="font14 font-medium text-InterfaceTexttitle1">
                  Date Created
                </label>

                <div className="grid grid-cols-1">
                  <div className="relative custom-input">
                    <Calendar
                      id="date"
                      value={date}
                      onChange={(e) => setDate(e.value)}
                      dateFormat="mm/dd/yy"
                      placeholder="Select Date"
                      className="w-full datepicker"
                    />
                    <div className="absolute right-3 top-[30%]">
                      {" "}
                      <Image
                        src="/images/calendar-icon.svg"
                        width="16"
                        height="16"
                        className="w-[12px] h-[12px] lg:w-[14px] lg:h-[14px]"
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap6">
                <label className="font14 font-medium text-InterfaceTexttitle1">
                  Available Slots
                </label>

                <div className="grid grid-cols-1">
                  <div className="custom-dropdown">
                    <Dropdown
                      value={selectedSlot}
                      onChange={(e) => setSelectedSlot(e.value)}
                      options={slots}
                      optionLabel="name"
                      placeholder="Select Slot"
                      filterDelay={400}
                      filter
                      className="w-full dropdown-support-session"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap6">
                <label className="font14 font-medium text-InterfaceTexttitle1">
                  Notes
                </label>

                <div className="grid grid-cols-1">
                  <div className="custom-dropdown">
                    <InputTextarea
                      id="notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Type Description ..."
                      maxLength={50}
                      rows={5}
                      className="w-full description-textarea"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap6">
                <label className="font14 font-medium text-InterfaceTexttitle1">
                  Select Participants
                </label>

                <div className="grid grid-cols-1">
                  <div className="custom-dropdown">
                    <Dropdown
                      value={selectedParticipants}
                      onChange={(e) => setSelectedParticipants(e.value)}
                      options={participantsList}
                      optionLabel="name"
                      placeholder="Select Participants"
                      filterDelay={400}
                      filter
                      className="w-full dropdown-support-session"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 left-0 flex-none">
          <div className="bg-[#fff] dark:bg-[#111928] p-[16px] xl:p-[16px] 3xl:p-[0.833vw] flex justify-end gap-4 rounded-bl-[10px]">
            <div className=" text-[#3C4146] font16 font-[500] py10 px20  border-solid border border-[#E5E7EB] rounded-lg   cursor-pointer cancel-btn-bg hover:bg-[#f6f6f7]">
              <Link onClick={onClose} href={""}>
                Cancel
              </Link>
            </div>

            <div
              onClick={() => setShow(true)}
              className="font16 font-[500] py10 px20  border-[#645592] rounded-lg bg-[#645592]  cursor-pointer text-[#fff]"
            >
              Save
            </div>
          </div>
        </div>
      </div>
    </>
    // <div>
    //   <div className="flex items-center justify-between">
    //     <h3 className="scheduleSession">Schedule a Session</h3>
    //     <Button label="Completed" className="schedule-status-btn" />
    //   </div>

    //   <div className="flex-1 flex flex-col p-fluid mt40 mb-[80px]">
    //     {/* Category Dropdown */}
    //     <div className="field mt-4">
    //       <label htmlFor="category" className="support-session-label">
    //         Category
    //       </label>
    //       <Dropdown
    //         id="category"
    //         value={category}
    //         onChange={(e) => setCategory(e.value)}
    //         options={categories}
    //         optionLabel="label"
    //         placeholder="Select Category"
    //         className="w-full dropdown-support-session"
    //       />
    //     </div>

    //     {/* Date Picker */}
    //     <div className="field mt-4">
    //       <label htmlFor="date" className="support-session-label">
    //         Date
    //       </label>
    //       <Calendar
    //         id="date"
    //         value={date}
    //         onChange={(e) => setDate(e.value)}
    //         dateFormat="mm/dd/yy"
    //         placeholder="Select Date"
    //         className="w-full datepicker"
    //       />
    //     </div>

    //     {/* Slot Dropdown */}
    //     <div className="field mt-4">
    //       <label htmlFor="slot" className="support-session-label">
    //         Available Slots
    //       </label>
    //       <Dropdown
    //         id="slot"
    //         value={slot}
    //         onChange={(e) => setSlot(e.value)}
    //         options={slots}
    //         optionLabel="label"
    //         placeholder="Select Slot"
    //         className="w-full dropdown-support-session"
    //       />
    //     </div>

    //     {/* Notes Textarea */}
    //     <div className="field mt-4">
    //       <label htmlFor="notes" className="support-session-label">
    //         Notes
    //       </label>
    //       <InputTextarea
    //         id="notes"
    //         value={notes}
    //         onChange={(e) => setNotes(e.target.value)}
    //         placeholder="Type Description ..."
    //         maxLength={50}
    //         rows={5}
    //         className="w-full description-textarea"
    //       />
    //     </div>

    //     {/* Participants Dropdown */}
    //     <div className="field mt-4">
    //       <label htmlFor="participants" className="support-session-label">
    //         Select Participants
    //       </label>
    //       <Dropdown
    //         id="participants"
    //         value={participants}
    //         onChange={(e) => setParticipants(e.value)}
    //         options={participantsList}
    //         optionLabel="label"
    //         placeholder="Select Participants"
    //         className="w-full dropdown-support-session"
    //       />
    //     </div>
    //   </div>
    //   <div className="fixed bottom-0 right-0 flex justify-end gap-2 m-4">
    //     <Button label="Cancel" className="cancel-btn" onClick={onClose} />
    //     <Button label="Submit" className="submit-btn" onClick={handleSubmit} />
    //   </div>
    // </div>
  );
}
