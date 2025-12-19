
"use client";
import React from "react";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import Link from "next/link";

export default function ViewActivity({ visible, onHide }) {
    return (
        <div>
            <Sidebar
                visible={visible}
                position="right"
                className="!w-full lg:!w-[450px] xl:!w-[450px] 2xl:!w-[27.5vw] 3xl:!w-[27.5vw]  customsidebar2 bg-[#F6F7F8] rounded8"
                onHide={onHide}
                blockScroll={true}

            >
                <div className="flex flex-col h-full">
                    <div className="border-top-left-radius: 1rem flex-none">
                        <div className="sidebar-header">
                            <div className=" text-[#212325]  font24 font-bold">
                                View
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-content">
                        <div className="p24">
                            {/* Row 1: Full Timestamp & Activity */}
                            <div className="grid grid-cols-2 gap14 pb-2">
                                <div className="detail-row">
                                    <label className="detail-label">
                                        Full Timestamp
                                    </label>
                                    <div className="detail-value">20/05/2025, 11:00 hrs</div>
                                </div>
                                <div className="detail-row">
                                    <label className="detail-label">
                                        Activity
                                    </label>
                                    <div className="detail-value">Order Placed</div>
                                </div>
                            </div>

                            {/* Row 2: Event Specific Data Fields & Performed by */}
                            <div className="grid grid-cols-2 gap14 pb-2">
                                <div className="detail-row">
                                    <label className="detail-label">
                                        Event Specific Data Fields
                                    </label>
                                    <div className="detail-value">
                                        Order ID : #12345
                                    </div>
                                </div>

                                <div className="detail-row">
                                    <label className="detail-label">
                                        Performed by (User, System, API)
                                    </label>
                                    <div className="detail-value">
                                        Robert Fox
                                    </div>
                                </div>
                            </div>

                            {/* Row 3: IP Address */}
                            <div className="grid grid-cols-2 gap14">
                                <div className="detail-row">
                                    <label className="detail-label">
                                        IP Address
                                    </label>
                                    <div className="detail-value">
                                        120.4.199.254
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 left-0 flex-none">
                        <div className="sidebar-footer">
                            <div className="btn-secondary">
                                <Link onClick={onHide} href={""}>
                                    Cancel
                                </Link>
                            </div>

                            <div
                                onClick={() => setShow(true)}
                                className="btn-primary"
                            >
                                Apply Filter
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}
