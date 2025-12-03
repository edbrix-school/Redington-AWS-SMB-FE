import Image from "next/image";

const SOLUTIONS = [
  "Multi-Agent Employee Virtual Assistant on AWS",
  "EduCloud - AWS Tools for Learning",
  "CloudClass - AWS Solutions for Education",
  "TeachWise - AWS Educational Resources",
  "SkillBuilder - AWS Training Solutions",
  "KnowledgeHub - AWS Learning Platform",
  "AcademyCloud - AWS for Academic Excellence",
  "InstructAI - AWS Teaching Tools",
  "TeachNet - AWS Network for Educators",
  "LearnFlow - AWS Learning Management",
  "CourseCloud - AWS Course Management Excellence",
  "ScholarSphere - AWS for Scholars",
];

const TAGS = ["Web Hosting", "Security", "+2"];

export default function AdvertisingView({ sectorName, onBackClick }) {
  return (
    <div className="flex h-full flex-col">
      {/* Breadcrumb + controls */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-[13px] text-interface-text-subtitle">
          <button
            type="button"
            onClick={onBackClick}
            className="text-interface-text-subtitle hover:text-interface-text-title"
          >
            All Sector
          </button>
          <span className="text-interface-text-subtitle">{">"}</span>
          <span className="font-inter text-[14px] font-medium text-interface-text-title">
            {sectorName} (18)
          </span>
        </div>

        <div className="flex flex-1 items-center justify-end gap-3">
          {/* Order by */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg border border-interface-stroke-soft bg-white px-3 py-2 text-[12px] text-interface-text-default"
          >
            <span>Order By: Relevance</span>
            <Image
              src="/assets/icons/Icon (1).svg"
              alt="Chevron down"
              width={14}
              height={14}
            />
          </button>

          {/* Right search */}
          <div className="hidden items-center gap-2 rounded-lg border border-interface-stroke-soft bg-white px-3 py-2 text-[12px] text-interface-text-subtitle md:flex">
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

      {/* Solutions grid */}
      <div className="mt-4 flex-1 overflow-y-auto pb-4">
        <div className="grid gap-4 xs:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((title) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl bg-white/90 bg-catalog-solution bg-cover bg-no-repeat p-4 shadow-sm"
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-100 px-2 py-[4px] text-[10px] font-semibold uppercase tracking-wide text-interface-text-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title + meta */}
              <h4 className="mt-3 font-inter text-[16px] font-semibold leading-[22px] text-interface-text-title">
                {title}
              </h4>
              <p className="mt-1 font-inter text-[12px] text-interface-text-subtitle">
                2 Weeks
              </p>

              <p className="mt-2 line-clamp-3 font-inter text-[12px] leading-[18px] text-interface-text-subtitle">
                Redington&apos;s AI-powered solution on AWS that automates and
                personalizes teaching, assessment, and feedback-enabling
                scalable, efficient and student-centric education for schools
                and universities.
              </p>

              {/* Footer actions */}
              <div className="mt-3 flex items-center justify-between">
                <button
                  type="button"
                  className="rounded-full border border-brand-neutral-900 bg-white px-3 py-1.5 text-[11px] font-medium text-brand-neutral-900"
                >
                  Test Drive
                </button>
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-neutral-900 text-[11px] text-white"
                >
                  ▶
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* same bottom banners as AllSectors */}
        <div className="mt-5 grid gap-4 md:grid-cols-[minmax(0,2fr),minmax(0,1.5fr)]">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-4 text-white">
            <Image
              src="/assets/images/catalog-banner-tonai.png"
              alt="TonAI"
              fill
              className="object-cover opacity-70"
            />
            <div className="relative z-10 max-w-sm">
              <p className="text-[11px] font-semibold uppercase tracking-wide">
                TonAI
              </p>
              <h4 className="mt-2 text-[16px] font-semibold leading-snug">
                Not Sure Which AWS Hub to Use for Your Business?
              </h4>
              <p className="mt-2 text-[12px] leading-[18px] text-slate-100/90">
                Just ask our chatbot! It will ask you a few simple questions and
                guide you step-by-step to the AWS hub that best fits your
                business needs.
              </p>
              <button
                type="button"
                className="mt-3 inline-flex items-center rounded-full bg-white px-4 py-1.5 text-[12px] font-medium text-slate-900"
              >
                Start Chat Now
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-white p-4">
            <Image
              src="/assets/images/catalog-banner-twinthread.png"
              alt="TwinThread"
              fill
              className="object-cover opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
