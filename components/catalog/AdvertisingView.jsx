import React, { useState, useEffect, useCallback } from "react";
import { Sidebar } from "primereact/sidebar";
import Image from "next/image";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const SOLUTIONS = [
  "Multi-Agent Employee Virtual Assistant on AWS",
  "EduCloud - AWS Tools for Learning",
  "CloudClass - AWS Solutions for Education",
  "TeachWise - AWS Educational Resources",
  "SkillBuilder - AWS Training Solutions",
  "KnowledgeHub - AWS Learning Platform",
  "AcademyCloud - AWS for Academic Excellence",
  "InstructAI - AWS Teaching Tools",
  "TeachNet - AWS Network for Educators",
  "LearnFlow - AWS Learning Management",
  "CourseCloud - AWS Course Management Excellence",
  "ScholarSphere - AWS for Scholars",
];

const TAGS = ["Web Hosting", "Security", "+2"];

export default function AdvertisingView({ sectorName, onBackClick }) {
  const [visible, setVisible] = useState(false);
  const calculateRightPosition = useCallback(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 2560) {
      return 257;
    } else if (screenWidth >= 1440 && screenWidth < 1880) {
      return 145;
    } else if (screenWidth >= 1440 && screenWidth < 2560) {
      return 187;
    } else if (screenWidth >= 1024 && screenWidth < 1440) {
      return 102;
    } else {
      return 70;
    }
  }, []);

  const [rightPosition, setRightPosition] = useState(() => {
    if (typeof window !== "undefined") {
      return calculateRightPosition();
    }
    return 257;
  });

  const showSidebar = () => {
    setVisible(true);
  };

  const hideSidebar = () => {
    setVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setRightPosition(calculateRightPosition());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [calculateRightPosition]);
  return (
    <>
      <div className="flex h-full flex-col">
        {/* Solutions grid */}
        <div className="mt-4 flex-1 overflow-y-auto pb-4 custom-scroll ">
          <div className="responsive-grid">
            {SOLUTIONS.map((title, idx) => (
              <Card
                key={idx}
                className="advertising-card flex flex-col
    group rounded-2xl p-4 bg-white shadow-sm cursor-pointer
    transition-all duration-300
    hover:-translate-y-[2px]
    hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]
  "
                onClick={showSidebar}
              >
                <div className="flex-1">
                  {/* ---------- TAGS ---------- */}
                  <div className="flex flex-wrap gap-2">
                    {TAGS.map((tag) => (
                      <span
                        key={tag}
                        className="
          rounded-sm px-2 py-[3px] text-[10px] uppercase font-semibold
          bg-transparent border border-transparent text-interface-text-default
          transition-all duration-200
          hover:border-[#d1d5db] hover:bg-[#d1d5db]
        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* ---------- TITLE ---------- */}
                  <h4 className="mt-3 font-inter text-[16px] font-semibold leading-[22px] text-interface-text-title">
                    {title}
                  </h4>

                  {/* ---------- META (2 Weeks) ---------- */}
                  <div className="flex items-center gap-2">
                    <i className="smb-watch text14 pt-1"></i>
                    <p
                      className="
      mt-1 flex items-center gap-1 font-inter text-[12px] text-interface-text-subtitle
      transition-all duration-300
      hover:underline
    "
                    >
                      2 Weeks
                    </p>
                  </div>

                  {/* ---------- DESCRIPTION ---------- */}
                  <p className="mt-2 line-clamp-3 font-inter text-[12px] leading-[18px] text-interface-text-subtitle">
                    Redington&apos;s AI-powered solution on AWS that automates
                    and personalizes teaching, assessment, and feedback-enabling
                    scalable, efficient and student-centric education for
                    schools and universities.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between ">
                  {/* SUPPORT ICON — hidden by default, visible on hover */}
                  <button
                    type="button"
                    className="
      hidden group-hover:flex transition-all duration-300
      rounded-md bg-[linear-gradient(90.85deg,rgba(255,233,67,0.22)_5.05%,rgba(67,219,62,0.22)_97.08%)]
      px-2 py-1
    "
                  >
                    <Image
                      src="/assets/icons/i24support.svg"
                      alt="Support"
                      width={25}
                      height={25}
                    />
                  </button>

                  {/* RIGHT SIDE ACTIONS */}
                  <div className="ml-auto flex items-center">
                    {/* PLAY ICON — right aligned (default only) */}
                    <button
                      type="button"
                      className="
        flex h-8 w-8 items-center justify-center rounded-md bg-[#42536D]
        text-white transition-all duration-300
        group-hover:hidden
      "
                    >
                      <Image
                        src="/assets/icons/arrow-right.svg"
                        alt="arrow"
                        width={20}
                        height={20}
                      />
                    </button>

                    {/* TEST DRIVE BUTTON — shown only when hovered */}
                    <button
                      type="button"
                      className="
        hidden group-hover:flex
        items-center gap-1 rounded-md bg-[#42536D] text-white
        px-3 py-1 text-[12px] font-medium ml-2
        transition-all duration-300 ease-out
      "
                    >
                      Test Drive
                      <Image
                        src="/assets/icons/arrow-right.svg"
                        alt="Test Drive Arrow"
                        width={18}
                        height={18}
                      />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom promoted banners */}
        </div>
        <div className="shrink-0 mb-4">
          <div className="mt-5 grid gap-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {/* TonAI banner */}
            <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#1C273D_0%,#304570_100%)] p-4 text-white">
              <Image
                src="/images/catalog-bottom-tonai-bg-vector.svg"
                alt="vector"
                fill
                className="object-cover opacity-90"
              />
              <div className="flex items-center justify-cener gap-2">
                <div className="relative z-10 max-w-sm">
                  <Image
                    src="/images/tonai.svg"
                    alt="TonAI"
                    width={100}
                    height={100}
                  />
                  <h4 className="mt-2 text-[16px] font-semibold leading-snug">
                    Not Sure Which AWS Hub to Use for Your Business?
                  </h4>
                  <p className="mt-2 text-[12px] leading-[18px] text-slate-100/90">
                    Just ask our chatbot! It will ask you a few simple questions
                    and guide you step-by-step to the AWS hub that best fits
                    your business size, goals, and technical needs.
                  </p>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex items-center justify-between rounded-lg bg-[linear-gradient(90.85deg,rgba(255,233,67,0.22)_5.05%,rgba(67,219,62,0.22)_97.08%)] px-4 py-1.5 text-[12px] font-medium text-white relative"
                  >
                    <span>Start Chat Now</span>

                    {/* Catalog search logo in the top-right corner */}
                    <Image
                      src="/images/catalog-bottom-search-logo.svg"
                      alt="Search Logo"
                      width={24}
                      height={24}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    />
                  </button>
                </div>
                <div className="relative w-42 h-42 xl:w-52 xl:h-52 md:absolute md:right-[10rem] md:top-[4rem] xl:absolute xl:right-[5rem] xl:top-[4rem] 2xl:absolute 2xl:right-[4rem] 2xl:top-[4rem] hidden md:block">
                  <Image
                    src="/images/catalog-tonai-girl.svg"
                    alt="vector"
                    fill
                    // width={230}
                    // height={230}
                    className=" opacity-90"
                  />
                </div>
              </div>
            </div>

            {/* TwinThread banner */}
            <div className="relative overflow-hidden rounded-2xl bg-white p-4">
              <Image
                src="/images/twinthread-bg-img.svg"
                alt="TwinThread"
                fill
                // width={500}
                // height={500}
                className="opacity-90"
              />
              <div className="relative z-10 max-w-sm">
                <Image
                  src="/images/catalog-bottom-twinthread-logo.svg"
                  alt="TwinThread"
                  width={120}
                  height={50}
                />
                <h4 className="mt-2 text-[16px] text-[#0A291A] font-medium leading-snug">
                  TwinThread Industrial AI
                </h4>
                <p className="mt-2 text-[12px] leading-[18px] text-[#4C525F99]">
                  TwinThread accelerates digital transformation for industrial
                  companies by integrating AI and machine learning into existing
                  workflows, enabling continuous operational improvements with
                  minimal disruption. It guides the creation of a sustainable,
                  customized Virtual Operations Center, enhancing productivity
                  and paving the way for smarter future operations.
                </p>
              </div>
              <div className="absolute bottom-5 left-30">
                <Image
                  src="/images/twinthread-carosel.svg"
                  alt="TwinThread"
                  width={120}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        {/* Sidebar for Popup Content */}
        <Sidebar
          visible={visible}
          onHide={hideSidebar}
          position="right"
          className="p-4 !w-[50rem]"
          style={{ right: `${rightPosition + 0}px` }} // Adjust 'right' based on sidebar width
        >
          <div className="flex flex-col">
            <h4 className="font-semibold text-[18px] text-[#293141]">
              Multi-Agent Employee Virtual Assistant on AWS
            </h4>
            <p className="mt-2 font-medium text-[18px] text-[#4C525F]">
              Small and medium businesses looking for a hassle-free, secure, and
              robust web hosting solution.
            </p>

            <p className="mt-4 text-[14px] text-[#4C525F] font-normal">
              This Guidance demonstrates how TeamLink AI, an employee virtual
              assistant, centralizes access to cross-functional knowledge...
            </p>

            <h5 className="mt-4 font-semibold text-[18px] text-[#3C4146]">
              Key Features
            </h5>
            <ul className="mt-2 pl-4 list-disc text-[14px] text-[#4C525F]">
              <li>One-click deployment of web servers and databases</li>
              <li>Built-in DDoS protection and SSL/TLS encryption</li>
              <li>Automated daily backups and recovery options</li>
              <li>Real-time performance monitoring and alerts</li>
            </ul>

            <h5 className="mt-4 font-semibold text-[18px] text-[#3C4146]">
              Pricing
            </h5>
            <p className="text-[14px] text-[#4C525F]">
              Pay-as-you-go, with a free test drive option
            </p>

            <div className="mt-4 flex items-center gap-4">
              <Button
                label="Start Test Drive"
                icon="pi pi-play"
                className="bg-[#5D9D4A] text-white font-semibold"
              />
              <Button
                label="AWS Website"
                icon="pi pi-link"
                className="bg-[#F5F6F8] text-[#7F8488] font-normal"
              />
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
}
