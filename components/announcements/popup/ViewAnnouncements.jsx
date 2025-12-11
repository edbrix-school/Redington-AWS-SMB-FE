import React from "react";
import { Sidebar } from "primereact/sidebar";
import { X, Clock } from "lucide-react";

export const ViewAnnouncements = ({ visible, onHide, data }) => {
    return (
        <Sidebar
            visible={visible}
            onHide={onHide}
            position="right"
            showCloseIcon={false}
            blockScroll={true}
            maskClassName="!bg-black/40"
            className="!w-[500px] md:!w-[500px] !p-0 !border-none !shadow-2xl overflow-hidden"
        >
            {/* ------------ HEADER ------------ */}
            <div className="px-1 py-2 flex items-center justify-between bg-white border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 tracking-tight">
                    Announcement
                </h2>

                <button
                    onClick={onHide}
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                >
                    <X size={22} />
                </button>
            </div>

            {/* ------------ BODY ------------ */}
            <div className="h-full overflow-y-auto px-5 pb-8">

                {/* --- TOP CARD --- */}
                <div className="mt-4 rounded-xl overflow-hidden border border-gray-200 bg-white">
                    <img
                        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop"
                        alt="Announcement"
                        className="w-full h-[200px] object-cover"
                    />

                    <div className="px-4 pt-3 pb-4">
                        <h3 className="text-[15px] font-semibold text-gray-900 leading-[1.35]">
                            Microsoft AI ignites telecom innovation and growth
                        </h3>

                        <div className="flex items-center gap-1.5 mt-2 text-[12px] text-gray-500">
                            <Clock size={14} />
                            <span>
                                {data?.dateCreated
                                    ? data.dateCreated.toLocaleDateString()
                                    : "Apr 14, 2025, 2:34 PM"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* --- BODY TEXT --- */}
                <div className="mt-5 text-[13px] leading-relaxed text-gray-700 space-y-3">
                    <p>
                        The telecommunications industry is experiencing significant AI advancements,
                        emerging as the leading adopter of generative and agentic AI to drive 
                        automation, personalization, and data-driven decisions.
                    </p>
                    <p>
                        According to a recent IDC white paper, telecom and media companies are 
                        seeing nearly four times the return on investment (ROI) on every dollar invested in AI. 
                        Additionally, by 2027, almost 90% of telecom providers are expected to use generative AI 
                        to improve customer experiences.
                    </p>
                    <p>
                        36% of our tier-1 telecom customers are already adopting Microsoft AI solutions. 
                        Our ecosystem of customers and partners are harnessing the power of AI to reimagine 
                        customer experiences, modernize networks, automate business operations, and drive growth.
                    </p>
                </div>

                {/* --- LOGOS --- */}
                <div className="mt-5 w-full bg-gray-100 rounded-lg p-3 border border-gray-300">
                    <img
                        src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60"
                        alt="logos"
                        className="w-full object-contain opacity-80"
                    />
                </div>

                {/* --- FINAL PARAGRAPH --- */}
                <div className="mt-5 text-[13px] text-gray-700 leading-relaxed">
                    <p>
                        Ahead of Mobile World Congress 2025 (MWC), we’re sharing new capabilities
                        and customer momentum that show how telecoms are adopting the Microsoft 
                        Cloud and AI capabilities to support their journey.
                    </p>
                </div>

            </div>
        </Sidebar>
    );
};
