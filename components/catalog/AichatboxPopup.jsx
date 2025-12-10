"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function AiChatboxPopup({ open, onClose }) {
  const [isChatboxVisible, setIsChatboxVisible] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSuggestClick = () => {
    setIsChatboxVisible(true);
  };
  const handleSend = () => {
    if (userMessage.trim()) {
      // Add the user's message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userMessage, type: "user" },
      ]);

      setUserMessage(""); // Clear the input field

      // Simulate TonAI's reply after 2 seconds
      setLoading(true);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is TonAI's response!", type: "reply" },
        ]);
        setLoading(false); // Stop the loading after reply
      }, 2000);
    }
  };
  if (!open) return null;
  return (
    <div className="">
      {/* First section: "How can we help you?" */}

      {!isChatboxVisible ? (
        <>
          <div className="flex-1 ">
            <p className="font16 pl55 pt15">Return</p>
          </div>
          <div className="flex flex-col h-[95vh]">
            <div className="flex flex-col justify-center items-center text-center overflow-y-auto px100 mt60 custom-scroll">
              <Image
                src="/images/tonai-chat-box.svg"
                alt="TonAI"
                width={200}
                height={400}
              />
            </div>
            <div className="mt80 flex flex-col justify-center items-center text-center overflow-y-auto px100 custom-scroll">
              <p className="font32 font-500">How can we help you?</p>
              <p>
                I’ll help you discover the best AWS solution <br />
                based on what your business needs right now.
              </p>
            </div>
            {/* Buttons */}
            <div className="flex-1 flex gap-4 justify-center mt24 px15">
              <Button
                type="button"
                className="find-aws cursor-pointer px-2 py-3 font16 font-semibold"
              >
                Find AWS Products for My Business
              </Button>
              <Button
                type="button"
                className="find-help cursor-pointer px-2 py-3 font16 font-semibold"
              >
                Find Help for some problem
              </Button>
            </div>

            <div className="sticky bottom-4 bg-[#F5F6F8] border border-[#E5E7EB] rounded-[10px] m-[20px] border-t border-[#E5E7EB] px-6 py-6">
              <div className="relative w-full rounded-[10px] px-6 py-6 flex items-center gap-3 ">
                <textarea
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  placeholder="Hey, I’m looking for cloud services software to manage my company’s infrastructure. Can you help?"
                  className="w-full bg-transparent text-[18px] text-[#3C4146] outline-none min-h-[100px] max-h-[240px]  overflow-auto resize-none pr-2 scrollbar-chat"
                  rows={1}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                />
              </div>
              <div className="flex justify-between">
                <button
                  onClick={handleSend}
                  className="absolute left-[23px] bottom-[20px] w-35 h-10 flex items-center justify-center rounded-full hover:scale-105 transition-transform border border-[#7F8488] cursor-pointer"
                >
                  <Image
                    src="/assets/icons/lamp-on.svg"
                    alt="TonAI"
                    width={20}
                    height={40}
                    className="arrowleft"
                  />
                  <span className="text-[#7F8488] px-2">Suggest me</span>
                </button>
                <button
                  onClick={handleSuggestClick}
                  className="absolute right-[23px] bottom-[20px] w-10 h-10 flex items-center justify-center rounded-full hover:scale-105 transition-transform  bg-[#645592] cursor-pointer"
                >
                  <Image
                    src="/assets/icons/arrow-up.svg"
                    alt="TonAI"
                    width={20}
                    height={40}
                    className="arrowleft"
                  />
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        // Second section: The chat interface
        <div className="flex flex-col h-[95vh]">
          <div className="flex items-center justify-bewteen">
            <div className=" flex flex-col justify-center items-center text-center overflow-y-auto px100 custom-scroll">
              <Image
                src="/images/tonai-chat-box.svg"
                alt="TonAI"
                width={150}
                height={150}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-center mt24 px15">
              <Button
                type="button"
                className="find-aws cursor-pointer px-2 py-3 font16 font-semibold"
              >
                Find AWS Products for My Business
              </Button>
              <Button
                type="button"
                className="find-help cursor-pointer px-2 py-3 font16 font-semibold"
              >
                Find Help for some problem
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-2 custom-scroll">
            {/* Replace this with dynamically generated messages */}

            {/* <div className="flex justify-end mb-4">
              <div className="bg-transparent p-3 rounded-lg max-w-[70%] font14">
                <p className="text-[#3C4146]">
                  Hey, I&apos;m looking for cloud services software to manage my
                  company&apos;s infrastructure. Can you help?
                </p>
              </div>
            </div>
            <div className="flex justify-start mb-4">
              <div className="bg-gradient-to-r from-[#B5D7F8] to-[#F7E4EF] p-3 rounded-lg max-w-[70%] font14">
                <p className="text-[#3C4146]">
                  To begin, can you tell me a bit about your company? (Ex: how
                  many people work there, what kind of product you&apos;re
                  building, if you already use cloud services...)
                </p>
              </div>
            </div> */}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex mb-4 ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-lg max-w-[70%] font14 ${
                    msg.type === "user"
                      ? ""
                      : "bg-gradient-to-r from-[#F7E4EF] to-[#B5D7F8]"
                  }`}
                >
                  <p className="text-[#3C4146]">{msg.text}</p>
                </div>
              </div>
            ))}

            {/* Add more messages here */}
          </div>

          <div className="sticky bottom-4 bg-[#F5F6F8] border border-[#E5E7EB] rounded-[10px] m-[20px] border-t border-[#E5E7EB] px-6 py-6">
            <div className="relative w-full rounded-[10px] px-6 py-6 flex items-center gap-3 ">
              <textarea
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="We’re a 10-person company building a SaaS tool for small retailers."
                className="w-full bg-transparent text-[18px] text-[#3C4146] outline-none min-h-[100px] max-h-[240px]  overflow-auto resize-none pr-2 scrollbar-chat"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleSend}
                className="absolute left-[23px] bottom-[20px] w-35 h-10 flex items-center justify-center rounded-full hover:scale-105 transition-transform border border-[#7F8488] cursor-pointer"
              >
                <Image
                  src="/assets/icons/lamp-on.svg"
                  alt="TonAI"
                  width={20}
                  height={40}
                  className="arrowleft"
                />
                <span className="text-[#7F8488] px-2">Suggest me</span>
              </button>
              <button
                onClick={handleSend}
                className="absolute right-[23px] bottom-[20px] w-10 h-10 flex items-center justify-center rounded-full hover:scale-105 transition-transform  bg-[#645592] cursor-pointer"
              >
                <Image
                  src="/assets/icons/arrow-up.svg"
                  alt="TonAI"
                  width={20}
                  height={40}
                  className="arrowleft"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
