"use client";
import { Work_Sans } from "next/font/google";
import { Roboto } from "next/font/google";
import Link from "next/link";

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

const Announcements = () => {
  return (
    <>
      <div className="mt-[30px] xl:mt-[35px] 3xl:mt-[2.083vw]">
        <div className=" mx-[80px] xl:mx-[120px] 2xl:mx-[140px] 3xl:mx-[7.115vw] flex gap-[36px] xl:gap-[30px] 2xl:gap-[40px] 3xl:gap-[2.917vw]">
          <div className="space-y-[15px] xl:space-y-[17px] 3xl:space-y-[0.885vw] text-black">
            <div className={`${workSans.variable} text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[1.875vw] font-semibold leading-[125%]`}>
              Announcements
            </div>
            <div className="text-[20px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[1.25vw] leading-[120%]">
              Discover Three <br />
              proven use cases for <br />
              Generative AI
            </div>
            <Link href="" className="flex gap-[10px] xl:gap-[12px] 3xl:gap-[0.625vw] font-medium text-[12px] xl:text-[14px] 3xl:text-[0.833vw]">
              <div className="text-[#8C55FD] border border-[#8C55FD] bg-white rounded-full py-[6px] xl:py-[8px] 3xl:py-[0.417vw] px-[16px] xl:px-[18px] 3xl:px-[1.042vw]">
                Show All
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] xl:gap-[26px] 3xl:gap-[1.51vw]">
            {cardData.map((item, i) => (
              <div
                key={i}
                className={`${roboto.variable} col-span-1 md:col-span-1 lg:col-span-1 bg-[#F4F4FA] p-[20px] xl:p-[22px] 3xl:p-[1.25vw] rounded-[4px] space-y-[15px] xl:space-y-[17px] 3xl:space-y-[0.885vw]`}
              >
                <div className="text-[16px] xl:text-[18px] 3xl:text-[1.042vw] font-normal leading-[120%] min-h-[80px] xl:min-h-[110px] 3xl:min-h-[6.25vw]">
                  {item.title}
                </div>
                <div className="text-[12px] xl:text-[14px] 3xl:text-[0.729vw] font-light text-black">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcements;
