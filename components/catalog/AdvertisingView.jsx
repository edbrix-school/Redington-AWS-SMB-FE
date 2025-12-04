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
