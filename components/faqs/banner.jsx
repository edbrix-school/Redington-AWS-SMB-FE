import React from 'react';
import { ChevronRight, Search } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
    return (
        <div className="relative overflow-hidden text-white min-h-[500px] flex flex-col justify-center banner-bg">
            <div className="mx-auto w-full relative z-10 px-[4.167vw]">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 font12 text-white ">
                    <span>Home</span>
                    <ChevronRight size={12} />
                    <span className="text-white font-medium">FAQs</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold font-roboto mb-3">FAQs</h1>

                {/* Description */}
                <p className="text-InterfaceTextinverse font-normal font16 my24 leading-[120%]">
                    Find quick answers to common questions about our platform, features, and services - all in one place.
                </p>

                {/* Search Bar Section */}
                <div className='flex items-center gap22'>
                    <div className="max-w-3xl relative corsor-pointer w-full">
                        {/* Search Input Container - Updated Background Color */}
                        <div className="relative h-[50px] xl:h-[80px] 3xl:h-[4.167vw]  rounded-lg flex justify-between items-center overflow-hidden  search-box shadow-sm p24 cursor-pointer">
                            {/* <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/90 px-6 text-lg font-medium"
                        /> */}
                            <div className='font18 text-white font-medium'>Search</div>
                            <div className="h-full flex items-center justify-center cursor-pointer hover:opacity-100 transition-opacity">
                                {/* <Search size={24} className="text-white" /> */}
                                <Image
                                    src="/images/search-normal.svg"
                                    width={32}
                                    height={32}
                                    alt="search"
                                    className=""
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src="/images/svg/search-flag.svg" width={54} height={54} alt="flag" />
                    </div>
                </div>
            </div>
        </div>
    );
};