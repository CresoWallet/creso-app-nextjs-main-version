"use client"
import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
import './OTP.css'
import { enqueueSnackbar } from "notistack";
import { sendOTPMail, verifyOTP } from "@/clientApi/auth";
import CustomButton from '../CustomButton';
import { useUser } from "@/providers/UserProvider";


const OTP = () => {
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const { user } = useUser();

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };
    const handleSendOTPMail = async () => {
        if (!user.email) {
            enqueueSnackbar(`Email is not provided`, {
                variant: "error",
            });
        } else {
            setLoading(true);
            try {
                const res = await sendOTPMail({
                    email: user.email,
                });
                if (res?.status === 200) {
                    enqueueSnackbar(`Successful email transmission`, {
                        variant: "success",
                    });
                    setLoading(false);
                } else {
                    enqueueSnackbar(`Sending email failed`, {
                        variant: "error",
                    });
                }
            } catch (err) {
                enqueueSnackbar(`Something went wrong`, {
                    variant: "error",
                });
            } finally {
                setLoading(false);
            }
        }
    };
    const handleVerifyOTP = async () => {
        if (!user.email) {
            enqueueSnackbar(`Please enter OTP`, {
                variant: "error",
            });
        } else {
            setLoading(true);
            try {
                const res = await verifyOTP({
                    otp: otp,
                });
                if (res?.status === 200) {
                    enqueueSnackbar(`Email verified`, {
                        variant: "success",
                    });
                    setLoading(false);
                }
            } catch (err) {
                console.log("err : ", err);
                enqueueSnackbar(`${err.response.data.message}`, {
                    variant: "error",
                });
            } finally {
                setLoading(false);
            }
        }
    };
    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-center w-full flex-col ">
                <hr className="w-full mt-3" />
            </div>

            <div className="flex items-center justify-center w-full flex-col">
                <p className="text-sm font-bold mb-3 ">
                    An email with a verication code was just sent to
                </p>
                <p className="px-3 py-1 bg-blue-700 text-sm text-white rounded-full mb-5">
                    {/* {user.email} */}
                </p>
                <OTPInput
                    value={otp}
                    onChange={handleOtpChange}
                    numInputs={4}
                    inputStyle="otp-style-input outline-none  caret-regal-blue py-1 rounded mx-3 text-black"
                    containerStyle={"otp-container"}
                    className="flex justify-center items-center"
                    renderInput={(props) => (
                        <input
                            {...props}
                            style={{
                                width: "50px",
                                height: "60px",
                                fontSize: "25px",
                                textAlign: "center",
                                borderRadius: "6px",
                                borderWidth: "2px",
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                                color: "#030239",
                            }}
                        />
                    )}
                />

                <button onClick={() => handleVerifyOTP()} className='bg-[#FF4085] rounded-full p-2 m-5'>verifyOTP</button>
                <div className="flex justify-start text-sm text-black mt-2 ">
                    <p>Not received?</p>
                    &nbsp;
                    <p
                        className="text-[#FF4085] cursor-pointer"
                        onClick={() => {
                            handleSendOTPMail();
                        }}
                    >
                        Resend
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OTP