"use client";
import { Work_Sans } from "next/font/google";
import { Roboto } from "next/font/google";

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

const cardData = [
    {
        sector: "Sector",
        title: "Advertising & Marketing",
        description: "Figma ipsum component variant main layer. Device rectangle bullet outline vector vertical distribute list. Team device link star text. Slice."
    },
    {
        sector: "Sector",
        title: "Aerospace & Satellite",
        description: "Figma ipsum component variant main layer. Device rectangle bullet outline vector vertical distribute list. Team device link star text. Slice."
    },
    {
        sector: "Sector",
        title: "Education",
        description: "Figma ipsum component variant main layer. Device rectangle bullet outline vector vertical distribute list. Team device link star text. Slice."
    },
    {
        sector: "Sector",
        title: "Agriculture",
        description: "Figma ipsum component variant main layer. Device rectangle bullet outline vector vertical distribute list. Team device link star text. Slice."
    },
    {
        sector: "Sector",
        title: "Automotive",
        description: "Figma ipsum component variant main layer. Device rectangle bullet outline vector vertical distribute list. Team device link star text. Slice."
    },
];

const GroupSolution = () => {
    return (
        <>
            <div className="mx-[60px] xl:mx-[70px] 2xl:mx-[80px] 3xl:mx-[4.271vw] mt-[50px] xl:mt-[60px] 2xl:mt-[75px] 3xl:mt-[3.906vw] mb-[80px] xl:mb-[100px] 2xl:mb-[110px] 3xl:mb-[6.354vw]">
                <div className="w-[45px] h-[2px] bg-[#645592]"></div>
                <div className="font16 text-interfacetextdefault1 font-medium">Group of Products by Sector</div>
                <div className="flex gap-[24px] xl:gap-[26px] 3xl:gap-[1.51vw]">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[24px] xl:gap-[26px] 3xl:gap-[1.51vw] mt24">
                        {cardData.map((item, i) => (
                            <div key={i} className="sector-bg shadow-[0_0_15px_4px_rgba(140,85,253,0.15)] p-[14px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[0.833vw] col-span-1 md:col-span-1 lg:col-span-1 space-y-[15px] xl:space-y-[17px] 3xl:space-y-[0.885vw] text-black rounded8">
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
                    <div className="see-all-bg flex items-center justify-center p16 col-span-1 md:col-span-1 lg:col-span-1 space-y-[15px] xl:space-y-[17px] 3xl:space-y-[0.885vw] text-black rounded8 mt16">
                        <div className="text-[#4E189A] font14 font-normal leading-tight flex flex-col justify-center">
                            <i className="smb-arrowup text-center"></i>
                            <div className="whitespace-nowrap px-[16px] xl:px-[18px] 3xl:px-[1.042vw]">See All</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GroupSolution;
