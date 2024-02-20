// // BackupModal.jsx

// import React, { useState } from "react";
// import { BsArrowLeft } from "react-icons/bs";
// import { CiCloudOn } from "react-icons/ci";
// import { LiaGoogleDrive } from "react-icons/lia";
// import Image from "next/image";
// import Link from "next/link";
// import CustomButton from "@/components/CustomButton";
// import CommonComponent from "@/components/common/CommonBackup";
// import CustomTextField from "@/components/fields/CustomTextField";
// import CustomCheckbox from "@/components/customcheckbox";
// import mail from "../../assets/backup/mail.png";
// import key from "../../assets/backup/Key.png";
// import wallet from "../../assets/backup/Wallet.png";
// import mail1 from "../../assets/backup/mail1.png";
// import key1 from "../../assets/backup/Key1.png";
// import key2 from "../../assets/backup/Key2.png";
// import wallet1 from "../../assets/backup/Wallet1.png";
// import loop from "../../assets/backup/loop.png";
// import device2 from "../../assets/backup/device2.png";
// import device from "../../assets/backup/device.png";
// import backupModalStyles from "./BackupModal.css";

// const BackupModal = ({ closeModal }) => {
//   const [selectStorage, setSelectStorage] = useState("iCloud Drive");

//   const handleStorageChange = (storage) => {
//     setSelectStorage(storage);
//   };

//   return (
//     <div className={backupModalStyles.modalContainer}>
//       <div className={backupModalStyles.modalContent}>
//         <div className={backupModalStyles.header}>
//           <a
//             href="/dashboard"
//             className={backupModalStyles.backLink}
//             onClick={closeModal}
//           >
//             <BsArrowLeft />
//             Backup
//           </a>
//         </div>
//         {/* Page 1 content */}
//         <div className={backupModalStyles.stepContent}>
//           <CommonComponent
//             imagesrc1={mail}
//             color1="[#D0F500]"
//             borderColor1="black"
//             hrColor1="black"
//             imagesrc2={key}
//             color2="white"
//             borderColor2="gray-300"
//             textColor2="text-gray-300"
//             hrColor2="gray-300"
//             imagesrc3={wallet}
//             color3="white"
//             textColor3="gray-300"
//             borderColor3="gray-300"
//           />
//           <div className={backupModalStyles.stepTitle}> Email</div>
//           <CustomTextField placeholder="Enter your email" />
//           <CustomButton name="Next" bgColor="black" nameColor="white" />
//         </div>
//         {/* Page 2 content */}
//         <div className={backupModalStyles.stepContent}>
//           <CommonComponent
//             imagesrc1={mail}
//             color1="[#D0F500]"
//             borderColor1="black"
//             hrColor1="black"
//             imagesrc2={key}
//             color2="white"
//             borderColor2="gray-300"
//             textColor2="text-gray-300"
//             hrColor2="gray-300"
//             imagesrc3={wallet}
//             color3="white"
//             textColor3="gray-300"
//             borderColor3="gray-300"
//           />
//           <CustomButton name="Next" bgColor="black" nameColor="white" />
//         </div>
//         {/* Page 3 content */}
//         <div className={backupModalStyles.stepContent}>
//           <CommonComponent
//             imagesrc1={mail1}
//             color1="black"
//             borderColor1="white"
//             hrColor1="black"
//             imagesrc2={key1}
//             color2="[#D0F500]"
//             borderColor2="black"
//             textColor2="black"
//             hrColor2="gray-300"
//             imagesrc3={wallet}
//             color3="white"
//             textColor3="gray-300"
//             borderColor3="gray-300"
//           />
//           <p className={backupModalStyles.stepTitle}>Enable Device Lock</p>
//           <p className={backupModalStyles.stepDescription}>
//             Enable device lock to ensure that you can only access your account.
//           </p>
//           <Image
//             src={device}
//             alt="Device"
//             className={backupModalStyles.deviceImage}
//           />
//           <CustomButton name="Next" bgColor="black" nameColor="white" />
//         </div>
//         {/* Page 4 content */}
//         <div className={backupModalStyles.stepContent}>
//           <CommonComponent
//             imagesrc1={mail1}
//             color1="black"
//             borderColor1="white"
//             hrColor1="black"
//             imagesrc2={key2}
//             color2="black"
//             borderColor2="white"
//             textColor2="black"
//             hrColor2="black"
//             imagesrc3={wallet}
//             color3="[#D0F500]"
//             textColor3="black"
//             borderColor3="black"
//           />
//           <p className={backupModalStyles.stepTitle}>Save Recovery Key</p>
//           <p className={backupModalStyles.stepDescription}>
//             Sync the Recovery Key to your personal cloud storage
//           </p>
//           <div className={backupModalStyles.storageOptions}>
//             <p className={backupModalStyles.storageTitle}>
//               Personal Cloud Storage
//             </p>
//             <div className={backupModalStyles.storageOption}>
//               <CiCloudOn />
//               <span>iCloud Drive</span>
//               <CustomCheckbox
//                 checked={selectStorage === "iCloud Drive"}
//                 onChange={() => handleStorageChange("iCloud Drive")}
//               />
//             </div>
//             <div className={backupModalStyles.storageOption}>
//               <LiaGoogleDrive />
//               <span>Google Drive</span>
//               <CustomCheckbox
//                 checked={selectStorage === "Google Drive"}
//                 onChange={() => handleStorageChange("Google Drive")}
//               />
//             </div>
//             <div className={backupModalStyles.storageOption}>
//               <Image src={loop} alt="Baidu Netdisk" width={30} height={30} />
//               <span>Baidu Netdisk</span>
//               <CustomCheckbox
//                 checked={selectStorage === "Baidu Netdisk"}
//                 onChange={() => handleStorageChange("Baidu Netdisk")}
//               />
//             </div>
//           </div>
//           <CustomButton
//             name="Enable Device Lock"
//             bgColor="black"
//             nameColor="white"
//           />
//         </div>
//         {/* Page 5 content */}
//         <div className={backupModalStyles.stepContent}>
//           <CommonComponent
//             imagesrc1={mail1}
//             color1="black"
//             borderColor1="white"
//             hrColor1="black"
//             imagesrc2={key2}
//             color2="black"
//             borderColor2="white"
//             textColor2="black"
//             hrColor2="black"
//             imagesrc3={wallet1}
//             color3="[#D0F500]"
//             textColor3="black"
//             borderColor3="black"
//           />
//           <p className={backupModalStyles.stepTitle}>
//             Back Up Personal Key Share
//           </p>
//           <p className={backupModalStyles.stepDescription}>
//             Encrypted your key share with Recovery Key and store the encrypted
//             data in Creso Server.
//           </p>
//           <Image
//             src={device2}
//             alt="Device"
//             className={backupModalStyles.deviceImage}
//           />
//           <CustomButton name="Next" bgColor="black" nameColor="white" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BackupModal;

