import Image from "next/image";
import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});
export default function Footer() {
  return (
    <>
      <div className={`${roboto.variable} bg-BrandNeutral50 rounded-[14px] xl:rounded-[14px] 3xl:rounded-[0.833vw] mx40 `}>
        <div className="px-[20px] xl:px-[20px] 2xl:px-[20px] 3xl:px-[1.042vw]  pb-[30px] xl:pb-[30px] 2xl:pb-[32px] 3xl:pb-[1.771vw] pt-[36px] xl:pt-[36px] 2xl:pt-[36px] 3xl:pt-[1.875vw]">
          <div className="grid grid-cols-4 lg:gap-[14px] xl:gap-[40px] 2xl:gap-[60px] 3xl:gap-[5.208vw] px-[60px] lg:px-[50px] xl:px-[140px] 2xl:px-[250px] 3xl:px-[15.375vw] ">
            <div className="spacey20">
              <div className="font16 font-semibold text-InterfaceTexttitle">
                Site
              </div>
              <div className="flex flex-col spacey12">
                <div className="font14 text-interfacetextdefault font-normal cursor-pointer">
                  About Us
                </div>
                <div className="font14 text-interfacetextdefault font-normal cursor-pointer">
                  Documentation
                </div>
                <div className="font14 text-interfacetextdefault font-normal cursor-pointer">
                  Contact Sales
                </div>
                <div className="font14 text-interfacetextdefault font-normal cursor-pointer">
                  Find a Partner
                </div>
              </div>
            </div>
            <div className="spacey20">
              <div className="font16 font-semibold text-InterfaceTexttitle">
                Resources
              </div>
              <div className="flex flex-col spacey12">
                <div className="font14 text-interfacetextdefault font-normal cursor-pointer">
                  Blog
                </div>
                <div className="font14 text-interfacetextdefault font-normal cursor-pointer">
                  Customer Stories
                </div>
                <div className="font14 text-interfacetextdefault font-normal cursor-pointer">
                  News & Stories
                </div>
              </div>
            </div>
            <div className="spacey20">
              <div className="font16 font-semibold text-InterfaceTexttitle">
                Get to Know Us
              </div>
              <div className="flex flex-col spacey12">
                <div className="font14 text-interfacetextdefault font-normal cursor-pointer">
                  About Company
                </div>
                <div className="font14 text-interfacetextdefault font-normal cursor-pointer">
                  Privacy Policy
                </div>
                <div className="font14 text-interfacetextdefault font-normal cursor-pointer">
                  Terms of Use
                </div>
              </div>
            </div>
            <div className="spacey20 ">
              <div className="font16 font-semibold text-InterfaceTexttitle cursor-pointer">
                Contact Us
              </div>
              <div className="flex flex-col spacey12">
                <div className="font14 text-interfacetextdefault font-normal gap-[7px] xl:gap-[7px] 3xl:gap-[0.393vw] flex items-start cursor-pointer">
                  <i className="smb-location text14 pt-1"></i>
                  1, Shiekh Zayed Road, H Hotel,
                  <br /> Business Tower - Dubai, UAE
                </div>
                <div className="font14 text-interfacetextdefault font-normal flex gap-[7px] xl:gap-[7px] 3xl:gap-[0.393vw] cursor-pointer">
                  <i className="smb-sms text14 pt-1"></i>
                  help@cloudquarks.com
                </div>
                <div className="font14 text-interfacetextdefault font-normal flex gap-[7px] xl:gap-[7px] 3xl:gap-[0.393vw] cursor-pointer">
                  <i className="smb-call text14 pt-1 "></i>
                  +971 4 516 1504
                </div>
                <div className=" flex gap20">
                  <Image
                    src="/images/facebook.svg"
                    width={25}
                    height={25}
                    alt="logo"
                    className="w-[22px] lg:w-[22px] xl:w-[22px] 2xl:w-[22px]  3xl:w-[1.146vw] h-[22px] lg:h-[22px] xl:h-[22px] 2xl:h-[22px] 3xl:h-[1.146vw] cursor-pointer"
                  />
                  <Image
                    src="/images/twitter.svg"
                    width={26}
                    height={26}
                    alt="logo"
                    className="w-[22px] lg:w-[22px] xl:w-[22px] 2xl:w-[22px]  3xl:w-[1.146vw] h-[22px] lg:h-[22px] xl:h-[22px] 2xl:h-[22px] 3xl:h-[1.146vw] cursor-pointer"
                  />
                  <Image
                    src="/images/linkedin.svg"
                    width={30}
                    height={30}
                    alt="logo"
                    className="w-[22px] lg:w-[22px] xl:w-[22px] 2xl:w-[22px]  3xl:w-[1.146vw] h-[22px] lg:h-[22px] xl:h-[22px] 2xl:h-[22px] 3xl:h-[1.146vw] cursor-pointer"
                  />
                  <Image
                    src="/images/youtube.svg"
                    width={30}
                    height={30}
                    alt="logo"
                    className="w-[26px] lg:w-[26px] xl:w-[28px] 3xl:w-[1.523vw] h-[26px] lg:h-[26px] xl:h-[28px] 3xl:h-[1.523vw] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" border-t border-InterfaceStrokesoft mt-[30px] xl:mt-[30px] 2xl:mt-[35px] 3xl:mt-[1.983vw] pt-[30px] xl:pt-[30px] 2xl:pt-[32px] 3xl:pt-[1.771vw] gap-[12px] xl:gap-[12px] 3xl:gap-[0.729vw]  flex justify-center items-center divide-x divide-interfacetextdefault ">
            <div className="font16 text-interfacetextdefault pr-[12px] xl:pr-[12px] 3xl:pr-[0.729vw] font-normal leading-none">
              ©2025 Redington Group
            </div>
            <div className="text-interfacetextdefault font-normal">
              All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
