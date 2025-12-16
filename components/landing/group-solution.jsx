"use client";
import { Work_Sans } from "next/font/google";
import { Roboto } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import CatalogPopup from "@/components/catalog/CatalogPopup";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"], // include any weights you need
    variable: "--font-roboto",
});

const workSans = Work_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-work-sans",
});

const GroupSolution = () => {

    const [showCatalog, setShowCatalog] = useState(false);
    const cardData = [
        {
            bgImage: "/images/all-sector-bg-1.svg",
            sector: "Sector",
            title: "Advertising & Marketing",
            description: "Figma ipsum component variant main layer. Device rectangle bullet outline vector vertical distribute list. Team device link star text. Slice."
        },
        {
            bgImage: "/images/all-sector-bg-2.svg",
            sector: "Sector",
            title: "Aerospace & Satellite",
            description: "Figma ipsum component variant main layer. Device rectangle bullet outline vector vertical distribute list. Team device link star text. Slice."
        },
        {
            bgImage: "/images/all-sector-bg-3.svg",
            sector: "Sector",
            title: "Education",
            description: "Figma ipsum component variant main layer. Device rectangle bullet outline vector vertical distribute list. Team device link star text. Slice."
        },
        {
            bgImage: "/images/all-sector-bg-4.svg",
            sector: "Sector",
            title: "Agriculture",
            description: "Figma ipsum component variant main layer. Device rectangle bullet outline vector vertical distribute list. Team device link star text. Slice."
        },
        {
            bgImage: "/images/all-sector-bg-1.svg",
            sector: "Sector",
            title: "Automotive",
            description: "Figma ipsum component variant main layer. Device rectangle bullet outline vector vertical distribute list. Team device link star text. Slice."
        },
    ];

    return (
        <>
            <div className="mx-[80px] xl:mx-[120px] 2xl:mx-[160px] 3xl:mx-[9.115vw] mt-[50px] xl:mt-[60px] 2xl:mt-[75px] 3xl:mt-[3.906vw] mb-[80px] xl:mb-[100px] 2xl:mb-[110px] 3xl:mb-[6.354vw]">
                <div className="w-[45px] h-[2px] bg-[#645592]"></div>
                <div className="font16 text-interfacetextdefault1 font-medium">Group of Solutions by Sector</div>
                <div className="flex gap12">
                    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap12 mt-[22px] xl:mt-[24px] 3xl:mt-[1.25vw]">
                        {cardData.map((item, i) => (
                            <div onClick={() => setShowCatalog(true)} key={i}
                                style={{ backgroundImage: `url(${item.bgImage})` }}
                                className="sector-bg p16 col-span-1 md:col-span-1 lg:col-span-1 space-y-[15px] xl:space-y-[17px] 3xl:space-y-[0.885vw] text-black rounded8 cursor-pointer">
                                <div className="text-[#3C4146] font10 font-normal leading-tight uppercase">
                                    {item.sector}
                                </div>
                                <div className="text-[#3C4146] font18 font-semibold leading-[120%] min-h-[40px] 3xl:min-h-0">
                                    {item.title}
                                </div>
                                <div className="text-[#7F8488] font12 leading-[111%] min-h-[80px] xl:min-h-[86px] 2xl:min-h-[90px] 3xl:min-h-[4.792vw]">
                                    {item.description}
                                </div>
                                <div className="flex justify-end mt4">
                                    <button className="group flex items-center rounded6 text-white px8 bg-BrandNeutral900 overflow-hidden">
                                        <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-40 text-right font12 ">
                                            View Solutions
                                        </span>
                                        <span className="flex items-center cursor-pointer bg-BrandNeutral900 py8 px8">
                                            <i className="smb-arrow-right font12"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="see-all-bg flex items-center justify-center p16 col-span-1 md:col-span-1 lg:col-span-1 space-y-[15px] xl:space-y-[17px] 3xl:space-y-[0.885vw] text-black rounded8">
                        <div className="text-[#4E189A]  font-normal leading-tight flex flex-col justify-center spacey8 cursor-pointer">
                            <div className="flex justify-center items-center">
                                <Image src="/images/svg/send.svg" width="24" height="24" alt="logo" />
                            </div>
                            <div className="whitespace-nowrap px20 font14">See All</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sidebar */}
            <Sidebar
                visible={showCatalog}
                onHide={() => setShowCatalog(false)}
                className="p-0  customsidebar popup-enter"
                blockScroll
            >
                <CatalogPopup
                    open={showCatalog}
                    onClose={() => setShowCatalog(false)}
                />
            </Sidebar>
        </>
    );
};

export default GroupSolution;
