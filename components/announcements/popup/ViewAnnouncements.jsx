import React from "react";
import { Sidebar } from "primereact/sidebar";
import { Clock } from "lucide-react";

export const ViewAnnouncements = ({ visible, onHide, data }) => {
    return (
        <Sidebar
            visible={visible}
            onHide={onHide}
            position="right"
            showCloseIcon={false}
            blockScroll={true}
            maskClassName="!bg-black/40"
            className="!w-[450px] lg:!w-[480px] xl:!w-[580px] 2xl:!w-[32.5vw] 3xl:!w-[35.5vw]  customsidebar2 bg-[#F6F7F8]"
        >
            <div className="flex flex-col h-full">
                {/* ------------ HEADER ------------ */}
                <div className="sidebar-header flex items-center justify-between border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900 tracking-tight">
                        Announcement
                    </h2>

                    <button
                        onClick={onHide}
                        className="text-orange-500 hover:text-orange-600 transition-colors cursor-pointer"
                    >
                        <img src="/images/close-circle-2.svg" alt="Close" className="w-[22px] h-[22px]" />
                    </button>
                </div>

                {/* ------------ BODY ------------ */}
                <div className="sidebar-content p24">

                    {/* --- TOP CARD --- */}
                    <div className="mt-4 rounded-xl overflow-hidden border border-gray-200 bg-white">
                        <img
                            src="/images/Announcement-img.png"
                            alt="Announcement"
                            className="w-full h-[200px] object-cover"
                        />
                    </div>

                    {/* --- BODY TEXT --- */}
                    <div className="mt-5 text-[16px] leading-relaxed text-gray-700 space-y-3">
                        <p>
                        The telecommunications industry is experiencing significant AI advancements, emerging as the leading adopter of generative and agentic AI to drive automation, personalization, and data-driven decisions. According to a recent IDC white paper, telecom and media companies are seeing nearly four times the return on investment (ROI) on every dollar invested in AI. Additionally, by 2027, almost 90% of telecom providers are expected to use generative AI to improve customer experiences, up from 62% today.
                        </p>
                        <p>
                        96% of our tier-1 telecom customers are already adopting Microsoft AI solutions. Our ecosystem of customers and partners are harnessing the power of AI to reimagine customer experiences, modernize networks, automate business operations, and drive growth.
                        </p>
                    </div>

                    {/* --- LOGOS --- */}
                    <div className="mt-5 w-full bg-gray-100 rounded-lg p-3 border border-gray-300">
                        <img
                            src="/images/Announcement-img2.png"
                            alt="logos"
                            className="w-full object-contain opacity-80"
                        />
                    </div>

                    {/* --- FINAL PARAGRAPH --- */}
                    <div className="mt-5 mb-5 text-[16px] text-gray-700 leading-relaxed">
                        <p>
                        Ahead of Mobile World Congress 2025 (MWC), we’re sharing new capabilities and customer momentum that show how telecoms are adopting the Microsoft Cloud and AI capabilities to support their AI journey and empower the next generation of telecom solutions. 
                        We invite you to join us next week at MWC to learn more about our new announcements and see firsthand how Microsoft AI is transforming the telecom industry. Experience live demos, attend insightful sessions, and meet our experts to learn how you can drive innovation and growth with Microsoft AI technologies.
                        </p>
                    </div>

                </div>
            </div>
        </Sidebar>
    );
};
