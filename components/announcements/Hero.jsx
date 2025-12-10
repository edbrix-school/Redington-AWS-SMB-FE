import React from 'react';
import { ChevronRight, Search } from 'lucide-react';

export const Hero = () => {
    return (
        <div className="relative overflow-hidden text-white min-h-[500px] flex flex-col justify-center knowledge-base-banner-bg">
            <div className="mx-auto w-full relative z-10 px-[4.167vw]">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs text-gray-300 ">
                    <span>Home</span>
                    <ChevronRight size={12} />
                    <span className="text-white font-medium">Announcements</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold font-roboto mb-3">Announcements</h1>

                {/* Description */}
                <p className="text-[#EEEEF0]  font-normal my24 leading-[120%]">
                    Find all official announcements, alerts, and campaigns in one place — your source for what’s happening across the organization.
                </p>

                {/* Search Bar Section */}
                <div className="max-w-3xl relative corsor-pointer">
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
                            <i className='smb-simple-search text-[30px]'></i>
                        </div>
                    </div>

                    {/* Decorative element - Added cursor-pointer */}

                </div>
            </div>
        </div>
    );
};