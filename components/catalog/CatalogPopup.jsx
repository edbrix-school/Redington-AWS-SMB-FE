"use client";

import { useState } from "react";
import CatalogSidebar from "./CatalogSidebar";
import AllSectorsView from "./AllSectorsView";
import AdvertisingView from "./AdvertisingView";
import BreadcrumbBar from "./BreadcrumbBar";

export default function CatalogPopup({ open, onClose }) {
  const [selectedSector, setSelectedSector] = useState(null);
  const [sectorCount, setSectorCount] = useState(null);

  if (!open) return null;

  const showAllSectors = !selectedSector;

  const handleSectorSelect = (sectorName, count) => {
    setSelectedSector(sectorName);
    setSectorCount(count);
  };

  const handleBackToAll = () => {
    setSelectedSector(null);
    setSectorCount(null);
  };

  return (
    <div className="relative flex h-full w-full lg:overflow-hidden xs:overflow-y-auto xs:!custom-scroll rounded-r-[32px]">
      {/* Inner layout */}
      <div className="flex h-full w-full flex-col md:flex-row">
        {/* left side */}
        <div className="catalog-left">
          <CatalogSidebar
            selectedSector={selectedSector}
            onSectorSelect={handleSectorSelect}
          />
        </div>
        {/* Main content */}
        <div
          className={`flex-1 border-t border-neutral-200/60 bg-[#f0f4f5] px-4 pb-4 pt-4 xs:px-5 sm:px-6 sm:pt-5 lg:border-t-0 lg:border-l lg:px-6 lg:pb-6 lg:pt-6`}
        >
          <BreadcrumbBar
            selectedSector={selectedSector}
            count={sectorCount}
            onBack={handleBackToAll}
          />
          {showAllSectors ? (
            <AllSectorsView onSectorClick={handleSectorSelect} />
          ) : (
            <AdvertisingView
              sectorName={selectedSector}
              onBackClick={handleBackToAll}
            />
          )}
        </div>
      </div>
    </div>
  );
}
