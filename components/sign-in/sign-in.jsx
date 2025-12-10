"use client";

import React, { useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import ContactUs from "./components/contact-us";
import Link from "next/link";
import SignUp from "./components/sign-up";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

// ✅ IMPORT useRouter (already correct)
import { useRouter } from "next/navigation";

export default function SigninTemplate() {
  // ✅ FIX ADDED HERE — we must CREATE router instance
  const router = useRouter(); // <-- ADDED LINE

  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  const [openpopup, setOpenPopup] = useState(false);
  const [openpopupsignup, setOpenPopupSignUp] = useState(false);

  const handleSignIn = () => {
    // ⚠️ This was failing earlier because router was NOT defined
    router.push("/knowledge-hub"); // ✅ Now works
  };

  return (
    <>
      <div className="customsignin-gradient min-h-screen ">
        <div
          className={`${inter.variable} w-full bg-InterfaceTexttitle z-[999] fixed top-0`}
        >
          <div className="relative flex items-center justify-between px-[90px] lg:px-[90px] xl:px-[100px] 3xl:px-[5.99vw] py-[7px] lg:py-[8px] xl:py-[12px] 2xl:py-[12px] 3xl:py-[0.625vw]">
            <Link href={"/"}>
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
            </Link>

            <button
              onClick={() => setOpenPopup(true)}
              className="text-InterfaceSurfacecomponent  cursor-pointer rounded8 bg-InterfaceStrokesoft py6 px14"
            >
              <div className="font14 font-medium ">Contact Us</div>
            </button>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] lg:gap-[80px] xl:gap-[120px] 3xl:gap-[6.25vw] items-center min-h-screen px100  overflow-y-auto scroll-auto ">
          {/* LEFT SECTION */}
          <div className="mr120 mt-[100px] lg:mt-[120px] xl:mt-[150px] 2xl:mt-[170px] 3xl:mt-[8.854vw]">
            <div className="text-InterfaceTexttitle1 font-semibold font24 ">
              Sign In
            </div>

            <div className="font18 text-interfacetextdefault1">
              Sign In to continue with Redington AWS SMB Portal .
            </div>

            <div className="py24 ">
              <div className="mb30">
                <label className="pb6 block font14 font-medium text-InterfaceTexttitle1 ">
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

              <div>
                <label className="pb6 block font14 font-medium text-InterfaceTexttitle1 ">
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
                  />
                  <div className="inline-block ml-[4px] xl:ml-[4px] 3xl:ml-[0.313vw] text-interfacetextdefault1 font14 font-medium">
                    Remember me
                  </div>
                </div>

                <div className="font12 text-BrandPrimary900 cursor-pointer font-medium ">
                  Forgot Password?
                </div>
              </div>
              <button
                onClick={handleSignIn}
                className="mt24 font16 flex justify-center items-center py8 bg-InterfaceSurfacehcprimary w-full rounded8 text-background font-normal cursor-pointer hover:opacity-90 transition-opacity"
              >
                sign
              </button>

              <div className="flex items-center justify-center w-full gap-[6px] xl:gap-[6px] 3xl:gap-[0.417vw] my24 px-20">
                <div className="flex-1 border-t border-InterfaceStrokedefault"></div>

                <div className="text-InterfaceTextsubtitle font14 whitespace-nowrap">
                  Or Continue with
                </div>

                <div className="flex-1 border-t border-InterfaceStrokedefault"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap20">
                <button className="rounded8 font-medium font14 cursor-pointer text-interfacetextdefault1 py10 w-full bg-InterfaceSurfacecomponent flex justify-center items-center border border-InterfaceStrokedefault">
                  <Image
                    src="/images/microsoft-copilot.svg"
                    width={20}
                    height={20}
                    alt="icon"
                    className="w20 h-auto mr-[8px]"
                  />
                  Microsoft
                </button>

                <button className="rounded8 font-medium cursor-pointer font14 text-interfacetextdefault1 py10 w-full bg-InterfaceSurfacecomponent flex justify-center items-center border border-InterfaceStrokedefault">
                  <Image
                    src="/images/Google-icon.svg"
                    width={20}
                    height={20}
                    alt="icon"
                    className="w20 h-auto mr-[8px]"
                  />
                  Google
                </button>

                <button className="cursor-pointer rounded8 font14 text-interfacetextdefault1 py10 w-full bg-InterfaceSurfacecomponent flex justify-center items-center border border-InterfaceStrokedefault font-medium">
                  <Image
                    src="/images/linkedin-img.svg"
                    width={20}
                    height={20}
                    alt="icon"
                    className="w20 h-auto mr-[8px]"
                  />
                  LinkedIn
                </button>
              </div>

              <div onClick={() => setOpenPopupSignUp(true)} className="flex py24 justify-center items-center cursor-pointer">
                <div className="font16 text-InterfaceTextsubtitle font-normal">
                  Not Registered Yet?{" "}
                </div>
                <span className="text-BrandPrimary900 font-medium pl-[2px] xl:pl-[2px] 3xl:p-[0.156vw]">
                  Create account.
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="hidden lg:block relative w-full max-w-[620px] 2xl:max-w-[750px] xl:max-w-[700px] h-[640px] xl:h-[640px] 2xl:xl:h-[640px] 3xl:xl:h-[35.854vw] mt-[100px] mb-[50px] xl:mb-[50px] 3xl:mb-[2.604vw]">
            <svg
              className="absolute -right-2 -top-2 w-[100%] h-[100%] z-30 pointer-events-none"
              viewBox="0 0 700 800"
              fill="none"
            >
              <path
                d="M70 210 L580 50 L650 610 L140 760 Z"
                stroke="#c1ffb2"
                strokeWidth="2"
                fill="none"
                strokeLinejoin="round"
              />
            </svg>
            <div
              className="absolute inset-0 z-[99]"
              style={{
                clipPath:
                  "polygon(0% -65%, 80% 50%, 80% 50%, 35% 50%, 0% 100%)",
                borderRadius: "10px",
              }}
            >
              <Image
                src="/images/login-side.webp"
                fill
                className="object-cover rounded-lg"
                alt="Login Cover"
                priority
              />
            </div>

            <div className="absolute right-[8%] lg:right-[0%] xl:right-[5%] 2xl:right-[17%] 3xl:right-[11%] bottom-[14%] lg:bottom-[22%] xl:bottom-[18%] 2xl:bottom-[10%] 3xl:bottom-[7%] z-40 w-[260px] lg:w-[300px] xl:w-[350px] 2xl:w-[21.438vw] p-4 lg:p-6">
              <p className="text-gray-400 text-[13px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[1.163vw]  leading-relaxed font-[400]">
                Welcome!
                You're one step closer to finding the ideal AWS tools for your
                business. Our platform helps you explore, compare, and test
                drive AWS products before making a decision — so you can build
                with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SignUp
        visible={openpopupsignup}
        onHide={() => {
          setOpenPopupSignUp(false);
        }}
      />

      <ContactUs
        visible={openpopup}
        onHide={() => {
          setOpenPopup(false);
        }}
      />


    </>
  );
}
