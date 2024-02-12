"use client"
import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
import './OTP.css'
const OTP = () => {
    const [otp, setOtp] = useState("");
    const handleOtpChange = (value) => {
        // Remove non-digit characters from the input value
        const sanitizedValue = value.replace(/\D/g, "");
        setOtp(sanitizedValue);
    };
    return (
        <>
            <OTPInput
                value={otp}
                onChange={handleOtpChange}
                numInputs={4}
                inputStyle="otp-style-input outline-none focus:ring-2 focus:ring-regal-blue !caret-regal-blue"
                containerStyle={"otp-container"}
                className="flex  justify-center items-center"
                renderInput={(props) => <input {...props} />}
            />

        </>
    )
}

export default OTP