import Image from "next/image";
import { Card } from "primereact/card";
import TwinSlider from "../common/twin-thread-slider/twin-slider";
const industrySector = [
  {
    name: "Advertising & Marketing",
    count: 12,
    description:
      "Figma ipsum component variant main layer. Device rectangle outline vertical list. Slice.",
  },
  {
    name: "Aerospace & Satellite",
    count: 16,
    description:
      "Figma ipsum component variant main layer. Device rectangle outline vertical list. Slice.",
  },
  {
    name: "Agriculture",
    count: 10,
    description:
      "Figma ipsum component variant main layer. Device rectangle outline vertical list. Slice.",
  },
  {
    name: "Automotive",
    count: 8,
    description:
      "Figma ipsum component variant main layer. Device rectangle outline vertical list. Slice.",
  },
  {
    name: "Consumer Packaged Goods",
    count: 12,
    description:
      "Figma ipsum component variant main layer. Device rectangle outline vertical list. Slice.",
  },
  {
    name: "Education",
    count: 12,
    description:
      "Figma ipsum component variant main layer. Device rectangle outline vertical list. Slice.",
  },
  {
    name: "Energy & Utilities",
    count: 12,
    description:
      "Figma ipsum component variant main layer. Device rectangle outline vertical list. Slice.",
  },
  {
    name: "Financial Services",
    count: 12,
    description:
      "Figma ipsum component variant main layer. Device rectangle outline vertical list. Slice.",
  },
  {
    name: "Telecom",
    count: 12,
    description:
      "Figma ipsum component variant main layer. Device rectangle outline vertical list. Slice.",
  },
  {
    name: "Games",
    count: 12,
    description:
      "Figma ipsum component variant main layer. Device rectangle outline vertical list. Slice.",
  },
];
const CARD_BACKGROUNDS = [
  "/images/all-sector-bg-1.svg",
  "/images/all-sector-bg-2.svg",
  "/images/all-sector-bg-3.svg",
  "/images/all-sector-bg-4.svg",
  "/images/all-sector-bg-5.svg",
];

export default function AllSectorsView({ onSectorClick }) {
  return (
    <>
      {/* Grid */}
      <div className="flex h-full flex-col">
        <div className="mt-4 flex-1 overflow-y-auto pb-4 custom-scroll ">
          <div className="responsive-grid">
            {industrySector.map((sector, idx) => {
              const isClickable = sector.name === "Advertising & Marketing";
              const bgImage = CARD_BACKGROUNDS[idx % 5];
              const isViewMore =
                sector.name === "Games" && idx === industrySector.length - 1;

              if (isViewMore) {
                // last "View more" tile
                return (
                  <div
                    key={sector.name}
                    className="flex items-center justify-center max-w-xs rounded-2xl bg-white/70 p-4 text-[14px] font-medium text-interface-text-default shadow-sm cursor-pointer"
                  >
                    View More
                  </div>
                );
              }

              return (
                <Card
                  key={idx}
                  className="sector-card group shadow-sm max-w-sm cursor-pointer flex flex-col"
                  onClick={
                    isClickable
                      ? () => onSectorClick(sector.name, sector.count)
                      : undefined
                  }
                  style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex-1">
                    <p className="sector-subtitle">SECTOR</p>

                    <h4 className="sector-title">{sector.name}</h4>

                    <p className="sector-description">{sector.description}</p>
                  </div>
                  {/* -------- FOOTER (always at bottom) -------- */}
                  <div className="mt-8 flex items-center justify-end gap-2">
                    {/* PLAY ICON (DEFAULT) */}
                    <button
                      className="
        flex h-8 w-8 items-center justify-center rounded-md bg-[#42536D]
        text-white group-hover:hidden transition-all
      "
                    >
                      <Image
                        src="/assets/icons/arrow-right.svg"
                        width={20}
                        height={20}
                        alt="arrow"
                      />
                    </button>

                    {/* VIEW SOLUTION (HOVER STATE) */}
                    <button
                      className="
        hidden group-hover:flex items-center gap-1 rounded-md bg-[#42536D] 
        text-white px-3 py-1 text-[12px] ml-2 transition-all
      "
                    >
                      View Solution
                      <Image
                        src="/assets/icons/arrow-right.svg"
                        width={18}
                        height={18}
                        alt="arrow"
                      />
                    </button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Bottom promoted banners */}
          <div className="mb-10">
            <div className="mt-5 grid gap-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              {/* TonAI banner */}
              <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#1C273D_0%,#304570_100%)] p-4 text-white">
                <Image
                  src="/images/catalog-bottom-tonai-bg-vector.svg"
                  alt="vector"
                  fill
                  className="object-cover opacity-90"
                />
                <div className="flex items-center justify-cener gap-2">
                  <div className="relative z-10 max-w-sm">
                    <Image
                      src="/images/tonai.svg"
                      alt="TonAI"
                      width={100}
                      height={100}
                    />
                    <h4 className="mt-2 font16 font-semibold leading-snug">
                      Not Sure Which AWS Hub to Use <br />
                      for Your Business?
                    </h4>
                    <p className="my18 font12 leading-[18px] text-slate-100/90">
                      Just ask our chatbot! It will ask you a few simple
                      questions and guide you step-by-step to the AWS hub that
                      best fits your business size, goals, and technical needs.
                    </p>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex items-center justify-between rounded-lg bg-[linear-gradient(90.85deg,rgba(255,233,67,0.22)_5.05%,rgba(67,219,62,0.22)_97.08%)] px-4 py-1.5 font12 font-medium text-white relative"
                    >
                      <span>Start Chat Now</span>

                      {/* Catalog search logo in the top-right corner */}
                      <Image
                        src="/images/catalog-bottom-search-logo.svg"
                        alt="Search Logo"
                        width={24}
                        height={24}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      />
                    </button>
                  </div>
                  <div className="relative w-42 h-42 xl:w-52 xl:h-52 md:absolute md:right-[10rem] md:top-[4rem] xl:absolute xl:right-[5rem] xl:top-[4rem] 2xl:absolute 2xl:right-[1rem] 2xl:top-[1rem] hidden md:block">
                    <Image
                      src="/images/catalog-tonai-girl.svg"
                      alt="vector"
                      fill
                      // width={230}
                      // height={230}
                      className=" opacity-90"
                    />
                  </div>
                </div>
              </div>

              {/* TwinThread banner */}
              <div className="relative overflow-hidden rounded-2xl twinthread-shadow bg-white text-white">
                <TwinSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
