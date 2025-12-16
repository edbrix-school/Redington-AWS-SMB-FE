import React from 'react';
import { ChevronRight } from 'lucide-react';
import Searchbox from '../common/searchbox';
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const Hero = () => {
    return (
        <div className="relative overflow-hidden text-white min-h-[500px] flex flex-col justify-center faq-base-banner-bg">
            <div className="mx-auto w-full relative z-10 px-[4.167vw]">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 font12 text-white ">
                    <span>Home</span>
                    <ChevronRight size={12} />
                    <span className="text-white font-medium">FAQs</span>
                </div>

                {/* Title */}
                <h1 className={`${roboto.variable}text-3xl md:text-4xl font-bold mb-3`}>FAQs</h1>

                {/* Description */}
                <p className="text-InterfaceTextinverse  font-normal font16 my24 leading-[120%]">
                    Find quick answers to common questions about our platform, features, and services - all in one place.
                </p>

                {/* Search Bar Section */}
               <Searchbox />
            </div>
        </div>
    );
};