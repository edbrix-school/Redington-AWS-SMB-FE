import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export default function Left() {
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const menuItems = [
    {
      name: "My Team",
      id: 2,
      url: "/solutionprovider/mycompany",
      iconClass: "ico-buildings-2",
    },
    {
      name: "Convenings",
      id: 3,
      url: "/solutionprovider/manageevents",
      iconClass: "ico-calendar-full",
    },
  ];

  return (
    <>
      <div className={`menu-toggle ${isActive ? "menu-active-toggle" : ""}`}>
        <div
          className={`fixed top-0 left-0 z-20 max-md:h-full left-menu-sec ${
            isActive ? "left-menu-postion" : ""
          }`}
        >
          <div
            className={`absolute top-8 -right-10 z-20 lg:hidden ${
              isActive ? "menu-toggle-icon" : ""
            }`}
          >
            <button onClick={handleClick}>
              <i className="autinisd-menu"></i>
            </button>
          </div>
          <div
            className={`w-[96px] hover:w-[328px] bg-white left-menu-h py-5 xl:py-[1.04vw] px-5 border-r border-[#E5E7EB] overflow-hidden max-md:h-full ${
              isActive ? "menu-active-width" : ""
            }`}
          >
            <div className="relative h-full">
              <div className="logo-block mb-[16px]">
                <div
                  className="logo_icon flex justify-center"
                  data-aos="fade-right"
                  data-aos-offset="500"
                  data-aos-easing="ease-in-sine"
                >
                  <Image
                    src={"/fevicon.png"}
                    width={35}
                    height={35}
                    alt="logo icon"
                  />
                </div>
                <div className="logo min-w-[200px] xl:min-w-[10vw]">
                  {
                    <Link href="/solutionprovider/dashboard" className="block text-center w-[280px]">
                      <Image
                        src={`/images/logo-main-new.svg?${new Date().getTime()}}`}
                        width={200}
                        height={60}
                        alt="logo icon"
                        className="ligththeme w-[200px] h-[60px]  xl:h-[3.125vw] xl:w-[10.417vw]"
                      />
                      {/* <Image src={'/images/logo-main.svg'} width={200} height={60} alt='logo icon' className='darkththeme w-[200px] h-[60px]  xl:h-[3.125vw] xl:w-[10.417vw]' /> */}
                    </Link>
                  }
                </div>
              </div>

              <SimpleBar>
                <div data-simplebar>
                  <div className="visible lg:hidden"></div>
                  <ul className="left-menu h-full">
                    <li
                      className={`${
                        pathname === "/solutionprovider/dashboard"
                          ? "active"
                          : ""
                      } ico-dashboard`}
                    >
                      <Link href={`/solutionprovider/dashboard`}>
                        <span>Dashboard</span>
                      </Link>
                    </li>
                    {menuItems?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className={`${
                            pathname === item.url ? "active" : ""
                          } ${item.iconClass}`}
                        >
                          <Link href={`${item.url}`}>
                            <span>{`${item.name}`}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </SimpleBar>
              <div className="absolute left-0 right-0 bottom-0 ">
                <ul className="left-menu hoverNone dark:text-[#AAAAAA]">
                  {
                    <li className={`returntoportal`}>
                      <Link href="/home">
                        <span className="">Return to Portal</span>
                      </Link>
                    </li>
                  }
                  {/* {
                    <li className={`settings`}>
                      <Link href="/">
                        <span className="">Settings</span>
                      </Link>
                    </li>
                  } */}
                  {/* <li className="userProfile relative mt-[24px] xl:mt-[1.250vw] ml-[5px]">
    <div className="flex items-center">
      {
        (<div className="userPic ml-2">
          <Image
            src={'/images/profile.png'}
            width={48} height={48}
            alt='profile' />
        </div>)}
      <div>
        <Link href=''>
          <span className="capitalize text-[#4C525F]  text-[16px] xl:text-[0.833vw] font-semibold block dark:text-[#AAAAAA]"> {"Name"} </span>
        </Link>
      </div>
    </div>
  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
