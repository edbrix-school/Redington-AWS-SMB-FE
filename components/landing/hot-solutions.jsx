"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import AiChatboxPopup from "../catalog/AichatboxPopup";
import TwinSlider from "../common/twin-thread-slider/twin-slider";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-work-sans",
});

const HotSolutions = () => {
    const [visible, setVisible] = useState(false);
    const showSidebar = () => {
        setVisible(true);
    };
    const hideSidebar = () => {
        setVisible(false);
    };

    return (
        <>
            <div className="mx-4 xl:mx-[120px] 2xl:mx-[160px] 3xl:mx-[9.115vw] mt-[30px] xl:mt-[60px] 2xl:mt-[70px] 3xl:mt-[4.271vw]">
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 xl:gap-0">
                    <div className={`${workSans.variable} text-[#000] text-[35px] xl:text-[40px] 2xl:text-[50px] 3xl:text-[3.333vw] `}>Hot Solutions</div>
                    <div onClick={showSidebar} className="w-full xl:w-[800px] 2xl:w-[800px] 3xl:w-auto 3xl:max-w-[50vw] solution-bg flex justify-between items-center px-[16px] xl:px-[18px] 3xl:px-[1.042vw] py-[26px] xl:py-[28px] 3xl:py-[1.667vw] cursor-pointer">
                        <div className="text-[#2C363F] font16">Let us Help you to find the right Solution!</div>
                        <Image src="/images/svg/flash.svg" width="28" height="28" alt="flash" />
                    </div>
                </div>
                <div className="grid grid-cols-12 md:grid-cols-12 grid-cols-12 mt-[38px] xl:mt-[40px] 2xl:mt-[40px] 3xl:mt-[2.344vw] gap-[14px] xl:gap-[16px] 3xl:gap-[0.833vw]">
                    <div className="col-span-12 md:col-span-6 lg:col-span-5  border border-[#E7E6F3] bg-[#F5F6F8] rounded12 overflow-hidden">
                        <Image src="/images/amazon-bedrock.svg" width="674" height="340" alt="logo" className="w-full h-auto" />
                        <div className="spacey6 py-[24px] xl:py-[26px] 2xl:py-[30px] 3xl:py-[1.719vw] px-[20px] xl:px-[24px] 3xl:px-[1.458vw]">
                            <div className="font36 leading-[125%] font-semibold">Amazon Bedrock</div>
                            <div className="font24 leading-[120%]">Discover Three proven use cases for Generative AI</div>
                            <Link href="" className="font14 flex mt-2">
                                <div className="text-[#8C55FD] border border-[#8C55FD] bg-white rounded-full py8 px20">
                                    Open
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-7 flex flex-col-reverse md:grid md:grid-cols-7 gap-6 md:gap-0">
                        <div className="col-span-1 md:col-span-4 w-full">
                            <div className="py-[24px] xl:py-[26px] 2xl:py-[30px] 3xl:py-[1.719vw] px-[20px] xl:px-[24px] 3xl:px-[1.458vw]">
                                <div className="spacey16 ">
                                    <div className="font32 leading-[120%]">Amazon CloudFront</div>
                                    <div className="font24 leading-[120%] opacity-80">Securely deliver content with low latency and high transfer speeds</div>
                                    <Link href="" className="flex gap12 font-medium font14">
                                        <div className="font14 text-[#8C55FD] border border-[#8C55FD] bg-white rounded-full py8 px20">
                                            See More
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-3 w-full">
                            <Image src="/images/amazon-cloudfront.svg" width="377" height="226" alt="logo" className="w-full h-auto object-cover" />
                        </div>
                        <div className="col-span-12 relative mt-[30px] xl:mt-[40px] 3xl:mt-[2.292vw]">
                            <TwinSlider />
                        </div>
                    </div>
                </div>
            </div>

            <Sidebar
                visible={visible}
                onHide={() => hideSidebar()}
                className="p-0 z-[9999] customAichatboxsidebar !w-[53rem] lg:!w-[53rem] md:!w-[43rem] sm:!w-[100%]  "
                position="right"
            >
                <AiChatboxPopup open={visible} onClose={() => hideSidebar()} />
            </Sidebar>
        </>
    );
};

export default HotSolutions;
