"use client";

import { useState } from "react";
import Image from "next/image";
import CatalogSidebar from "./CatalogSidebar";
import AllSectorsView from "./AllSectorsView";
import AdvertisingView from "./AdvertisingView";
const SECTOR_KEY = "Advertising & Marketing";

export default function CatalogPopup({ open, onClose }) {
  const [selectedSector, setSelectedSector] = useState(null); // Default to null (no sector selected)
  if (!open) return null;

  const showAllSectors = !selectedSector; // If no sector is selected, show All Sectors view

  const handleSectorSelect = (sector) => setSelectedSector(sector); // When a sector is selected, set it
  const handleBackToAll = () => setSelectedSector(null); // Go back to the all sectors view

  return (
    <div className="relative flex h-full w-full overflow-hidden rounded-r-[32px]">
      {/* Inner layout */}
      <div className="flex h-full w-full flex-col lg:flex-row">
        {/* left side */}
        <div className="catalog-left">
          <CatalogSidebar
            selectedSector={selectedSector}
            onSectorSelect={handleSectorSelect}
          />
        </div>
        {/* Main content */}
        <div
          className={`flex-1 border-t border-neutral-200/60 bg-[#f0f4f5] px-4 pb-4 pt-4 xs:px-5 sm:px-6 sm:pt-5 lg:border-t-0 lg:border-l lg:px-6 lg:pb-6 lg:pt-6 ${
            open ? "lg:ml-[0px]" : ""
          }`}
        >
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
        </div>
      </div>
    </div>
  );
}