import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { CiCloudOn } from "react-icons/ci";
import { LiaGoogleDrive } from "react-icons/lia";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import CommonComponent from "@/components/common/CommonBackup";
import CustomTextField from "@/components/fields/CustomTextField";
import CustomCheckbox from "@/components/customcheckbox";
import mail from "../../assets/backup/mail.png";
import key from "../../assets/backup/Key.png";
import wallet from "../../assets/backup/Wallet.png";
import mail1 from "../../assets/backup/mail1.png";
import key1 from "../../assets/backup/Key1.png";
import key2 from "../../assets/backup/Key2.png";
import wallet1 from "../../assets/backup/Wallet1.png";
import loop from "../../assets/backup/loop.png";
import device2 from "../../assets/backup/device2.png";
import device from "../../assets/backup/device.png";
import backupModalStyles from "./BackupModal.css";
import { sendOTPMail, verifyOTP, backupWallet } from "@/clientApi/auth";
import { enqueueSnackbar } from "notistack";
import FileSaver from "file-saver";

const BackupModal = ({ closeModal, user }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [encryptedKey, setEncryptedKey] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("iCloud Drive");

  const handleNext = async () => {
    setLoading(true);
    switch (step) {
      case 1:
        if (!email) {
          enqueueSnackbar(`Email is required`, {
            variant: "error",
          });
          setLoading(false);
          return;
        }
        try {
          const res = await sendOTPMail({ email: email });
          if (res?.status === 200) {
            enqueueSnackbar(`Email sent successfully`, {
              variant: "success",
            });
            setStep(2);
          } else {
            enqueueSnackbar(`Failed to send email`, {
              variant: "error",
            });
          }
        } catch (error) {
          enqueueSnackbar(`Failed to send email: ${error}`, {
            variant: "error",
          });
        }
        break;
      case 2:
        if (!otp) {
          enqueueSnackbar(`Please enter OTP`, {
            variant: "error",
          });
          setLoading(false);
          return;
        }
        try {
          const res = await verifyOTP({ otp: otp });
          if (res?.status === 200) {
            enqueueSnackbar(`Email verified`, {
              variant: "success",
            });
            setStep(3);
          } else {
            enqueueSnackbar(`OTP verification failed`, {
              variant: "error",
            });
          }
        } catch (error) {
          enqueueSnackbar(`Failed to verify OTP: ${error}`, {
            variant: "error",
          });
        }
        break;
      case 3:
        try {
          const res = await backupWallet({ passkey: secretKey });
          if (res?.data) {
            const blob = new Blob([btoa(JSON.stringify(res.data))], {
              type: "text/plain;charset=utf-8",
            });
            FileSaver.saveAs(blob, `${user.email}_credential.creso`);
            setEncryptedKey(res.data.data);
            setStep(4);
          } else {
            enqueueSnackbar(`Backup failed`, {
              variant: "error",
            });
          }
        } catch (error) {
          enqueueSnackbar(`Backup failed: ${error}`, {
            variant: "error",
          });
        }
        break;
      default:
        break;
    }
    setLoading(false);
  };

  const handleStorageChange = (storage) => {
    setSelectedStorage(storage);
  };

  return (
    <div className={backupModalStyles.modalContainer}>
      <div className={backupModalStyles.modalContent}>
        <div className={backupModalStyles.header}>
          <a
            href="/dashboard"
            className={backupModalStyles.backLink}
            onClick={closeModal}
          >
            <BsArrowLeft />
            Backup
          </a>
        </div>
        <div className={backupModalStyles.stepContent}>
          {step === 1 && (
            <>
              <CommonComponent
                imagesrc1={mail}
                color1="[#D0F500]"
                borderColor1="black"
                hrColor1="black"
                imagesrc2={key}
                color2="white"
                borderColor2="gray-300"
                textColor2="text-gray-300"
                hrColor2="gray-300"
                imagesrc3={wallet}
                color3="white"
                textColor3="gray-300"
                borderColor3="gray-300"
              />
              <div className={backupModalStyles.stepTitle}> Email</div>
              <CustomTextField
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* Next button */}
              <CustomButton name="Next" bgColor="black" nameColor="white" />
            </>
          )}
          {step === 2 && (
            <>
              <CommonComponent
                imagesrc1={mail}
                color1="[#D0F500]"
                borderColor1="black"
                hrColor1="black"
                imagesrc2={key}
                color2="white"
                borderColor2="gray-300"
                textColor2="text-gray-300"
                hrColor2="gray-300"
                imagesrc3={wallet}
                color3="white"
                textColor3="gray-300"
                borderColor3="gray-300"
              />
              <CustomTextField
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </>
          )}
          {step === 3 && (
            <>
              <CommonComponent
                imagesrc1={mail1}
                color1="black"
                borderColor1="white"
                hrColor1="black"
                imagesrc2={key1}
                color2="[#D0F500]"
                borderColor2="black"
                textColor2="black"
                hrColor2="gray-300"
                imagesrc3={wallet}
                color3="white"
                textColor3="gray-300"
                borderColor3="gray-300"
              />
              <p className={backupModalStyles.stepTitle}>Secret Key</p>
              <CustomTextField
                placeholder="Enter your secret key"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </>
          )}
          {step === 4 && (
            <>
              <CommonComponent
                imagesrc1={mail1}
                color1="black"
                borderColor1="white"
                hrColor1="black"
                imagesrc2={key2}
                color2="black"
                borderColor2="white"
                textColor2="black"
                hrColor2="black"
                imagesrc3={wallet}
                color3="[#D0F500]"
                textColor3="black"
                borderColor3="black"
              />
              <p className={backupModalStyles.stepTitle}>
                Back Up Personal Key Share
              </p>
              <p className={backupModalStyles.stepDescription}>
                Encrypted your key share with Recovery Key and store the
                encrypted data in Creso Server.
              </p>
              <Image
                src={device2}
                alt="Device"
                className={backupModalStyles.deviceImage}
              />
              <CustomButton
                name={loading ? "Loading..." : "Next"}
                bgColor="black"
                nameColor="white"
                onClick={handleNext}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BackupModal;
