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
                  <h4 className="mt-2 font16 font-semibold leading-snug">
                    Not Sure Which AWS Hub to Use for Your Business?
                  </h4>
                  <p className="mt-2 font12 leading-[18px] text-slate-100/90">
                    Just ask our chatbot! It will ask you a few simple questions
                    and guide you step-by-step to the AWS hub that best fits
                    your business size, goals, and technical needs.
                  </p>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex items-center justify-between rounded-lg bg-[linear-gradient(90.85deg,rgba(255,233,67,0.22)_5.05%,rgba(67,219,62,0.22)_97.08%)] px-4 py-1.5 font12 font-medium text-white relative"
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
                <h4 className="mt-2 font16 text-[#0A291A] font-medium leading-snug">
                  TwinThread Industrial AI
                </h4>
                <p className="mt-2 font12 leading-[18px] text-[#4C525F99]">
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
          className="p-4 !w-[50rem] customMultipopupsidebar overflow-y-auto custom-scroll "
          style={{ right: `${rightPosition + 0}px` }} // Adjust 'right' based on sidebar width
        >
          <div className="flex flex-col ">
            {/* Header with arrow and title */}
            <div className="flex items-center justify-between gap-4 px15">
              <Image
                src="/assets/icons/arrowleft.svg"
                alt="Go Back"
                className="go-back"
                width={20}
                height={20}
              />
              <div className="flex-1 px-4">
                <h4 className="multi-agent-title">
                  Multi-Agent Employee Virtual Assistant on AWS
                </h4>
                <div className="flex flex-wrap gap-2 mx26">
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
              </div>
              <Button
                label="Start Test Drive"
                icon=""
                className="start-test-drive"
              />
            </div>

            {/* Short Description */}
            <div className="mt15 flex justify-between gap-4">
              <div className="flex-1 pl15">
                <p className="mt10 font-medium font18 text-[#4C525F]">
                  Small and medium businesses looking for a hassle-free, secure,
                  and robust web hosting solution.
                </p>

                {/* Detailed Description */}
                <p className="mt15 font14 text-[#4C525F] font-normal">
                  This Guidance demonstrates how TeamLink AI, an employee
                  virtual assistant, centralizes access to cross-functional
                  knowledge through a unified, intelligent chat interface.
                  Leveraging advanced language models hosted on Amazon Bedrock,
                  this virtual assistant helps break down departmental
                  information silos by providing employees with instant access
                  to critical organizational knowledge. This Guidance
                  streamlines workplace efficiency by helping employees quickly
                  find and retrieve the information they need, when they need
                  it, eliminating the traditional barriers between different
                  departmental knowledge bases.
                </p>
                <Button
                  label="AWS Website"
                  icon=""
                  className="aws-website mt10 custom-icon-button"
                />
              </div>
              <div>
                <Image
                  src="/images/multiagent.svg"
                  alt="Multi-Agent Virtual Assistant on AWS"
                  width={300}
                  height={300}
                  className="mt-4 rounded-lg"
                />
              </div>
            </div>
            {/* Key Features */}
            <div className="key-features mt24 p15">
              <hr className="key-features-title" />
              <h5 className="font-semibold font18 text-[#3C4146]">
                Key Features
              </h5>
              <div className="key-features-content mt10 flex justify-center items-center gap-10">
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/mouse.svg"
                    alt="Mouse"
                    width={30}
                    height={30}
                    className=""
                  />

                  <p className="text-center font14">
                    One-click deployment of web servers and databases
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/Component-1.svg"
                    alt="Component-1"
                    width={30}
                    height={30}
                    className=""
                  />

                  <p className="text-center font14">
                    Built-in DDoS protection and SSL/TLS encryption
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/driver-refresh.svg"
                    alt="driver-refresh"
                    width={30}
                    height={30}
                    className=""
                  />

                  <p className="text-center font14">
                    Automated daily backups and recovery options
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/images/chart-square.svg"
                    alt="chart-square"
                    width={30}
                    height={30}
                    className=""
                  />

                  <p className="text-center font14">
                    Real-time performance monitoring and alerts
                  </p>
                </div>
              </div>
            </div>
            {/* Pricing Section */}
            <div className="pricing-support mt10 p-4 flex justify-between items-center">
              {/* Pricing Column */}
              <div className="pricing flex flex-col">
                <h5 className="font-semibold font18 text-[#3C4146]">Pricing</h5>
                <p className="font14 text-[#4C525F]">
                  Pay-as-you-go, with a free test drive option
                </p>
              </div>

              {/* Support Column */}
              <div className="support flex flex-col">
                <h5 className="font-semibold font18 text-[#3C4146]">Support</h5>
                <p className="font14 text-[#4C525F]">
                  24/7 chat and email support
                </p>
              </div>

              {/* Chat Now Column */}
              <div className="chat-now text-center rounded-lg p-4">
                <Image
                  src="/images/tonai-logo.svg"
                  alt="tonai-logo"
                  width={30}
                  height={30}
                  className="tonai-chatnow-logo"
                />
                <button className="text-[#3C4146] rounded-lg mt-2">
                  Chat Now
                </button>
              </div>
            </div>
            <div className="mt-4 p-4 bg-[#172133]">
              <div className="flex justify-start gap-4">
                <div>
                  {/* Section Header with HR line */}
                  <hr className="section-header-hr" />
                  <h5 className="text-[#fff] font-semibold font18">
                    People Usually Buy Together
                  </h5>

                  {/* Flex container for the two columns */}
                  <div className="flex gap-4 mt-4 bg-[#172133]">
                    {/* Left Column - People Usually Buy Together */}
                    <div className="flex-1">
                      <ul className="text-[#fff]">
                        <li className="flex justify-between items-center mb-3 bg-[#232c3d] p10 rounded-lg w-[300px]">
                          <div>
                            <p>Amazon WorkDocs</p>{" "}
                            <span className="text-[#4C525F]">
                              <i className="smb-watch text14 pt-1 pr-2"></i>2
                              Weeks
                            </span>
                          </div>
                          <Image
                            src="assets/icons/export-footer.svg"
                            alt="export-footer"
                            width={15}
                            height={15}
                            className=""
                          />
                        </li>
                        <li className="flex justify-between items-center mb-3 bg-[#232c3d] p10 rounded-lg w-[300px]">
                          <div>
                            <p>Amazon RDS for SQL Server</p>{" "}
                            <span className="text-[#4C525F]">
                              <i className="smb-watch text14 pt-1 pr-2"></i>2
                              Weeks
                            </span>
                          </div>
                          <Image
                            src="assets/icons/export-footer.svg"
                            alt="export-footer"
                            width={15}
                            height={15}
                            className=""
                          />
                        </li>
                        <li className="flex justify-between items-center mb-3 bg-[#232c3d] p10 rounded-lg w-[300px]">
                          <div>
                            <p>AWS Outposts</p>{" "}
                            <span className="text-[#4C525F]">
                              <i className="smb-watch text14 pt-1 pr-2"></i>2
                              Weeks
                            </span>
                          </div>
                          <Image
                            src="assets/icons/export-footer.svg"
                            alt="export-footer"
                            width={15}
                            height={15}
                            className=""
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <hr className="section-header-hr ml-[15px]" />
                  <h5 className="text-[#fff] font-semibold font18 pl-4">
                    White Papers And Documentations
                  </h5>
                  {/* Right Column - White Papers And Documentation */}
                  <div className="flex-1 pl-4 mt-4">
                    <ul className="text-[#fff]">
                      <li className="flex items-center mb-3 bg-[#232c3d] p10 rounded-lg w-[390px]">
                        <Image
                          src="assets/icons/FilePdf.svg"
                          alt="FilePdf"
                          width={30}
                          height={30}
                          className=""
                        />{" "}
                        <div className="px-3">
                          <p>Int. Manual V2.03</p>{" "}
                          <p className="text-[#4C525F]">21 Jan 2023 11:23 AM</p>
                        </div>
                        <Image
                          src="assets/icons/document-download.svg"
                          alt="document-download"
                          width={20}
                          height={20}
                          className="document-download-int"
                        />
                      </li>
                      <li className="flex items-center mb-3 bg-[#232c3d] p10 rounded-lg w-[390px]">
                        <Image
                          src="assets/icons/FilePdf.svg"
                          alt="FilePdf"
                          width={30}
                          height={30}
                          className=""
                        />{" "}
                        <div className="px-3">
                          <p>First Steps Training Video</p>{" "}
                          <p className="text-[#4C525F]">21 Jan 2023 11:23 AM</p>
                        </div>
                        <Image
                          src="assets/icons/document-download.svg"
                          alt="document-download"
                          width={20}
                          height={20}
                          className="document-download-train"
                        />
                      </li>
                      <li className="flex items-center mb-3 bg-[#232c3d] p10 rounded-lg w-[390px]">
                        <Image
                          src="assets/icons/FilePdf.svg"
                          alt="FilePdf"
                          width={30}
                          height={30}
                          className=""
                        />
                        <div className="px-3">
                          <p>Multi-Agent Website</p>{" "}
                          <p className="text-[#4C525F]">21 Jan 2023 11:23 AM</p>
                        </div>

                        <Image
                          src="assets/icons/document-download.svg"
                          alt="document-download"
                          width={20}
                          height={20}
                          className="document-download-multi"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
}
