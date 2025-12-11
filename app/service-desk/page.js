'use client';

import React from 'react';
import TopBar from '../layout/top';
import { NavBar } from '../layout/NavBar';
import { Hero } from '@/components/service-desk/banner';
import { ServicesDeskList } from '@/components/service-desk/listting';


export default function ServiceDesk() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <TopBar />
      <div className=""> {/* Added padding for fixed TopBar + NavBar */}
        <NavBar />
        <div className=''>
        <Hero />
        <main className="flex-grow -mt-20 relative z-20 px-[20px] lg:px-[60px] xl:px-[70px] 3xl:px-[4.167vw] pb-10"> 
          <ServicesDeskList />
        </main>
        </div>
      </div>
    </div>
  );
}
