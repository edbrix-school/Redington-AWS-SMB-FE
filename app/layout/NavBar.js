'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
    { label: 'My Solutions', href: '/my-solutions' },
    { label: 'Knowledge Hub', href: '/Knowledge-Hub' },
    { label: 'Service desk', href: '/service-desk' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Support Sessions', href: '/support-sessions' },
    { label: 'Events', href: '/events' },
    { label: 'Insights', href: '/insights' },
    { label: 'Reports', href: '/reports' },
    { label: 'User Management', href: '/user-management' },
    { label: 'Announcements', href: '/announcements' },
    { label: 'My Profile', href: '/my-profile' },
    { label: 'My Company', href: '/my-company' },
    { label: 'Activity Log', href: '/activity-log' },
];

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        // 1. Removed 'fixed top-[45px]' to stop sticky behavior. 
        // 2. Added relative/w-full to flow naturally.
        <div className="bg-[#263040] text-gray-300 w-full shadow-md border-t border-gray-700/50 relative">

            <div className="px-[20px] xl:px-[20px] 3xl:px-[1.875vw] h-[64px] flex items-center justify-between">

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        className="text-white bg-transparent"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center justify-between flex-1 pr-8 overflow-x-auto no-scrollbar h-full">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`px-3 py-2 rounded-[6px] text-[13px] font-medium whitespace-nowrap transition-all ${isActive
                                        ? 'bg-[#4A4167] text-white shadow-md'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <button className="bg-[#8078B9] hover:bg-[#5a52d5] text-white px-4 py-2.5 rounded-[50px] text-[13px] font-semibold whitespace-nowrap shadow-md transition-colors flex-shrink-0">
                    Schedule a Session
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-[#23282E] border-b border-gray-700 z-50 py-2 shadow-xl max-h-[80vh] overflow-y-auto">
                    <div className="flex flex-col px-4 gap-2">
                        {NAV_ITEMS.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`px-4 py-3 rounded-md text-sm font-medium text-left ${isActive
                                            ? 'bg-[#5B5494] text-white'
                                            : 'hover:bg-white/10 hover:text-white'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
