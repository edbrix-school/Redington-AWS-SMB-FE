"use client";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";


export default function PhoneInput({ placeholder = "" }) {
    const [country, setCountry] = useState({
        name: "United Arab Emirates",
        code: "AE",
        dial: "+971",
        flag: "https://flagcdn.com/w20/ae.png",
    });

    const [number, setNumber] = useState("");

    const countries = [
        {
            name: "United Arab Emirates",
            code: "AE",
            dial: "+971",
            flag: "https://flagcdn.com/w20/ae.png",
        },
        {
            name: "India",
            code: "IN",
            dial: "+91",
            flag: "https://flagcdn.com/w20/in.png",
        },
        {
            name: "United States",
            code: "US",
            dial: "+1",
            flag: "https://flagcdn.com/w20/us.png",
        },
        {
            name: "Saudi Arabia",
            code: "SA",
            dial: "+966",
            flag: "https://flagcdn.com/w20/sa.png",
        }
    ];

    const selectedTemplate = (option) => {
        return (
            <div className="flex items-center gap-2">
                <img src={option.flag} alt={option.code} className="w18 h-[10px] rounded-[2px]" />
                <span className="font14">{option.dial}</span>
            </div>
        );
    };

    const optionTemplate = (option) => {
        return (
            <div className="flex items-center gap-2 py-1">
                <img src={option.flag} alt={option.code} className="w18 h-[10px] rounded-[2px]" />
                <span>{option.name}</span>
                <span className="text-gray-500 ml-auto">{option.dial}</span>
            </div>
        );
    };

    return (
        <div className="flex flex-col w-full phone-input-container">
          

            <div className="phone-input-wrapper">

                {/* Country Dropdown */}
                <div className="phone-dropdown">
                    <Dropdown
                        value={country}
                        onChange={(e) => setCountry(e.value)}
                        options={countries}
                        optionLabel="dial"
                        valueTemplate={selectedTemplate}
                        itemTemplate={optionTemplate}
                        className="phone-dropdown-field"
                        dropdownIcon="pi pi-chevron-down text-gray-400 "
                    />
                </div>

                {/* Divider */}
        <div className="w-px h-5 bg-gray-300 mx-2"></div>


                {/* Phone Input */}
                <InputText
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    keyfilter="int"
                    maxLength={12}
                      placeholder={placeholder}
                    className="phone-input-field font14"
                />
            </div>
        </div>
    );
}
