'use client';

import React from 'react';
import TopBar from '../layout/top';
import { NavBar } from '../layout/NavBar';
import { Hero } from '@/components/my-profile/Hero';
import { MyProfile } from '@/components/my-profile/my-profile';


export default function MyProfilePage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
            <TopBar />
            <NavBar />
            <Hero />
            <main className="flex-grow -mt-20 relative z-20 px-4 md:px-8 pb-10">
                <MyProfile />
            </main>
        </div>
    );
}
