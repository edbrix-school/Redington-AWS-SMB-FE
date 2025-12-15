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
        <div className=" mx-[80px] xl:mx-[120px] 2xl:mx-[140px] 3xl:mx-[7.115vw] flex gap40">
          <div className="space-y-[15px] xl:space-y-[17px] 3xl:space-y-[0.885vw] text-black">
            <div className={`${workSans.variable} font36 font-semibold leading-[125%]`}>
              Announcements
            </div>
            <div className="font24 leading-[120%]">
              Discover Three <br />
              proven use cases for <br />
              Generative AI
            </div>
            <Link href="" className="flex gap12 font-medium font14">
              <div className="text-[#8C55FD] border border-[#8C55FD] bg-white rounded-full py-[6px] xl:py-[8px] 3xl:py-[0.417vw] px-[16px] xl:px-[18px] 3xl:px-[1.042vw]">
                Show All
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap24">
            {cardData.map((item, i) => (
              <div
                key={i}
                className={`${roboto.variable} col-span-1 md:col-span-1 lg:col-span-1 bg-[#F4F4FA] p24 rounded4 spacey16`}
              >
                <div className="font20 font-normal leading-[120%] min-h-[100px] xl:min-h-[120px] 2xl:min-h-[150px] 3xl:min-h-[6.25vw]">
                  {item.title}
                </div>
                <div className="font14 font-light text-black">
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
