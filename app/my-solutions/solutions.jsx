"use client";
import { useState } from "react";
import { Inter } from "next/font/google";
import { Button } from "primereact/button";

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


    return (
        <>
            <div className="grid grid-cols-12 bg-InterfaceSurfacecomponent p24 rounded8 mx-[60px] xl:mx-[70px] 2xl:mx-[80px] 3xl:mx-[4.271vw]">

                <div className="col-span-12">
                    <div className="">
                        <div className="mb20 ">
                            <div className="font24 text-interfacetextdefault1 font-semibold leading-[140%]">My Solutions</div>
                        </div>
                        <div className="border-t border-InterfaceStrokesoft1 pb14"></div>
                        <div className="">
                            <div className="flex flex-wrap rounded8">
                                {TABS.map((tab) => {
                                    const isActive = tab === activeTab;
                                    return (
                                        <Button
                                            key={tab}
                                            type="button"
                                            onClick={() => {
                                                setActiveTab(tab);
                                                setActiveIndex([-1]); // Reset accordion when changing tabs
                                            }}
                                            className={[
                                                "customCatalogButton cursor-pointer px10 py8 font11 font-semibold",
                                                isActive ? "active" : "",
                                            ].join(" ")}
                                        >
                                            {tab}
                                        </Button>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap24 mt24 h-[480px] xl:h-[520px] 2xl:h-[550px] 3xl:h-[29.427vw] overflow-y-auto p20">
                            {cardData.map((item, i) => (
                                <div key={i} className="col-span-1 bg-BrandNeutral501 shadow-[0_0_15px_4px_rgba(140,85,253,0.15)] p16 rounded8 mb12">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap8">
                                            <div className="bg-InterfaceSurfacecomponent rounded4 font11 px12 py4 uppercase rounded4">Web Hosting</div>
                                            <div className="bg-InterfaceSurfacecomponent rounded4 font11 px12 py4 uppercase rounded4">Security</div>
                                            <div className="bg-InterfaceSurfacecomponent rounded4 font11 px12 py4 uppercase rounded4">+2</div>
                                        </div>
                                        <i className="smb-square-more font24"></i>
                                    </div>
                                    <div className={`${inter.variable} font18 font-semibold text-interfacetextdefault1 mt16 mb8`}>{item.title}</div>
                                    <div className="flex gap-2 items-center">
                                        <i className="smb-watch text-[#D42600] font16"></i>
                                        <div className="font14 text-interfacetextdefault1">{item.left}</div>
                                    </div>
                                    <div className="mt12">
                                         <div className="text-InterfaceTextsubtitle font12">Redington’s AI-powered solution on AWS that automates and personalizes teaching, assessment, and feedback-enabling scalable, efficient and student-centric education for schools and universities
                                    </div>
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
