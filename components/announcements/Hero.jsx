import React from 'react';
import { ChevronRight, Search } from 'lucide-react';
import Image from 'next/image';
import Searchbox from '../common/searchbox';
import Link from 'next/link';

export const Hero = () => {
    return (
         <div className="relative overflow-hidden text-white min-h-[500px] flex flex-col justify-center knowledge-base-banner-bg">
            <div className="mx-auto w-full relative z-10 px-[4.167vw]">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs text-gray-300 ">
                    <Link href="/">Home</Link>
                    <ChevronRight size={12} />
                    <span className="text-white font-medium">Announcements</span>
                </div>

                {/* Title */}
                <h1 className="font24 font-bold font-roboto mb-3">Announcements</h1>

                {/* Description */}
                <p className="text-[#EEEEF0]  font-normal my24 leading-[120%] font16 xl:w-xl 2xl:-w-2xl 3xl:w-[45.313vw]">
                  Find all official announcements, alerts, and campaigns in one place — your source for what’s happening across the organization.
                </p>

                {/* Search Bar Section */}
                <Searchbox />
            </div>
        </div>
    );
};