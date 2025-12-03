"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { InputText } from "primereact/inputtext";
import Image from "next/image";
import { toast as ReactToast } from "react-toastify";
// import { createUser, getUserById, updateUser } from "@actions/master";

import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { InputNumber } from "primereact/inputnumber";
import { getFileBufferApi, getStateDropdownApi } from "apiServices/stateList";
import { capitalizeFirstLetter } from "services/utils/common";
import moment from "moment";
import { formatTime,validateAndUploadImage } from "services/utils/common";
import { Button } from "primereact/button";
import FilpLoader from "@components/flipLoader";
import { EMAIL_VALIDATOR_REGEX, URL_VALIDATOR_REGEX } from "@components/enum";
import { Checkbox } from "primereact/checkbox";
import ImageCropper from "./ImageCropper";
import Savesuccesfull from "./admin/savesuccesfull";
import Custom_Editor from "@components/Editor";
import { InputMask } from "primereact/inputmask";
import NoDataAvailable from "./nodataavailable";

const cities = [
  { name: "Twitter", code: "1" },
  { name: "LinkedIn", code: "2" },
];


export default function UserProfilePopup(props) {

  const { visible, onHide, profileId, roleId, solutionId, isEmeritus, isExpert, isAdmin, isEducationLeader } = props;
  const userdata = useSelector((state) => state.user.userDetails);

  const op = useRef(null);

  const [statesList, setstatesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showImagecropper, setShowImagecropper] = useState(false);
  const [checked, setChecked] = useState(true);
  const [message, setMessage] = useState("");
  const [showSuccesspopup, setShowSuccesspopup] = useState(false);
  const [gotError, setGotError] = useState(false)
  const [isUserEmeritus, setUserEmeritus] = useState(isEmeritus ? isEmeritus : false);
  const [isUserAdmin, setUserAdmin] = useState(isAdmin ? isAdmin : false);
  const [isUserEdLeader, setUserEdLeader] = useState(isEducationLeader ? isEducationLeader : false);
  const [isUserExpert, setUserExpert] = useState(isExpert ? isExpert : false);
  const [deleteAward, setDeleteAward] = useState({
    open: false,
    deleteId: null,
  });

  const [degreeList, setdegreeList] = useState([
    { name: "Ed.D.", code: "Ed.D." },
    { name: "Ph.D.", code: "Ph.D." },
    { name: "J.D", code: "J.D" },
    { name: "Ed.S.", code: "Ed.S." },
    { name: "D.Litt", code: "D.Litt" },
  ])

  const [deletePublication, setDeletePublication] = useState({
    open: false,
    deleteId: null,
  });


  const [userData, setuserData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    Title: "",
    location: "",
    publicEmail: "",
    personalEmail: "",
    bio: "",
    areaOfExpertise: "",
    profile: "",
    uploadProfile: "",
    TwitterLink: "",
    LinkdinLink: "",
    LinkOption: "1",
    award: [],
    publications: [],
    degree: [],
    degreefrom: "",
    districtName: "",
    districtCity: "",
    districtState: "",
    districtEnrollment: "",
    eventHistory: [],
    upcomingEvents: [],
    roleId: "",
    isTeamLead: false,
    organization: '',
    emailNotification: false,
    cutOutTime: "",
    cellPhoneNumber: ""
  });

  const organizationOptions = [
    {
      label: 'District',
      value: 'District'
    },
    {
      label: 'Company/Organization',
      value: 'Company/Organization'
    }
  ]

  const checkShowHide = () => {
    if (isUserEmeritus || isUserExpert) {
      if (userData?.organization == 'District') {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }
  useEffect(() => {
    if (visible) {
      if (profileId) {
        getUserData(profileId);
      }
      getStates();
    }
  }, [visible]);

  const getUserData = async (id) => {
    try {
      setLoading(true);
      const res = await getUserById(id);
      // if (res.code == 200) {
      //   let data = res?.data.user ?? null;
      //   if (data) {
      //     if (userdata?.userId == data?.userId) {
      //       const filterData = {
      //         userId: data?.userId,
      //         firstName: data?.firstName,
      //         lastName: data?.lastName,
      //         email: data?.email,
      //         profileImagePath: data?.profileImagePath,
      //       };
      //       dispatch(setLoginUsersData(filterData));
      //     }
      //     setChecked(data?.status == 1 ? true : false);
      //     if (data?.role?.roleId == 3) {
      //       setUserEmeritus(true)
      //     } else if (data?.role?.roleId == 4) {
      //       setUserExpert(true)
      //     }
      //     else {
      //       setUserEmeritus(false)
      //       setUserExpert(false)
      //     }

      //     if (data?.role?.roleId == 15) {
      //       setUserAdmin(true)
      //     } else {
      //       setUserAdmin(false)
      //     }

      //     if (data?.role?.roleId == 2) {
      //       setUserEdLeader(true)
      //     } else {
      //       setUserEdLeader(false)
      //     }

      //     setuserData({
      //       firstName: data?.firstName,
      //       lastName: data?.lastName,
      //       role: data?.role?.name || "",
      //       Title: data?.designation || "",
      //       location: data?.location || "",
      //       publicEmail: data?.publicEmail || "",
      //       personalEmail: data?.email || "",
      //       bio: data?.personalBio ? data.personalBio : "",
      //       areaOfExpertise: data?.areaOfExpertise ? data.areaOfExpertise : "",
      //       profile: data?.profileImagePath || "",
      //       profileName: data?.profileImage || "",
      //       award: data?.awards || "",
      //       publications: data?.publications || "",
      //       TwitterLink: data?.twitterLink || "",
      //       LinkdinLink: data?.linkdInLink || "",
      //       LinkOption: "1",
      //       degree: data?.degree ? data?.degree.split(",") : [],
      //       degreefrom: data?.degreefrom || "",
      //       districtName: data?.districtName || "",
      //       districtCity: data?.districtCity || "",
      //       districtState: data?.districtState || "",
      //       districtEnrollment:
      //         data?.districtEnrollment == "null"
      //           ? ""
      //           : data?.districtEnrollment,
      //       eventHistory: data?.eventHistory || "",
      //       upcomingEvents: data?.upcomingEvents || "",
      //       roleId: data?.roleId,
      //       isTeamLead: data?.isTeamLead == 1 ? true : false,
      //       solutionProviders: data?.solutionProviders,
      //       organization: data?.isDistrictShow == 1 ? 'District' : data?.isDistrictShow == 2 ? 'Company/Organization' : '',
      //       emailNotification: data?.emailNotification == 1 ? true : false,
      //       cutOutTime: data?.cutOutTime ? data.cutOutTime : "",
      //       cellPhoneNumber: data?.phoneNo ? data.phoneNo : ""
      //     });

      //     if (data?.secondaryRole?.length > 0) {
      //       let roles = data.secondaryRole?.map((item) => item.roleId);
      //       setSecondaryRoles(roles);
      //     }

      //     if (data?.secondarySolutionProvider?.length > 0) {
      //       let providers = data.secondarySolutionProvider?.map((item) => item.solutionProviderId);
      //       setSecondarySolProviders(providers);
      //     }
      //     else {
      //       setSecondarySolProviders([])
      //     }

      //     const temp = [...degreeList]
      //     if (data?.degree && data?.degree.split(",")?.length) {
      //       data?.degree.split(",").map((ele) => {
      //         if (temp.find((item) => item.name.toLowerCase() == ele.toLowerCase())) {

      //         } else {
      //           temp.push({ name: ele, code: ele })
      //           setdegreeList(temp)
      //         }
      //       })
      //     }
      //   }
      // }
    } catch (e) {
      console.log("Error", e);
    } finally {
      setLoading(false);
    }
  };

   const handleSubmit = async () => {
  };

  const handleCancel = async (isUpdate) => {
    setuserData({
      firstName: "",
      lastName: "",
      role: "",
      Title: "",
      location: "",
      publicEmail: "",
      personalEmail: "",
      bio: "",
      areaOfExpertise: "",
      profile: "",
      uploadProfile: "",
      TwitterLink: "",
      LinkdinLink: "",
      LinkOption: "1",
      award: [],
      publications: [],
      degree: [],
      degreefrom: "",
      districtName: "",
      districtCity: "",
      districtState: "",
      districtEnrollment: "",
      eventHistory: [],
      upcomingEvents: [],
      roleId: "",
      isTeamLead: false,
      organization: '',
      emailNotification: false
    });
    setdegreeList([
      { name: "Ed.D.", code: "Ed.D." },
      { name: "Ph.D.", code: "Ph.D." },
      { name: "J.D", code: "J.D" },
      { name: "Other", code: "Other" },
    ])
    setError(null);
    setSecondaryRoles([])
    setSecondarySolProviders([])
    onHide(isUpdate);
  };

  const fileInput = useRef(null);
  const onUpload = () => {
    if (fileInput) {
      fileInput.current.click();
    }
  };

  function base64ToFile(base64Data, fileName) {
    try {
      // Assume JPEG as the default MIME type for images
      const mimeString = base64Data.startsWith('/9j/') ? 'image/jpeg' : 'image/png';

      // Decode the base64 string to a binary string
      const byteString = atob(base64Data);

      // Convert the binary string to a Uint8Array
      const byteArray = new Uint8Array(byteString.length);
      for (let i = 0; i < byteString.length; i++) {
        byteArray[i] = byteString.charCodeAt(i);
      }

      // Create a Blob from the byte array
      const blob = new Blob([byteArray], { type: mimeString });

      // Return a File object
      return new File([blob], fileName, { type: mimeString });
    } catch (error) {
      console.error('Error converting base64 to Image File:', error);
      throw error;
    }
  }

  function simulateFileInput(base64Data, fileName, fileInput) {
    const file = base64ToFile(base64Data, fileName);
    setuserData((prev) => ({ ...prev, sendProfile: file }))
  }

  const handleEditimage = async () => {
    try {
      let payload = {
        "fileUrl": userData?.profile
      }
      let response = await getFileBufferApi(payload)

      const fileInput = document.querySelector('#fileInput');
      const fileName = "example.png";
      simulateFileInput(response?.data?.data?.fileBase64, fileName, fileInput)
    } catch (error) {
      console.log('error:', error);
    }
  }

  const onEdit = () => {
    setShowImagecropper(true)
    handleEditimage()
  }

  const getStates = async (searchedText = "") => {
    let payload = {
      // "pagination": {
      //   "pageNumber": 1,
      //   "pageSize": 10
      // },
      search: searchedText,
    };

    let result = await getStateDropdownApi(payload);

    if (result.code == 200) {
      let states = result?.data?.states;
      if (states.length >= 1) {
        setstatesList(result?.data?.states);
      }
    } else {
      setstatesList([]);
    }
  };

  const handleCropSave = (croppedImage) => {
    let imageDetails = validateAndUploadImage({
      target: { files: [croppedImage] },
    });
    setuserData({
      ...userData,
      profile: "",
      uploadProfile: imageDetails.previewUrl,
      sendProfile: imageDetails.file,
    });
    handleCloseCropper();
  };

  const handleCloseCropper = () => {
    setShowImagecropper(false);
  };

  return (
    <>
      <div>
        <Sidebar
          visible={visible} //gotError
          onHide={() => handleCancel(false)}
          position="right"
          className="customsidebar_new profile_popup w-[550px] 3xl:w-[52.458vw] xl:w-[999px]  rounded-[10px] rounded-br-none bg-white card-popup-style"
          blockScroll={true}
        >
          {loading ? (
            <FilpLoader />
          ) : (
            <>
              <div className=" bg-[#fff] p-[20px] xl:p-[20px] 3xl:p-[1.042vw] rounded-tl-[10px] mb-28 ">
                <div className="flex justify-between items-center gap-[14px] 3xl:gap-[0.833vw] pb-[16px] 3xl:pb-[0.833vw]">
                  <div className="text-[16px] 3xl:text-[0.938vw] text-[#374151] font-semibold">
                    Profile
                  </div>
                  {/* <div className="px-[12px] py-[8px] bg-[#FFF] border border-[rgba(229, 231, 235, 1)] rounded-[8px] 3xl:rounded-[0.417vw]">
                    <div onClick={() => { setOfficeusePopup(true) }} className="cursor-pointer text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[0.833vw] leading-[18px] 3xl:leading-[0.938vw] text-[#4B586E] font-[400]">
                      Office Use Only
                    </div>
                  </div> */}
                </div>
                <div
                  className={`grid grid-cols-1 xl:grid-cols-${profileId ? 3 : 2
                    } gap-[14px] 3xl:gap-[0.833vw]`}
                >
                  <div
                    className={`col-span-1 xl:col-span-2 ${profileId ? "border-r" : ""
                      } border-[#BECDE3] pr-[14px] 3xl:pr-[0.833vw]`}
                  >
                    <div className="space-y-[14px] 3xl:space-y-[0.833vw] mb-1">
                      {/* <div className="flex justify-between items-center gap-[14px] 3xl:gap-[0.833vw]">
                        <div className="text-[16px] 3xl:text-[0.938vw] text-[#374151] font-semibold">
                          Profile
                        </div>
                      </div> */}
                      <div className="grid grid-cols-1 xl:grid-cols-4 input-style gap-[20px] 3xl:gap-[1.25vw]">
                        <div className="col-span-1">
                          <label
                            htmlFor="username"
                            className="text-[#4B586E] font-medium text-[12px] 3xl:text-[0.729vw] mb-1.5"
                          >
                            Profile Photo{" "}
                          </label>
                          <Link href="">
                            <div class="bio-container">
                              {(
                                userData?.profile || userData?.uploadProfile
                                  ? true
                                  : false
                              ) ? (
                                <Image
                                  src={
                                    userData?.profile
                                      ? userData?.profile
                                      : userData?.uploadProfile
                                  }
                                  alt=""
                                  className="bio-image"
                                  height={258}
                                  width={145}
                                />
                              ) : profileId ? (
                                <Image
                                  src={
                                    "/images/erdi.jpeg"
                                  }
                                  alt=""
                                  className="bio-image"
                                  height={258}
                                  width={145}
                                />
                              ) : (
                                <div
                                  className="bio-image"
                                  style={{ height: "258px" }}
                                ></div>
                              )}
                              <div
                                class={`${profileId ||
                                  userData?.uploadProfile ||
                                  userData?.profile
                                  ? "bio-middle"
                                  : "bio-show-middle"
                                  } flex items-end justify-end gap-1 p-1`}
                              >
                                <div class="bio-text" onClick={onUpload}>
                                  Upload
                                </div>
                                {userData?.profile != "" && <div class="bio-text" onClick={onEdit}>
                                  Edit
                                </div>}
                              </div>
                            </div>
                          </Link>
                          <div className="file-upload">
                            <div className="image-upload-wrap">
                              <input
                                value={""}
                                className="file-upload-input"
                                type="file"
                                ref={fileInput}
                                onChange={(e) => {
                                  let imageDetails = validateAndUploadImage(e);
                                  if (imageDetails.error) {
                                    setError({
                                      ...error,
                                      profileImage: imageDetails?.error,
                                    });
                                  } else {
                                    setError({ ...error, profileImage: "" });
                                    setuserData({
                                      ...userData,
                                      profile: "",
                                      uploadProfile: imageDetails.previewUrl,
                                      sendProfile: imageDetails.file,
                                    });
                                    setShowImagecropper(true);
                                  }
                                }}
                                accept=".jpg, .jpeg, .png , .svg"
                                style={{ display: "none" }}
                              />
                            </div>
                          </div>
                          {error?.profileImage && (
                            <div className="inline-block mt-2 text-[0.733vw] font-medium text-[#ff3333]">
                              {error?.profileImage}
                            </div>
                          )}
                          <div className="text-[#374151] dark:text-[#fff] text-[13px] xl:text-[0.72vw] font-medium mt-1">
                            Recommended size:
                          </div>
                          <span className="text-[#374151] dark:text-[#fff] text-[13px] xl:text-[0.72vw] font-medium mt-1">
                            Width 280px X Height 335px
                          </span>
                        </div>

                        <div className="col-span-1 xl:col-span-3 space-y-[16px] 3xl:space-y-[1.10vw]">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[14px] 3xl:gap-[0.833vw]">
                            <div className="col-span-1">
                              <label
                                htmlFor="username"
                                className="text-[#4B586E] font-medium text-[12px] 3xl:text-[0.729vw] mb-1.5"
                              >
                                First Name{" "}
                                <span className="text-red-500 required-dot">
                                  *
                                </span>
                              </label>
                              <div>
                                <InputText
                                  id="username"
                                  aria-describedby="username-help"
                                  placeholder="Enter Name"
                                  className="w-full  2xl:h-[2.083vw] h-9 2xl:text-[0.729vw] text-xs placeholder:text-[#9CA1AB] font-normal 2xl:leading-[1.042vw] leading-5 "
                                  value={userData?.firstName}
                                  onChange={(e) => {
                                    setuserData({
                                      ...userData,
                                      firstName: e.target.value,
                                    });
                                    setError({ ...error, firstName: "" });
                                  }}
                                />
                              </div>
                              {error?.firstName && (
                                <div className="text-red-500 text-[12px]">
                                  {error?.firstName}
                                </div>
                              )}
                            </div>
                            <div className="col-span-1">
                              <label
                                htmlFor="username"
                                className="text-[#4B586E] font-medium text-[12px] 3xl:text-[0.729vw] mb-1.5"
                              >
                                Last Name{" "}
                                <span className="text-red-500 required-dot">
                                  *
                                </span>
                              </label>
                              <div>
                                <InputText
                                  id="username"
                                  aria-describedby="username-help"
                                  placeholder="Enter Name"
                                  className="w-full  2xl:h-[2.083vw] h-9 2xl:text-[0.729vw] text-xs placeholder:text-[#9CA1AB] font-normal 2xl:leading-[1.042vw] leading-5 "
                                  value={userData?.lastName}
                                  onChange={(e) => {
                                    setuserData({
                                      ...userData,
                                      lastName: e.target.value,
                                    });
                                    setError({ ...error, lastName: "" });
                                  }}
                                />
                              </div>
                              {error?.lastName && (
                                <div className="text-red-500 text-[12px]">
                                  {error?.lastName}
                                </div>
                              )}
                            </div>
                            {/* <div className="col-span-1">
                          <label
                            htmlFor="username"
                            className="text-[#4B586E] font-medium text-[12px] 3xl:text-[0.729vw] mb-1.5"
                          >
                            Role
                          </label>
                          <div>
                            <InputText
                              id="username"
                              aria-describedby="username-help"
                              placeholder="Enter Role"
                              className="placeholder:text-[#4B586E] placeholder:text-[12px] placeholder:3xl:text-[0.729vw]"
                              value={userData?.role}
                              disabled
                              onChange={(e) => {
                                setuserData({
                                  ...userData,
                                  role: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div> */}
                          </div>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[14px] 3xl:gap-[0.833vw]">
                            <div className="col-span-1">
                              <label
                                htmlFor="username"
                                className="text-[#4B586E] font-medium text-[12px] 3xl:text-[0.729vw] mb-1.5"
                              >
                                Title
                              </label>
                              <div>
                                <InputText
                                  id="username"
                                  aria-describedby="username-help"
                                  placeholder="Enter Information"
                                  className="w-full  2xl:h-[2.083vw] h-9 2xl:text-[0.729vw] text-xs placeholder:text-[#9CA1AB] font-normal 2xl:leading-[1.042vw] leading-5 "
                                  value={userData?.Title}
                                  onChange={(e) => {
                                    setuserData({
                                      ...userData,
                                      Title: e.target.value,
                                    });
                                  }}
                                />
                              </div>
                            </div>
                            {userdata?.role?.roleTitle == "Admin" ? (
                              <div className="col-span-1">
                                <div className="flex items-center xl:gap-[0.725vw] gap-2 mt-7">
                                  <Checkbox
                                    inputId="isHighlight"
                                    className="newCheckbox"
                                    onChange={(e) => setChecked(e.checked)}
                                    checked={checked}
                                  ></Checkbox>
                                  <label
                                    htmlFor="isHighlight"
                                    className="text-[#374151] cursor-pointer xl:text-[0.833vw] text-base font-medium"
                                  >
                                    Status
                                  </label>
                                </div>
                              </div>
                            ) : (
                              <></>
                            )}
                            {/* <div className="col-span-1">
                          <label
                            htmlFor="username"
                            className="text-[#4B586E] font-medium text-[12px] 3xl:text-[0.729vw] mb-1.5"
                          >
                            District Name
                          </label>
                          <div>
                            <InputText
                              id="username"
                              aria-describedby="username-help"
                              placeholder="Enter Location"
                              className="w-full  2xl:h-[2.083vw] h-9 2xl:text-[0.729vw] text-xs placeholder:text-[#9CA1AB] font-normal 2xl:leading-[1.042vw] leading-5 "
                              value={userData?.location}
                              onChange={(e) => {
                                setuserData({
                                  ...userData,
                                  location: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div> */}
                          </div>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[14px] 3xl:gap-[0.833vw]">
                            <div className="col-span-2">
                              <label
                                htmlFor="username"
                                className="text-[#4B586E] font-medium text-[12px] 3xl:text-[0.729vw] mb-1.5"
                              >
                                Preferred Email for Communication with the ERDI Community{" "}
                                {(
                                  <span className="text-red-500 required-dot">
                                    *
                                  </span>
                                )}
                              </label>
                              <div>
                                <InputText
                                  id="username"
                                  aria-describedby="username-help"
                                  placeholder="Enter public email"
                                  className="w-full  2xl:h-[2.083vw] h-9 2xl:text-[0.729vw] text-xs placeholder:text-[#9CA1AB] font-normal 2xl:leading-[1.042vw] leading-5 "
                                  value={userData?.publicEmail}
                                  onChange={(e) => {
                                    setuserData({
                                      ...userData,
                                      publicEmail: e.target.value,
                                    });

                                    if (
                                      EMAIL_VALIDATOR_REGEX.test(e.target.value)
                                    ) {
                                      setError({ ...error, publicEmail: "" });
                                    }
                                  }}
                                />
                              </div>
                              {error?.publicEmail && (
                                <div className="text-red-500 text-[12px]">
                                  {error?.publicEmail}
                                </div>
                              )}
                            </div>

                            <div className="col-span-2 border border-[#96a2b3] rounded-[6px] px-[10px] py-[10px]  bg-gray-100">
                              <div className="text-center text-[14px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[0.729vw] text-[#000] font-[700]">Office Use Only.  <span className="font-[400] text-[#48515f]">These fields are not visible on your profile</span></div>
                              <div className="grid grid-cols-2 gap-[14px] 3xl:gap-[0.833vw]">
                                <div className="col-span-1">
                                  <label
                                    htmlFor="username"
                                    className="text-[#4B586E] font-medium text-[12px] 3xl:text-[0.729vw] mb-1.5"
                                  >
                                    Portal Login Email{" "}
                                    {(
                                      <span className="text-red-500 required-dot">
                                        *
                                      </span>
                                    )}
                                  </label>
                                  <div>
                                    <InputText
                                      id="username"
                                      disabled={profileId ? true : false}
                                      aria-describedby="username-help"
                                      placeholder="Enter personal email"
                                      className="w-full  2xl:h-[2.083vw] h-9 2xl:text-[0.729vw] text-xs placeholder:text-[#9CA1AB] font-normal 2xl:leading-[1.042vw] leading-5 "
                                      value={userData?.personalEmail}
                                      onChange={(e) => {
                                        setuserData({
                                          ...userData,
                                          personalEmail: e.target.value,
                                        });
                                        if (
                                          EMAIL_VALIDATOR_REGEX.test(e.target.value)
                                        ) {
                                          setError({ ...error, personalEmail: "" });
                                        }
                                      }}
                                    />
                                  </div>
                                  {error?.personalEmail && (
                                    <div className="text-red-500 text-[12px]">
                                      {error?.personalEmail}
                                    </div>
                                  )}
                                </div>
                                {(isUserAdmin || isUserEdLeader) &&
                                  <div className="col-span-1">
                                    <label
                                      htmlFor="username"
                                      className="text-[#4B586E] font-medium text-[12px] 3xl:text-[0.729vw] mb-1.5"
                                    >
                                      Cell Phone Number
                                    </label>
                                    <div>
                                      <InputMask
                                        id="cellPhone"
                                        mask="(999) 999-9999"
                                        aria-describedby="cellPhone-help"
                                        placeholder="Enter cell phone number"
                                        className="w-full  2xl:h-[2.083vw] h-9 2xl:text-[0.729vw] text-xs placeholder:text-[#9CA1AB] font-normal 2xl:leading-[1.042vw] leading-5 "
                                        value={userData?.cellPhoneNumber}
                                        onChange={(e) => {
                                          setuserData({
                                            ...userData,
                                            cellPhoneNumber: e.target.value,
                                          });
                                        }}
                                      />
                                    </div>
                                    {error?.cellPhoneNumber && (
                                      <div className="text-red-500 text-[12px]">
                                        {error?.cellPhoneNumber}
                                      </div>
                                    )}
                                  </div>}
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[14px] 3xl:gap-[0.833vw]">
                            <div className="col-span-1">
                              <label
                                htmlFor="username"
                                className="text-[#4B586E] font-medium text-[12px] 3xl:text-[0.729vw] mb-1.5"
                              >
                                Link
                              </label>
                              <div className="flex items-center">
                                <Dropdown
                                  value={userData?.LinkOption}
                                  onChange={(e) =>
                                    setuserData({
                                      ...userData,
                                      LinkOption: e.target.value,
                                    })
                                  }
                                  options={cities}
                                  optionLabel="name"
                                  optionValue="code"
                                  panelClassName="custpan"
                                  placeholder="select"
                                  className="w-full h-9 2xl:h-[2.083vw] dropdown-input"
                                // className="w-full max-w-[8.333vw] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl dropdown-input"
                                />
                                {/* <div className="relative ml-2 w-full 2xl:h-[2.083vw] h-9">
                                  <InputText
                                    value={
                                      userData?.LinkOption == 1
                                        ? userData?.TwitterLink
                                        : userData?.LinkdinLink
                                    }
                                    onChange={(e) => {
                                      if (userData?.LinkOption == 1) {
                                        setuserData({
                                          ...userData,
                                          TwitterLink: e.target.value,
                                        });

                                        if (
                                          URL_VALIDATOR_REGEX.test(
                                            e.target.value
                                          )
                                        ) {
                                          setError({
                                            ...error,
                                            twitterLink: "",
                                          });
                                        }
                                      } else {
                                        setuserData({
                                          ...userData,
                                          LinkdinLink: e.target.value,
                                        });
                                        if (
                                          URL_VALIDATOR_REGEX.test(
                                            e.target.value
                                          )
                                        ) {
                                          setError({
                                            ...error,
                                            linkdInLink: "",
                                          });
                                        }
                                      }
                                    }}
                                    className="w-full h-full 2xl:text-[0.729vw] text-xs placeholder:text-[#9CA1AB] font-normal 2xl:leading-[1.042vw] leading-5"
                                    placeholder="https://"
                                  />
                                  {(error?.linkdInLink ||
                                    error?.twitterLink) && (
                                    <div className="text-red-500 text-[12px]">
                                      {userData?.LinkOption == 1
                                        ? error?.twitterLink
                                        : error?.linkdInLink}
                                    </div>
                                  )}
                                </div> */}
                              </div>
                            </div>
                            <div className="col-span-1">
                              <div className="relative w-full 2xl:h-[2.083vw] h-9 mt-6">
                                <InputText
                                  value={
                                    userData?.LinkOption == 1
                                      ? userData?.TwitterLink
                                      : userData?.LinkdinLink
                                  }
                                  onChange={(e) => {
                                    if (userData?.LinkOption == 1) {
                                      setuserData({
                                        ...userData,
                                        TwitterLink: e.target.value,
                                      });

                                      if (
                                        URL_VALIDATOR_REGEX.test(e.target.value)
                                      ) {
                                        setError({
                                          ...error,
                                          twitterLink: "",
                                        });
                                      }
                                    } else {
                                      setuserData({
                                        ...userData,
                                        LinkdinLink: e.target.value,
                                      });
                                      if (
                                        URL_VALIDATOR_REGEX.test(e.target.value)
                                      ) {
                                        setError({
                                          ...error,
                                          linkdInLink: "",
                                        });
                                      }
                                    }
                                  }}
                                  className="w-full h-full 2xl:text-[0.729vw] text-xs placeholder:text-[#9CA1AB] font-normal 2xl:leading-[1.042vw] leading-5"
                                  placeholder="https://"
                                />
                                {(error?.linkdInLink || error?.twitterLink) && (
                                  <div className="text-red-500 text-[12px]">
                                    {userData?.LinkOption == 1
                                      ? error?.twitterLink
                                      : error?.linkdInLink}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${!solutionId ? "" : "flex gap-4"}`}>
                      <div className="mt-[10px] flex items-center mb-[14px] xl:mb-[14px] 3xl:mb-[0.729vw]">
                        <label
                          htmlFor="Email Notification"
                          className="mr-2 text-[#374151] text-[16px] 3xl:text-[0.833vw] font-medium"
                        >
                          Email Notification
                        </label>
                        <Checkbox
                          inputId="Email Notification"
                          name="Email Notification"
                          value="Cheese"
                          onChange={(e) => {
                            setuserData((prev) => ({
                              ...prev,
                              emailNotification: e.checked,
                            }));
                          }}
                          checked={userData?.emailNotification}
                        />
                      </div>
                      {!solutionId ? (
                        <>
                          {(isUserEmeritus || isUserExpert) && (
                            <div className="col-span-2 mb-1.5">
                              <label
                                htmlFor="username"
                                className="text-[#4B586E] font-medium text-[12px] 3xl:text-[0.729vw] mb-1.5"
                              >
                                Organization
                              </label>
                              <div className="tdsearchui">
                                <Dropdown
                                  className="w-full  2xl:h-[2.083vw] h-9 2xl:text-[0.729vw] text-xs  font-normal 2xl:leading-[0.3vw] leading-5 "
                                  value={userData?.organization}
                                  panelClassName="districtselect"
                                  onChange={(e) =>
                                    setuserData({
                                      ...userData,
                                      organization: e.target.value,
                                      districtName: ''
                                    })
                                  }
                                  filter
                                  showClear
                                  options={organizationOptions}
                                  optionLabel="label"
                                  optionValue="value"
                                  placeholder="--Select--"
                                />
                              </div>
                            </div>
                          )}

                          {checkShowHide() && (
                            <>

                              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-3 mb-3">
                                <div className="col-span-2">
                                  <label
                                    htmlFor="username"
                                    className="text-[#4B586E] font-medium text-[12px] 3xl:text-[0.729vw] mb-1.5"
                                  >
                                    District Name
                                  </label>
                                  <div>
                                    <InputText
                                      id="username"
                                      aria-describedby="username-help"
                                      placeholder="Enter District Name"
                                      className="w-full  2xl:h-[2.083vw] h-9 2xl:text-[0.729vw] text-xs placeholder:text-[#9CA1AB] font-normal 2xl:leading-[1.042vw] leading-5 "
                                      value={userData?.districtName}
                                      onChange={(e) => {
                                        setuserData({
                                          ...userData,
                                          districtName: capitalizeFirstLetter(
                                            e.target.value
                                          ),
                                        });
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="col-span-2">
                                  <label
                                    htmlFor="username"
                                    className="text-[#4B586E] font-medium text-[12px] 3xl:text-[0.729vw] mb-1.5"
                                  >
                                    District City
                                  </label>
                                  <div>
                                    <InputText
                                      id="username"
                                      aria-describedby="username-help"
                                      placeholder="Enter District city"
                                      className="w-full  2xl:h-[2.083vw] h-9 2xl:text-[0.729vw] text-xs placeholder:text-[#9CA1AB] font-normal 2xl:leading-[1.042vw] leading-5 "
                                      value={userData?.districtCity}
                                      onChange={(e) => {
                                        setuserData({
                                          ...userData,
                                          districtCity: capitalizeFirstLetter(
                                            e.target.value
                                          ),
                                        });
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="col-span-2">
                                  <label
                                    htmlFor="username"
                                    className="text-[#4B586E] font-medium text-[12px] 3xl:text-[0.729vw] mb-1.5"
                                  >
                                    District State
                                  </label>
                                  <div className="tdsearchui">
                                    <Dropdown
                                      className="w-full  2xl:h-[2.083vw] h-9 2xl:text-[0.729vw] text-xs  font-normal 2xl:leading-[0.3vw] leading-5 "
                                      value={userData?.districtState}
                                      panelClassName="districtselect"
                                      onChange={(e) =>
                                        setuserData({
                                          ...userData,
                                          districtState: e.target.value,
                                        })
                                      }
                                      filter
                                      onKeyUp={(e) => {
                                        getStates(e.target.value);
                                      }}
                                      showClear
                                      options={statesList}
                                      optionLabel="name"
                                      optionValue="name"
                                      placeholder="--Select--"
                                    />
                                  </div>
                                </div>
                                <div className="col-span-2">
                                  <label
                                    htmlFor="username"
                                    className="text-[#4B586E] font-medium text-[12px] 3xl:text-[0.729vw] mb-1.5"
                                  >
                                    District Enrollment
                                  </label>
                                  <div className="customDropdown customInput custMultiselect">
                                    <InputNumber
                                      id="districtEnrollment"
                                      aria-describedby="districtEnrollment-help"
                                      placeholder="Enter District Enrollment"
                                      className="w-full 2xl:h-[2.083vw] h-9 2xl:text-[0.729vw] text-xs placeholder:text-[#9CA1AB] font-normal 2xl:leading-[1.042vw] leading-5 placeholder-shrink"
                                      value={userData?.districtEnrollment}
                                      onChange={(e) => {
                                        setuserData({
                                          ...userData,
                                          districtEnrollment: e.value,
                                        });
                                      }}
                                      useGrouping={true} // Enables grouping with commas
                                      mode="decimal" // Decimal mode for proper formatting
                                      minFractionDigits={0} // Ensure whole numbers
                                      maxFractionDigits={0} // No decimal points
                                      locale="en-US" // Locale for comma-based formatting
                                    />
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          {(isUserEmeritus || isUserExpert) &&
                            userData?.organization == "Company/Organization" &&
                            <div className="col-span-2 mb-1.5">
                              <label
                                htmlFor="username"
                                className="text-[#4B586E] font-medium text-[12px] 3xl:text-[0.729vw] mb-1.5"
                              >
                                Company/Organization Name
                              </label>
                              <div>
                                <InputText
                                  id="username"
                                  aria-describedby="username-help"
                                  placeholder="Enter Compnay/Organization Name"
                                  className="w-full  2xl:h-[2.083vw] h-9 2xl:text-[0.729vw] text-xs placeholder:text-[#9CA1AB] font-normal 2xl:leading-[1.042vw] leading-5 "
                                  value={userData?.districtName}
                                  onChange={(e) => {
                                    setuserData({
                                      ...userData,
                                      districtName: capitalizeFirstLetter(
                                        e.target.value
                                      ),
                                    });
                                  }}
                                />
                              </div>
                            </div>
                          }
                        </>
                      ) : (
                        <div className="mt-[10px] flex items-center mb-[14px] xl:mb-[14px] 3xl:mb-[0.729vw]">
                          <label
                            htmlFor="Team Lead"
                            className="mr-2 text-[#374151] text-[16px] 3xl:text-[0.833vw] font-medium"
                          >
                            Team Lead
                          </label>
                          <Checkbox
                            inputId="Team Lead"
                            name="Team Lead"
                            value="Cheese"
                            onChange={(e) => {
                              setuserData((prev) => ({
                                ...prev,
                                isTeamLead: e.checked,
                              }));
                            }}
                            checked={userData?.isTeamLead}
                          />
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-4 xl:grid-cols-4  gap-[14px] 3xl:gap-[0.833vw] my-3">
                      <div className="col-span-2 customDropdown customInput custMultiselect">
                        <label
                          htmlFor="username"
                          className="text-[#4B586E] font-medium text-[12px] 3xl:text-[0.729vw] mb-1.5"
                        >
                          Degree
                        </label>
                        <div className="">
                          <MultiSelect
                            className="w-full  2xl:h-[2.083vw] h-9 2xl:text-[0.729vw] text-xs  font-normal 2xl:leading-[0.3vw] leading-5 "
                            showClear
                            value={userData?.degree.filter(
                              (ele) => ele?.toLowerCase() !== "null"
                            )}
                            onChange={(e) => {
                              setuserData({
                                ...userData,
                                degree: e.target.value,
                              });
                            }}
                            options={degreeList}
                            panelClassName="custCheckBoxes"
                            optionLabel="name"
                            optionValue="code"
                            placeholder="--Select--"
                          />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <label
                          htmlFor="username"
                          className="text-[#4B586E] font-medium text-[12px] 3xl:text-[0.729vw] mb-1.5"
                        >
                          Degree From
                        </label>
                        <div>
                          <InputText
                            id="username"
                            aria-describedby="username-help"
                            placeholder="Enter Degree From"
                            className="w-full  2xl:h-[2.083vw] h-9 2xl:text-[0.729vw] text-xs placeholder:text-[#9CA1AB] font-normal 2xl:leading-[1.042vw] leading-5 "
                            value={userData?.degreefrom}
                            onChange={(e) => {
                              setuserData({
                                ...userData,
                                degreefrom: capitalizeFirstLetter(
                                  e.target.value
                                ),
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-style">
                      <div className="text-[#4B586E] text-[12px] 3xl:text-[0.729vw] font-medium">
                        Personal Bio
                      </div>
                      {/* <InputTextarea
                        value={userData?.bio}
                        onChange={(e) => {
                          // if (e.target.value.length > 300) {
                          //   setError({...error, bio: 'Personal bio should less than 300 characters'})
                          // } else {
                          //   setError({...error, bio: ''})
                          // }
                          setuserData({ ...userData, bio: e.target.value });
                        }}
                        rows={5}
                        className="w-full placeholder:text-[#9CA1AB] placeholder:text-[14px] placeholder:2xl:text-[0.833vw] placeholder:leading-6"
                        placeholder=""
                      /> */}
                      <Custom_Editor
                        description={userData?.bio || ""}
                        setDescription={(value) => {
                          setuserData({
                            ...userData,
                            bio: value,
                          });
                        }}
                        onTextChange={(e) => {
                          setuserData({
                            ...userData,
                            bio: e.htmlValue,
                          });
                        }}
                        placeholder=""
                        className=""
                      />
                      {error?.bio && (
                        <div className="text-red-500 text-[12px]">
                          {error?.bio}
                        </div>
                      )}
                    </div>
                    <hr className="my-[16px] border-[#BECDE3]" />
                    <div className="input-style">
                      <div className="text-[#4B586E] text-[12px] 3xl:text-[0.729vw] font-medium">
                        Areas of Expertise
                      </div>
                      <Custom_Editor
                        description={userData?.areaOfExpertise || ""}
                        setDescription={(value) => {
                          setuserData({
                            ...userData,
                            areaOfExpertise: value,
                          });
                        }}
                        onTextChange={(e) => {
                          setuserData({
                            ...userData,
                            areaOfExpertise: e.htmlValue,
                          });
                        }}
                        placeholder=""
                        className=""
                      />
                      {/* {error?.areaOfExpertise && (
                        <div className="text-red-500 text-[12px]">
                          {error?.areaOfExpertise}
                        </div>
                      )} */}
                    </div>
                    <hr className="my-[16px] border-[#BECDE3]" />
                    <div className="text-[#374151] text-[16px] 3xl:text-[0.938vw] font-semibold mb-2">
                      Awards & Recognitions
                    </div>
                    <div className="space-y-[12px] 3xl:space-y-[0.729vw]">
                      {userData?.award?.length ? (
                        userData?.award.map((ele) => {
                          return (
                            <>
                              <div className="flex justify-between items-center gap-[14px] 3xl:gap-[0.729vw]">
                                <ul class="list-disc text-[#4B586E] text-[12px] 3xl:text-[0.729vw] ">
                                  <p>
                                    <strong>
                                      {ele?.title !== "undefined" ||
                                        ele?.title == null
                                        ? `"${ele.title}"`
                                        : "-"}
                                    </strong>
                                    <br />
                                    {ele?.organization == null ||
                                      ele?.organization == ""
                                      ? ""
                                      : ele?.organization}
                                    <br />
                                    <div className="mb-2">
                                      {ele?.date == null || ele?.date == ""
                                        ? ""
                                        : ele?.date}
                                      {/* {moment(ele?.date).format(
                                            "MM/DD/YYYY"
                                          )} */}
                                    </div>
                                  </p>
                                </ul>
                                <div className="flex gap-[14px] 3xl:gap-[0.729vw]">
                                  <i
                                    className="erdi-edit text-[#4B586E]"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      setIsOpenAward({
                                        open: true,
                                        isEdit: true,
                                        editId: ele?.id,
                                      });
                                      setawardTitle(ele);
                                    }}
                                  ></i>
                                  <i
                                    className="erdi-trash text-[#F98080]"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      setDeleteAward({
                                        open: true,
                                        deleteId: ele?.id,
                                      });
                                    }}
                                  ></i>
                                </div>
                              </div>
                            </>
                          );
                        })
                      ) : (
                        <>
                          <NoDataAvailable
                            className={
                              "w-full rounded-[4px] xl:rounded-[0.417vw] p-[8px] xl:p-[0.730vw] text-center"
                            }
                            mainTextFormat={
                              "text-[#374151] text-[16px] xl:text-[1vw] font-bold pt-2 opacity-70"
                            }
                            subTextFormat={
                              "text-[#374151] text-[12px] xl:text-[0.729vw] font-light"
                            }
                            imageSize={
                              "w-[40px] 3xl:w-[3.125vw] h-[60px] 3xl:h-[4.167vw]"
                            }
                            message={"No Data Available."}
                            subMessage={
                              "There is no data to show you right now."
                            }
                          />
                        </>
                      )}
                    </div>
                    <div className="flex justify-end py-[8px]">
                      <Link
                        prefetch={false}
                        scroll={false}
                        href=""
                        onClick={() =>
                          setIsOpenAward({
                            open: true,
                            isEdit: false,
                            editId: "",
                          })
                        }
                        className="text-[#077397] text-[12px] 3xl:text-[0.729vw] font-semibold"
                      >
                        + Add award
                      </Link>
                    </div>
                    <hr className="my-[16px] border-[#BECDE3]" />
                    <div className="text-[#374151] text-[16px] 3xl:text-[0.938vw] font-semibold mb-2">
                      Publications
                    </div>
                    <div className="space-y-[12px] 3xl:space-y-[0.729vw]">
                      {userData?.publications?.length ? (
                        userData?.publications.map((ele) => {
                          return (
                            <>
                              <div className="flex justify-between items-center gap-[14px] 3xl:gap-[0.729vw]">
                                <div className="leading-[14px] 3xl:leading-[0.833vw]">
                                  <div
                                    onClick={() => {
                                      if (ele.link) {
                                        window.open(
                                          ele.link,
                                          "_blank",
                                          "noopener,noreferrer"
                                        );
                                      }
                                    }}
                                    className="text-[#4B586E] text-[12px] 3xl:text-[0.729vw] italic font-semibold mb-1.5 cursor-pointer"
                                  >
                                    {ele?.title == "null" ||
                                      ele?.title == "" ||
                                      ele?.title == null
                                      ? ""
                                      : ele?.title}
                                  </div>
                                  {/* <div className="text-[#9CA1AB] text-[12px] 3xl:text-[0.729vw] font-normal">
                        International Journal of Educational Technology, 2021
                      </div> */}
                                  <div className="text-[#9CA1AB] text-[12px] 3xl:text-[0.729vw] font-normal">
                                    {ele?.description == "null" ||
                                      ele?.description == "" ||
                                      ele?.description == null
                                      ? ""
                                      : ele?.description}
                                  </div>
                                </div>
                                <div className="flex gap-[14px] 3xl:gap-[0.729vw]">
                                  <i
                                    className="erdi-edit text-[#4B586E]"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      setIsOpenPublication({
                                        open: true,
                                        isEdit: true,
                                        editId: ele?.id,
                                      });
                                      setPublicationsData(ele);
                                    }}
                                  ></i>
                                  <i
                                    className="erdi-trash text-[#F98080]"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      setDeletePublication({
                                        open: true,
                                        deleteId: ele?.id,
                                      });
                                    }}
                                  ></i>
                                </div>
                              </div>
                            </>
                          );
                        })
                      ) : (
                        <>
                          <NoDataAvailable
                            className={
                              "w-full rounded-[4px] xl:rounded-[0.417vw] p-[8px] xl:p-[0.730vw] text-center"
                            }
                            mainTextFormat={
                              "text-[#374151] text-[16px] xl:text-[1vw] font-bold pt-2 opacity-70"
                            }
                            subTextFormat={
                              "text-[#374151] text-[12px] xl:text-[0.729vw] font-light"
                            }
                            imageSize={
                              "w-[40px] 3xl:w-[3.125vw] h-[60px] 3xl:h-[4.167vw]"
                            }
                            message={"No Data Available."}
                            subMessage={
                              "There is no data to show you right now."
                            }
                          />
                        </>
                      )}
                    </div>
                    <div className="flex justify-end py-[8px]">
                      <Link
                        prefetch={false}
                        scroll={false}
                        href=""
                        onClick={() => {
                          setIsOpenPublication({
                            open: true,
                            isEdit: false,
                            editId: "",
                          });
                        }}
                        className="text-[#077397] text-[12px] 3xl:text-[0.729vw] font-semibold"
                      >
                        + Add publication
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 left-0">
                <div className=" bg-[#fff] p-[16px] xl:p-[16px] 3xl:p-[0.833vw] flex items-center justify-between gap-4 rounded-bl-[10px]">
                  <Link
                    prefetch={false}
                    scroll={false}
                    href={""}
                    onClick={() => handleCancel(false)}
                    className="text-[#077397] border border-[#077397] rounded-[7px] text-[15px] xl:text-[15px] 3xl:text-[0.833vw] font-normal  py-[8px] xl:py-[7px] 3xl:py-[0.417vw] px-[18px] xl:px-[14px] 3xl:px-[0.833vw]"
                  >
                    Cancel
                  </Link>
                  <Button
                    disabled={loading}
                    onClick={loading ? null : handleSubmit}
                    className="bg-[#077397] border border-[#077397] text-[#fff] text-[15px] xl:text-[15px] 3xl:text-[0.833vw] font-normal rounded-[7px] 3xl:rounded-[0.469vw] py-[8px] xl:py-[7px] 3xl:py-[0.417vw] px-[18px] xl:px-[14px] 3xl:px-[0.833vw]"
                  >
                    {loading ? "Please wait..." : profileId ? "Update" : "Save"}
                  </Button>
                </div>
              </div>
            </>
          )}
        </Sidebar>

        {userData.sendProfile && (
          <ImageCropper
            headerTitle={"crop Profile"}
            recommendedSize="Recommended size: Width 280px X Height 335px"
            height={335}
            width={280}
            visible={showImagecropper}
            onHide={handleCloseCropper}
            imageFile={userData.sendProfile}
            onSave={handleCropSave}
          />
        )}
      </div>
      <Savesuccesfull
        visible={showSuccesspopup}
        onHides={() => {
          setShowSuccesspopup(false);
          // onHide();
          setMessage("");
          if (!gotError) {
            handleCancel(true);
          }
          setGotError(false);
        }}
        submessage={
          profileId || solutionId || roleId
            ? message || "Updated Successfully"
            : message || "Created Successfully"
        }
        gotError={gotError}
      />
    </>
  );
}