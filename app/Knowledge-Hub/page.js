'use client';

import React from 'react';
import TopBar from '../layout/top';
import { NavBar } from '../layout/NavBar';
import { Hero } from '@/components/Knowledge-Hub/Hero';
import { FilesTable } from '@/components/Knowledge-Hub/FilesTable';
import Footer from '../layout/footer';

export default function KnowledgeHub() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      <TopBar />
      <div className="pt-[50px]"> {/* Added padding for fixed TopBar + NavBar */}
        <NavBar />
        <Hero />
        <main className="flex-grow -mt-8 relative z-20 px-4 md:px-8 pb-10"> {/* Negative margin to overlap Hero */}
          <FilesTable />
        </main>
        <Footer />
      </div>
    </div>
  );
}
