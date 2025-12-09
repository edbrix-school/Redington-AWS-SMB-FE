"use client";
import Image from "next/image";


const Launchpad = () => {

  return (
    <>
      <div className="relative">
        <div className="flex items-center justify-center">
          <div className="">
            <div className="absolute mt-[20px] xl:mt-[30px] 2xl:mt-[30px] 3xl:mt-[1.563vw] xl:left-[70px] 2xl:left-[80px] 3xl:left-[4.688vw]">
              <div className="flex items-center gap-[8px] font12">
                <div className="text-interfacetextdefault1 font-normal">Home</div>
                <div className="text-interfacetextdefault1 font-normal">Pages</div>
                <div className="text-interfacetextdefault1 font-medium">About Redington Launchpad</div>
              </div>
              <div className="font24 font-semibold">About Redington Launchpad</div>
            </div>
            <Image src="/images/about-us.png" width="860" height="430" alt="launchpad" />
          </div>
        </div>

        <div className="-mt-5 relative text-center space-y-[10px] xl:space-y-[12px] 3xl:space-y-[0.625vw]">
          <div className="absolute right-[400px] xl:right-[300px] 2xl:right-[490px] 3xl:right-[34.042vw] -top-1"><Image src="/images/svg/innovation-arrow.svg" width="91" height="20" alt="innovation" /></div>
          <div className="text-InterfaceTexttitle1 text-[24px] lg:text-[26px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[2.031vw] leading-[140%]">Solve <span className="text-[#019049] font-bold">real</span> problems, with real <span className="text-[#F90] font-bold">Innovation</span></div>
          <div className="font18 text-black leading-[120%]">Redington Cloud Launchpad is your one-stop destination for discovering, testing, and deploying leading cloud solutions tailored for small and medium <br />
            businesses. Seamlessly explore AWS automated solutions, access hands-on test drives, and accelerate your cloud journey with curated solutions and <br /> expert guidance.</div>
        </div>

        <div className="flex justify-center items-center gap-[16px] xl:gap-[18px] 2xl:gap-[20px] 3xl:gap-[1.146vw] mt-[30px] xl:mt-[40px] 2xl:mt-[50px] 3xl:mt-[2.969vw]">
          <div className="w-[600px] xl:w-[800px] 2xl:w-[800px] 3xl:w-[53.333vw] solution-bg flex justify-between items-center px-[16px] xl:px-[18px] 3xl:px-[1.042vw] py-[26px] xl:py-[28px] 3xl:py-[1.667vw]">
            <div className="text-interfacetextdefault2 text-[12px] xl:text-[14px] 3xl:text-[0.833vw]">Lets Chat About you, your problems and quickly find the best solutions...</div>
            <i className="smb-simple-search"></i>
          </div>
          <div className="text-black">
            <Image src="/images/svg/ton-ai-logo.svg" width="171" height="58" alt="flash" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Launchpad;
