"use client";
import Image from "next/image";
import Link from "next/link";
import { InputText } from "primereact/inputtext";

const Login = () => {

  return (
    <>
      <div className="bg-[#F0F2F6]">
        <div className="flex-row grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-0 xl:pt-[0px] pt-[20px] lg:pl-[10px]">
          <div className="flex flex-wrap flex-row justify-center auto-rows-max xl:pt-[4.958vw]">
            <div className=" max-w-md 2xl:max-w-lg md:max-w-lg w-full p-2 max-lg:max-w-xl ">
              <form autoComplete="off" className="h-[] 3xl:h-[90%]">
                <div className=" pb-[70px]">
                  <div className="flex items-center">
                    <Link href="/">
                      <Image
                        src="/images/CSIU_logo.png"
                        width="512"
                        height="276"
                        className="2xl:w-[10.365vw] w-full"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="text-[24px] xl:text-[22px] 3xl:text-[1.25vw] text-[#374151] font-semibold leading-[28px]">Welcome </div>
                  <div className='text-[18px] xl:text-[16px] 3xl:text-[0.938vw] text-[#4B586E] font-normal leading-[-0.36px]'>Please log in to access AWs Portal</div>
                </div>


                <div className="box-bg w-full lg:w-[450px] xl:w-[500px] 3xl:w-[29.25vw] py-[26px] xl:py-[22px] 3xl:py-[1.354vw]">
                  <div className="">
                    <div>
                      <div className="mb-[10px] lg:mb-[14px] 3xl:mb-[0.8vw]">
                        <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] font-normal text-[#374151] mb-[6px]">
                          Email <span className="text-[#FF0000]">*</span>
                        </div>
                        <InputText
                          tabIndex={1}

                          placeholder="Enter Email"
                          className="w-full loginInput"
                        />

                      </div>
                      <div className="eyeiconalgin">
                        <div className="text-[14px] xl:text-[14px] 3xl:text-[0.729vw] font-normal text-[#374151] mb-[6px]">
                          Password <span className="text-[#FF0000]">*</span>
                        </div>
                        <div className="relative">
                          <InputText
                            tabIndex={1}
                            placeholder="*******"
                            className="w-full loginInput custompasswordlogin"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end items-center mt-[2px]">
                        {/* <div className="flex justify-center items-center gap-1">
                          <div className="custcheck mt-[2px] custCheckBox custcheckboxnew">
                            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                          </div>
                          <div className="text-[13px] xl:text-[13px] 3xl:text-[0.677vw] text-[#4B586E]">Remember Me</div>
                        </div> */}
                        <Link
                          href={"/forgotpassword"}
                          className="text-[#801B40] font-medium text-[13px] xl:text-[13px] 3xl:text-[0.677vw] cursor-pointer"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-[450px] xl:w-[500px] 3xl:w-[29.25vw]">
                  <button
                    // onClick={handleManualLogin}
                    className="w-full text-white font-medium text-[17px] xl:text-[17px] lg:text-[15px] 3xl:text-[0.938vw] px-[10px] 3xl:px-[0.833vw] py-[10px] lg:py-[10px] xl:py-[9px] 3xl:py-[0.442vw] rounded-[8px] 3xl:rounded-[0.417vw] flex justify-center items-center gap-[16px] bg-[#077397]"
                  // disabled={loader == true}
                  >
                    {/* {loader ? "Redirecting..." : "Login"} */}
                  </button>
                </div>
              </form>
              {/* <div className=" mt-5 lg:mt-2 xl:mt-5 2xl:mt-10 mb-5 lg:mb-2 flex items-center justify-center w-full lg:w-[450px] xl:w-[500px] 3xl:w-[29.25vw]">
                                <Link target="_black" href={'https://www.hexalytics.com'}>
                                    <h6 className="text-[#313131] text-[14px] 3xl:text-[0.729vw]  xl:text-[14px] font-normal  flex items-center gap-3">
                                        Powered by
                                        <Image
                                            src={'/images/logo-hexa.png'}
                                            width={150}
                                            height={100}
                                            alt="logo"
                                            className="object-contain"
                                        />
                                    </h6>
                                </Link>
                            </div> */}
            </div>
          </div>
          <div className="hidden 2xl:block lg:block">
            <div className="login-wrap-bg h-screen max-lg:h-[50%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
