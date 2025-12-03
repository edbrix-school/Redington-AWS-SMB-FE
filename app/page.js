import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
       <div className="bg-[#F0F2F6]">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div>
              <div className="flex justify-between items-baseline">
                {/* <Image src="/images/svg/logo-hero.svg" width="215" height="32" alt="logo" />
                <Image src="/images/svg/flash.svg" width="140" height="136" alt="flash" /> */}
              </div>
              <div className="font-archivo py-[100px] 3xl:py-[5vw] font-bold launchpad-bg text-[40px] lg:text-[60px] xl:text-[80px] 2xl:text-[102px] 3xl:text-[5.313vw]">Launchpad</div>
            </div>
            <div className="text-[#000] text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[1.25vw] leading-[120%]">One Platform to manage your multi-cloud infrastructure for all partners, vendors and customers</div>
            <div className="flex font-medium text-[14px] xl:text-[16px] 3xl:text-[0.938vw]">
              <div className="text-[#5D9D4A]  border border-[#5D9D4A] bg-white rounded-full py-[8px] xl:py-[10px] 3xl:py-[0.521vw] px-[20px] xl:px-[22px] 3xl:px-[1.25vw]">Find&Launch!</div>
              <div className="text-[#3C4146] border border-[#BBC1C7] bg-[#F5F6F8]  rounded-full py-[8px] xl:py-[10px] 3xl:py-[0.521vw] px-[20px] xl:px-[22px] 3xl:px-[1.25vw]">Read More</div>
            </div>
          </div>
          <div className="col-span-6">
            {/* <Image src="/images/launchpad.svg" width="1075" height="714" alt="launchpad" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
