'use client';

import React from 'react';
import TopBar from '../layout/top';
import { NavBar } from '../layout/NavBar';
import { Hero } from '@/components/service-desk/banner';
import { ServicesDeskList } from '@/components/service-desk/listting';
import { Events } from '@/components/events/event';
import { EventsHero } from '@/components/events/components/eventshero';


export default function ServiceDesk() {
  return (
<div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <TopBar />
      <NavBar />
     <EventsHero/>
      <main className="flex-grow -mt-20 relative z-20 px-4 md:px-8 pb-10"> {/* Negative margin to overlap Hero */}
      <Events/>
      </main>
    </div>
  );
}
