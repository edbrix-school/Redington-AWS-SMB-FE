"use client";

import { useState } from "react";
import Image from "next/image";
import CatalogSidebar from "./CatalogSidebar";
import AllSectorsView from "./AllSectorsView";
import AdvertisingView from "./AdvertisingView";

const SECTOR_KEY = "Advertising & Marketing";

export default function CatalogPopup({ open, onClose }) {
  const [selectedSector, setSelectedSector] = useState(null);

  if (!open) return null;

  const showAllSectors = !selectedSector;
  const handleSectorSelect = (sector) => setSelectedSector(sector);
  const handleBackToAll = () => setSelectedSector(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-start bg-black/40 ">
      {/* Popup panel */}
      <div className="relative flex h-full w-full max-w-[1250px] overflow-hidden rounded-r-[32px] ">
        {/* Floating close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -right-10 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 shadow-xl lg:flex"
        >
          <Image
            src="/assets/icons/closecircle.svg"
            alt="Close"
            width={40}
            height={40}
          />
        </button>

        {/* Inner layout */}
        <div className="flex h-full w-full flex-col lg:flex-row">
          {/* Sidebar */}
          <CatalogSidebar
            selectedSector={selectedSector}
            onSectorSelect={handleSectorSelect}
          />

          {/* Main content */}
          <main className="flex-1 border-t border-neutral-200/60 bg-[#f0f4f5] px-4 pb-4 pt-4 xs:px-5 sm:px-6 sm:pt-5 lg:border-t-0 lg:border-l lg:px-6 lg:pb-6 lg:pt-6">
            {showAllSectors ? (
              <AllSectorsView
                onSectorClick={() => handleSectorSelect(SECTOR_KEY)}
              />
            ) : (
              <AdvertisingView
                sectorName={SECTOR_KEY}
                onBackClick={handleBackToAll}
              />
            )}
          </main>
        </div>

        {/* Mobile close (inside panel) */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex items-center justify-center rounded-full bg-white/80 p-1 shadow-md lg:hidden"
        >
          <Image
            src="/assets/icons/closecircle.svg"
            alt="Close"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}
