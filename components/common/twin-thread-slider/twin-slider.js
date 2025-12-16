"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Carousel } from 'primereact/carousel';


const TwinSlider = () => {
    const products = [
        { id: 1, title: "Product 1", img: "https://via.placeholder.com/150" },
        { id: 2, },
        { id: 3, },
        { id: 4, },
    ];

    const responsiveOptions = [
        {
            breakpoint: "1199px",
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: "991px",
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: "767px",
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (product) => {
        return (
            <div className=" twinthread-bg">
                <div className="w-[200px] xl:w-[220px] 3xl:w-[10.417vw] px16 py-[20px] xl:py-[24px] 3xl:py-[1.563vw] ">
                    <div className="spacey16 px10">
                        <Image src="/images/svg/twinthread-log.svg" width="168" height="28" alt="logo" />
                        <div className="text-[#0A291A] font-normal font14">TwinThread Industrial AI</div>
                        <div className="text-[#4C525F99] font-normal leading-[111%] font12">TwinThread accelerates digital transformation for industrial companies by integrating AI and machine learning into existing workflows, enabling continuous operational improvements with minimal disruption. It guides the crea...</div>
                    </div>
                </div>
            </div>
        );
    };   

    return (
        <>
            {/* <div className="col-span-12 relative mt-[30px] xl:mt-[40px] 3xl:mt-[2.292vw]"> */}
            <div className="">
                <div className="w-full hot-solution-carousel twinthread-shadow rounded8 overflow-hidden">
                    <Carousel
                        value={products}
                        numVisible={1}
                        numScroll={1}
                        responsiveOptions={responsiveOptions}
                        itemTemplate={productTemplate}
                        circular
                        showNavigators={false}
                        indicatorsContentClassName="sbm-location"
                    />
                </div>
            </div>
        </>
    );
};

export default TwinSlider;
