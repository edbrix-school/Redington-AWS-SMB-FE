"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { OverlayPanel } from "primereact/overlaypanel";
import EditProfile from "@components/popup/editprofile";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginData, selectUserData, setLoginUsersData, setMedia, setSolutionProvideDetails, setUserData } from "@store/slices/userDetailsSlice";
import { useMsal } from "@azure/msal-react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import 'primeicons/primeicons.css';
import UserProfilePopup from "@components/popup/UserProfilePopup";
import { getBookingNotification, getPostNotificationsApi, getUserById } from "@actions/master";
import { clearAllCookies } from "@components/services/utils/common";
import { loginApi } from "@actions/loginApi";
import Cookies from "js-cookie";
import { setBradingListData } from "@store/slices/brandingSlice";
import { getAllBrandAPI } from "@actions/branding";
import { setBookingUserId } from "@store/slices/bookinsSlice";
import { setIsRead } from "@store/slices/notificSlice";
import { setUserPersonalFolderId } from "@store/slices/elibMyFolderSlice";


export default function Top({ ...pageProps }) {

  const pathname = usePathname()
  const router = useRouter();

  const profile = useRef(null);
  const notificatio = useRef(null);
  const likenotification = useRef(null);

  const menuList = useRef(null);

  const notificsnData = useSelector((state) => state.notifics);
  const userData = useSelector(selectUserData);
  const loginData = useSelector(selectLoginData);
  const dispatch = useDispatch();


  const [isActive, setIsActive] = useState(false);
  const [isClassActive, setIsClassActive] = useState(false);
  const [editId, setEditId] = useState(" ")
  const [loginType, setLoginType] = useState("")
  const { instance, accounts } = useMsal();
  const [edituserData, setEdituserData] = useState({});
  const [editLoader, setEditLoader] = useState(false);
  const [isSecondaryLogin, setSecondaryLogin] = useState(false);
  const [primaryEmail, setPrimaryEmail] = useState("");
  const [notifications, setnotifications] = useState([]);
  const [notFicCount, setNotifiCount] = useState("");

  const [postNotifications, setPostNotifications] = useState([]);
  const [postNotFicCount, setPostNotifiCount] = useState("");

  const [editProfile, setEditProfile] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  const registeredForCommunityHub = userData?.registeredForCommunityHub;

  // Function to toggle the class
  const handleClick = () => {
    setIsActive(!isActive); // Toggle the class on click
  };

  const handleMouseEnter = (event) => {
    profile.current.show(event);
  };

  const handleMouseLeave = () => {
    profile.current.hide();
  };

  // Function to handle the toggle
  const toggleClass = () => {
    setIsClassActive(!isClassActive);
  };

  const [isHovered, setIsHovered] = useState(false); // Tracks hover state
  const [isClicked, setIsClicked] = useState(false); // Tracks click state

  // Handle hover on trigger
  const handleMouseEnterTrigger = (event) => {
    if (!isClicked) {
      menuList.current.show(event);
      setIsHovered(true);
    }
  };

  const handleMouseLeaveTrigger = () => {
    if (!isClicked && !isHovered) {
      menuList.current.hide();
    }
  };

  // Handle hover on overlay
  const handleMouseEnterOverlay = () => {
    setIsHovered(true);
  };

  const handleMouseLeaveOverlay = () => {
    setIsHovered(false);
    if (!isClicked) {
      menuList.current.hide();
    }
  };

  // Handle click on trigger
  const handleClick2 = (e) => {
    e.preventDefault();
    if (isClicked) {
      menuList.current.hide();
    } else {
      menuList.current.show(e);
    }
    setIsClicked(!isClicked);
  };

  // Handle clicking outside
  const handleOverlayHide = () => {
    setIsClicked(false);
    setIsHovered(false);
  };

  const Logout = () => {
    sessionStorage.clear();
    localStorage.clear();
    clearAllCookies()
    dispatch(setUserData(null));
    dispatch(setLoginUsersData(null));
    dispatch(setMedia(null));
    dispatch(setSolutionProvideDetails(null));

    if (loginType == "MICROSOFT" && accounts.length > 0) {
      instance.logout();
    } else {
      router.push('/')
    }
  };

  const getUserData = async (profileId) => {
    try {
      setEditLoader(true);
      const res = await getUserById(profileId);
      if (res.code == 200) setEdituserData(res.data?.user); setEditLoader(false)
    } catch (e) {
      setEditLoader(false)
      console.log("Error", e);
    }
  };

  const doPrimaryLogin = async (email) => {
    const payload = {
      email: email,
      isNormalLogIn: 0,
      isUserLogIn: 1
    }
    try {
      const response = await loginApi(payload);
      if (response?.code == 200) {
        let data = response?.data ?? null;
        if (data) {
          localStorage.setItem("accessToken", data.authToken);
          localStorage.setItem("userViewType", 'PRIMARY');
          setSecondaryLogin(false)
          Cookies.set("accessToken", data?.authToken);
          Cookies.set("role", JSON.stringify(data?.userDetails?.role));
          Cookies.set("userId", data?.userDetails?.userId);
          Cookies.set("email", data?.userDetails?.email);
          Cookies.set("registeredForCommunityHub", data?.userDetails?.registeredForCommunityHub);
          Cookies.set('elibMyfolder',data?.userDetails?.alfrescoFolderId || "")
          dispatch(setUserPersonalFolderId(data?.userDetails?.alfrescoFolderId || ""))
          fetchBrandingData(data?.userDetails?.userId)
          dispatch(setUserData(data.userDetails));
          dispatch(setMedia(data.media))
          const filterData = {
            userId: data?.userDetails?.userId,
            firstName: data?.userDetails?.firstName,
            lastName: data?.userDetails?.lastName,
            email: data?.userDetails?.email,
            profileImagePath: data?.userDetails?.profileImagePath,
          }
          dispatch(setLoginUsersData(filterData));
          router.push("/admin/dashboard");
        }
      } else if (response?.code === 422) {
        Object.entries(response.error).forEach(([key, value]) => {
          toast.error(`${key}: ${value}`);
        });
      } else if (response?.code === 500) {
        toast.error(response.error || "Something went wrong on the server.");
      } else {
        toast.error(response?.error || "An unknown error occurred.");
      }
    } catch (error) {
      console.log('Error-login:', error);
    }
  }

  const fetchBrandingData = async (userId) => {

    if (!userId) {
      return
    }
    try {
      const response = await getAllBrandAPI();
      let data = response?.data?.brandings;
      if (data) {
        dispatch(setBradingListData(data))
      }
    } catch (error) {
      console.log('error:', error);

    }
  }

  // Notification 
  const getBookingNotificationList = async () => {
    try {
      let payload = {
        "isDetailsView": 0,
        pagination: { pageNumber: 1, pageSize: 10 }
      }
      let response = await getBookingNotification(payload)
      if (response?.code == 200) {
        setnotifications(response?.data?.bookings || []);
        setNotifiCount(response?.data?.totalCount || 0);
      } else {
        toast.error(response?.error || "Something went wrong on the server.");
      }
    } catch (error) {
      console.log('error while getting company list', error)
    } finally {
    }
  }

  const getPostNotificationsList = async () => {
    try {
      let response = await getPostNotificationsApi()
      if (response?.code == 200) {
        setPostNotifications(response?.data?.notifications || []);
        setPostNotifiCount(response?.data?.totalCount || 0);
      } else {
        toast.error(response?.error || "Something went wrong on the server.");
      }
    } catch (error) {
      console.log('error while getting company list', error)
    } finally {
    }
  }

  // Toggle the class on the body element when the state changes
  useEffect(() => {
    if (isClassActive) {
      document.body.classList.add('bodyscrollhide');
    } else {
      document.body.classList.remove('bodyscrollhide');
    }
    // Clean up the class when the component is unmounted
    return () => {
      document.body.classList.remove('bodyscrollhide');
    };
  }, [isClassActive]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let lType = localStorage.getItem("loginType")
    setLoginType(lType);
    let viewType = localStorage.getItem('userViewType');
    let primaryEmail = localStorage.getItem('primaryEmail')
    if (viewType == 'SECONDARY') {
      setSecondaryLogin(true);
      setPrimaryEmail(primaryEmail)
    }
  }, [])

  useEffect(() => {
    getBookingNotificationList();
    getPostNotificationsList();
    dispatch(setIsRead(false))
  }, [])

  // end Notification 


  return (
    <header className="sticky top-0 z-[31]">

      <div
        className={`${scrolled ? "bg-[#1D262F]" : "bg-[#fff]"
          }  border-b border-[#BECDE3] px-[10px] 3xl:px-[1.04vw]
            pt-[15px] 3xl:pt-[0.781vw] pb-[15px] 3xl:pb-[0.781vw] ease-linear duration-300`}
      >
        <div className={`xl:max-w-[95.308vw] 3xl:max-w-[95.308vw] mx-auto flex justify-between items-center ${isActive ? 'menuactive' : ''}`}>
          <div className="logo-frontend">
            <Link prefetch href={"/home"} className="block">
              {scrolled ? (
                <Image
                  src={`/images/logo-main-white-new.svg?${new Date().getTime()}}`}
                  width="160"
                  height="40"
                  alt="logo"
                  className="3xl:h-[2.80vw] 3xl:w-[9.375vw] xl:h-[2.80vw] xl:w-[7.375vw]"
                />
              ) : (
                <Image
                  src={`/images/logo-main-new.svg?${new Date().getTime()}}`}
                  width="160"
                  height="40"
                  alt="logo"
                  className="3xl:h-[2.80vw] 3xl:w-[9.375vw] xl:h-[2.80vw] xl:w-[7.375vw]"
                />
              )}
            </Link>
          </div>
          <div className="xl:flex items-center mobilemenu max-xl:bg-white max-xl:pt-5 max-xl:pl-5">
            <div className="xl:hidden"><Image
              src={`/images/logo-main.svg?${new Date().getTime()}}`}
              width="160"
              height="40"
              alt="logo"
              className="3xl:h-[2.80vw] 3xl:w-[9.375vw] xl:h-[2.80vw] xl:w-[7.375vw] h-[50px] w-[100px]"
            />
            </div>
            <ul className="xl:flex gap-1 3xl:gap-2 h-[400px] xl:h-auto 3xl:h-auto overflow-auto ">

              <li >
                <Link
                  prefetch={false}
                  href=""
                  className={`${pathname == "/solutionproviders" || pathname == "/educationleaders" || pathname == "/emeritusTeam" || pathname == "/expertnetwork" ? "md:text-[#0e7490] md:font-bold" : ""}
                  ${scrolled
                      ? "text-[#fff] hover:text-[#fff] max-xl:text-[#4B586E]"
                      : "text-[#4B586E] hover:text-[#1D262F]"
                    } block text-[12px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal  px-[6px] 3xl:px-[0.417vw] py-[8px] xl:py-[2px] 3xl:py-[0.117vw] rounded-lg ease-linear duration-300 trigger`}
                >
                  ERDI Community
                </Link>
                <div className={`hoverContent ${scrolled ? 'bg-[#1D262F]' : 'bg-white'} max-xl:bg-white`}>
                  <div className="flex flex-col gap-4 3xl:gap-[0.833vw] dark:text-[#F2F2F5] text-[#1F2A37] text-sm font-normal leading-[14px] 3xl:text-[0.729vw] 3xl:leading-[0.729vw] p-3 3xl:p-[0.625vw]">
                    <ul className="grid xl:gap-y-[6px] 3xl:gap-[6px] overflow-auto ">
                      <li>
                        <Link
                          prefetch={false}
                          href={"/solutionproviders"}
                          className={`${pathname == "/solutionproviders" ? "md:text-[#0e7490] md:font-bold" : ""}
                    ${scrolled
                              ? "text-[#fff] hover:text-[#fff] max-xl:text-[#4B586E]"
                              : "text-[#4B586E] hover:text-[#1D262F]"
                            }
                    block text-[12px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal  px-[6px] 3xl:px-[0.417vw] py-[8px] xl:py-[2px] 3xl:py-[0.117vw] rounded-lg ease-linear duration-300`}
                        >
                          Solution Providers
                        </Link>
                      </li>
                      <li className="w-[2px] bg-gradient-to-t from-[#BECDE300] from-20% via-[#BECDE3] via-60% to-[#BECDE300] to-20%"></li>
                      <li>
                        <Link
                          prefetch={false}
                          href={"/educationleaders"}
                          className={`${pathname == "/educationleaders" ? "md:text-[#0e7490] md:font-bold" : "text-[3fff"}
                    ${scrolled
                              ? "text-[#fff]  hover:text-[#fff] max-xl:text-[#4B586E]"
                              : "text-[#4B586E] hover:text-[#1D262F]"
                            }
                    block text-[12px] 2xl:text-[14px] 3xl:text-[0.833vw]   px-[6px] 3xl:px-[0.417vw] py-[8px] xl:py-[2px] 3xl:py-[0.117vw] rounded-lg ease-linear duration-300`}
                        >
                          Education Leaders
                        </Link>
                      </li>
                      <li className="w-[2px] bg-gradient-to-t from-[#BECDE300] from-20% via-[#BECDE3] via-60% to-[#BECDE300] to-20%"></li>
                      <li>
                        <Link
                          prefetch={false}
                          href={"/emeritusTeam"}
                          className={`${pathname == "/emeritusTeam" ? "md:text-[#0e7490] md:font-bold" : ""}
                    ${scrolled
                              ? "text-[#fff] hover:text-[#fff] max-xl:text-[#4B586E]"
                              : "text-[#4B586E] hover:text-[#1D262F]"
                            } block text-[12px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal  px-[6px] 3xl:px-[0.417vw] py-[8px] xl:py-[2px] 3xl:py-[0.117vw] rounded-lg ease-linear duration-300`}
                        >
                          Emeritus Team
                        </Link>
                      </li>
                      <li className="w-[2px] bg-gradient-to-t from-[#BECDE300] from-20% via-[#BECDE3] via-60% to-[#BECDE300] to-20%"></li>
                      <li>
                        <Link
                          prefetch={false}
                          href={"/expertnetwork"}
                          className={`${pathname == "/expertnetwork" ? "md:text-[#0e7490] md:font-bold" : ""}
                    ${scrolled
                              ? "text-[#fff] hover:text-[#fff] max-xl:text-[#4B586E]"
                              : "text-[#4B586E] hover:text-[#1D262F]"
                            } block text-[12px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal  px-[6px] 3xl:px-[0.417vw] py-[8px] xl:py-[2px] 3xl:py-[0.117vw] rounded-lg ease-linear duration-300`}
                        >
                          Expert Network
                        </Link>
                      </li>
                      <li className="w-[2px] bg-gradient-to-t from-[#BECDE300] from-20% via-[#BECDE3] via-60% to-[#BECDE300] to-20%"></li>

                    </ul>
                  </div>
                </div>
              </li>
              <li className="w-[2px] bg-gradient-to-t from-[#BECDE300] from-20% via-[#BECDE3] via-60% to-[#BECDE300] to-20%"></li>
              <li>
                <Link
                  prefetch={false}
                  href={"/announcements"}
                  className={`${pathname == "/announcements" ? "md:text-[#0e7490] md:font-bold" : ""}
                  ${scrolled
                      ? "text-[#fff] hover:text-[#fff] max-xl:text-[#4B586E]"
                      : "text-[#4B586E] hover:text-[#1D262F]"
                    } block text-[12px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal  px-[6px] 3xl:px-[0.417vw] py-[8px] xl:py-[2px] 3xl:py-[0.117vw] rounded-lg ease-linear duration-300`}
                >
                  Announcements
                </Link>
              </li>
              <li className="w-[2px] bg-gradient-to-t from-[#BECDE300] from-20% via-[#BECDE3] via-60% to-[#BECDE300] to-20%"></li>
              <li>
                <Link
                  prefetch={false}
                  href={"/myschedule"}
                  onClick={() => dispatch(setBookingUserId(''))}
                  className={`${pathname == "/myschedule" ? "md:text-[#0e7490] md:font-bold" : ""}
                  ${scrolled
                      ? "text-[#fff] hover:text-[#fff] max-xl:text-[#4B586E]"
                      : "text-[#4B586E] hover:text-[#1D262F]"
                    } block text-[12px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal  px-[6px] 3xl:px-[0.417vw] py-[8px] xl:py-[2px] 3xl:py-[0.117vw] rounded-lg ease-linear duration-300`}
                >
                  My Schedule
                </Link>
              </li>
              {/* <li className="w-[2px] bg-gradient-to-t from-[#BECDE300] from-20% via-[#BECDE3] via-60% to-[#BECDE300] to-20%"></li>
              <li>
                <Link
                  prefetch={false}
                  href={"https://erdi.hexalytics.ai"}
                  target="_blank"
                  className={`${scrolled
                    ? "text-[#fff] hover:text-[#fff] max-xl:text-[#4B586E]"
                    : "text-[#4B586E] hover:text-[#1D262F]"
                    } block text-[12px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal  px-[6px] 3xl:px-[0.417vw] py-[8px] xl:py-[2px] 3xl:py-[0.117vw] rounded-lg ease-linear duration-300`}
                >
                  Ed Leader Support Hub
                </Link>
              </li> */}
              {(registeredForCommunityHub || userData?.roleId == 15) ?
                <li className="w-[2px] bg-gradient-to-t from-[#BECDE300] from-20% via-[#BECDE3] via-60% to-[#BECDE300] to-20%"></li> :
                <></>
              }
              {(registeredForCommunityHub || userData?.roleId == 15) ? <li>
                <Link
                  href={"/communityhome"}
                  prefetch={false}
                  className={`${scrolled
                    ? "text-[#fff] hover:text-[#fff] max-xl:text-[#4B586E]"
                    : "text-[#4B586E] hover:text-[#1D262F]"
                    } block text-[12px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal  px-[6px] 3xl:px-[0.417vw] py-[8px] xl:py-[2px] 3xl:py-[0.117vw] rounded-lg ease-linear duration-300
                    ${pathname?.includes("/communityhome") ? "md:text-[#0e7490] md:font-bold" : ""}`}
                >
                  Community Connect
                </Link>
              </li> : <></>}
              <li className="w-[2px] bg-gradient-to-t from-[#BECDE300] from-20% via-[#BECDE3] via-60% to-[#BECDE300] to-20%"></li>
               <li>
                <Link
                  href={"/elibrary"}
                  prefetch={false}
                  className={`${scrolled
                    ? "text-[#fff] hover:text-[#fff] max-xl:text-[#4B586E]"
                    : "text-[#4B586E] hover:text-[#1D262F]"
                    } block text-[12px] 2xl:text-[14px] 3xl:text-[0.833vw] font-normal  px-[6px] 3xl:px-[0.417vw] py-[8px] xl:py-[2px] 3xl:py-[0.117vw] rounded-lg ease-linear duration-300
                    ${pathname?.includes("/elibrary") ? "md:text-[#0e7490] md:font-bold" : ""}`}
                >
                 Resource Hub
                </Link>
              </li> 
            </ul>
          </div>
          <div className="flex items-center ">
            <div className="block xl:hidden">
              <div onClick={toggleClass}>
                <div onClick={handleClick} className={`menubar ${isActive ? 'active' : ''}`}>
                  <span className={`${scrolled
                    ? "text-white"
                    : "text-[#374151]"
                    }`}><i className="pi pi-bars"></i></span>
                </div>

                <div onClick={handleClick} className={`closearrwo ${isActive ? 'active' : ''}`}>
                  <span className={`${scrolled
                    ? "text-white"
                    : "text-[#374151]"
                    }`}><i className="pi pi-times"></i></span>
                </div>
              </div>
            </div>
            {postNotFicCount > 0 && <div className="has-tooltip relative px-3 cursor-pointer">
              <div className="">
                <Link
                  href=""
                  onClick={(e) => {
                    if (postNotFicCount > 0) {
                      likenotification.current.toggle(e)
                    }
                  }
                  }
                  title=""
                >
                  <Image
                    src={"/assets/admin/svg/messages.svg"}
                    width={30}
                    height={30}
                    alt=""
                  />
                </Link>
              </div>

              <div className="xl:text-[0.625vw] text-[12px] bg-[#c94f54] h-[20px] w-[20px] xl:h-[1.042vw] xl:w-[1.042vw] rounded-full text-white flex justify-center items-center absolute top-[-12px] right-[6px] xl:top-[-0.625vw]">
                {postNotFicCount > 0 ? postNotFicCount : null}
              </div>
            </div>}

            <div className="has-tooltip relative px-3 cursor-pointer mb-1">
              <div
                onClick={(e) => {
                  if (notFicCount > 0) {
                    notificatio.current.toggle(e)
                  } else {
                    router.push("/allnotification")
                  }
                }
                }
              >
                {
                  scrolled
                    ?
                    <Image
                      // src={"/assets/admin/svg/notification_icon.svg"}
                      src="/images/svg/bell_icon_white.svg"
                      width={30}
                      height={30}
                      alt=""
                    />
                    :
                    <Image
                      // src={"/assets/admin/svg/notification_icon.svg"}
                      src="/images/svg/bell_icon.svg"
                      width={30}
                      height={30}
                      alt=""
                    />
                }
              </div>

              {(!notificsnData?.isRead && notFicCount > 0) &&
                <div className="xl:text-[0.625vw] text-[12px] bg-[#c94f54] h-[20px] w-[20px] xl:h-[1.042vw] xl:w-[1.042vw] rounded-full text-white flex justify-center items-center absolute top-0 right-[8px] 3xl:right-[0.3vw] 3xl:top-[-0.1vw]">
                  {notFicCount > 0 ? notFicCount : null}
                </div>}
            </div>
            <div onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ display: 'inline-block' }} className="relative group">
              <div className="flex items-center gap-3 3xl:gap-[0.625vw] cursor-pointer ml-4 " >
                <div className="3xl:space-y-[0.213vw] space-y-[6px]">
                  <h3
                    className={`${scrolled
                      ? "text-[#fff] hover:text-[#fff]"
                      : "text-[#374151] hover:text-[#1D262F]"
                      } 3xl:text-[0.729vw] text-[14px] font-semibold block`}
                  >
                    {loginData !== undefined ? ((loginData?.firstName ? loginData.firstName : "") + " " + (loginData?.lastName ? loginData.lastName : "")) : ""}
                  </h3>
                </div>
                <div className="rounded-full">
                  {loginData?.profileImagePath ?
                    <Image src={loginData?.profileImagePath} width={38} height={38} alt="Profile" className="rounded-full w-[38px] h-[38px] object-cover object-top" />
                    :
                    <Image
                      src={"/images/erdi.jpeg"}
                      width={38}
                      height={38}
                      alt="Profile"
                      className="rounded-full w-[38px] h-[38px] object-cover object-top"
                    />}
                </div>
              </div>
              <OverlayPanel ref={profile} onMouseLeave={() => profile.current.hide()} onScroll={() => profile.current.hide()} className="profile_popup ">
                <div className>

                  <div className="px-[25px] pt-[10px] pb-[15px]">
                    <div className="flex flex-col gap-4 3xl:gap-[0.833vw] text-[#4B586E] text-sm font-light leading-[14px] 3xl:text-[0.729vw] 3xl:leading-[0.729vw]">
                      <Link
                        prefetch
                        onClick={() => { setEditProfile(true), setEditId(loginData?.userId); getUserData(loginData?.userId) }}
                        href={""}
                        className="flex items-center gap-2 3xl:gap-[0.208vw]"
                      >

                        <span >Edit Profile</span>
                      </Link>
                      {userData?.role?.roleId == 15 ?
                        <Link
                          prefetch
                          href={"/admin/dashboard"}
                          className="flex items-center gap-2 3xl:gap-[0.208vw]"
                        >

                          <span>Admin</span>
                        </Link>
                        :
                        (userData?.role?.roleId == 5 && userData?.isSolutionProviderLead == 1) ?
                          <Link
                            prefetch
                            href={"/solutionprovider/dashboard"}
                            className="flex items-center gap-2 3xl:gap-[0.208vw]"
                          >

                            <span>Solution Provider</span>
                          </Link>
                          :
                          ""
                      }

                      <Link
                        prefetch
                        href={"/changePassword"}
                        className="flex items-center gap-2 3xl:gap-[0.208vw]"
                      >

                        <span>Change Password</span>
                      </Link>
                      {
                        isSecondaryLogin &&
                        <Link
                          prefetch={false}
                          href={"#"}
                          onClick={() => { doPrimaryLogin(primaryEmail) }}
                          className="flex items-center gap-2 3xl:gap-[0.208vw]"
                        >
                          <span>Back To Admin Panel</span>
                        </Link>
                      }
                    </div>
                  </div>


                  <div className="px-[25px] py-[10px] border-t">
                    <button
                      onClick={Logout}
                      className="flex items-center gap-2 3xl:gap-[0.208vw] text-[#F2980E]"
                    >

                      <span>Log Out</span>
                    </button>
                  </div>
                </div>

              </OverlayPanel>

            </div>

            <OverlayPanel
              ref={notificatio}
              className="notificatio_popup"
            >
              <div className="p-3">
                <div className="w-full min-w-[418px] origin-top-right bg-white  box-shadow">
                  <div className="flex items-center justify-between border-b pb-2">
                    <div className="text-[#293141] text-sm lg:text-md 2xl:text-lg font-bold">
                      Notifications {notifications.length > 0 ? `(${notifications.length})` : null}
                    </div>
                  </div>
                  <SimpleBar
                    className="pr-4"
                    style={{ maxHeight: "300px" }}
                  >
                    <div
                      className="my-1 list-space"
                      data-simplebar
                    >
                      {
                        notifications.slice(0, 5)?.map((item) => (
                          <Link className=""
                            href={`/allnotification`}
                          >
                            <div className="flex items-start py-2 border-b mb-2">
                              <div className="flex gap-3 w-full">
                                {userData?.userId != item?.userId && <div className="">
                                  <Image src={item?.usersProfileImagePath}
                                    width={40} height={40}
                                    alt="Message"
                                    className="rounded-full w-[40px] h-[40px] object-cover"
                                  />
                                </div>}
                                {userData?.userId != item?.bookingUserId && <div className="">
                                  <Image src={item?.expertUsersProfileImagePath}
                                    width={40} height={40}
                                    alt="Message"
                                    className="rounded-full w-[40px] h-[40px] object-cover"
                                  />
                                </div>}
                                <div>
                                  <div className="text-sm text-[#293141] font-bold">
                                    {userData?.userId != item?.bookingUserId ? item?.expertUserName : item?.userName}
                                  </div>
                                  <p className="text-sm  rounded-[5px] w-auto font-light leading-6">
                                    <span className={`text-[black] text-[11px]`}>
                                      {item?.status == 1 ? 'Accepted your request' : item?.status == 2 ? 'Rejected your request' : 'Request your availability'}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </SimpleBar>

                  {notFicCount > 5 ? <div className="flex justify-center py-3">
                    <Link
                      href="/allnotification"
                      onClick={(e) => { notificatio.current.toggle(e) }}
                      className="text-[#4B586E] xl:text-[0.833vw] text-base font-normal xl:leading-[0.833vw]"
                    >
                      View All
                    </Link>
                  </div> : null}

                </div>
              </div>
            </OverlayPanel>

            <OverlayPanel
              ref={likenotification}
              className="notificatio_popup"
            >
              <div className="p-3">
                <div className="w-full min-w-[418px] origin-top-right bg-white  box-shadow">
                  <div className="flex items-center justify-between border-b pb-2">
                    <div className="text-[#293141] text-sm lg:text-md 2xl:text-lg font-bold">
                      Community Connect Notifications {postNotifications.length > 0 ? `(${postNotifications.length})` : null}
                    </div>
                  </div>
                  <SimpleBar
                    className="pr-4"
                    style={{ maxHeight: "300px" }}
                  >
                    <div
                      className="my-3 list-space"
                      data-simplebar
                    >
                      {
                        postNotifications.slice(0, 5)?.map((item) => (
                          <Link className=""
                            href={`/communityhome/post/${item?.postId}`}
                          >
                            <div className="flex items-start p-2 border-b mb-2">
                              <div className="flex gap-3 w-full">
                                {/* <div className="">
                                  <Image src={item?.topic?.topicLogoPath}
                                    width={60} height={60}
                                    alt="Topic Logo"
                                    className="rounded-lg w-[60px] h-[60px] object-cover"
                                  />
                                </div> */}
                                <div>
                                  <div className="text-sm text-[#293141] font-bold mb-1.5">
                                    {item.post}
                                  </div>
                                  <p className="text-sm  rounded-[5px] w-auto font-light leading-6">
                                    {item?.comments?.length > 0 ?
                                      <span className={`text-[#293141] flex items-center gap-2`}>
                                        <i className="erdi-comment text-[15px] text-[#293141] font-light">
                                        </i>{" "}
                                        {item?.comments?.length > 0 ?
                                          item?.comments?.[0]?.users?.firstName + " " + item?.comments?.[0]?.users?.lastName + ` ${item?.commentedUsersCount ? ' and ' + item?.commentedUsersCount : ''} ${item?.commentedUsersCount == 0 ? 'has' : item?.commentedUsersCount == 1 ? 'other have ' : 'others have '} ` + "  commented on post"
                                          : <></>}
                                        <br />
                                      </span> : <></>}

                                      {item?.likes?.length > 0 ?<span className={`text-[#293141] flex items-center gap-2`}>
                                       <i
                                        className="pi pi-thumbs-up-fill mr-1 text-[15px]"
                                        
                                      ></i> {" "}
                                      {item?.likes?.length > 0 ?
                                        item?.likes?.[0]?.users?.firstName + " " + item?.likes?.[0]?.users?.lastName + `${item?.likedUsersCount ? ' and ' + item?.likedUsersCount : ''} ${item?.likedUsersCount == 0 ? '' : item?.likedUsersCount == 1 ? 'other' : 'others'} ` + "liked the post"
                                        : <></>}
                                    </span> :<></>}

                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </SimpleBar>

                  {postNotFicCount > 5 ? <div className="flex justify-center py-3">
                    <Link
                      href="/admin/allnotification"
                      onClick={(e) => { likenotification.current.toggle(e) }}
                      className="text-[#4B586E] xl:text-[0.833vw] text-base font-normal xl:leading-[0.833vw]"
                    >
                      View All
                    </Link>
                  </div> : null}
                </div>
              </div>
            </OverlayPanel>
          </div>
        </div>
      </div>
      <UserProfilePopup
        profileId={editId}
        visible={editProfile}
        onHide={(isUpdate) => {
          setEditProfile(false); setEditId('')
        }}
        userEditData={edituserData}
        Loader={editLoader}
        {...(userData?.roleId === 5 && { solutionId: userData?.solutionProviderId })}
      />
    </header>
  );
}
