'use client';

import React from 'react';
import TopBar from '../layout/top';
import { NavBar } from '../layout/NavBar';
import { FAQSection } from '@/components/faqs/faq-section';
import { Hero } from '@/components/faqs/banner';

export default function ServiceDesk() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <TopBar />
      <div className=""> {/* Added padding for fixed TopBar + NavBar */}
        <NavBar />
        <div className=''>
        <Hero />
        <main className="flex-grow -mt-8 relative z-20 px-4 md:px-8 pb-10"> 
          <FAQSection />
        </main>
        </div>
      </div>
    </div>
  );
}
