// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import check from "../../assets/eoa/checkmark.png";
// import lockpassword from "../../assets/eoa/Lockpassword.png";
// import lock from "../../assets/eoa/Lock.png";
// import phone from "../../assets/eoa/Phone.png";
// import CommonComponent from "@/components/common/CommonEOA";
// import PasswordInput from "@/components/common/PasswordInput";
// import CustomButton4 from "@/components/CustomButton4";
// import CustomCheckbox from "@/components/customcheckbox";
// import { createEOAWalletApi } from "@/clientApi/auth";

// function CreatePassword() {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [passwordError, setPasswordError] = useState("");
//   const [isChecked, setIsChecked] = useState(true);
//   const [walletName, setWalletName] = useState("");

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     const { value } = event.target;
//     setConfirmPassword(value);
//     if (password && value && password !== value) {
//       setPasswordError("Passwords do not match");
//     } else {
//       setPasswordError("");
//     }
//   };

//   const handleCreatePassword = async (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       setPasswordError("Passwords do not match");
//     } else {
//       setPasswordError("");
//       try {
//         const res = await createEOAWalletApi({
//           walletName: walletName,
//         });
//         console.log("Response:", res.data); // Log the response data
//         // Handle success scenario, if needed
//       } catch (error) {
//         console.error("Error creating wallet:", error);
//         // Handle error scenario
//       }
//     }
//   };
//   const toggleShowNewPassword = () => {
//     setShowNewPassword((prevShowNewPassword) => !prevShowNewPassword);
//   };

//   const toggleShowConfirmPassword = () => {
//     setShowConfirmPassword(
//       (prevShowConfirmPassword) => !prevShowConfirmPassword
//     );
//   };
//   const handleWalletNameChange = (event) => {
//     setWalletName(event.target.value);
//   };

//   return (
//     <div className="h-full md:px-4 py-4 flex flex-col">
//       <CommonComponent
//         title="Create EOA Wallet"
//         imageSrc1={lockpassword}
//         color1="[#D0F500]"
//         hrColor1="black"
//         borderColor1="black"
//         imageSrc2={lock}
//         color2="white"
//         borderColor2="gray-300"
//         textColor2="gray-400"
//         hrColor2="gray-300"
//         imageSrc3={phone}
//         color3="white"
//         textColor3="gray-300"
//         borderColor3="grey-300"
//       />

//       <hr className="mt-4 w-auto" />
//       <div className="text-center hidden sm:block mx-auto mb-4 max-w-xl">
//         <h2 className="text-xl text-center font-bold mb-4 mt-8">
//           Create Password
//         </h2>
//         <p className="mx-auto mt-2">
//           This password will unlock your Creso wallet only on this device. Creso
//           cannot recover this password.
//         </p>
//       </div>
//       <div className="items-center justify-center mx-4">
//         <form onSubmit={handleCreatePassword} className="">
//           <div className="my-4 mx-auto max-w-md">
//             <label
//               htmlFor="walletName"
//               className="block text-gray-700 font-bold md:mb-2 mb-1"
//             >
//               Wallet Name
//             </label>
//             <input
//               type="text"
//               id="walletName"
//               value={walletName}
//               onChange={handleWalletNameChange}
//               placeholder="Enter Wallet Name"
//               className="shadow appearance-none w-full py-5 px-4 text-gray-700 leading-tight border rounded-full"
//             />
//           </div>
//           <div className="my-4 mx-auto max-w-md">
//             <PasswordInput
//               label="New Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               showPassword={showNewPassword}
//               onToggle={toggleShowNewPassword}
//             />
//           </div>

