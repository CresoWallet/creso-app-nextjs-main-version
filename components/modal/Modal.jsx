import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./modal.css";
import Image from "next/image";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { enqueueSnackbar } from "notistack";

import Delete from "../../assets/Dashboard/delete.png";
import Set1 from "../../assets/backup/set1.png";
import Set1M from "../../assets/backup/set1mobile.png";
import Set2 from "../../assets/backup/set2.png";
import Set2M from "../../assets/backup/set2mobile.png";
import Set3 from "../../assets/backup/set3.png";
import Set3M from "../../assets/backup/set3mobile.png";
import Set4 from "../../assets/backup/set4.png";
import Set4M from "../../assets/backup/set4mobile.png";
import Bulb from "../../assets/backup/bulb.png";
import Trash from "../../assets/backup/trash.png";
import Mob from "../../assets/backup/mobile.png";
import Device from "../../assets/backup/device.png";
import Device2 from "../../assets/backup/device2.png";
import Cloud from "../../assets/backup/cloud.png";
import Google from "../../assets/backup/google.png";
import Baidu from "../../assets/backup/baidu.png";
import { sendOTPMail, verifyOTP } from "@/clientApi/auth";
// import { OtpInputCard } from "../cards/OtpInputCard";
import FileSaver from "file-saver";
import { backupWallet } from "@/clientApi/wallet";
import { useUser } from "@/providers/UserProvider";

