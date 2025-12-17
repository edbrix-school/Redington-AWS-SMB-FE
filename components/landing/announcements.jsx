"use client";
import { Work_Sans } from "next/font/google";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // include any weights you need
  variable: "--font-roboto",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
});

const Announcements = () => {

  const cardData = [
    {
      title: "One Platform to manage your multi-cloud infrastructure for all partners, vendors and customers",
      description: "Learn how leading healthcare organizations leverage innovations like conversational intelligence, remote monitoring, and AI/ML to drive patient and clinician satisfaction, control costs, and recover from adverse events."
    },
    {
      title: "The only Self-Service platform with managed services capabilities.",
      description: "Learn how leading healthcare organizations leverage innovations like conversational intelligence, remote monitoring, and AI/ML to drive patient and clinician satisfaction, control costs, and recover from adverse events."
    },
    {
      title: "Do it yourself or get it done by an Expert!",
      description: "Learn how leading healthcare organizations leverage innovations like conversational intelligence, remote monitoring, and AI/ML to drive patient and clinician satisfaction, control costs, and recover from adverse events."
    },
    {
      title: "One Platform to manage your multi-cloud infrastructure for all partners, vendors and customers",
      description: "Learn how leading healthcare organizations leverage innovations like conversational intelligence, remote monitoring, and AI/ML to drive patient and clinician satisfaction, control costs, and recover from adverse events."
    }
  ];

  return (
    <>
      <div className="mt-[30px] xl:mt-[35px] 3xl:mt-[2.083vw]">
        <div className="w-full px-4 xl:mx-[120px] 2xl:mx-[140px] 3xl:mx-[7.115vw] xl:w-auto">
          {/* LEFT — ANNOUNCEMENTS */}
          {/* RIGHT — 4 EQUAL CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-11 gap-6 md:gap24">
            <div className="col-span-1 md:col-span-3 lg:col-span-3 spacey16 mb-6 md:mb-0">
              <h2 className={`${workSans.variable} font36 font-semibold text-black leading-[125%] `}>
                Announcements
              </h2>
              <p className={`${roboto.variable} font20 font-normal leading-[120%] `}>
                Discover Three 
                proven use cases for 
                Generative AI
              </p>
              <button className="inline-flex items-center px20 py8 leading-[120%] border border-[#8C55FD] text-[#8C55FD] rounded-full font14 font-normal cursor-pointer">
                Show All
              </button>
            </div>
            {cardData.map((item, i) => (
              <div
                key={i}
                className="col-span-1 md:col-span-3 lg:col-span-2 bg-[#F4F4FA] p-6 lg:p24 rounded6 flex flex-col justify-between min-h-0 lg:min-h-[200px] 3xl:min-h-0"
              >
                <h3 className="font20 leading-[120%] font-normal text-[#000]">
                  {item.title}
                </h3>

                <p className="font14 font-light leading-[120%] mt16">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcements;
