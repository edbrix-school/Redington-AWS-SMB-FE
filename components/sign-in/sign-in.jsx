"use client";

import React, { useState } from "react";
import { Inter, Nunito } from "next/font/google";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import ContactUs from "./components/contact-us";
import SignUp from "./components/sign-up";
import Link from "next/link";
import { useRouter } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  variable: "--font-nunito",  

});
export default function SigninTemplate() {
  const router = useRouter();

  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  const [openpopup, setOpenPopup] = useState(false);
  const [openpopupsignup, setOpenPopupSignUp] = useState(false);

  const handleSignIn = () => {
    router.push("/my-solutions");
  };

  return (
    <div className={inter.className}>
      <div className="customsignin-gradient min-h-screen">
        {/* TOP BAR */}
        <div className="w-full bg-[rgba(240,242,246,0.9)]">
          <div className="relative flex items-center justify-between px-[90px] xl:px-[100px] py16">
            <Link href={"/"}>
              <div className="flex items-center gap-[16px]">
                <div className="flex divide-x divide-[#494949] items-center">
                  <div>
                    <Image
                      src="/images/logo-new.svg"
                      width={100}
                      height={22}
                      alt="logo"
                      className="w-auto lg:w-[260px] xl:w-[260px] 2xl:w-[268px] 3xl:w-[13.958vw] h-auto lg:h-[40px] xl:h-[40px] 2xl:h-[2.292vw] 3xl:h-[2.292vw]"
                    />
                  </div>
                 
                </div>

              </div>
            </Link>

            <button
              onClick={() => setOpenPopup(true)}
              className="text-InterfaceSurfacecomponent rounded8 bg-InterfaceStrokesoft py6 px14"
            >
              <div className="font14 font-medium">Contact Us</div>
            </button>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] xl:gap-[120px] items-center px-[5.99vw] overflow-y-auto">
          {/* LEFT SECTION */}
          <div className="w-full md:w-[400px] lg:w-[480px] xl::w-[500px] 2xl:w-[30.25vw] 3xl:w-[31.25vw]  ">
            <div className="text-InterfaceTexttitle1 font-semibold font24 leading-[160%]">
              Sign In
            </div>

            <div className="font18 text-[#3C4146] font-normal letter-spacing-[0.2px]">
              Sign In to continue with Redington AWS SMB Portal.
            </div>

            <div className="py24">
              {/* Email */}
              <div className="mb30">
                <label className="pb6 block font14 font-medium text-InterfaceTexttitle1">
                  Email Address <span className="text-red-500">*</span>
                </label>

                <InputText
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full custominput rounded8 p16"
                  placeholder="olivia@untitledui.com"
                />
              </div>

              {/* Password */}
              <div>
                <label className="pb6 block font14 font-medium text-InterfaceTexttitle1">
                  Password <span className="text-red-500">*</span>
                </label>

                <InputText
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full custominput"
                  type="password"
                  placeholder="**********"
                />
              </div>

              {/* Remember Me */}
              <div className="pt-[6px] flex justify-between items-center">
                <div className="flex items-center">
                  <Checkbox
                    onChange={(e) => setChecked(e.checked)}
                    checked={checked}
                    className="customcheckox"
                  />
                  <div className="ml-2 text-interfacetextdefault1 font14 font-medium">
                    Remember Me
                  </div>
                </div>

                <div className="font12 text-BrandPrimary900 cursor-pointer font-medium">
                  Forgot Password?
                </div>
              </div>

              {/* Sign In Button */}
              <button
                onClick={handleSignIn}
                className="mt24 font16 flex justify-center items-center py12 bg-InterfaceSurfacehcprimary hover:bg-[#5a498d] w-full rounded8 text-white font-normal cursor-pointer"
              >
                Sign In
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center w-full gap-[6px] my24">
                <div className="flex-1 border-t border-[#C9D3DB]"></div>

                <div className="text-[#7F8488] font14 whitespace-nowrap">
                  Or Continue with
                </div>

                <div className="flex-1 border-t border-[#C9D3DB]"></div>
              </div>

              {/* Social Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap20">
                <button className="rounded8 font14 cursor-pointer text-interfacetextdefault1 py10 w-full bg-InterfaceSurfacecomponent flex justify-center items-center border border-InterfaceStrokedefault gap8 font-[500]">
                  <Image
                    src="/images/microsoft-copilot.svg"
                    width={20}
                    height={20}
                    alt="icon"
                    className="w20 h-auto"
                  />
                  Microsoft
                </button>

                <button className="rounded8 font14 cursor-pointer text-interfacetextdefault1 py10 w-full bg-InterfaceSurfacecomponent flex justify-center items-center border border-InterfaceStrokedefault gap8 font-[500]">
                  <Image
                    src="/images/Google-icon.svg"
                    width={20}
                    height={20}
                    alt="icon"
                    className="w20 h-auto"
                  />
                  Google
                </button>

                <button className="rounded8 font14 cursor-pointer text-interfacetextdefault1 py10 w-full bg-InterfaceSurfacecomponent flex justify-center items-center border border-InterfaceStrokedefault gap8 font-[500]">
                  <Image
                    src="/images/linkedin-img.svg"
                    width={20}
                    height={20}
                    alt="icon"
                    className="w20 h-auto"
                  />
                  LinkedIn
                </button>
              </div>

              {/* Sign Up Link */}
              <div
                onClick={() => setOpenPopupSignUp(true)}
                className="flex py24 justify-center items-center cursor-pointer gap6 text-[14px] xl:text-[14px] 3xl:text-[0.729vw]"
              >
                <div className=" text-[#7F8488]">
                  Not Registered Yet?
                </div>
                <span className="text-[#4A4167] font-medium font14">
                  Create account.
                </span>
              </div>
            </div>
          </div>


          <div className="relative">

            <Image
              src="/images/login-img.svg"
              width={650}
              height={850}
              alt="illustration"
              className="3xl:w-[33.854vw] 3xl:h-[44.271vw] 2xl:w-[33vw] 2xl:h-[44vw] xl:w-[450px] xl:h-[650px]"
            />
       
            <div className="absolute right-0 top-[47%]  xl:top-[47%] left-[37%] xl:left-[30%]  3xl:top-[47%] 2xl:left-[30%] 3xl:left-[30%] w-[290px] lg:w-[300px] xl:w-[300px] 2xl:w-[24.479vw] 3xl:w-[24.479vw]">
              <div className={nunito.className}>
              <div className="text-[20px] lg:text-[22px] xl:text-[20px] 2xl:text-[1.563vw] 3xl:text-[1.563vw] font-[500] text-[#7F8488] leading-[140%]">
                Welcome! You're one step closer to finding the ideal AWS tools for  your business. Our platform helps you explore, compare, and test  drive AWS products before making a decision — so you  can build with confidence.
              </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* POPUPS */}
      <SignUp
        visible={openpopupsignup}
        onHide={() => setOpenPopupSignUp(false)}
      />

      <ContactUs
        visible={openpopup}
        onHide={() => setOpenPopup(false)}
      />
    </div>
  );
}
