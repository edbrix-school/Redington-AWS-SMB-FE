"use client";
import Image from "next/image";

const Help = () => {

    return (
        <>
            <div className="relative mx-[80px] xl:mx-[120px] 2xl:mx-[160px] 3xl:mx-[9.115vw] mt-[50px] xl:mt-[60px] 2xl:mt-[70px] 3xl:mt-[4.271vw]">
                <div className="flex justify-center items-center">
                    <div className="text-[#19212A] text-[24px] lg:text-[26px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[2.031vw] leading-[140%]">How We can <span className="text-[#019049] font-bold">Help</span> You?</div>
                </div>
                <div className="">
                    <div className="help-bg bg-no-repeat bg-none lg:bg-contain"
                    >
                        <div className=" grid grid-cols-12 md:grid-cols-12 mt-[40px] xl:mt-[40px] 2xl:mt-[40px] 3xl:mt-[2.344vw] gap-[14px] xl:gap-[16px] 3xl:gap-[0.833vw]">
                            <div className="col-span-12 md:col-span-6 lg:col-span-6">
                                <div className="font24">Chat with Ton<span className="font-semibold">AI</span> about your problems and Needs</div>
                                <div className="font14 leading-[120%]"><span className="font-bold">TonAI</span> is trained to help you finding real solutions for real problems. No waste of time and money.</div>
                                <div className="mt-[24px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[1.563vw]">
                                    <Image src="/images/chat-with-ton-ai.svg" width="444" height="350" alt="logo" />
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-6 lg:col-span-6 mt-[100px] xl:mt-[120px] 3xl:mt-[8.333vw]">
                                <div className="py-[24px] xl:py-[26px] 2xl:py-[30px] 3xl:py-[1.719vw] px-[20px] xl:px-[24px] 3xl:px-[1.458vw]">
                                    <div className="space-y-[14px] xl:space-y-[16px] 3xl:sapce-y-[0.885vw] ">
                                        <div className="font24 leading-[120%]">Connect with Amazing AWS Solutions</div>
                                        <div className="font14 leading-[120%]">Get Connected with Ideal solutions and try them out. Ask for Support anytime.</div>
                                        <div className="mt-[24px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[1.563vw]">
                                            <Image src="/images/aws-solutions.svg" width="572" height="369" alt="logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 grid-cols-12 -mt-[38px] xl:-mt-[40px] 2xl:-mt-[40px] 3xl:-mt-[2.344vw] flex justify-center items-center ">
                                <div className="col-span-3"></div>
                                <div className="col-span-6 flex gap-[26px] xl:gap-[30px] 2xl:gap-[34px] 3xl:gap-[1.927vw]">
                                    <div className="">
                                        <Image src="/images/onboarding-image.svg" width="419" height="674" alt="logo" />
                                    </div>
                                    <div className="mt-[250px] xl:mt-[300px] 2xl:mt-[350px] 3xl:mt-[18.229vw]">
                                        <div>
                                            <div className="font24 leading-[130%]">Add the solutions you liked to<br />
                                                <span className="font-bold">CloudQuarks Portal</span></div>
                                            <div className="font14 leading-[120%] mt-[6px] xl:mt-[8px] 3xl:mt-[0.417vw]">Just select and send your prefered solutions to CloudQuarks Portal, pay and start using <br /> the applications and Services. With Just a few clicks you go from the Mess to the</div>
                                            <div className="flex gap-[10px] xl:gap-[12px] 3xl:gap-[0.625vw] font-medium text-[14px] xl:text-[16px] 3xl:text-[0.938vw] mt-[22px] xl:mt-[26px] 2xl:mt-[31px] 3xl:mt-[1.615vw]">
                                                <div className="text-[#212325]  open-ai-btn rounded-full py-[8px] xl:py-[10px] 3xl:py-[0.521vw] px-[20px] xl:px-[22px] 3xl:px-[1.25vw]">Open <span className="font-medium">Ton</span><span className="font-bold">AI</span></div>
                                                <div className="text-[#5D9D4A] border border-[#ACD69F] bg-InterfaceSurfacecomponent rounded-full py-[8px] xl:py-[10px] 3xl:py-[0.521vw] px-[20px] xl:px-[22px] 3xl:px-[1.25vw]">Schedule a Session</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Help;
