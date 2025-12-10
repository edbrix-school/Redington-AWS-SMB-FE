'use client';

import React from 'react';
import TopBar from '../layout/top';
import { NavBar } from '../layout/NavBar';

// import { FilesTable } from '@/components/Knowledge-Hub/FilesTable';
import Footer from '../layout/footer';
import { Hero } from '@/components/service-desk/banner';

export default function ServiceDesk() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <TopBar />
      <div className=""> {/* Added padding for fixed TopBar + NavBar */}
        <NavBar />
        <div className=''>
        <Hero />
        {/* <main className="flex-grow -mt-8 relative z-20 px-4 md:px-8 pb-10"> 
          <FilesTable />
        </main> */}
        </div>
      </div>
    </div>
  );
}
