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
    <div className="fixed inset-0 z-50 flex items-center justify-start gap-4 bg-black/40 ">
      {/* Popup panel */}
      <div
        className={`relative flex h-full w-full max-w-[1550px] overflow-hidden rounded-r-[32px] popup-enter`} // Add animation class here
      >
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
      {/* Floating close button */}
      <button
        type="button"
        onClick={onClose}
        className="flex items-center justify-center cursor-pointer rounded-full bg-transparent p-2 lg:flex popup-enter "
      >
        <Image
          src="/assets/icons/closecircle.svg"
          alt="Close"
          width={100}
          height={100}
        />
      </button>
    </div>
  );
}
