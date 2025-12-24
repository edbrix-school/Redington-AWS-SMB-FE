"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import { OverlayPanel } from "primereact/overlaypanel";
import { useState, useRef } from "react";
import { Roboto } from "next/font/google";
import ViewTicket from "./../service-desk/ticket-view/view";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const TryOut = () => {

  const cardData = [
    {
      title: "Multi-Agent Employee Virtual Assistant on AWS",
      left: "Left: 3hrs 45 mins"
    },
    {
      title: "Multi-Agent Employee Virtual Assistant on AWS",
      left: "Left: 3hrs 45 mins"
    },
    {
      title: "Multi-Agent Employee Virtual Assistant on AWS",
      left: "Left: 3hrs 45 mins"
    },
    {
      title: "Multi-Agent Employee Virtual Assistant on AWS",
      left: "Left: 3hrs 45 mins"
    },
    {
      title: "Multi-Agent Employee Virtual Assistant on AWS",
      left: "Left: 3hrs 45 mins"
    },
  ];
  const op = useRef(null);
  const [openpopupviewticket, setOpenPopupViewTicket] = useState(false);

  return (
    <>
      <div className="grid grid-cols-12 gap24 my-solutions-bg pl-[20px] lg:pl-[30px] xl:pl-[80px] 2xl:pl-[86px] 3xl:pl-[4.635vw] pr-[20px] lg:pr-[30px] xl:pr-[32px] 2xl:pr-[34px] 3xl:pr-[1.927vw]">
        <div className="col-span-12 md:col-span-6 lg:col-span-7">
          <div className="spacey30 mt-[80px] xl:mt-[100px] 2xl:mt-[120px] 3xl:mt-[7.031vw] mb-[80px] xl:mb-[84px] 2xl:mb-[90px] 3xl:mb-[5vw]">
            <div className="spacey8">
              <div className="w-[45px] h-[3px] bg-[#019049]"></div>
              <div className="font20 text-interfacetextdefault1 font-normal leading-[140%]">Latest Tryout</div>
            </div>
            <div>
              <div className="text-[40px] xl:text-[46px] 2xl:text-[50px] 3xl:text-[2.917vw] text-interfacetextdefault1 font-bold generate-text leading-[120%]">Generative AI Application <br /> Builder on AWS</div>
              <div className="py24 font18 text-interfacetextdefault1 leading-[120%]">
                One of the main challenges in building generative AI applications is complex cloud setup<br /> and the need for deep AI expertise. Generative AI Application Builder on AWS simplifies<br /> this process, helping you develop, test, and deploy AI applications without extensive AI<br />
                knowledge.
              </div>
              <div className="flex gap8 items-center text-InterfaceTextsubtitle py8">
                <i className="font24 smb-time-start"></i>
                <div className="font16 font-medium font-roboto leading-[140%]">You have: 5 days, 3hrs 45 mins</div>
              </div>
            </div>
            <div className="flex flex-wrap gap10 font18 mt-[22px] xl:mt-[26px] 2xl:mt-[31px] 3xl:mt-[1.615vw]">
              <Link href="" className="text-white border border-BrandHighlight500 bg-BrandHighlightpure rounded-full py10 px24 font-medium leading-[120%]">Open the Solution</Link>
              <Link href="" className="text-BrandHighlight500 border border-BrandHighlight500 bg-BrandNeutral501 rounded-full py10 px24 font-medium leading-[120%]">Buy it now</Link>
              <Link href="" className="text-interfacetextdefault1 border border-none bg-none py10 px24 opacity-70 font-normal leading-[120%]">Cancel</Link>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <div className="mt-[36px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[2.656vw] ">
            {/* Heading */}
            <div className="spacey8">
              <div className="w-[45px] h-[2px] bg-[#019049]"></div>
              <div className="font20 text-interfacetextdefault1 font-normal leading-[140%]">
                <span className="font-bold">Recent</span> Tryouts
              </div>
            </div>

            {/* Scroll Container */}
            <div className="relative mt24">
              {/* Scrollable list */}
              <div className="h-[480px] xl:h-[520px] 2xl:h-[550px] 3xl:h-[29.427vw] overflow-y-auto pr-2">
                {cardData.map((item, i) => (
                  <div
                    key={i}
                    className="bg-tryout bg-InterfaceSurfacecomponent shadow-[0_0_15px_4px_rgba(140,85,253,0.00)] p16 rounded8 mb12"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex gap8 text-interfacetextdefault1">
                        <div className="bg-BrandNeutral501 rounded4 font11 px12 py4 uppercase cursor-pointer leading-[140%]">
                          Web Hosting
                        </div>
                        <div className="bg-BrandNeutral501 rounded4 font11 px12 py4 uppercase cursor-pointer leading-[140%]">
                          Security
                        </div>
                        <div className="bg-BrandNeutral501 rounded4 font11 px12 py4 uppercase cursor-pointer leading-[140%]">
                          +2
                        </div>
                      </div>

                      <div>
                        <i className="text-[#3C4146] smb-square-more font20 cursor-pointer" onClick={(e) => op.current.toggle(e)}></i>
                        <OverlayPanel ref={op} className="w-[160px] custom-op rounded8" >
                          <div className="flex flex-col text-[#3C4146] font14 font-normal">
                            <Link
                              href="#"
                              onClick={() => setOpenPopupViewTicket(true)}
                              className="leading-[140%] py4 px4"
                            >
                              View
                            </Link>
                            <Link href="#" className="leading-[140%] py4 px4">
                              Cancel
                            </Link>
                          </div>
                        </OverlayPanel>
                      </div>
                    </div>

                    <div className={`${inter.variable} font18 font-semibold text-interfacetextdefault1 mt16 mb8`}>
                      {item.title}
                    </div>

                    <div className="flex gap6 items-center">
                      <i className="smb-watch text-[#D42600] font16"></i>
                      <div className="font14 text-interfacetextdefault1 hover:underline">
                        {item.left}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Blur Overlay */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#ffffff] via-[#ffffff]/70 to-transparent" /></div>
          </div>
        </div>
      </div>
      <ViewTicket
        visible={openpopupviewticket}
        onHide={() => setOpenPopupViewTicket(false)}
      />
    </>
  );
};

export default TryOut;
