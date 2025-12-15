'use client';
import React, { useState } from 'react';
// import { Sidebar } from 'primereact/sidebar'; // Import Sidebar
import { Accordion, AccordionTab } from 'primereact/accordion';
// import { FileText, ArrowLeft, Pencil, Download, PlayCircle} from 'lucide-react';
import Link from 'next/link';

export const FAQSection = () => {

    // --- Side Drawer Content Component ---
    // const DrawerContent = ({ data }) => {
    //     if (!data) return null;

    //     return (
    //         <div className="flex flex-col h-full font-roboto">
    //             {/* Custom Header */}
    //             <div className="px-6 py-4 border-b border-gray-100 flex items-start justify-between bg-white sticky top-0 z-10">
    //                 <div className="flex items-start gap-3">
    //                     <button onClick={() => setVisibleRight(false)} className="mt-1 text-gray-400 hover:text-gray-600 cursor-pointer">
    //                         <ArrowLeft size={20} />
    //                     </button>
    //                     <div>
    //                         <h2 className="text-xl font-bold text-gray-900">{data.title}</h2>
    //                         <div className="flex gap-2 mt-2">
    //                             <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Web Hosting</span>
    //                             <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Security</span>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <button className="p-2 bg-gray-50 rounded-full text-gray-500 hover:text-gray-700 cursor-pointer">
    //                     <Pencil size={18} />
    //                 </button>
    //             </div>

    //             <div className="flex-1 overflow-y-auto">
    //                 {/* File Details Strip */}
    //                 <div className="bg-[#F9FAFB] px-8 py-6 grid grid-cols-3 gap-4 border-b border-gray-100">
    //                     <div>
    //                         <span className="text-xs text-gray-400 block mb-1">Name</span>
    //                         <span className="text-sm font-medium text-gray-700">{data.title}</span>
    //                     </div>
    //                     <div>
    //                         <span className="text-xs text-gray-400 block mb-1">Category</span>
    //                         <span className="text-sm font-medium text-gray-700">{data.category}</span>
    //                     </div>
    //                     <div>
    //                         <span className="text-xs text-gray-400 block mb-1">Type</span>
    //                         <div className="flex items-center gap-2">
    //                             <div className={`p-1 rounded-full ${getFileIconBg(data.documentType)}`}>
    //                                 {getFileIcon(data.documentType, 12)}
    //                             </div>
    //                             <span className="text-sm font-medium text-gray-700">{data.documentType}</span>
    //                         </div>
    //                     </div>
    //                 </div>

    //                 {/* Main Content Area */}
    //                 <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
    //                     <div>
    //                         <h3 className="font-semibold text-gray-800 mb-3 text-lg">
    //                             Small and medium businesses looking for a hassle-free, secure, and robust web hosting solution.
    //                         </h3>
    //                         <p className="text-gray-500 text-sm leading-relaxed mb-4">
    //                             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //                         </p>
    //                         <p className="text-gray-500 text-sm leading-relaxed">
    //                             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    //                         </p>
    //                     </div>

    //                     {/* Image Area */}
    //                     <div className="border border-gray-200 rounded-lg p-2 bg-white shadow-sm flex items-start justify-center min-h-[200px]">
    //                         <img
    //                             src="images/Knowledge-Hub/Architecture-Diagram.webp"
    //                             alt="Architecture Diagram"
    //                             className="w-full h-auto object-contain rounded"
    //                         />
    //                     </div>
    //                 </div>

    //                 {/* Dark Footer Section (Similar Documents & Attachments) */}
    //                 <div className="bg-[#101828] p-8 text-white mt-4">
    //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //                         {/* Similar Documents */}
    //                         <div>
    //                             <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">Similar Documents</h4>
    //                             <div className="space-y-3">
    //                                 {[1, 2, 3].map((_, i) => (
    //                                     <div key={i} className="flex items-center justify-between bg-[#1D2939] p-3 rounded-lg border border-[#344054]">
    //                                         <div className="flex items-center gap-3">
    //                                             <div className="p-2 bg-[#101828] rounded border border-[#344054]">
    //                                                 <FileText size={16} className="text-white" />
    //                                             </div>
    //                                             <div>
    //                                                 <p className="text-sm font-medium text-white">Int. Manual V2.03</p>
    //                                                 <p className="text-xs text-gray-400">21 Jan 2023 11:23 AM</p>
    //                                             </div>
    //                                         </div>
    //                                         <button className="text-gray-400 hover:text-white cursor-pointer"><Download size={16} /></button>
    //                                     </div>
    //                                 ))}
    //                             </div>
    //                         </div>

    //                         {/* Attachments */}
    //                         <div>
    //                             <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">Attachments</h4>
    //                             <div className="space-y-3">
    //                                 {/* Item 1 */}
    //                                 <div className="flex items-center justify-between bg-[#1D2939] p-3 rounded-lg border border-[#344054]">
    //                                     <div className="flex items-center gap-3">
    //                                         <div className="p-2 bg-[#101828] rounded border border-[#344054]">
    //                                             <FileText size={16} className="text-white" />
    //                                         </div>
    //                                         <div>
    //                                             <p className="text-sm font-medium text-white">Tech Specs.pdf</p>
    //                                             <p className="text-xs text-gray-400">21 Jan 2023 11:23 AM</p>
    //                                         </div>
    //                                     </div>
    //                                     <button className="text-gray-400 hover:text-white cursor-pointer"><Download size={16} /></button>
    //                                 </div>
    //                                 {/* Item 2 */}
    //                                 <div className="flex items-center justify-between bg-[#1D2939] p-3 rounded-lg border border-[#344054]">
    //                                     <div className="flex items-center gap-3">
    //                                         <div className="p-2 bg-[#101828] rounded border border-[#344054]">
    //                                             <PlayCircle size={16} className="text-white" />
    //                                         </div>
    //                                         <div>
    //                                             <p className="text-sm font-medium text-white">First Steps Training Video</p>
    //                                             <p className="text-xs text-gray-400">21 Jan 2023 11:23 AM</p>
    //                                         </div>
    //                                     </div>
    //                                     <button className="text-gray-400 hover:text-white cursor-pointer"><Download size={16} /></button>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // };

    const [activeIndexList, setActiveIndexList] = useState(0);

    return (
        <div className="">
            <div className="grid grid-cols-12 gap-[50px] xl:gap-[54px] 2xl:gap-[58px] 3xl:gap-[3.229vw]">
                <div className='col-span-4 bg-InterfaceSurfacecomponent rounded-xl relative z-20 min-h-screen spacey26 p16 rounded8 shadow-[0_1px_3px_0_rgba(0,0,0,0.10),0_1px_2px_-1px_rgba(0,0,0,0.10)]'>
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
                                    } block  p12 font16 leading-tight`}
                            >
                                General
                            </Link>
                            <Link href={""}
                                onClick={() => setActiveIndexList(1)}
                                className={`${activeIndexList === 1
                                    ? "bg-BrandNeutralpure text-[#fff] font-medium rounded-[8px] xl:rounded-[8px] 3xl:rounded-[0.417vw]"
                                    : "bg-white text-interfacetextdefault1 font-normal border-b border-InterfaceStrokesoft1"
                                    } block  p12 font16 leading-tight`}
                            >
                                Solutions
                            </Link>
                            <Link href={""}
                                onClick={() => setActiveIndexList(2)}
                                className={`${activeIndexList === 2
                                    ? "bg-BrandNeutralpure text-[#fff] font-medium rounded-[8px] xl:rounded-[8px] 3xl:rounded-[0.417vw]"
                                    : "bg-white text-interfacetextdefault1 font-normal border-b border-InterfaceStrokesoft1"
                                    } block  p12 font16 leading-tight`}
                            >
                                Applications
                            </Link>
                            <Link href={""}
                                onClick={() => setActiveIndexList(3)}
                                className={`${activeIndexList === 3
                                    ? "bg-BrandNeutralpure text-[#fff] font-medium rounded-[8px] xl:rounded-[8px] 3xl:rounded-[0.417vw]"
                                    : "bg-white text-interfacetextdefault1 font-normal border-b border-InterfaceStrokesoft1"
                                    } block  p12 font16 leading-tight`}
                            >
                                Service unavailable
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-span-8 bg-InterfaceSurfacecomponent rounded-xl relative z-20 min-h-screen p24 custom-accordion'>
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

            {/* Side Drawer Component */}
            {/* <Sidebar 
                visible={visibleRight} 
                position="right" 
                onHide={() => setVisibleRight(false)} 
                className="w-full md:w-[60%] lg:w-[50%] p-0 custom-sidebar" // p-0 removes default padding
                showCloseIcon={false} // Hiding default close icon to use our custom header
                style={{ width: '900px', maxWidth: '100vw' }} // Force width like SS
            >
                <DrawerContent data={selectedProduct} />
            </Sidebar> */}
        </div>
    );
};