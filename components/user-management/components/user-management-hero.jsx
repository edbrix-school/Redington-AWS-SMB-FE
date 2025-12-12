import React from 'react';
import { ChevronRight, Search } from 'lucide-react';
import Image from 'next/image';
import Searchbox from '../../common/searchbox';

export const UserManagementHero = () => {
    return (
        <div className="relative overflow-hidden text-white min-h-[500px] flex flex-col justify-center knowledge-base-banner-bg">
            <div className="mx-auto w-full relative z-10 px-[4.167vw]">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs text-gray-300 ">
                    <span>Home</span>
                    <ChevronRight size={12} />
                    <span className="text-white font-medium">User Management</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold font-roboto mb-3">User Management</h1>

                {/* Description */}
                <p className="text-[#EEEEF0]  font-normal my24 leading-[120%] max-w-2xl">
                    Oversee all users, assign roles, and track activity to ensure smooth collaboration and secure access across the platform
                </p>

                {/* Search Bar Section */}
                <Searchbox />
            </div>
        </div>
    );
};