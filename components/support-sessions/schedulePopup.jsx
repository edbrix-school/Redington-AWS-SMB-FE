"use client";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

export default function SchedulePopup({ open, onClose }) {
  const [category, setCategory] = useState(null);
  const [date, setDate] = useState(null);
  const [slot, setSlot] = useState(null);
  const [notes, setNotes] = useState("");
  const [participants, setParticipants] = useState(null);
  if (!open) return null;
  const categories = [
    { label: "Category 1", value: "cat1" },
    { label: "Category 2", value: "cat2" },
    { label: "Category 3", value: "cat3" },
  ];

  const slots = [
    { label: "9:00 AM - 10:00 AM", value: "9-10" },
    { label: "10:00 AM - 11:00 AM", value: "10-11" },
    { label: "11:00 AM - 12:00 PM", value: "11-12" },
  ];

  const participantsList = [
    { label: "Participant 1", value: "part1" },
    { label: "Participant 2", value: "part2" },
    { label: "Participant 3", value: "part3" },
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
    <div>
      <div className="flex items-center justify-between">
        <h3 className="scheduleSession">Schedule a Session</h3>
        <Button label="Completed" className="schedule-status-btn" />
      </div>

      <div className="flex-1 flex flex-col p-fluid mt40 mb-[80px]">
        {/* Category Dropdown */}
        <div className="field mt-4">
          <label htmlFor="category" className="support-session-label">
            Category
          </label>
          <Dropdown
            id="category"
            value={category}
            onChange={(e) => setCategory(e.value)}
            options={categories}
            optionLabel="label"
            placeholder="Select Category"
            className="w-full dropdown-support-session"
          />
        </div>

        {/* Date Picker */}
        <div className="field mt-4">
          <label htmlFor="date" className="support-session-label">
            Date
          </label>
          <Calendar
            id="date"
            value={date}
            onChange={(e) => setDate(e.value)}
            dateFormat="mm/dd/yy"
            placeholder="Select Date"
            className="w-full datepicker"
          />
        </div>

        {/* Slot Dropdown */}
        <div className="field mt-4">
          <label htmlFor="slot" className="support-session-label">
            Available Slots
          </label>
          <Dropdown
            id="slot"
            value={slot}
            onChange={(e) => setSlot(e.value)}
            options={slots}
            optionLabel="label"
            placeholder="Select Slot"
            className="w-full dropdown-support-session"
          />
        </div>

        {/* Notes Textarea */}
        <div className="field mt-4">
          <label htmlFor="notes" className="support-session-label">
            Notes
          </label>
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

        {/* Participants Dropdown */}
        <div className="field mt-4">
          <label htmlFor="participants" className="support-session-label">
            Select Participants
          </label>
          <Dropdown
            id="participants"
            value={participants}
            onChange={(e) => setParticipants(e.value)}
            options={participantsList}
            optionLabel="label"
            placeholder="Select Participants"
            className="w-full dropdown-support-session"
          />
        </div>
      </div>
      <div className="fixed bottom-0 right-0 flex justify-end gap-2 m-4">
        <Button label="Cancel" className="cancel-btn" onClick={onClose} />
        <Button label="Submit" className="submit-btn" onClick={handleSubmit} />
      </div>
    </div>
  );
}