const Modal = ({ onClose, title, user }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState();
  const [secretKey, setSecretKey] = useState();
  const [encryptedKey, setEncryptedKey] = useState("");
  const { handleAuthentication } = useUser();

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
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
          localStorage.setItem("otp_token", res?.data?.token);
          enqueueSnackbar(`Email sent successfully`, {
            variant: "success",
          });
          setStep((step % 7) + 1);
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
          token: localStorage.getItem("otp_token"),
          otp: otp,
          email: user.email,
        });
        if (res?.status === 200) {
          localStorage.setItem("otp_token", res?.data?.token);
          enqueueSnackbar(`Email verified`, {
            variant: "success",
          });
          setStep((step % 7) + 1);
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

  const handleBackupWallet = async () => {
    //     const downloadBackup = async () => {
    //   const response = await backUpWallet({ passkey });
    //   downloadFile(
    //     JSON.stringify(response.data),
    //     "creso_backup.json",
    //     "application/json"
    //   );
    // };
    if (!user.email) {
      enqueueSnackbar(`Please enter secret key`, {
        variant: "error",
      });
    } else {
      try {
        setLoading(true);
        const res = await backupWallet({
          passkey: secretKey,
        });
        if (res) {
          console.log(res);
          var blob = new Blob([btoa(JSON.stringify(res?.data))], {
            type: "text/plain;charset=utf-8",
          });
          FileSaver.saveAs(blob, `${user?.email}_credential.creso`);
          setEncryptedKey(res?.data?.data);
          setStep((step % 7) + 1);
        }
        setLoading(false);
      } catch (error) {}
    }
  };

  const handleNextClick = async () => {
    if (step === 1) {
      handleSendOTPMail();
    } else if (step === 2) {
      handleVerifyOTP();
    } else if (step === 3) {
      handleBackupWallet();
    } else if (step === 4) {
      setLoading(true);
      await handleAuthentication();
      onClose();
      setLoading(false);
    } else {
      setStep((step % 7) + 1);
    }
    // if (step === 3) {
    //   handleBackupWallet();
    // } else {
    //   setStep((step % 7) + 1);
    // }
  };

  const getContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col gap-5">
            {/* Content for step 1 */}
            <div className="flex items-center justify-center w-full flex-col ">
              <Image
                src={Set1}
                alt=""
                className="cursor-pointer hidden sm:block"
              />
              {/* <Image
                src={Set1M}
                alt=""
                className="cursor-pointer block sm:hidden"
              /> */}
              <hr className="w-full mt-3" />
            </div>

            <div className="flex items-center justify-center w-full flex-col">
              <p className="text-lg font-bold ml-3 mb-3">
                Verify Your Email Address
              </p>
              <p className="text-sm font-normal ml-3 mb-3">
                To continue, Please verify your email address
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-5">
            {/* Content for step 2 */}
            <div className="flex items-center justify-center w-full flex-col ">
              <Image
                src={Set1}
                alt=""
                className="cursor-pointer hidden sm:block"
              />
              {/* <Image
                src={Set1M}
                alt=""
                className="cursor-pointer block sm:hidden"
              /> */}
              <hr className="w-full mt-3" />
            </div>

            <div className="flex items-center justify-center w-full flex-col">
              <p className="text-sm font-bold mb-3 ">
                An email with a verication code was just sent to
              </p>
              <p className="px-3 py-1 bg-blue-700 text-sm text-white rounded-full mb-5">
                {user.email}
              </p>

              <input
                type="number"
                placeholder="Enter OTP"
                className="placeholder:text-[#A09FAA] text-xs xl:px-4 xl:py-4 md:px-4 md:py-4 py-3 px-3 rounded-full border border-solid"
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
              />
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
        );

      case 3:
        return (
          <div className="flex flex-col gap-5">
            {/* Content for step 1 */}
            <div className="flex items-center justify-center w-full flex-col ">
              <Image
                src={Set2}
                alt=""
                className="cursor-pointer hidden sm:block"
              />
              {/* <Image
                src={Set4M}
                alt=""
                className="cursor-pointer block sm:hidden"
              /> */}
              <hr className="w-full mt-3" />
            </div>

            <div className="flex items-center justify-center w-full flex-col">
              <p className="text-lg font-bold ml-3 mb-3">Backup Recovery</p>
              <input
                type="text"
                placeholder="secret key"
                className="placeholder:text-[#A09FAA] text-xs xl:px-4 xl:py-4 md:px-4 md:py-4 py-3 px-3 rounded-full border border-solid"
                onChange={(e) => {
                  setSecretKey(e.target.value);
                }}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col gap-5">
            {/* Content for step 1 */}
            <div className="flex items-center justify-center w-full flex-col ">
              <Image
                src={Set3}
                alt=""
                className="cursor-pointer hidden sm:block"
              />
              <Image
                src={Set4M}
                alt=""
                className="cursor-pointer block sm:hidden"
              />
              <hr className="w-full mt-3" />
            </div>

            <div className="flex items-center justify-center w-full flex-col">
              <p className="text-lg font-bold ml-3 mb-3">
                Back Up Personal Key Share
              </p>

              <div className="border border-solid rounded-3xl border-[#E5E5F0] xl:py-4 md:py-2 xl:px-6 md:px-1 px-4 py-2 w-4/5">
                <p className="text-gray-600 sm:text-sm text-xs text-left mx-3 break-words">
                  {encryptedKey}
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Image src={Device2} alt="" className="sm:w-[230px] w-[175px]" />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const modalContent = (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal">
          <div className="flex px-5 items-center justify-between w-full bg-blue-700 h-[75px] modal-header ">
            <p className="text-lg text-white font-semibold">Backup</p>
            <Image
              src={Delete}
              alt=""
              onClick={handleCloseClick}
              className="cursor-pointer"
            />
          </div>
          <div className="modal-body w-4/5 mx-auto">{getContent()}</div>

          <div className="px-3  absolute bottom-5 right-0 ">
            <button
              className="bg-gray-900 hover:bg-black text-white py-2 px-5 rounded-full text-sm"
              onClick={handleNextClick}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="w-5 h-5 animate-spin text-sky-500" />
              ) : (
                <>
                  {step === 1
                    ? "Send verification email"
                    : step === 2
                    ? "Verify"
                    : step === 3
                    ? "Download"
                    : "Close"}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
};

export default Modal;
