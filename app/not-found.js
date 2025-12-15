'use client'
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {

    let starterURL = "/";

    return (
        <>
            <div className=" bg-white rounded16 p24 h-screen">
                <div className="bg-[#fff] p24 rounded16 xl:h-[500px] lg:h-[400px] 3xl:h-[31.25vw]">
                    <div className="flex flex-col justify-center items-center gap20 xl:h-[500px] lg:h-[400px] 3xl:h-[31.25vw]">
                        <Image
                            src="/images/logo-new.svg"
                            width="350"
                            height="200"
                            className="opacity-60"
                            alt=""
                        />
                        <div className=" text-[#19212A] font-medium font32 leading-[120%] text-center opacity-60">
                            Sorry, the page you are looking for does not exist.
                        </div>
                        <Link className="text-BrandHighlight500 font16 mt12 border border-BrandHighlight500 bg-white rounded-full py10 px24" href={starterURL}>
                            Back to portal
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
