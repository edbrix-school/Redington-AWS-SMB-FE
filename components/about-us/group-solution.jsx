"use client";
import { Work_Sans } from "next/font/google";
import { Roboto } from "next/font/google";
import Link from "next/link";

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
            <div className="">
                <div className="bg-InterfaceSurfacecomponent1 rounded16 p-[24px] xl:p-[28px] 2xl:p-[30px] 3xl:p-[1.667vw] mx-[80px] xl:mx-[120px] 2xl:mx-[160px] 3xl:mx-[9.115vw] mt-[50px] xl:mt-[60px] 2xl:mt-[75px] 3xl:mt-[3.906vw] mb-[80px] xl:mb-[100px] 2xl:mb-[110px] 3xl:mb-[6.354vw]">
                    <div className="flex justify-between items-center">
                        <div className="space-y-[5px]">
                            <div className="w-[45px] h-[2px] bg-InterfaceSurfacehcprimary"></div>
                            <div className="font16 text-interfacetextdefault font-medium">Trending Products By <span className="font-bold">Sector</span></div>
                        </div>
                        <Link href="" className="text-[#B497FF] border border-[#B497FF] bg-none rounded-full py10 px24">Show All</Link>
                    </div>
                    <div className="flex gap12  ">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap12 mt22">
                            {cardData.map((item, i) => (
                                <div key={i} className="dark-sector-bg p16 col-span-1 md:col-span-1 lg:col-span-1 space-y-[15px] xl:space-y-[17px] 3xl:space-y-[0.885vw] text-black rounded8">
                                    <div className="text-interfacetextdefault font10 font-normal leading-tight uppercase">
                                        {item.sector}
                                    </div>
                                    <div className="text-interfacetextdefault font18 font-semibold leading-[120%] min-h-[40px] 3xl:min-h-0">
                                        {item.title}
                                    </div>
                                    <div className="text-InterfaceTextsubtitle font12 leading-[111%] min-h-[80px] xl:min-h-[86px] 2xl:min-h-[90px] 3xl:min-h-[4.792vw]">
                                        {item.description}
                                    </div>
                                    {/* Icon (always visible) */}
                                    <div className="flex justify-end items-center">
                                        <div className="flex items-center justify-center py8 px8 bg-BrandNeutral9001 text-Interfacetextdefault1 rounded6 font14">
                                            <i className="smb-arrow-right font14"></i>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GroupSolution;
