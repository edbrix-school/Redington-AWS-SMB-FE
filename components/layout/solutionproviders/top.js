

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { OverlayPanel } from 'primereact/overlaypanel';
// import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { selectUserData, setLoginUsersData, setMedia, setSolutionProvideDetails, setUserData } from "@store/slices/userDetailsSlice";
import { clearAllCookies } from "@components/services/utils/common";
import { useMsal } from "@azure/msal-react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "@actions/master";
import UserProfilePopup from "@components/popup/UserProfilePopup";
import { loginApi } from "@actions/loginApi";
import Cookies from "js-cookie";
import { setBradingListData } from "@store/slices/brandingSlice";
import { getAllBrandAPI } from "@actions/branding";
import { setUserPersonalFolderId } from "@store/slices/elibMyFolderSlice";

export default function Top({ details, loginData, ...pageProps }) {
  const dispatch = useDispatch()
  const router = useRouter()
  const profile = useRef(null);
  const handleMouseEnter = (event) => {
    profile.current.show(event);
};

const handleMouseLeave = () => {
    profile.current.hide();
};
  const notificatio = useRef(null);
  const userData = useSelector(selectUserData);
  const { instance, accounts } = useMsal();
  const [edituserData, setEdituserData] = useState({});
  const [editLoader, setEditLoader] = useState(false);
  const [editProfile, setEditProfile] = useState(false)
  const [editId, setEditId] = useState(" ")
  const [loginType, setLoginType] = useState("")
  const [isSecondaryLogin, setSecondaryLogin] = useState(false);
  const [primaryEmail, setPrimaryEmail] = useState("");

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

  const doPrimaryLogin = async (email) => {
   
    const payload = {
      email: email,
      isNormalLogIn: 0,
      isUserLogIn:1
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
      console.log('responseBrand:', response);
      let data = response?.data?.brandings;
      if (data) {
        dispatch(setBradingListData(data))
      }
    } catch (error) {
      console.log('error:', error);

    }
  }

  return (
    <header className="sticky top-0 z-10">
      <div className="bg-white flex flex-wrap items-center justify-between gap-2 pt-[15px] xl:pt-[0.781vw] pb-[15px] xl:pb-[0.781vw] pr-[20px] xl:pr-[1.667vw] pl-[118px] xl:pl-[113px] border-b border-[#C9D3DB] ">
        <div className="">
          <div className="flex gap-[10px] xl:gap-[0.521vw] text-[14px] xl:text-[14px] 3xl:text-[0.781vw] font-light items-center mb-2 h-auto">
            <div>
              {details?.logoPath&&<Image
                // src={details?.logoPath ?? ""}
                src= {`${details?.logoPath}?${new Date().getTime()}}`}
                width={125}
                height={40}
                alt={details?.logo ?? ""}
              />}
            </div>
            <div>
              <div>
                <div className="flex items-center  gap-[10px] xl:gap-[0.521vw]">
                  <Link href={"/"} className="text-[#828A91]">
                    Home
                  </Link>
                  <div className="erdi-arrow-right text-[8px] 2xl:text-[0.417vw] text-[#828A91]"></div>

                  {/* <Link href={``} className="text-[#828A91]">{pageProps.parentPageName}</Link> */}

                  <Link href="" className="text-[#828A91]">
                    {pageProps.pageName}
                  </Link>
                </div>
                <div className="text-[#19212A] text-[16px] lg:text-xl xl:text-[1.25vw] font-semibold leading-[22px]">
                  {pageProps.pageTitle}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-[16px] xl:gap-[0.781vw]">
          {/* <Link href={''}  title="">
              <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center">
                <div><Image src={'/images/svg/messages_icon.svg'} width={25} height={25} alt="notification" /></div>
              </div>
            </Link>
           <Link href={''}  title="">
              <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center">
                <div><Image src={'/images/svg/element-plus.svg'} width={25} height={25} alt="notification" /></div>
              </div>
            </Link> */}
          {/* <div className="relative">
          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#35D294]"></div>

            <Link href={''} onClick={(e) => notificatio.current.toggle(e)} title="Notification">
              <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center">
                <div><Image src={'/images/svg/notification.svg'} width={25} height={25} alt="notification" /></div>
              </div>
            </Link>
          </div> */}
       
          <div onClick={(e) => profile.current.toggle(e)} className="flex items-center cursor-pointer" >
            <div className="flex items-center gap-3 3xl:gap-[0.625vw]">
              <div className="3xl:space-y-[0.213vw] space-y-[6px]">
                <div className="text-[#374151] text-[14px] xl:text-[14px] 3xl:text-[0.833vw] font-semibold block leading-none">
                {loginData !== undefined ?  ((loginData?.firstName ? loginData.firstName : "") + " " + (loginData?.lastName ? loginData.lastName : "")): ""}
                </div>
                {/* <div className="text-[#9CA1AB] text-[14px] xl:text-[0.729vw] block">
                  Joined in 10/06/2024
                </div> */}
              </div>
              <div>
                {loginData?.profileImagePath ?
                <Image
                  src={loginData?.profileImagePath ?? ""}
                  width={38}
                  height={38}
                  alt="Profile"
                  className="rounded-full w-[38px] h-[38px] object-cover object-top"
                /> :
                <Image
                src={"/images/erdi.jpeg"}
                width={38}
                height={38}
                alt="Profile"
                className="rounded-full w-[38px] h-[38px] object-cover object-top"
              />}
              </div>
            </div>
            <div>
              <i className="erdi-down text-[#6c757d] text-[8px] ml-1"></i>
            </div>
          </div>
        </div>
      </div>
      <OverlayPanel
        ref={profile}
        onMouseLeave={() => profile.current.hide()}
        onScroll={() => profile.current.hide()}
        className="profile_popup relative group z-[62]"
      >
        <div className>
          <div className="px-[25px] pt-[15px] pb-[15px]">
            <div className="flex flex-col gap-4 3xl:gap-[0.833vw] text-[#4B586E] text-sm font-light leading-[14px] 3xl:text-[0.729vw] 3xl:leading-[0.729vw]">
              <Link
                prefetch
                onClick={() => {
                  setEditProfile(true), setEditId(loginData?.userId);
                  getUserData(loginData?.userId);
                }}
                href={""}
                className="flex items-center gap-2 3xl:gap-[0.208vw]"
              >
                <span>Edit Profile</span>
              </Link>
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
          
                  onClick={() => { clearAllCookies(); dispatch(setSolutionProvideDetails({}));doPrimaryLogin(primaryEmail) }}
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
      <OverlayPanel ref={notificatio} className="notificatio_popup">
        <div className="p-5">
          <div className="w-full min-w-[418px] origin-top-right bg-white dark:bg-[#24262D] box-shadow">
            <div className="flex items-center justify-between">
              <div className="text-[#293141] dark:text-[#FFFFFF] text-sm lg:text-md 2xl:text-lg font-bold">
                Notifications
              </div>
            </div>
            <SimpleBar className="pr-4" style={{ maxHeight: "300px" }}>
              <div
                className="mt-5 divide-y divide-solid divide-[#D8D8D8] dark:divide-[#2A2C32] list-space"
                data-simplebar
              >
                <div className="flex items-start py-2">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">
                        New Order has been placed
                      </div>
                      <div className="text-[#293141] dark:text-[#8A93A6] text-sm">
                        Order #00000
                      </div>
                      <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">
                        11:15 am, 14th Feb.
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                  </div>
                </div>
                <div className="flex items-start py-2">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">
                        End Customer has requested for discount on
                      </div>
                      <div className="text-[#293141] dark:text-[#8A93A6] text-sm">
                        Product A
                      </div>
                      <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">
                        11:15 am, 14th Feb.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start py-2">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">
                        New Order has been placed
                      </div>
                      <div className="text-[#293141] dark:text-[#8A93A6] text-sm">
                        Order #00000
                      </div>
                      <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">
                        11:15 am, 14th Feb.
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                  </div>
                </div>
                <div className="flex items-start py-2">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">
                        New Order has been placed
                      </div>
                      <div className="text-[#293141] dark:text-[#8A93A6] text-sm">
                        Order #00000
                      </div>
                      <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">
                        11:15 am, 14th Feb.
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                  </div>
                </div>
                <div className="flex items-start py-2">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">
                        New Order has been placed
                      </div>
                      <div className="text-[#293141] dark:text-[#8A93A6] text-sm">
                        Order #00000
                      </div>
                      <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">
                        11:15 am, 14th Feb.
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                  </div>
                </div>
                <div className="flex items-start py-2">
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">
                        End Customer has requested for discount on
                      </div>
                      <div className="text-[#293141] dark:text-[#8A93A6] text-sm">
                        Product A
                      </div>
                      <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">
                        11:15 am, 14th Feb.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleBar>
          </div>
        </div>
      </OverlayPanel>

      {/* <OverlayPanel ref={profile} className="profile_popup">
        <div >
          <div className="flex flex-col gap-4 3xl:gap-[0.833vw] text-[#1F2A37] text-sm font-normal leading-[14px] 3xl:text-[0.729vw] 3xl:leading-[0.729vw] p-3 3xl:p-[0.625vw]">
            <Link href={'/admin/UserProfile'} className="flex items-center gap-2 3xl:gap-[0.208vw]"><i className="loco-user"></i><span>Profile</span></Link>
            <Link href={'/admin/ChangePassword'} className="flex items-center gap-2 3xl:gap-[0.208vw]"><i className="loco-key"></i><span>Change Password</span></Link>

            <Link href={''} className="flex items-center gap-2 3xl:gap-[0.208vw]"
            // onClick={handleLogout}
            >
              <i className="loco-logout"></i><span>Logout</span></Link>

          </div>
        </div>
      </OverlayPanel> */}
      <UserProfilePopup
        profileId={editId}
        visible={editProfile}
        onHide={(isUpdate) => {
          setEditProfile(false);
          setEditId("");
        }}
        userEditData={edituserData}
        Loader={editLoader}
        {...(userData?.roleId === 5 && {
          solutionId: userData?.solutionProviderId,
        })}
      />
    </header>
  );
}