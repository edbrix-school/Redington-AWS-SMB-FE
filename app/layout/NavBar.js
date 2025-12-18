'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
    { label: 'My Solutions', href: '/my-solutions' },
    { label: 'Knowledge Hub', href: '/knowledge-hub' },
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

    const NavItem = ({ item, mobile = false, onClick }) => {
        const normalizedPath = pathname.toLowerCase();
        const normalizedHref = item.href.toLowerCase();
        const isActive = normalizedPath === normalizedHref || normalizedPath.startsWith(`${normalizedHref}/`);

        const desktopClasses = `px-[3px] md:px-[5px] xl:px-[6px] 2xl:px-[0.513vw] 3xl:px-[0.513vw] py-[3px] md:py-[5px] xl:py-[4px] 2xl:py-[0.313vw] 3xl:py-[0.313vw] rounded-[6px] 
        text-[14px] md:text-[12px] xl:text-[11px] 2xl:text-[0.729vw] 3xl:text-[0.729vw]
        font-medium whitespace-nowrap transition-all ${isActive
                ? 'bg-[#4A4167] text-white shadow-md'
                : 'text-[#C9D0DB] hover:text-white'
            }`;

        const mobileClasses = `px-4 py-3 rounded-md text-sm font-medium text-left ${isActive
            ? 'bg-[#5B5494] text-white'
            : 'hover:bg-white/10 hover:text-white'
            }`;

        return (
            <Link
                href={item.href}
                className={mobile ? mobileClasses : desktopClasses}
                onClick={onClick}
            >
                {item.label}
            </Link>
        );
    };

    return (
        // 1. Removed 'fixed top-[45px]' to stop sticky behavior. 
        // 2. Added relative/w-full to flow naturally.
        <div className="bg-[#263040] text-gray-300 w-full shadow-md border-t border-gray-700/50 relative">

            <div className="px-[20px] xl:px-[20px] 3xl:px-[1.875vw]  h-[55px] md:h-[55px] xl:h-[50px] 2xl:h-[2.865vw] 3xl:h-[2.865vw] flex items-center justify-between">

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        className="text-white bg-transparent cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center justify-between flex-1 pr-8 overflow-x-auto no-scrollbar h-full">
                    {NAV_ITEMS.map((item) => (
                        <NavItem key={item.label} item={item} />
                    ))}
                </div>

                {/* CTA Button */}
                <button className="bg-[#8078B9] hover:bg-[#5a52d5] text-white px-[15px] md:px-[15px] xl:px-[15px] 2xl:px-[0.938vw] 3xl:px-[0.938vw] py-[3px] md:py-[5px] xl:py-[5px] 2xl:py-[0.365vw] 3xl:py-[0.365vw] rounded-[50px]  text-[14px] md:text-[12px] xl:text-[11px] 2xl:text-[0.729vw] 3xl:text-[0.729vw] font-normal whitespace-nowrap shadow-md transition-colors flex-shrink-0 cursor-pointer">
                    Schedule a Session
                </button>
            </div>

            {/* Mobile Nav Dropdown */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-[#23282E] border-b border-gray-700 z-50 py-2 shadow-xl max-h-[80vh] overflow-y-auto">
                    <div className="flex flex-col px-4 gap-2">
                        {NAV_ITEMS.map((item) => (
                            <NavItem
                                key={item.label}
                                item={item}
                                mobile={true}
                                onClick={() => setIsOpen(false)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
