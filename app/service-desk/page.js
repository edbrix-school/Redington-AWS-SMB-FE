'use client';

import React from 'react';
import { NavBar } from '../layout/NavBar';
import { Hero } from '@/components/service-desk/banner';
import { ServicesDeskList } from '@/components/service-desk/listting';


export default function ServiceDesk() {
  return (
<div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <NavBar />
      <Hero />
      <main className="flex-grow -mt-20 relative z-20 px-4 md:px-8 pb-10"> {/* Negative margin to overlap Hero */}
       <ServicesDeskList />
      </main>
    </div>
  );
}
