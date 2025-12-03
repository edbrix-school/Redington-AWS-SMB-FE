"use client";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import AnnoucementSpecialPopup from "@components/popup/annoucementSpecialPopup";
import { useEffect, useState } from "react";
import { getSpecialAnnouncement } from "@actions/announcementsApi";
import { setLoginDetails } from "@store/slices/userDetailsSlice";



export default function Footer({ ...pageProps }) {
    const [AnnoucementSpecialPopupShow,setAnnoucementSpecialPopupShow] = useState(false);
    const [specialAnnoucement, setspecialAnnoucement] = useState({})
    const dispatch = useDispatch();
    const mediaData = useSelector((state) => state.user.media);
    const getSpecialAnnoucementData =async ()=>{
        try{

            const response = await getSpecialAnnouncement();
            if(response?.success){
                if(response.data.announcements?.length){
                    setspecialAnnoucement(response.data.announcements[0])
                    setAnnoucementSpecialPopupShow(true)
                }
            }
    }catch(e){
        console.log('e', e)
    }
}
useEffect(() => {
    if(pageProps?.isLogin){
        getSpecialAnnoucementData()
        dispatch(setLoginDetails(false));
    }
}, [])

    return (
        <div className="mt-[142px] sm:mt-[152px] md:mt-[148px] lg:mt-[145px] xl:mt-[145px] 2xl:mt-[142px]">
            <div className="footer_before"></div>
            <footer className="bg-[#1F2A37] pt-[164px] pb-[58px] px-[15px] lg:px-[20px] xl:px-[1.04vw] relative  mt-[-2px]" >

                <div className="xl:max-w-[88.3025vw] mx-auto">
                    <div className="footer-logo absolute 3xl:top-[-7.292vw] xl:top-[-10.292vw] 2xl:top-[-8.292vw] lg:top-[-12.292vw] md:top-[-17.292vw] sm:top-[-19.292vw] top-[-128px] left-0 right-0 mx-auto">
                        <div className="flex justify-center ">
                            <Link
                                href={""}
                            >
                                <Image
                                    src="/images/footer_logo.png"
                                    width="85"
                                    height="65"
                                    alt=""
                                    className="3xl:w-[5vw] 3xl:h-[6vw] xl:w-[5.427vw] xl:h-[7.385vw] mb-[20px] xl:mb-[20px] 3xl:mb-[1.042vw]"
                                />
                            </Link>
                        </div>
                        <div className="flex justify-center xl:mt-[50px] 3xl:mt-[40px] md:mt-[40px]">
                            <Link
                                href={""}
                            >
                                <Image
                                    src="/images/footer_logo_erdi-new.svg"
                                    width="84"
                                    height="24"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>


                    <div className="flex xl:flex justify-between mt-[-100px] 3xl:mt-[-120px]">
                        <div>
                            <h4 onClick={() =>{}} className="text-[#fff] text-[18px] 3xl:text-[1.25vw]  xl:text-[22px] font-semibold">Contact Us</h4>
                            <div className="text-[#fff] text-[14px] lg:text-[16px] 3xl:text-[0.833vw]  xl:text-[16px] font-normal mt-[24px]">
                                <p>PO Box 551</p>
                                <p>Highwood, IL</p>
                                <p>773-820-9265</p>
                                <Link className="text-[#A0F4FF]"
                                target="_blank"
                                href={(mediaData?.length&& mediaData[0]?.gmailLink  )? `mailto:${mediaData[0]?.gmailLink}` : "#"}>info@erdius.org</Link>
                            </div>
                        </div>


                        <div className="">
                            <h4 className="text-[#fff] text-[18px] 3xl:text-[1.25vw]  xl:text-[22px] font-semibold">Social Media</h4>

                            <div className="flex gap-2 mt-[30px] ">
                                <Link target="_blank"
                                    href={`${mediaData?.length > 0 ? mediaData[0]?.twitterLink : ""}`}
                                >
                                    <div className="bg-[#EBFEFF] text-[#077397] hover:text-[#fff] w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-[#077397]">
                                        <i className=" erdi-x"></i>
                                    </div>
                                    {/* <Image src={'/images/svg/twitter_icon.svg'} width={28} height={28} alt="twitter_icon" /> */}
                                </Link>
                                <Link target="_blank" href={`${mediaData?.length > 0 ? mediaData[0]?.linkdinLink : ""}`}>
                                    <div className="bg-[#EBFEFF] text-[#077397] hover:text-[#fff] w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-[#077397]">
                                        <i className="erdi-linkdin"></i>
                                    </div>
                                </Link>
                                <Link target="_blank" href={`${mediaData?.length > 0 ? mediaData[0]?.faceBookLink : ""}`}>
                                    <div className="bg-[#EBFEFF] text-[#077397] hover:text-[#fff] w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-[#077397]">
                                        <i className=" erdi-facebook"></i>
                                    </div>
                                </Link>
                                <Link
                                    target="_blank"
                                    href={(mediaData?.length&&mediaData[0]?.gmailLink ) ? `mailto:${mediaData[0]?.gmailLink}` : "#"}>
                                    <div className="bg-[#EBFEFF] text-[#077397] hover:text-[#fff] w-[30px] h-[30px] rounded-full flex justify-center items-center hover:bg-[#077397]">
                                        <i className="erdi-mail"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between gap-2 mt-[15px]">
                        <h6 className="text-[#fff] text-[13px] 3xl:text-[0.677vw]  xl:text-[13px] font-light">© COPYRIGHT 2024. ALL RIGHTS RESERVED.</h6>
                        <Link target="_black" href={'https://www.hexalytics.com'}>
                            <h6 className="text-[#fff] text-[14px] 3xl:text-[0.729vw]  xl:text-[14px] font-light  flex items-center gap-2">
                            Powered by
                                <Image
                                    src={'/images/svg/hexalytcis-logo.svg'}
                                    width={100}
                                    height={100}
                                    alt="logo"
                                    className="object-contain"
                                />
                            </h6>
                        </Link>

                    </div>



                </div>
            </footer>

          { specialAnnoucement&& AnnoucementSpecialPopupShow&&<AnnoucementSpecialPopup 
            visible={AnnoucementSpecialPopupShow}
            specialAnnoucement={specialAnnoucement}
            onHide={() => setAnnoucementSpecialPopupShow(false)}
          />}
        </div>
    );
}
