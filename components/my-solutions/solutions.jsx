"use client";
import { useState, useRef } from "react";
import { Inter } from "next/font/google";
import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";
import Link from "next/link";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
    variable: "--font-roboto",
});

const Solutions = () => {

    const cardData = [
        {
            title: "Multi-Agent Employee Virtual Assistant on AWS",
            left: "Left: 3hrs 45 mins"
        },
        {
            title: "Multi-Agent Employee Virtual Assistant on AWS",
            left: "Left: 3hrs 45 mins"
        },
        {
            title: "Multi-Agent Employee Virtual Assistant on AWS",
            left: "Left: 3hrs 45 mins"
        },
        {
            title: "Multi-Agent Employee Virtual Assistant on AWS",
            left: "Left: 3hrs 45 mins"
        },
        {
            title: "Multi-Agent Employee Virtual Assistant on AWS",
            left: "Left: 3hrs 45 mins"
        },
        {
            title: "Multi-Agent Employee Virtual Assistant on AWS",
            left: "Left: 3hrs 45 mins"
        },
        {
            title: "Multi-Agent Employee Virtual Assistant on AWS",
            left: "Left: 3hrs 45 mins"
        },
        {
            title: "Multi-Agent Employee Virtual Assistant on AWS",
            left: "Left: 3hrs 45 mins"
        },
    ];

    const [activeTab, setActiveTab] = useState("Active Tryouts");

    const TABS = ["Active Tryouts", "Expired Tryouts"];
    const op = useRef(null);


    return (
        <>
            <div className="grid grid-cols-12 bg-InterfaceSurfacecomponent p24 rounded8 mx-[60px] xl:mx-[70px] 2xl:mx-[80px] 3xl:mx-[4.271vw] mt-[40px] xl:mt-[44px] 2xl:mt-[48px] 3xl:mt-[2.5vw]">
                <div className="col-span-12">
                    <div className="">
                        <div className="mb20 ">
                            <div className="font24 text-interfacetextdefault1 font-semibold leading-[140%]">My Solutions</div>
                        </div>
                        <div className="border-t border-InterfaceStrokesoft1 pb14"></div>
                        <div className="">
                            <div className=" items-center inline-flex rounded-[8px] border border-[#E5E7EB] bg-[#F5F6F7] overflow-hidden">
                                {TABS.map((tab, index) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`
            ${activeTab === tab ? "bg-[#8078B9] text-white" : "text-[#6f7480]  cursor-pointer"}
            text-center font-semibold text-[14px] py6 px12
            ${index !== TABS.length - 1 ? "border-r border-[#E5E7EB]  cursor-pointer" : ""}
          `}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap24 mt24 p20">
                            {cardData.map((item, i) => (
                                <div key={i} className="col-span-1 bg-BrandNeutral501 shadow-[0_0_15px_4px_rgba(140,85,253,0.15)] p16 rounded8 mb12">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap8">
                                            <div className="bg-InterfaceSurfacecomponent rounded4 font11 px12 py4 uppercase rounded4">Web Hosting</div>
                                            <div className="bg-InterfaceSurfacecomponent rounded4 font11 px12 py4 uppercase rounded4">Security</div>
                                            <div className="bg-InterfaceSurfacecomponent rounded4 font11 px12 py4 uppercase rounded4">+2</div>
                                        </div>
                                        <div>
                                            {" "}
                                            <i
                                                className="text-[#3C4146] smb-square-more font20 cursor-pointer"
                                                onClick={(e) => op.current.toggle(e)}
                                            ></i>
                                            <OverlayPanel
                                                ref={op}
                                                className="w-[160px] custom-op rounded8"
                                            >
                                                <div className="flex flex-col text-[#3C4146] font14 font-[400]">
                                                    <Link
                                                        href="#"
                                                        onClick={() => setOpenPopupViewTicket(true)}
                                                        className=" leading-[140%] py4 px4"
                                                    >
                                                        View
                                                    </Link>
                                                    <Link
                                                        href="#"
                                                        className=" leading-[140%] py4 px4"
                                                    >
                                                        Cancel
                                                    </Link>
                                                </div>
                                            </OverlayPanel>
                                        </div>
                                    </div>
                                    <div className={`${inter.variable} font18 font-semibold text-interfacetextdefault1 mt16 mb8 leading-[120%]`}>{item.title}</div>
                                    <div className="flex gap-2 items-center">
                                        <i className="smb-watch text-[#7F8488] font16"></i>
                                        <div className="font14 text-interfacetextdefault1">{item.left}</div>
                                    </div>
                                    <div className="mt12">
                                        <div className="text-InterfaceTextsubtitle font12 leading-[116%] min-h-[80px] xl:min-h-[90px] 2xl:min-h-[99px] 3xl:min-[5.156vw]">Redington’s AI-powered solution on AWS that automates and personalizes teaching, assessment, and feedback-enabling scalable, efficient and student-centric education for schools and universities</div>
                                    </div>
                                    <div className="flex justify-end mt4">
                                        <i className="smb-arrow-right font14 text-white bg-BrandNeutralpure rounded6 px8 py4"></i>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Solutions;
