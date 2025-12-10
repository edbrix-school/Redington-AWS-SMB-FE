

import Tabel from '@/components/user-management/tabel'
import React from 'react'
import { NavBar } from '../layout/NavBar'
import { Hero } from '@/components/Knowledge-Hub/Hero'

export default function page() {
  return (
     <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
       
          <NavBar/>
          <Hero/>
          <main className="flex-grow -mt-12 relative  px-4 md:px-8 pb-10"> {/* Negative margin to overlap Hero */}
         <Tabel/>
          </main>
        </div>
  )
}
