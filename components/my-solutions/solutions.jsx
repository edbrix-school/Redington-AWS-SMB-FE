"use client";
import { useState, useRef } from "react";
import { Inter } from "next/font/google";
import { OverlayPanel } from "primereact/overlaypanel";
import Link from "next/link";
import { InputText } from "primereact/inputtext";
import Image from 'next/image';
import { Paginator } from "primereact/paginator";
import { Dropdown } from "primereact/dropdown";

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
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [activeTab, setActiveTab] = useState("Active Tryouts");
    const TABS = ["Active Tryouts", "Expired Tryouts"];
    const [isGridView, setIsGridView] = useState(false); // Default to List (Table) View
    const op = useRef(null);
    const [globalFilter, setGlobalFilter] = useState('');
    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };
    const [selectedSort, setSelectedSort] = useState(null);
    const Sort = [
        { name: "10", code: "NY" },
        { name: "20", code: "RM" },
    ];

    return (
        <>
            <div className="grid grid-cols-12 bg-InterfaceSurfacecomponent p24 rounded8 mx-[20px] xl:mx-[70px] 2xl:mx-[80px] 3xl:mx-[4.271vw] mt-[40px] xl:mt-[44px] 2xl:mt-[48px] 3xl:mt-[2.5vw]">
                <div className="col-span-12">
                    <div className="">
                        <div className="mb20 flex justify-between">
                            <div className="font24 text-interfacetextdefault1 font-semibold leading-[140%]">My Solutions</div>
                            <div className="flex items-center gap24">
                                <div className="relative">
                                    <i className="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10"></i>
                                    <InputText
                                        value={globalFilter}
                                        onChange={(e) => setGlobalFilter(e.target.value)}
                                        placeholder="Search"
                                        className="p-inputtext-sm pl-10 text-gray-600 w-64"
                                        style={{
                                            backgroundColor: '#F8FAFC', // Very light grey/blue background
                                            border: '1px solid #E2E8F0', // Subtle border
                                            borderRadius: '6px',
                                            paddingLeft: '2.5rem' // Space for the icon
                                        }}
                                    />
                                </div>
                                <div>
                                    <div className=" items-center inline-flex rounded8 overflow-hidden">
                                        <div className="flex gap-2 items-center pb-4 md:pb-0">
                                            <button
                                                onClick={() => setIsGridView(false)}
                                                className={`p-2 rounded6 cursor-pointer border-none transition-colors flex items-center justify-center ${!isGridView ? 'bg-[#EDE8FF] text-purple-600' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                                                title="List View"
                                            >
                                                <Image src={!isGridView ? "/images/svg/gray-list.svg" : "/images/svg/gray-list.svg"} alt="List" width={18} height={18} className={!isGridView ? "" : "opacity-60"} />
                                            </button>
                                            <button
                                                onClick={() => setIsGridView(true)}
                                                className={`p-2 rounded border border-[#E5E7EB] cursor-pointer border-none transition-colors flex items-center justify-center ${isGridView ? 'bg-[#EDE8FF] text-purple-600' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                                                title="Grid View"
                                            >
                                                <Image src={isGridView ? "/images/svg/blue-grid.svg" : "/images/pi-th-large.svg"} alt="Grid" width={18} height={18} className={isGridView ? "" : "opacity-60"} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-InterfaceStrokesoft1 pb14"></div>
                        <div className="flex justify-between items-center">
                            <div>
                                <div className=" items-center flex rounded8 font-sans border border-[#E5E7EB] overflow-hidden">
                                    {TABS.map((tab, index) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`
                                                ${activeTab === tab ? "bg-[#8078B9] text-white" : "text-[#6f7480] bg-[#F5F6F7] cursor-pointer"}
                                                text-center font-medium font11 py6 px10  
                                                ${index !== TABS.length - 1 ? "border-r border-[#E5E7EB]  cursor-pointer" : ""}
                                            `}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap8">
                                <div className="font14 leading-[140%] text-interfacetextdefault1">Item per Page :</div>
                                <div className="items-page-dropdown">
                                    <Dropdown
                                        value={selectedSort}
                                        onChange={(e) => setSelectedSort(e.value)}
                                        options={Sort}
                                        optionLabel="name"
                                        placeholder="10"
                                        className=" custDropdown1 bg-white!"
                                        panelClassName="custDropdown1panel "
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap24 mt24 p20">
                            {cardData.map((item, i) => (
                                <div key={i} className="col-span-1 bg-BrandNeutral501 hover:shadow-[0_0_15px_4px_rgba(140,85,253,0.15)] p16 rounded8 mb12">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap8">
                                            <div className="bg-InterfaceSurfacecomponent rounded4 font11 px12 py4 uppercase rounded4">Web Hosting</div>
                                            <div className="bg-InterfaceSurfacecomponent rounded4 font11 px12 py4 uppercase rounded4">Security</div>
                                            <div className="bg-InterfaceSurfacecomponent rounded4 font11 px12 py4 uppercase rounded4">+2</div>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="text-[#3C4146] smb-square-more font20 cursor-pointer"
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
                                    <div className="flex gap6 items-center">
                                        <i className="smb-watch text-[#7F8488] font16"></i>
                                        <div className="font14 text-[#3C4146]">{item.left}</div>
                                    </div>
                                    <div className="mt12">
                                        <div className={`${inter.variable} text-InterfaceTextsubtitle font12 leading-[116%] min-h-[80px] xl:min-h-[90px] 2xl:min-h-[99px] 3xl:min-[5.156vw] `}>Redington’s AI-powered solution on AWS that automates and personalizes teaching, assessment, and feedback-enabling scalable, efficient and student-centric education for schools and universities

                                        </div>
                                    </div>
                                    <div className="flex justify-end mt4">
                                        <button className="group flex items-center rounded6 text-white px8 bg-BrandNeutralpure overflow-hidden">
                                            <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-40 text-right font12 ">
                                                Test Drive
                                            </span>
                                            <span className="flex items-center cursor-pointer bg-BrandNeutralpure py8 px8">
                                                <i className="smb-arrow-right font12"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="relative custTablePaginator border-t border-gray-100">
                            <Paginator
                                template="PrevPageLink PageLinks NextPageLink"
                                first={first}
                                rows={rows}
                                onPageChange={onPageChange}
                                totalRecords={1000}
                                className="justify-end"
                                leftContent={
                                    <span className="text-gray-400 font-medium text-xs ml-4 absolute left-0 top-1/2 -translate-y-1/2">
                                        Showing <span className="font-bold">1-10</span> of <span className="font-bold">1000</span>
                                    </span>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Solutions;
