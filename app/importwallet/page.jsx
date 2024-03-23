"use client";
import React, { useState } from "react";
import Link from "next/link";
import HeaderEOA from "@/components/common/HeaderEOA";
import { BsArrowLeft } from "react-icons/bs";
import { importEOAWalletApi } from "@/clientApi/auth";
import CustomCheckbox from "@/components/TestCustomcheckbox";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  selectStoredSeedPhrase,
  setStoredSeedPhrase,
} from "@/store/sha256HashSlice";
import { createHash } from "crypto";
function ImportWallet() {
  const seedPhraseLength = 12;
  const [userInput, setUserInput] = useState(Array(seedPhraseLength).fill(""));
  const [error, setError] = useState("");
  const [showSeedPhrase, setShowSeedPhrase] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState("");
  const [walletName, setWalletName] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const router = useRouter();
  const handleInputChange = (index, value) => {
    const newUserInput = [...userInput];
    newUserInput[index] = value;
    setUserInput(newUserInput);
  };
  const getStoredSeedPhrase = useSelector(selectStoredSeedPhrase);
  const dispatch = useDispatch();
  const generateSHA256Hash = (data) => {
    if (data === null) {
      console.error("Data is null");
      return null; // or handle the case appropriately
    }

    const hash = createHash("sha256");
    hash.update(data);
    return hash.digest("hex");
  };
  const handleVerify = async () => {
    try {
      // Get seed phrase from local storage
      const storedSeedPhrase = localStorage.getItem("seedshash");
      const userInputSeeds = userInput.join(" ");
      const sha256Hash = generateSHA256Hash(userInputSeeds);
      console.log("🚀 ~ handleRevealClick ~ sha256Hash:", sha256Hash);
      dispatch(setStoredSeedPhrase(sha256Hash));
      // Compare entered seed phrase with stored one
      if (sha256Hash !== storedSeedPhrase) {
        setError("Invalid seed phrase.");
        return;
      }

      const authToken = localStorage.getItem("authToken");
      const res = await importEOAWalletApi({
        walletName: walletName,
        walletAddress: walletAddress,
        formData: userInput.join(" "),
        authToken: authToken,
      });
      console.log("Import wallet response:", res.data);
      if (
        res &&
        res.data &&
        res.data.message === "Successfully import EOA wallet"
      ) {
        // If wallet import is successful, store wallet name and address in local storage
        localStorage.setItem("walletName", walletName);
        localStorage.setItem("walletAddress", walletAddress);
        // Redirect to dashboard
        router.push(`/dashboard`);
      } else {
        setVerificationStatus("Failed");
        setError("Verification failed.");
      }
    } catch (err) {
      console.error("Error verifying recovery phrase:", err);
      setError("Error verifying recovery phrase.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      userInput.some((value) => !value.trim()) ||
      !walletName ||
      !walletAddress
    ) {
      setError("Seed phrase, wallet name, and wallet address are required.");
      return;
    }

    if (!isChecked) {
      setError("You must agree to the Terms of Use.");
      return;
    }

    handleVerify();
  };

  const toggleFieldVisibility = (fieldName) => {
    setShowSeedPhrase(!showSeedPhrase);
  };

  return (
    <div className="h-full md:px-4 py-4 flex flex-col">
      <HeaderEOA title="Import Existing Wallet " className="md:hidden block " />
      <div className="md:w-[70%] lg:w-[45%] xl:w-[35%] container mx-auto">
        <hr className="mt-6 w-auto" />

        <div className="text-center mx-auto mb-12 max-w-xl">
          <h1 className="items-center flex md:hidden gap-2 mx-2 text-xl font-bold mt-6">
            {" "}
            <Link href="/welcome">
              <BsArrowLeft />
            </Link>
            Import Existing Wallet
          </h1>
          <div className="md:hidden flex gap-4 mb-4 ml-2 font-bold text-lg items-center "></div>
          <h2 className="text-xl text-center font-bold mb-4 mt-8">
            Import Wallet From Secret Recovery Phrase
          </h2>
          <p className="mx-auto">
            Write down this 12-word secret recovery phrase after you can access
            your creso wallet.
          </p>
        </div>
        <h2 className="my-4 max-w-md font-bold md:mb-2 mb-1 mx-4">
          Secret Recovery Phrase
          <button
            type="button"
            className="text-[#FF4085] m-2 justify-end items-end font-normal"
            onClick={() => toggleFieldVisibility("seedPhrase")}
          >
            {showSeedPhrase ? "Hide" : "Show"}
          </button>
        </h2>

        <div className="rounded-3xl py-3 md:py-4 border grid grid-cols-3 md:px-5 mx-3 md:mx-auto">
          {userInput.map((value, index) => (
            <input
              key={index}
              type={showSeedPhrase ? "text" : "password"}
              className="rounded-full border text-center text-sm md:text-base break-words m-1 p-1 lg:p-2"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>

        <div className="my-4 px-4 mx-auto max-w-md">
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
              onChange={(e) => setWalletName(e.target.value)}
              placeholder="Enter Wallet Name"
              className="shadow appearance-none w-full py-5 px-4 text-gray-700 leading-tight border rounded-full"
            />
          </div>
          <div className="my-4 mx-auto max-w-md">
            <label
              htmlFor="walletAddress"
              className="block text-gray-700 font-bold md:mb-2 mb-1"
            >
              Wallet Address
            </label>
            <input
              type="text"
              id="WalletAddress"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="Enter Wallet Address"
              className="shadow appearance-none w-full py-5 px-4 text-gray-700 leading-tight border rounded-full"
            />
          </div>
        </div>

        <div className="items-center justify-center">
          <form className="mx-4" onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-center ">{error}</p>}
            <div className="flex items-center  my-6 pb-2">
              <CustomCheckbox checked={isChecked} onChange={setIsChecked} />
              <span className="ml-2">
                I agree to creso
                <span className="text-[#FF4085] ml-1">Terms of Use</span>
              </span>
            </div>

            <div className="text-center  w-full rounded-full border border-black bg-white text-black hover:bg-black hover:text-white cursor-pointer">
              <button className="p-2.5" type="submit">
                Verify
              </button>{" "}
            </div>
            {verificationStatus && (
              <p
                className={
                  verificationStatus === "Success"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {verificationStatus === "Success"
                  ? "Recovery phrase verified successfully."
                  : "Failed to verify recovery phrase."}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ImportWallet;

// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import HeaderEOA from "@/components/common/HeaderEOA";
// import { BsArrowLeft } from "react-icons/bs";
// import { importEOAWalletApi } from "@/clientApi/auth";
// import CustomCheckbox from "@/components/CustomCheckbox";

// function ImportWallet() {
//   const seedPhraseLength = 12;
//   const [userInput, setUserInput] = useState(Array(seedPhraseLength).fill(""));
//   const [error, setError] = useState("");
//   const [showSeedPhrase, setShowSeedPhrase] = useState(false);
//   const [isChecked, setIsChecked] = useState(true);
//   const [verificationStatus, setVerificationStatus] = useState("");
//   const [walletName, setWalletName] = useState("");
//   const [walletAddress, setWalletAddress] = useState("");

//   useEffect(() => {
//     // Retrieve data from localStorage
//     const storedWalletName = localStorage.getItem("walletName");
//     const storedWalletAddress = localStorage.getItem("walletAddress");
//     const storedSeedPhrase = localStorage.getItem("seedPhrase");

//     // Update states if data exists
//     if (storedWalletName && storedWalletAddress && storedSeedPhrase) {
//       setWalletName(storedWalletName);
//       setWalletAddress(storedWalletAddress);
//       setUserInput(storedSeedPhrase.split(" "));
//     }
//   }, []);

//   const handleInputChange = (index, value) => {
//     const newUserInput = [...userInput];
//     newUserInput[index] = value;
//     setUserInput(newUserInput);
//   };

//   const handleVerify = async () => {
//     try {
//       // Retrieve stored data from localStorage
//       const storedSeedPhrase = localStorage.getItem("seedPhrase");
//       const storedWalletName = localStorage.getItem("walletName");
//       const storedWalletAddress = localStorage.getItem("walletAddress");
//       const authToken = localStorage.getItem("authToken");

//       // Verify user input with stored data
//       if (
//         userInput.join(" ") === storedSeedPhrase &&
//         walletName === storedWalletName &&
//         walletAddress === storedWalletAddress
//       ) {
//         // If verification is successful, call import wallet API
//         const res = await importEOAWalletApi({
//           walletName: walletName,
//           walletAddress: walletAddress,
//           formData: userInput.join(" "),
//           authToken: authToken,
//         });
//         // Log response data to console
//         console.log("Import wallet response:", res.data);
//         if (res?.data?.data?.message === "Successfully import EOA wallet") {
//           // If wallet import is successful, redirect to dashboard
//           router.push(`/dashboard`);
//         }
//       } else {
//         setVerificationStatus("Failed");
//         setError("Verification failed.");
//       }
//     } catch (err) {
//       console.error("Error verifying recovery phrase:", err);
//       // Handle error
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     // Check if seed phrase, wallet name, and wallet address are not empty
//     if (
//       userInput.some((value) => !value.trim()) ||
//       !walletName ||
//       !walletAddress
//     ) {
//       setError("Seed phrase, wallet name, and wallet address are required.");
//       return;
//     }

//     // Check if checkbox is checked
//     if (!isChecked) {
//       setError("You must agree to the Terms of Use.");
//       return;
//     }

//     // Verify the user's input
//     handleVerify();
//   };

//   const toggleFieldVisibility = (fieldName) => {
//     setShowSeedPhrase(!showSeedPhrase);
//   };

//   return (
//     <div className="h-full md:px-4 py-4 flex flex-col">
//       <HeaderEOA title="Import Existing Wallet " className="md:hidden block " />
//       <div className="md:w-[70%] lg:w-[45%] xl:w-[35%] container mx-auto">
//         <hr className="mt-6 w-auto" />

//         <div className="text-center mx-auto mb-12 max-w-xl">
//           <h1 className="items-center flex md:hidden gap-2 mx-2 text-xl font-bold mt-6">
//             {" "}
//             <Link href="/welcome">
//               <BsArrowLeft />
//             </Link>
//             Import Existing Wallet
//           </h1>
//           <div className="md:hidden flex gap-4 mb-4 ml-2 font-bold text-lg items-center "></div>
//           <h2 className="text-xl text-center font-bold mb-4 mt-8">
//             Import Wallet From Secret Recovery Phrase
//           </h2>
//           <p className="mx-auto">
//             Write down this 12-word secret recovery phrase and password after
//             you can access your creso wallet.
//           </p>
//         </div>
//         <h2 className="my-4 max-w-md font-bold md:mb-2 mb-1 mx-4">
//           Secret Recovery Phrase
//           <button
//             type="button"
//             className="text-[#FF4085] m-2 justify-end items-end font-normal"
//             onClick={() => toggleFieldVisibility("seedPhrase")}
//           >
//             {showSeedPhrase ? "Hide" : "Show"}
//           </button>
//         </h2>

//         <div className="rounded-3xl py-3 md:py-4 border grid grid-cols-3 md:px-5 mx-3 md:mx-auto">
//           {userInput.map((value, index) => (
//             <input
//               key={index}
//               type={showSeedPhrase ? "text" : "password"}
//               className="rounded-full border text-center text-sm md:text-base break-words m-1 p-1 lg:p-2"
//               value={value}
//               onChange={(e) => handleInputChange(index, e.target.value)}
//             />
//           ))}
//         </div>

//         {/* Wallet Name and Address */}
//         <div className="my-4 px-4 mx-auto max-w-md">
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
//               onChange={(e) => setWalletName(e.target.value)}
//               placeholder="Enter Wallet Name"
//               className="shadow appearance-none w-full py-5 px-4 text-gray-700 leading-tight border rounded-full"
//             />
//           </div>
//           <div className="my-4 mx-auto max-w-md">
//             <label
//               htmlFor="walletAddress"
//               className="block text-gray-700 font-bold md:mb-2 mb-1"
//             >
//               Wallet Address
//             </label>
//             <input
//               type="text"
//               id="WalletAddress"
//               value={walletAddress}
//               onChange={(e) => setWalletAddress(e.target.value)}
//               placeholder="Enter Wallet Address"
//               className="shadow appearance-none w-full py-5 px-4 text-gray-700 leading-tight border rounded-full"
//             />
//           </div>
//         </div>

//         <div className="items-center justify-center">
//           <form className="mx-4" onSubmit={handleSubmit}>
//             {error && <p className="text-red-500 text-center ">{error}</p>}
//             {/* Terms of Use */}
//             <div className="flex items-center   pb-2">
//               <CustomCheckbox checked={isChecked} onChange={setIsChecked} />
//               <span className="ml-2">
//                 I agree to creso
//                 <span className="text-[#FF4085] ml-1">Terms of Use</span>
//               </span>
//             </div>

//             <div className="text-center  w-full rounded-full border border-black bg-white text-black hover:bg-black hover:text-white cursor-pointer">
//               <button className="p-2.5" onClick={handleVerify}>
//                 Verify
//               </button>
//             </div>
//             {verificationStatus && (
//               <p
//                 className={
//                   verificationStatus === "Success"
//                     ? "text-green-500"
//                     : "text-red-500"
//                 }
//               >
//                 {verificationStatus === "Success"
//                   ? "Recovery phrase verified successfully."
//                   : "Failed to verify recovery phrase."}
//               </p>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ImportWallet;
