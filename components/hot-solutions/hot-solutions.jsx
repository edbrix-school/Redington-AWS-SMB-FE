"use client";
import Image from "next/image";


const HotSolutions = () => {

    return (
        <>
            <div className="mx-[80px] xl:mx-[120px] 2xl:mx-[160px] 3xl:mx-[9.115vw] mt-[50px] xl:mt-[60px] 2xl:mt-[70px] 3xl:mt-[4.271vw]">
                <div className="flex justify-between items-center">
                    <div className="text-[#000] text-[35px] xl:text-[40px] 2xl:text-[50px] 3xl:text-[3.333vw]">Hot Solutions</div>
                    <div className="w-[600px] xl:w-[800px] 2xl:w-[800px] 3xl:w-[53.333vw] solution-bg flex justify-between items-center px-[16px] xl:px-[18px] 3xl:px-[1.042vw] py-[26px] xl:py-[28px] 3xl:py-[1.667vw]">
                        <div className="text-[#2C363F] text-[12px] xl:text-[14px] 3xl:text-[0.833vw]">Let us Help you to find the right Solution!</div>
                        <Image src="/images/svg/flash.svg" width="28" height="28" alt="flash" />
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-[38px] xl:mt-[40px] 2xl:mt-[40px] 3xl:mt-[2.344vw]">
                    <div className="col-span-5 border border-[#E7E6F3] bg-[#F5F6F8] rounded-[10px] xl:rounded-[12px] 3xl:rounded-[0.625vw] overflow-hidden">
                        <Image src="/images/amazon-bedrock.svg" width="674" height="340" alt="logo" />
                        <div className="space-y-[6px] xl:space-y-[6px] 3xl:sapce-y-[0.313vw] py-[24px] xl:py-[26px] 2xl:py-[30px] 3xl:py-[1.719vw] px-[20px] xl:px-[24px] 3xl:px-[1.458vw]">
                            <div className="font36 leading-[125%]">Amazon Bedrock</div>
                            <div className="font24 leading-[120%]">Discover Three proven use cases for Generative AI</div>
                            <div className="flex gap-[10px] xl:gap-[12px] 3xl:gap-[0.625vw] font-medium font14">
                                <div className="text-[#8C55FD] border border-[#8C55FD] bg-white rounded-full py-[6px] xl:py-[8px] 3xl:py-[0.417vw] px-[16px] xl:px-[18px] 3xl:px-[1.042vw]">
                                    Open
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-7 grid grid-cols-7">
                        <div className="col-span-4">
                            <div className="space-y-[14px] xl:space-y-[16px] 3xl:sapce-y-[0.885vw] py-[24px] xl:py-[26px] 2xl:py-[30px] 3xl:py-[1.719vw] px-[20px] xl:px-[24px] 3xl:px-[1.458vw]">
                                <div className="font32 leading-[120%]">Amazon CloudFront</div>
                                <div className="font24 leading-[120%] opacity-80">Securely deliver content with low latency and high transfer speeds</div>
                                <div className="flex gap-[10px] xl:gap-[12px] 3xl:gap-[0.625vw] font-medium font14">
                                    <div className="text-[#8C55FD] border border-[#8C55FD] bg-white rounded-full py-[6px] xl:py-[8px] 3xl:py-[0.417vw] px-[16px] xl:px-[18px] 3xl:px-[1.042vw]">
                                        See More
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <Image src="/images/amazon-cloudfront.svg" width="377" height="226" alt="logo" />
                        </div>
                        <div className="col-span-12">
                            <div className="twinthread-bg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HotSolutions;