//           <div className="md:mb-4 md:mt-8 my-2 mx-auto max-w-md">
//             <PasswordInput
//               label="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               showPassword={showConfirmPassword}
//               onToggle={toggleShowConfirmPassword}
//             />
//           </div>
//           {passwordError && <p className="text-red-500 ">{passwordError}</p>}
//           {/* Terms of Use */}
//           <div className="flex items-center md:mb-8 md:mt-2 mt-20 mb-2 mx-auto max-w-md">
//             <CustomCheckbox checked={isChecked} onChange={setIsChecked} />
//             {/* <button
//               className="rounded-full p-2 border-black focus:outline-none"
//               onClick={() => setIsChecked(!isChecked)}
//               disabled={passwordError || !password || !confirmPassword}
//             >
//               {isChecked ? (
//                 <Image alt="" src={check} className="w-8 h-8" />
//               ) : (
//                 <div className="w-6 h-6 rounded-full border border-black"></div>
//               )}
//             </button> */}
//             <span className="ml-2 ">
//               I understand that Creso cannot recover this password for me.
//               <span className="text-[#FF4085] ml-1">Learn more</span>
//             </span>
//           </div>

//           <div className="flex items-center justify-center">
//             {/* <button
//               type="submit"
//               className="px-14 py-4 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white focus:outline-none"
//               disabled={passwordError || !password || !confirmPassword}
//             >
//               Create New Password
//             </button> */}
//             <CustomButton4
//               onClick={handleCreatePassword}
//               padding="px-14 py-4"
//               className="rounded-full border border-black bg-white text-blackbg-black hover:text-white focus:outline-none"
//               disabled={passwordError || !password || !confirmPassword}
//             >
//               <Link href="/secure-your-wallet">Create New Password</Link>
//             </CustomButton4>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreatePassword;

"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import check from "../../assets/eoa/checkmark.png";
import lockpassword from "../../assets/eoa/Lockpassword.png";
import lock from "../../assets/eoa/Lock.png";
import phone from "../../assets/eoa/Phone.png";
import CommonComponent from "@/components/common/CommonEOA";
import PasswordInput from "@/components/common/PasswordInput";
import CustomButton4 from "@/components/CustomButton4";
import CustomCheckbox from "@/components/customcheckbox";
import { createEOAWalletApi } from "@/clientApi/auth";
import { useRouter } from "next/navigation";
import { WalletContext } from "@/providers/WalletProvider";


function CreatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [walletName, setWalletName] = useState("");
  const router = useRouter();
  const { seedPhrase, setSeedPhrase } = useContext(WalletContext);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
    if (password && value && password !== value) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleCreatePassword = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
      try {
        const res = await createEOAWalletApi({
          walletName: walletName,
        });
        console.log("Response:", res?.data); // Log the response data
        // Handle success scenario, if needed
        setSeedPhrase(res?.data?.data?.seedPhrase)
        if (res?.data?.message === "EOA wallet Successfully created") {
          router.push(`/review-recovery-pharse`);
        }
      } catch (error) {
        console.error("Error creating wallet:", error);
        // Handle error scenario
      }
    }
  };
  const toggleShowNewPassword = () => {
    setShowNewPassword((prevShowNewPassword) => !prevShowNewPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };
  const handleWalletNameChange = (event) => {
    setWalletName(event.target.value);
  };
  useEffect(() => {
    // Example usage
    const secretKey = 'YourSecretKey'; // Replace with your secret key
    const walletAddress = 'YourWalletAddress';
    const mnemonicSeedPhrase = 'YourMnemonicSeedPhrase';

    // Encrypt data
    encryptData(walletAddress, secretKey)
      .then(encryptedWalletAddress => {
        storeEncryptedDataInLocalStorage('walletAddress', encryptedWalletAddress.encryptedData, encryptedWalletAddress.iv);
      })
      .catch(error => console.error("Encryption error:", error));

    encryptData(mnemonicSeedPhrase, secretKey)
      .then(encryptedMnemonicSeedPhrase => {
        storeEncryptedDataInLocalStorage('mnemonicSeedPhrase', encryptedMnemonicSeedPhrase.encryptedData, encryptedMnemonicSeedPhrase.iv);
      })
      .catch(error => console.error("Encryption error:", error));

    // Retrieve encrypted data from local storage
    const encryptedWalletAddress = retrieveEncryptedDataFromLocalStorage('walletAddress');
    const encryptedMnemonicSeedPhrase = retrieveEncryptedDataFromLocalStorage('mnemonicSeedPhrase');

    // Decrypt data when needed
    if (encryptedWalletAddress && encryptedMnemonicSeedPhrase) {
      decryptData(encryptedWalletAddress.encryptedData, secretKey, encryptedWalletAddress.iv)
        .then(decryptedWalletAddress => {
          console.log("Decrypted wallet address:", decryptedWalletAddress);
        })
        .catch(error => console.error("Decryption error:", error));

      decryptData(encryptedMnemonicSeedPhrase.encryptedData, secretKey, encryptedMnemonicSeedPhrase.iv)
        .then(decryptedMnemonicSeedPhrase => {
          console.log("Decrypted mnemonic seed phrase:", decryptedMnemonicSeedPhrase);
        })
        .catch(error => console.error("Decryption error:", error));
    }
  }, []);


  return (
    <div className="h-full md:px-4 py-4 flex flex-col">
      <CommonComponent
        title="Create EOA Wallet"
        imageSrc1={lockpassword}
        color1="[#D0F500]"
        hrColor1="black"
        borderColor1="black"
        imageSrc2={lock}
        color2="white"
        borderColor2="gray-300"
        textColor2="gray-400"
        hrColor2="gray-300"
        imageSrc3={phone}
        color3="white"
        textColor3="gray-300"
        borderColor3="grey-300"
      />

      <hr className="mt-4 w-auto" />
      <div className="text-center hidden sm:block mx-auto mb-4 max-w-xl">
        <h2 className="text-xl text-center font-bold mb-4 mt-8">
          Create Password
        </h2>
        <p className="mx-auto mt-2">
          This password will unlock your Creso wallet only on this device. Creso
          cannot recover this password.
        </p>
      </div>
      <div className="items-center justify-center mx-4">
        <form onSubmit={handleCreatePassword} className="">
          <div className="my-4 mx-auto max-w-md">
            <label
              htmlFor="walletName"
              className="block text-gray-700 font-bold md:mb-2 mb-1"
            >
              Wallet Name
            </label>
            <input
              type="text"
              id="walletName"
              value={walletName}
              onChange={handleWalletNameChange}
              placeholder="Enter Wallet Name"
              className="shadow appearance-none w-full py-5 px-4 text-gray-700 leading-tight border rounded-full"
            />
          </div>
          <div className="my-4 mx-auto max-w-md">
            <PasswordInput
              label="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPassword={showNewPassword}
              onToggle={toggleShowNewPassword}
            />
          </div>

          <div className="md:mb-4 md:mt-8 my-2 mx-auto max-w-md">
            <PasswordInput
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              showPassword={showConfirmPassword}
              onToggle={toggleShowConfirmPassword}
            />
          </div>
          {passwordError && <p className="text-red-500 ">{passwordError}</p>}
          {/* Terms of Use */}
          <div className="flex items-center md:mb-8 md:mt-2 mt-20 mb-2 mx-auto max-w-md">
            <CustomCheckbox checked={isChecked} onChange={setIsChecked} />
            {/* <button
              className="rounded-full p-2 border-black focus:outline-none"
              onClick={() => setIsChecked(!isChecked)}
              disabled={passwordError || !password || !confirmPassword}
            >
              {isChecked ? (
                <Image alt="" src={check} className="w-8 h-8" />
              ) : (
                <div className="w-6 h-6 rounded-full border border-black"></div>
              )}
            </button> */}
            <span className="ml-2 ">
              I understand that Creso cannot recover this password for me.
              <span className="text-[#FF4085] ml-1">Learn more</span>
            </span>
          </div>

          <div className="flex items-center justify-center">
            {/* <button
              type="submit"
              className="px-14 py-4 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white focus:outline-none"
              disabled={passwordError || !password || !confirmPassword}
            >
              Create New Password
            </button> */}
            <CustomButton4
              onClick={handleCreatePassword}
              padding="px-14 py-4"
              className="rounded-full border border-black bg-white text-black hover:bg-black hover:text-white focus:outline-none"
              disabled={passwordError || !password || !confirmPassword}
            >
              <Link href="/secure-your-wallet">Create New Password</Link>
            </CustomButton4>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePassword;
