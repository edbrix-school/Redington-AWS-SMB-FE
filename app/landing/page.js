"use client";
import Image from "next/image";


const Landing = () => {

  return (
    <>
      <div className="bg-[#F0F2F6]">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <Image src="/images/svg/logo-hero.svg" width="215" height="32" alt="logo" />
            <div className="font-archivo py-[100px] 3xl:py-[5vw] font-bold launchpad-bg text-[40px] lg:text-[60px] xl:text-[80px] 2xl:text-[102px] 3xl:text-[5.313vw]">Launchpad</div>
          </div>
          <div className="col-span-6">6</div>
        </div>
      </div>
    </>
  );
};

export default Landing;
