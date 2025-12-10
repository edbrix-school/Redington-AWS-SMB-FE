import React, { useEffect, useState } from 'react';
import { X, XCircle, Clock } from 'lucide-react';

export const ViewAnnouncements = ({ visible, onHide, data }) => {
    const [show, setShow] = useState(visible);

    // Handle animation state - exact logic from Filter.jsx
    useEffect(() => {
        if (visible) setShow(true);
        else {
            const timer = setTimeout(() => setShow(false), 300);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    if (!show && !visible) return null;

    return (
        <div className={`fixed inset-0 z-[9999] overflow-hidden ${visible ? 'pointer-events-auto' : 'pointer-events-none'}`}>

            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'
                    }`}
                onClick={onHide}
            />

            {/* Sidebar Container */}
            <div
                className={`absolute right-0 top-0 h-full w-[500px] md:w-[600px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col rounded-l-3xl ${visible ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* --- Header --- */}
                <div className="px-8 py-6 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">Announcement</h2>
                    <button
                        onClick={onHide}
                        className="text-orange-400 hover:text-orange-500 transition-colors"
                    >
                        <XCircle size={28} />
                    </button>
                </div>

                {/* --- Body (Scrollable) --- */}
                <div className="flex-1 overflow-y-auto px-8 pb-8 space-y-6">

                    {/* Featured Card */}
                    <div className="relative w-full h-64 rounded-xl overflow-hidden group">
                        {/* Placeholder image trying to match the vibe */}
                        <img
                            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop"
                            alt="Announcement Feature"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end text-white">
                            <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider">
                                General
                            </span>
                            <h3 className="text-xl font-bold mb-2 leading-tight">
                                {data?.title || "Microsoft AI ignites telecom innovation and growth"}
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-gray-300">
                                <Clock size={14} />
                                <span>{data?.dateCreated ? data.dateCreated.toLocaleDateString() : "Apr 14, 2025, 2:34 PM"}</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Text */}
                    <div className="space-y-4 text-sm text-gray-600 leading-relaxed font-normal">
                        <p>
                            The telecommunications industry is experiencing significant AI advancements, emerging as the leading adopter of generative and agentic AI to drive automation, personalization, and data-driven decisions.
                        </p>
                        <p>
                            According to a recent IDC white paper, telecom and media companies are seeing nearly four times the return on investment (ROI) on every dollar invested in AI. Additionally, by 2027, almost 90% of telecom providers are expected to use generative AI to improve customer experiences.
                        </p>
                        <p>
                            36% of our tier-1 telecom customers are already adopting Microsoft AI solutions. Our ecosystem of customers and partners are harnessing the power of AI to reimagine customer experiences, modernize networks, automate business operations, and drive growth.
                        </p>
                    </div>

                    {/* Logos Image (Mockup) */}
                    <div className="w-full bg-gray-50 rounded-lg p-4 flex items-center justify-center border border-gray-100">
                        {/* Using a placeholder that looks like logos */}
                        <img
                            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60"
                            alt="Partners"
                            className="w-full opacity-80 mix-blend-multiply"
                        />
                    </div>

                    <div className="text-sm text-gray-600 leading-relaxed">
                        <p>
                            Ahead of Mobile World Congress 2025 (MWC), we're sharing new capabilities and customer momentum that show how telecoms are adopting the Microsoft Cloud and AI capabilities to support their journey.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};
