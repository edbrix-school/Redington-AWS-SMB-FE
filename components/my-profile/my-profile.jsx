"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import EditProfile from "./popup/edit-profile";
import TermsAndConditions from "./popup/terms-and-conditions";

export const MyProfile = () => {
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [showTermsAndConditions, setShowTermsAndConditions] = useState(false);
    const [showUploadInterface, setShowUploadInterface] = useState(false);
    const [profileImage, setProfileImage] = useState("/images/profile-placeholder.png");
    const fileUploadRef = useRef(null);

    const handleRemove = () => {
        setProfileImage("/images/profile-placeholder.png");
        setShowUploadInterface(true);
    };

    const handleChangeClick = () => {
        setShowUploadInterface(true);
    };

    return (
        <div className="">
            <div className="bg-white rounded8 shadow-sm border border-InterfaceStrokesoft1">

                {/* Header */}
                <div className="p15 mr-4 ml-4 flex justify-between items-center border-b border-InterfaceStrokesoft1">
                    <h2 className="font16 text-InterfaceTexttitle1 font-semibold mr-2">
                        Personal Information
                    </h2>
                    <button
                        onClick={() => setShowEditProfile(true)}
                        className="flex items-center gap8 px20 py10 bg-InterfaceSurfacehcprimary text-white rounded8 hover:bg-BrandPrimary900 transition-colors font14 font-semibold cursor-pointer"
                    >
                        <i className="smb-edit"></i>
                        Edit Profile
                    </button>
                </div>

                {/* Content */}
                <div className="p24">

                    {/* Profile Information Grid */}
                    {/* Profile Information Grid - SAME AS SCREENSHOT */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap4 mb20">
                        <div className="flex flex-col gap6">
                            <div className="font14 text-InterfaceTextsubtitle">First Name</div>
                            <div className="font14 font-semibold text-InterfaceTexttitle1">Jese</div>
                        </div>

                        <div className="flex flex-col gap6">
                            <div className="font14 text-InterfaceTextsubtitle">Last Name</div>
                            <div className="font14 font-semibold text-InterfaceTexttitle1">Leos</div>
                        </div>

                        <div className="flex flex-col gap6">
                            <div className="font14 text-InterfaceTextsubtitle flex items-center gap6">
                                Mobile Number
                                <i className="smb-shield-tick"></i>
                            </div>
                            <div className="font14 font-semibold text-BrandHighlightpure">+971 50 222 3333</div>
                        </div>

                        <div className="flex flex-col gap6">
                            <div className="font14 text-InterfaceTextsubtitle flex items-center gap6">
                                Email Address
                                <i className="smb-shield-tick"></i>
                            </div>
                            <div className="font14 font-semibold text-BrandHighlightpure">j.leos@outlook.com</div>
                        </div>

                        <div className="flex flex-col gap6">
                            <div className="font14 text-InterfaceTextsubtitle">Designation</div>
                            <div className="font14 font-semibold text-InterfaceTexttitle1">Manager</div>
                        </div>

                        <div className="flex flex-col gap6">
                            <div className="font14 text-InterfaceTextsubtitle">Company Name</div>
                            <div className="font14 font-semibold text-InterfaceTexttitle1">Hexalytics</div>
                        </div>

                        {/* Terms & Conditions with Info Icon */}
                        <div className="flex flex-col gap6">
                            <div className="font14 text-InterfaceTextsubtitle flex items-center gap6">
                                Country of Business
                            </div>
                            <div className="font14 font-semibold text-InterfaceTexttitle1">India</div>
                        </div>

                        <div className="flex flex-col gap6 col-span-1 lg:col-span-7 mt-2">
                            <div className="font14 text-InterfaceTextsubtitle flex items-center gap6">
                                General Terms & Conditions
                                <i
                                    className="smb-info-circle cursor-pointer"
                                    onClick={() => setShowTermsAndConditions(true)}
                                ></i>
                            </div>
                            <div className="font14 font-semibold text-InterfaceTexttitle1">
                                Accepted on 11/5/2025
                            </div>
                        </div>
                    </div>


                    {/* Profile Picture */}
                    <div className="border-InterfaceStrokesoft1 pt-6">
                        <label className="block font-semibold font14 text-InterfaceTextsubtitle1 mb12">
                            Profile Picture
                        </label>

                        <div className="flex items-center gap20">

                            {/* Profile Image */}
                            <div className="w-16 h-16 rounded-12 overflow-hidden bg-gray-200 flex-shrink-0">
                                <Image
                                    src={profileImage}
                                    alt="Profile"
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Upload UI */}
                            {showUploadInterface ? (
                                <div className="flex items-center justify-between gap20">

                                    <label className="cursor-pointer flex-1">
                                        <input
                                            ref={fileUploadRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    const reader = new FileReader();
                                                    reader.onload = (event) => {
                                                        setProfileImage(event.target.result);
                                                        setShowUploadInterface(false);
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                            }}
                                            className="hidden"
                                        />
                                        <div>
                                            <p className="font14 font-medium text-blue-600">
                                                Click to upload or drag and drop
                                            </p>
                                            <p className="font12 text-InterfaceTextsubtitle">
                                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                                            </p>
                                        </div>
                                    </label>

                                    <button
                                        onClick={() => setShowUploadInterface(false)}
                                        className="flex items-center gap6 px12 py8 font14 text-InterfaceTexttitle1 border border-InterfaceStrokesoft1 rounded1 bg-gradient-to-b from-[#FEFEFE] to-[#EEF2F6] hover:bg-[#edf3f9] transition-colors whitespace-nowrap cursor-pointer"
                                    >
                                        <i className="smb-circle-close"></i>
                                        Change
                                    </button>

                                </div>
                            ) : (
                                <div className="flex items-center gap12 flex-1">

                                    {/* Change Button */}
                                    <button
                                        onClick={handleChangeClick}
                                        className="flex items-center gap6 px12 py8 font14 text-InterfaceTexttitle1 border border-InterfaceStrokesoft1 rounded1 bg-gradient-to-b from-[#FEFEFE] to-[#EEF2F6] hover:bg-[#edf3f9] transition-colors cursor-pointer"
                                    >
                                        <i className="smb-refresh"></i>
                                        Change
                                    </button>

                                    <span className="font14 text-InterfaceTextsubtitle mx-3">or</span>

                                    {/* Remove Button */}
                                    <button
                                        onClick={handleRemove}
                                        className="flex items-center gap6 px12 py8 font14 text-InterfaceTexttitle1 border border-InterfaceStrokesoft1 rounded1 bg-gradient-to-b from-[#FEFEFE] to-[#EEF2F6] hover:bg-[#edf3f9] transition-colors cursor-pointer"
                                    >
                                        <i className="smb-circle-close"></i>
                                        Remove
                                    </button>

                                </div>
                            )}

                        </div>
                    </div>

                </div>
            </div>

            {/* Edit Profile Popup */}
            <EditProfile
                visible={showEditProfile}
                onHide={() => setShowEditProfile(false)}
            />

            {/* Terms & Conditions Popup */}
            <TermsAndConditions
                visible={showTermsAndConditions}
                onHide={() => setShowTermsAndConditions(false)}
            />
        </div>
    );
};
