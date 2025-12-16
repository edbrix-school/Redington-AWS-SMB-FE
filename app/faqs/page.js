'use client';

import React from 'react';
import { NavBar } from '../layout/NavBar';
import { FAQSection } from '@/components/faqs/faq-section';
import { Hero } from '@/components/faqs/banner';

export default function ServiceDesk() {
  return (
    <div className="min-h-screen bg-InterfaceSurfacepage flex flex-col">
      <div className=""> {/* Added padding for fixed TopBar + NavBar */}
        <NavBar />
        <div className=''>
        <Hero />
        <main className="flex-grow -mt-8 relative z-20 pb-10 px-[50px] lg:px-[60px] xl:px-[70px] 3xl:px-[3.75vw]"> 
          <FAQSection />
        </main>
        </div>
      </div>
    </div>
  );
}
