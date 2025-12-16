"use client";
// import Image from "next/image";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { Roboto } from "next/font/google";
import { Card } from "primereact/card";
import Image from "next/image";




const roboto = Roboto({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  variable: "--font-nunito",  

});
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

  const TAGS = ["Web Hosting", "Security"];
  return (
    
    <div className={`${roboto.variable} `}>
      <div className="h-screen flex flex-col   ">
    
      {!isChatboxVisible ? (
     <>
  
  <div className="h-screen flex flex-col">

    
    <div className="sticky top-0 z-20 shrink-0 bg-white p24">
      <div className="flex gap6 cursor-pointer">
        <Image
          src="/assets/arrow-left.svg"
          alt="TonAI"
          width={20}
          height={20}
          className="w15"
        />
        <p className="font16 text-[#3C4146]">Return</p>
      </div>
    </div>

    
    <div className="flex-1 overflow-y-auto p24">

      <div className="flex flex-col justify-center items-center text-center px100 mt40">
        <Image
          src="/images/tonai-chat-box.svg"
          alt="TonAI"
          width={180}
          height={350}
        />
      </div>

      <div className="mt80 flex flex-col justify-center items-center text-center px100">
        <p className="font32 font-500 text-[#3C4146]">
          How can we help you?
        </p>
        <p className="text-[#7F8488] font18 leading-[110%] font-[300] mt6">
          I’ll help you discover the best AWS solution <br />
          based on what your business needs right now.
        </p>
      </div>

      <div className="grid grid-cols-2 gap20 px20 mt40">
        <div className="col-span-1">
          <Button
            type="button"
            className="find-aws cursor-pointer font16 font-semibold w-full"
          >
            Find AWS Products for My Business
          </Button>
        </div>

        <div className="col-span-1">
          <Button
            type="button"
            className="find-help cursor-pointer font16 font-semibold w-full"
          >
            Find AWS Products for My Business
          </Button>
        </div>
      </div>

    </div>

    {/* FOOTER — FIXED AT BOTTOM */}
    <div className="shrink-0 px20 py16 bg-white">
      <div className="relative bg-[#F5F6F8] border rounded-[10px] border-[#E5E7EB] px-6 py-6">

        <div className="relative w-full rounded-[10px] flex items-center gap-3">
          <textarea
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Hey, I’m looking for cloud services software to manage my company’s infrastructure. Can you help?"
            className="w-full bg-transparent font18 text-[#3C4146] outline-none min-h-[90px] xl:min-h-[100px] 2xl:min-h-[110px] max-h-[220px] overflow-auto resize-none pr-2 scrollbar-chat"
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
            className="absolute left-[23px] gap6 bottom-[20px] w-[150px] xl:w-[150px] 3xl:w-[7.333vw] h-10 flex items-center justify-center rounded-full border border-[#7F8488] cursor-pointer"
          >
            <Image
              src="/assets/icons/lamp-on.svg"
              alt="TonAI"
              width={20}
              height={40}
              className="arrowleft"
            />
            <span className="text-[#7F8488]">Suggest me</span>
          </button>

          <button
            onClick={handleSuggestClick}
            className="absolute right-[23px] bottom-[20px] w-10 h-10 flex items-center justify-center rounded-full hover:scale-105 transition-transform bg-[#645592] cursor-pointer"
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

  </div>
</>

      ) : (
       <div className="p24 bg-[#F5F6F8] "> 
        <div className="flex flex-col spacey20 ">
          <div className="flex items-center justify-between">
            
            <div className=" flex items-center gap20 ">
              <div className="flex  cursor-pointer">
        <Image
          src="/assets/arrow-left.svg"
          alt="TonAI"
          width={20}
          height={20}
          className="w15"
        />
        
      </div>
              <Image
                src="/images/tonai-chat-box.svg"
                alt="TonAI"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center ">
              <Button
                type="button"
                className="chatfind-aws cursor-pointer px-2 py6 font14 font-semibold"
              >
                Find AWS Products for My Business
              </Button>
              <Button
                type="button"
                className="chatfind-aws cursor-pointer px-2 py6 font14 font-semibold"
              >
                Find Help for some problem
              </Button>
            </div>
          </div>
         
          <div className="spacey20">

  
  <div className="flex w-[75%]">
    <div className="chat-reply-bubble px20 py12 rounded8 rounded-tr-none flex justify-start">
      To begin, can you tell me a bit about your company?
      (Ex: how many people work there, what kind of product you're building,
      if you already use cloud services...)
    </div>
  </div>


  <div className="flex w-[75%] ml-auto">
    <div className="bg-[#fff] px20 py12 rounded8 rounded-tl-none flex justify-end">
      We’re a 10-person company building a SaaS tool for small retailers.
    </div>
  </div>
  <div className="flex w-[75%]">
    <div className="chat-reply-bubble px20 py12 rounded8 rounded-tr-none flex justify-start">
      To begin, can you tell me a bit about your company?
      (Ex: how many people work there, what kind of product you're building,
      if you already use cloud services...)
    </div>
  </div>


  <div className="flex w-[75%] ml-auto">
    <div className="bg-[#fff] px20 py12 rounded8 rounded-tl-none flex justify-end">
      We’re a 10-person company building a SaaS tool for small retailers.
    </div>
  </div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap20 pb-[100px]">  
  
 <Card
  className="
    advertising-card flex flex-col relative
    group rounded-2xl p-4 bg-white shadow-sm cursor-pointer
    transition-all duration-300
    hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]
  "
>
  <div className="flex-1">
    <div className="flex flex-wrap gap-2">
      {TAGS.map((tag) => (
        <span
          className="
            rounded-sm px-2 py-[3px] text-[10px] uppercase font-semibold
            bg-[#F5F6F8] border border-transparent text-interface-text-default
            transition-all duration-200
            hover:border-[#d1d5db] hover:bg-[#d1d5db]
          "
        >
          {tag}
        </span>
      ))}
    </div>

    <h4 className="my-[30px] font-inter text-[16px] font-semibold leading-[22px] text-interface-text-title">
      AWS Amplify
    </h4>

    <p className="mt-2 line-clamp-3 font-inter text-[12px] leading-[18px] text-interface-text-subtitle">
      Redington&apos;s AI-powered solution on AWS that automates
      and personalizes teaching, assessment, and feedback-enabling
      scalable, efficient and student-centric education for
      schools and universities.
    </p>
  </div>

  {/* BUTTON — FORCE BOTTOM RIGHT */}
  <div className="absolute bottom-4 right-4">
    <button
      type="button"
      className="
        flex h-8 w-8 items-center justify-center rounded-md bg-[#42536D]
        text-white transition-all duration-300
      "
    >
      <Image
        src="/assets/icons/arrow-right.svg"
        alt="arrow"
        width={20}
        height={20}
      />
    </button>
  </div>
</Card>

              <Card
  className="
    advertising-card flex flex-col relative
    group rounded-2xl p-4 bg-white shadow-sm cursor-pointer
    transition-all duration-300
    hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]
  "
>
  <div className="flex-1">
    <div className="flex flex-wrap gap-2">
      {TAGS.map((tag) => (
        <span
          className="
            rounded-sm px-2 py-[3px] text-[10px] uppercase font-semibold
            bg-[#F5F6F8] border border-transparent text-interface-text-default
            transition-all duration-200
            hover:border-[#d1d5db] hover:bg-[#d1d5db]
          "
        >
          {tag}
        </span>
      ))}
    </div>

    <h4 className="my-[30px] font-inter text-[16px] font-semibold leading-[22px] text-interface-text-title">
     Amazon RDS
    </h4>

    <p className="mt-2 line-clamp-3 font-inter text-[12px] leading-[18px] text-interface-text-subtitle">
      Redington&apos;s AI-powered solution on AWS that automates
      and personalizes teaching, assessment, and feedback-enabling
      scalable, efficient and student-centric education for
      schools and universities.
    </p>
  </div>

  {/* BUTTON — FORCE BOTTOM RIGHT */}
  <div className="absolute bottom-4 right-4">
    <button
      type="button"
      className="
        flex h-8 w-8 items-center justify-center rounded-md bg-[#42536D]
        text-white transition-all duration-300
      "
    >
      <Image
        src="/assets/icons/arrow-right.svg"
        alt="arrow"
        width={20}
        height={20}
      />
    </button>
  </div>
</Card>
<Card
  className="
    advertising-card flex flex-col relative
    group rounded-2xl p-4 bg-white shadow-sm cursor-pointer
    transition-all duration-300
    hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]
  "
>
  <div className="flex-1">
    <div className="flex flex-wrap gap-2">
      {TAGS.map((tag) => (
        <span
          className="
            rounded-sm px-2 py-[3px] text-[10px] uppercase font-semibold
            bg-[#F5F6F8] border border-transparent text-interface-text-default
            transition-all duration-200
            hover:border-[#d1d5db] hover:bg-[#d1d5db]
          "
        >
          {tag}
        </span>
      ))}
    </div>

    <h4 className="my-[30px] font-inter text-[16px] font-semibold leading-[22px] text-interface-text-title">
     Amazon SNS
    </h4>

    <p className="mt-2 line-clamp-3 font-inter text-[12px] leading-[18px] text-interface-text-subtitle">
      Redington&apos;s AI-powered solution on AWS that automates
      and personalizes teaching, assessment, and feedback-enabling
      scalable, efficient and student-centric education for
      schools and universities.
    </p>
  </div>

  {/* BUTTON — FORCE BOTTOM RIGHT */}
  <div className="absolute bottom-4 right-4">
    <button
      type="button"
      className="
        flex h-8 w-8 items-center justify-center rounded-md bg-[#42536D]
        text-white transition-all duration-300
      "
    >
      <Image
        src="/assets/icons/arrow-right.svg"
        alt="arrow"
        width={20}
        height={20}
      />
    </button>
  </div>
</Card>

    </div>
</div>

        <div className="sticky bottom-8 bg-[#F5F6F8] border  rounded-[10px]  border-t border-[#E5E7EB] px-6 py-6">
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
        </div>
      )}
    </div>
    </div>
  );
}
