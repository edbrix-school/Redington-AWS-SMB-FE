'use client';

import React from 'react';
import { NavBar } from '../layout/NavBar';
import { Hero } from '@/components/activity-log/Hero';
import { FilesTable } from '@/components/activity-log/FilesTable';

export default function ActivityLog() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
            <NavBar />
            <Hero />
            <main className="flex-grow -mt-20 relative z-20 pb-10"> {/* Negative margin to overlap Hero */}
                <FilesTable />
            </main>
        </div>
    );
}
