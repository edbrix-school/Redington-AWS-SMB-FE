import Image from "next/image";
const industrySector = [
  {
    name: "Advertising & Marketing",
    count: 12,
  },
  {
    name: "Aerospace & Satellite",
    count: 16,
  },
  {
    name: "Agriculture",
    count: 10,
  },
  { name: "Automotive", count: 8 },
  {
    name: "Consumer Packaged Goods",
    count: 12,
  },
  { name: "Education", count: 12 },
  {
    name: "Energy & Utilities",
    count: 12,
  },
  {
    name: "Financial Services",
    count: 12,
  },
  {
    name: "Telecom",
    count: 12,
  },
  {
    name: "Games",
    count: 12,
  },
];

export default function AllSectorsView({ onSectorClick }) {
  return (
    <div className="flex h-full flex-col">
      {/* Grid */}
      <div className="mt-4 flex-1 overflow-y-auto pb-4">
        <div className="grid gap-4 xs:grid-cols-2 md:grid-cols-3">
          {industrySector.map((sector, idx) => {
            const isClickable = sector.name === "Advertising & Marketing";
            const isViewMore =
              sector.name === "Games" && idx === industrySector.length - 1;

            if (isViewMore) {
              // last "View more" tile
              return (
                <div
                  key={sector.name}
                  className="flex items-center justify-center max-w-xs rounded-2xl bg-white/70 p-4 text-[14px] font-medium text-interface-text-default shadow-sm"
                >
                  View More
                </div>
              );
            }

            return (
              <div
                key={sector.name}
                type="button"
                onClick={
                  isClickable
                    ? () => onSectorClick(sector.name, sector.count) // pass name + count properly
                    : undefined
                }
                className={[
                  "relative flex h-48 flex-col justify-between rounded-2xl bg-white/90 bg-catalog-sector bg-cover bg-no-repeat p-4 text-left shadow-sm transition-transform",
                  isClickable ? "hover:-translate-y-[2px]" : "",
                ].join(" ")}
              >
                <div>
                  <p className="font-inter font10 uppercase leading-none tracking-[-0.02em] text-interface-text-default">
                    Sector
                  </p>
                  <h4 className="mt-2 max-w-xs font-inter font18 font-semibold leading-[24px] tracking-[-0.02em] text-interface-text-title">
                    {sector.name}
                  </h4>
                  <p className="mt-2 max-w-xs font-inter font12 leading-[18px] tracking-[-0.02em] text-interface-text-subtitle">
                    Figma ipsum component variant main layer. Device rectangle
                    outline vector vertical distribute list. Team device link
                    start text. Slice.
                  </p>
                </div>

                {/* Play button with hover effect */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="flex h-8 w-8 items-center justify-center rounded-lg cursor-pointer bg-[#42536D]  text-[11px] text-white"
                  >
                    {/* Arrow icon */}
                    <Image
                      src="/assets/icons/arrow-right.svg"
                      alt="arrow right"
                      width={20}
                      height={20}
                    />

                    {/* View Solution text */}
                    {/* <span className="hidden text-[11px] font-medium text-white group-hover:inline-block">
                      View Solution
                    </span> */}
                  </button>
                </div>
              </div>
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
