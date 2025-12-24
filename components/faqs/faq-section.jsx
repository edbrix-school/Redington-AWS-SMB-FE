'use client';
import React, { useState } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Link from 'next/link';

export const FAQSection = () => {

    const [activeIndexList, setActiveIndexList] = useState(0);

    return (
        <div className="">
            <div className="grid grid-cols-12 gap-6 lg:gap-[50px] xl:gap-[54px] 2xl:gap-[58px] 3xl:gap-[3.229vw]">
                <div className='col-span-12 lg:col-span-4 bg-InterfaceSurfacecomponent rounded-xl relative z-20 h-fit lg:min-h-screen spacey26 p16 rounded8 shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)]'>
                    <div className='font18 text-interfacetextdefault1 font-semibold'>FAQ Categories</div>
                    {/* Search Input Container - Updated Background Color */}
                    <div className="relative py6 bg-InterfaceSurfacecomponent rounded4 flex items-center overflow-hidden border border-[rgba(66,83,109,0.38)] shadow-sm">
                        <div className="px-4 h-full flex items-center justify-center cursor-pointer hover:opacity-100 transition-opacity">
                            <i className='smb-search text-interfacetextdefault1 font14'></i>
                        </div>
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="flex-1 bg-transparent border-none outline-none text-interfacetextdefault1 placeholder-interfacetextdefault1 font16 font-medium"
                        />
                    </div>
                    <div>
                        <div className="col-span-12 spacey16">
                            <Link href={""}
                                onClick={() => setActiveIndexList(0)}
                                className={`${activeIndexList === 0
                                    ? "bg-BrandNeutralpure text-[#fff] font-medium rounded-[8px] xl:rounded-[8px] 3xl:rounded-[0.417vw]"
                                    : "bg-white text-interfacetextdefault1 font-normal border-b border-InterfaceStrokesoft1"
                                    } block  p12 font16 leading-[150%]`}
                            >
                                General
                            </Link>
                            <Link href={""}
                                onClick={() => setActiveIndexList(1)}
                                className={`${activeIndexList === 1
                                    ? "bg-BrandNeutralpure text-[#fff] font-medium rounded-[8px] xl:rounded-[8px] 3xl:rounded-[0.417vw]"
                                    : "bg-white text-interfacetextdefault1 font-normal border-b border-InterfaceStrokesoft1"
                                    } block  p12 font16 leading-[150%]`}
                            >
                                Solutions
                            </Link>
                            <Link href={""}
                                onClick={() => setActiveIndexList(2)}
                                className={`${activeIndexList === 2
                                    ? "bg-BrandNeutralpure text-[#fff] font-medium rounded-[8px] xl:rounded-[8px] 3xl:rounded-[0.417vw]"
                                    : "bg-white text-interfacetextdefault1 font-normal border-b border-InterfaceStrokesoft1"
                                    } block  p12 font16 leading-[150%]`}
                            >
                                Applications
                            </Link>
                            <Link href={""}
                                onClick={() => setActiveIndexList(3)}
                                className={`${activeIndexList === 3
                                    ? "bg-BrandNeutralpure text-[#fff] font-medium rounded-[8px] xl:rounded-[8px] 3xl:rounded-[0.417vw]"
                                    : "bg-white text-interfacetextdefault1 font-normal border-b border-InterfaceStrokesoft1"
                                    } block  p12 font16 leading-[150%]`}
                            >
                                Service unavailable
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-8 bg-InterfaceSurfacecomponent rounded-xl relative z-20 h-fit lg:min-h-screen p24 custom-accordion'>
                    <div className='font18 text-interfacetextdefault1 font-semibold'>General Questions</div>
                    <Accordion activeIndex={3} className='mt24'>
                        <AccordionTab header="How do I start a test drive?" className='font16 font-medium text-interfacetextdefault1'>
                            <p className="m-0">
                                No Data
                            </p>
                        </AccordionTab>
                        <AccordionTab header="Are there any costs associated with test drives?" className='font16 font-medium text-interfacetextdefault1'>
                            <p className="m-0">
                                No Data
                            </p>
                        </AccordionTab>
                        <AccordionTab header="Can I deploy solutions directly to my AWS acccount?" className='font16 font-medium text-interfacetextdefault1'>
                            <p className="m-0">
                                No Data
                            </p>
                        </AccordionTab>
                        <AccordionTab header="What is a test drive?" className='font16 font-medium text-interfacetextdefault1'>
                            <div className='m-0 spacey20'>
                                <div className='text-InterfaceSurfacehcprimary font14 leading-[140%]'>• A test drive is a risk-free, guided experience that allows you to interact with a pre configured instance of a cloud product or solution.  </div>
                                <div className='text-InterfaceSurfacehcprimary font14 leading-[140%]'>• You can explore features, run scenarios, and evaluate performance in a real AWS environment-without any setup or commitment</div>
                            </div>
                        </AccordionTab>
                        <AccordionTab header="What happens to my data after a test drive?" className='font16 font-medium text-interfacetextdefault1'>
                            <p className="m-0">
                                No Data
                            </p>
                        </AccordionTab>
                        <AccordionTab header="Can I customized the test drive environment" className='font16 font-medium text-interfacetextdefault1'>
                            <p className="m-0">
                                No Data
                            </p>
                        </AccordionTab>
                        <AccordionTab header="How do I compare different solutions?" className='font16 font-medium text-interfacetextdefault1'>
                            <p className="m-0">
                                No Data
                            </p>
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};