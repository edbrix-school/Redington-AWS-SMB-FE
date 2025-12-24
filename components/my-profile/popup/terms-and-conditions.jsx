// Updated TermsAndConditions Component with SS Body Content
"use client";
import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Link from "next/link";
import Image from "next/image";

export default function TermsAndConditions({ visible, onHide }) {
    return (
        <div>
            <Sidebar
                visible={visible}
                position="right"
                className="!w-full lg:!w-[600px] xl:!w-[600px] bg-[#F6F7F8] rounded8 customsidebar2"
                onHide={onHide}
                blockScroll={true}
            >
                <div className="flex flex-col h-full">
                    {/* Sticky Header */}
                    <div className="flex-none bg-[#fff] p-6 border-b border-[#E5E7EB] sticky top-0 z-10 rounded-tl-[10px]">
                        <div className="text-[#212325] font-bold text-[22px] leading-[28px]">
                            Terms and Conditions
                        </div>
                    </div>

                    {/* Body Scrollable */}
                    <div className="flex-1 overflow-y-auto p-6 text-[#4B5563] text-[14px] leading-[22px] space-y-4">
                        <h2 className="text-[#111928] font-semibold text-[16px] mb-2">
                            Redington CloudQuarks - Platform User Account Creation T&Cs
                        </h2>

                        <p>
                            This is to notify to the general public that some unscrupulous persons are unjustifiably
                            using the name of Redington Limited / Redington Group / Affiliates ("Redington") and posing
                            themselves as employees, representatives, agents of Redington and the associated group
                            companies, with ulterior motives and are fraudulently offering investment opportunities to
                            innocent end-users associates and are fraudulently offering the investment opportunity.
                        </p>

                        <p>
                            Further, Redington does not ask, solicit and accept any money from end user for schemes in
                            any manner nor do the Redington teams and business associates, whether online or otherwise.
                            Redington does not take responsibility for amounts being deposited / withdrawn therefrom in
                            response to such fake offers.
                        </p>

                        <h3 className="text-[#111928] font-semibold mt-4">Redington does not:</h3>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Solicit any investment in schemes from free email services like Gmail, Rediff mail, Yahoo mail, etc.</li>
                            <li>Request payment of any kind from prospective investor.</li>
                            <li>Authorize anyone to collect money or enter into any monetary arrangement in return for any business opportunity at Redington.</li>
                            <li>Recruit sales partners or employees through professional investment agencies.</li>
                        </ul>

                        <h3 className="text-[#111928] font-semibold mt-4">Please Note:</h3>
                        <ul className="list-disc ml-6 space-y-1">
                            <li>Redington strongly recommends potential investors/business associates exercise utmost caution.</li>
                            <li>Redington will not be responsible to anyone acting on offers not directly made by Redington.</li>
                            <li>Do not share any financial/investment credentials.</li>
                            <li>Redington reserves the right to take legal action against individuals misusing its name.</li>
                        </ul>

                        <p>
                            We request you to kindly visit our official careers website for authentic information
                            pertaining to business association opportunity with Redington and ensure that the company or
                            content of the offer is genuine.
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="flex-none bg-[#fff] p-4 flex justify-end gap-4 border-t border-[#E5E7EB] rounded-bl-[10px] sticky bottom-0">
                        <button
                            onClick={onHide}
                            className="text-[#3C4146] font-medium py-2 px-5 border border-[#E5E7EB] rounded-lg hover:bg-[#f2f2f3] cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}
