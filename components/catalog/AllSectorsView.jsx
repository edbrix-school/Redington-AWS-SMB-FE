import Image from "next/image";

const SECTOR_CARDS = [
  "Advertising & Marketing",
  "Aerospace & Satellite",
  "Agriculture",
  "Automotive",
  "Consumer Packaged Goods",
  "Education",
  "Energy & Utilities",
  "Financial Services",
  "Telecom",
  "Games",
];

export default function AllSectorsView({ onSectorClick }) {
  return (
    <div className="flex h-full flex-col">
      {/* Top row: title + sort + search */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-inter text-[18px] font-semibold leading-[24px] tracking-[-0.02em] text-interface-text-title">
          All Sectors
        </h3>

        <div className="flex flex-1 items-center justify-end gap-3">
          {/* Order by */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-[#E4E4E4] bg-white px-3 py-2 text-[12px] text-interface-text-default"
          >
            <span>Order By: Relevance</span>
            <Image
              src="/assets/icons/arrowright2.svg"
              alt="Chevron down"
              width={14}
              height={14}
            />
          </button>

          {/* Right search (in-header) */}
          <div className="hidden items-center gap-2 rounded-lg border border-[#E4E4E4] bg-white px-3 py-2 text-[12px] text-interface-text-subtitle md:flex">
            <Image
              src="/assets/icons/search-outline.svg"
              alt="Search"
              width={14}
              height={14}
            />
            <input
              type="text"
              placeholder="search..."
              className="w-32 border-none bg-transparent text-[12px] text-interface-text-title placeholder:text-interface-text-subtitle focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-4 flex-1 overflow-y-auto pb-4">
        <div className="grid gap-4 xs:grid-cols-2 md:grid-cols-3">
          {SECTOR_CARDS.map((name, idx) => {
            const isClickable = name === "Advertising & Marketing";
            const isViewMore =
              name === "Games" && idx === SECTOR_CARDS.length - 1;

            if (isViewMore) {
              // last "View more" tile
              return (
                <div
                  key={name}
                  className="flex items-center justify-center rounded-2xl bg-white/70 p-4 text-[14px] font-medium text-interface-text-default shadow-sm"
                >
                  View More
                </div>
              );
            }

            return (
              <button
                key={name}
                type="button"
                onClick={isClickable ? onSectorClick : undefined}
                className={[
                  "relative flex h-48 flex-col justify-between rounded-2xl bg-white/90 bg-catalog-sector bg-cover bg-no-repeat p-4 text-left shadow-sm transition-transform",
                  isClickable ? "hover:-translate-y-[2px]" : "",
                ].join(" ")}
              >
                <div>
                  <p className="font-inter text-[10px] uppercase leading-none tracking-[-0.02em] text-interface-text-default">
                    Sector
                  </p>
                  <h4 className="mt-2 max-w-xs font-inter text-[18px] font-semibold leading-[24px] tracking-[-0.02em] text-interface-text-title">
                    {name}
                  </h4>
                  <p className="mt-2 max-w-xs font-inter text-[12px] leading-[18px] tracking-[-0.02em] text-interface-text-subtitle">
                    Figma ipsum component variant main layer. Device rectangle
                    outline vector vertical distribute list. Team device link
                    start text. Slice.
                  </p>
                </div>

                {/* Play button (token 13) */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-neutral-900 text-[11px] text-white"
                  >
                    {/* You can swap this with an actual play icon */}▶
                  </button>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom promoted banners */}
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
                <h4 className="mt-2 text-[16px] font-semibold leading-snug">
                  Not Sure Which AWS Hub to Use for Your Business?
                </h4>
                <p className="mt-2 text-[12px] leading-[18px] text-slate-100/90">
                  Just ask our chatbot! It will ask you a few simple questions
                  and guide you step-by-step to the AWS hub that best fits your
                  business size, goals, and technical needs.
                </p>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex items-center justify-between rounded-lg bg-[linear-gradient(90.85deg,rgba(255,233,67,0.22)_5.05%,rgba(67,219,62,0.22)_97.08%)] px-4 py-1.5 text-[12px] font-medium text-white relative"
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
              <Image
                src="/images/catalog-tonai-girl.svg"
                alt="vector"
                width={230}
                height={230}
                className=" opacity-90"
              />
            </div>
          </div>

          {/* TwinThread banner */}
          <div className="relative overflow-hidden rounded-2xl bg-white p-4">
            <Image
              src="/images/twinthread-bg-img.svg"
              alt="TwinThread"
              fill
              // width={500}
              // height={500}
              className="opacity-90"
            />
            <div className="relative z-10 max-w-sm">
              <Image
                src="/images/catalog-bottom-twinthread-logo.svg"
                alt="TwinThread"
                width={120}
                height={50}
              />
              <h4 className="mt-2 text-[16px] text-[#0A291A] font-medium leading-snug">
                TwinThread Industrial AI
              </h4>
              <p className="mt-2 text-[12px] leading-[18px] text-[#4C525F99]">
                TwinThread accelerates digital transformation for industrial
                companies by integrating AI and machine learning into existing
                workflows, enabling continuous operational improvements with
                minimal disruption. It guides the creation of a sustainable,
                customized Virtual Operations Center, enhancing productivity and
                paving the way for smarter future operations.
              </p>
            </div>
            <div className="absolute bottom-5 left-30">
              <Image
                src="/images/twinthread-carosel.svg"
                alt="TwinThread"
                width={120}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
