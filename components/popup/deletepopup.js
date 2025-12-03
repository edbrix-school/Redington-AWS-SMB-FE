import React, { useRef, useState } from "react";
// import Link from "next/link";
import { Dialog } from 'primereact/dialog';

export default function DeletePopup(props) {
    const { action } = props;

    function handleClick()  {
        return action();
    }

    return (
        <>
            <div>
                <Dialog header="Header" showHeader={false} visible={props.visible}
                    onHide={() => props.onHides()} className="custmDialog w-[95%] md:w-[40vw] lg:w-[32vw]" contentStyle={{ padding: 0, borderRadius: "8px", }}>
                     <div className="flex flex-row justify-between">
                        <div
                            className=" text-[#374151] text-[16px] 3xl:text-[1.05vw] font-semibold flex justify-start items-center pl-[18px] xl:pl-[1.750vw] pt-[14px] xl:pt-[.750vw]">
                            Confirmation
                        </div>
                        <div onClick={() => props.onHides()}
                            className=" flex justify-end px-[16px] xl:px-[0.833vw] pt-[24px] xl:pt-[1.250vw] text-[16px] xl:text-[0.833vw] text-[#A9B9D0] cursor-pointer" ><i className="autinisd-cross " ></i>
                        </div>

                    </div>
                    <div className="flex flex-col items-center gap-4 px-[24px] xl:px-[1.250vw] py-[20px] xl:py-[.942vw]">
                        {/* <div className="text-[42px] xl:text-[2.188vw] text-[#62789B] "><i className={`${props.icon}`}></i></div> */}
                        <div className="text-[16px] xl:text-[0.833vw] font-normal text-[#4B586E] ">{props.message}</div>
                    </div>
                    <div className="flex justify-center items-center gap-4 px-[24px] xl:px-[1.250vw] pb-[24px] xl:pb-[1.250vw]">
                        <div className="bg-[#C81E1E] text-[#FFFFFF] rounded-lg py-[8px] xl:py-[0.417vw] px-[12px] xl:px-[0.625vw] text-[14px] xl:text-[0.729vw] font-medium cursor-pointer" onClick={handleClick}>Yes, I’m sure</div>
                        <div onClick={() => props.onHides()} className="rounded-lg py-[8px] xl:py-[0.417vw] px-[12px] xl:px-[0.625vw] text-[14px] xl:text-[0.729vw] font-medium border border-[#DBE1EA] text-[#4B586E] cursor-pointer ">No, cancel</div>
                    </div>
                </Dialog>
            </div>
        </>
    )
}
