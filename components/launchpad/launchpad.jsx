"use client";
import Image from "next/image";


const Launchpad = () => {

  return (
    <>
      <div className="">
        <div className="grid grid-cols-12">
          <div className="col-span-6 flex items-center">
            <div className="ml-[80px] xl:ml-[100px] 2xl:ml-[120px] 3xl:ml-[7.292vw]">
              <div className="w-fit">
                <div className="flex justify-between items-baseline">
                  <Image src="/images/svg/logo-hero.svg" width="215" height="32" alt="logo" />
                  <Image src="/images/svg/flash.svg" width="76" height="76" alt="flash" />
                </div>
                <div className="font-archivo font-bold launchpad-bg text-[40px] lg:text-[60px] xl:text-[80px] 2xl:text-[102px] 3xl:text-[5.313vw]">Launchpad</div>
              </div>
              <div className="text-black text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[1.25vw] leading-[120%] mt-[20px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[1.25vw]">One Platform to manage your multi-cloud infrastructure <br /> for all partners, vendors and customers</div>
              <div className="flex gap-[10px] xl:gap-[12px] 3xl:gap-[0.625vw] font-medium text-[14px] xl:text-[16px] 3xl:text-[0.938vw] mt-[22px] xl:mt-[26px] 2xl:mt-[31px] 3xl:mt-[1.615vw]">
                <div className="text-[#5D9D4A]  border border-[#5D9D4A] bg-white rounded-full py-[8px] xl:py-[10px] 3xl:py-[0.521vw] px-[20px] xl:px-[22px] 3xl:px-[1.25vw]">Find&Launch!</div>
                <div className="text-[#3C4146] border border-[#BBC1C7] bg-[#F5F6F8]  rounded-full py-[8px] xl:py-[10px] 3xl:py-[0.521vw] px-[20px] xl:px-[22px] 3xl:px-[1.25vw]">Read More</div>
              </div>
            </div>
          </div>
          <div className="col-span-6 flex items-center">
            <Image src="/images/launchpad.svg" width="1075" height="714" alt="launchpad" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Launchpad;
