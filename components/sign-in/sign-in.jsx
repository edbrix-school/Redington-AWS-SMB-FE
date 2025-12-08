import React, { useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function SigninTemplate() {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className=" bg-[#fff] mt40">
        <div
          className={`${inter.variable} w-full fixed top-0 left-0 z-[9999] bg-InterfaceTexttitle `}
        >
          <div className="relative flex items-center justify-between px-[90px] lg:px-[90px] xl:px-[100px] 3xl:px-[5.99vw] py-[7px] lg:py-[8px] xl:py-[10px] 2xl:py-[10px] 3xl:py-[0.533vw]">
            <div className="flex items-center gap-[16px] xl:gap-[16px] 3xl:gap-[0.938vw] justify-between">
              <div className="flex divide-x divide-[#494949] items-center">
                <div className="pr-[10px] xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[0.729vw]">
                  <Image
                    src="/images/redington-black.svg"
                    width={100}
                    height={22}
                    alt="logo"
                    className="w-[90px] lg:w-[90px] xl:w-[90px] 3xl:w-[5.99vw] h-auto"
                  />
                </div>
                <Image
                  src="/images/aws-black.svg"
                  width={100}
                  height={20}
                  alt="aws"
                  className="w-[36px] lg:w-[36px] xl:w-[40px] 3xl:w-[2.292vw] h-auto ml-[10px]"
                />
              </div>

              <div>
                <i className="smb-flash-light text-[#5CB456] text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[1.294vw]"></i>
              </div>
            </div>
            <div className="flex items-center gap-[14px] xl:gap-[19px] 3xl:gap-[1.033vw]">
              <div className="py-[4px] lg:py-[3px] xl:py-[3px] 3xl:py-[0.217vw] flex items-center justify-center gap-[4px] lg:gap-[7px] xl:gap-[8px] 2xl:gap-[9px] 3xl:gap-[0.521vw] text-white px-[12px] lg:px-[14px] xl:px-[18px] 3xl:px-[1.225vw] cursor-pointer rounded-[8px] xl:rounded-[8px] 3xl:rounded-[0.521vw] bg-InterfaceStrokesoft">
                <div className="text-[13px] lg:text-[12px] xl:text-[13px] 3xl:text-[0.729vw] font-medium py-[3px] xl:py-[3px] 3xl:py-[0.217vw]">
                  Contact Us
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap20 items-center h-screen customsignin-gradient px-[80px] lg:px-[80px] xl:px-[80px] 3xl:px-[4.688vw] py-[80px] lg:py-[80px] xl:py-[80px] 3xl:py-[4.688vw]">
          <div className="mr100 py20">
         
            
                <div className="text-InterfaceTexttitle1 font-semibold font24 ">
                  Sign In
                </div>
                <div className="font18 text-interfacetextdefault1">
                  Sign In to continue with Redington AWS SMB Portal .
                </div>
                <div className="py26 ">
                  <div className=" mb-[30px]">
                    <label className="pb-[6px] block font14 font-medium text-InterfaceTexttitle1 ">
                      Email Address{" "}
                      <span className="text-Interfacefeedbackerror700">*</span>
                    </label>

                    <InputText
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      className="w-full custominput"
                      placeholder="olivia@untitledui.com"
                    />
                  </div>
                  <div className=" ">
                    <label className="pb-[6px] block font14 font-medium text-InterfaceTexttitle1 ">
                      Password{" "}
                      <span className="text-Interfacefeedbackerror700">*</span>
                    </label>

                    <InputText
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      className="w-full custominput"
                      type="password"
                      placeholder="**********"
                    />
                  </div>
                  <div className="pt-[6px] flex justify-between items-center">
                    <div className="flex items-center">
                      <Checkbox
                        onChange={(e) => setChecked(e.checked)}
                        checked={checked}
                        className="customcheckox"
                      ></Checkbox>
                      <div className="inline-block ml-[4px] xl:ml-[4px] 3xl:ml-[0.313vw] text-interfacetextdefault1 font14 font-medium">
                        Remember me
                      </div>
                    </div>
                    <div className="font12 text-BrandPrimary900 cursor-pointer font-medium ">
                      Forgot Password?
                    </div>
                  </div>
                  <button className="mt24 font16 flex justify-center items-center py8 bg-InterfaceSurfacehcprimary w-full rounded8 text-background font-normal">
                    sign
                  </button>
                  <div className="flex items-center justify-center w-full gap-[6px] xl:gap-[6px] 3xl:gap-[0.417vw] my24 px-20">
                    <div className="flex-1 border-t border-InterfaceStrokedefault"></div>

                    <div className="text-InterfaceTextsubtitle font14 whitespace-nowrap">
                      Or Continue with
                    </div>

                    <div className="flex-1 border-t border-InterfaceStrokedefault"></div>
                  </div>
                  <div className="grid grid-cols-3 gap20">
                    <button className="rounded8 font-medium font14 cursor-pointer text-interfacetextdefault1 py10 w-full bg-InterfaceSurfacecomponent flex justify-center items-center border border-InterfaceStrokedefault">
                      <Image
                        src="images\microsoft-copilot.svg"
                        width={20}
                        height={20}
                        alt="icon"
                        className="w20 h-auto mr-[8px] "
                      />
                      Microsoft
                    </button>
                    <button className="rounded8 font-medium cursor-pointer font14 text-interfacetextdefault1 py10 w-full bg-InterfaceSurfacecomponent flex justify-center items-center border border-InterfaceStrokedefault">
                      <Image
                        src="/images/Google-icon.svg"
                        width={20}
                        height={20}
                        alt="icon"
                        className="w20 h-auto mr-[8px] "
                      />
                      Google
                    </button>
                    <button className=" cursor-pointer rounded8 font14 text-interfacetextdefault1 py10 w-full bg-InterfaceSurfacecomponent flex justify-center items-center border border-InterfaceStrokedefault font-medium">
                      <Image
                        src="/images/linkedin-img.svg"
                        width={20}
                        height={20}
                        alt="icon"
                        className="w20 h-auto mr-[8px] "
                      />
                      LinkedIn
                    </button>
                  </div>
                </div>
              
           
          </div>
        </div>
      </div>
    </>
  );
}
