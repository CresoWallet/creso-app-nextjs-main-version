"use client";
import React, { useState, useEffect, useContext } from "react";
import lockpassword1 from "../../assets/eoa/Lockpassword1.png";
import lock1 from "../../assets/eoa/Lock1.png";
import phone from "../../assets/eoa/Phone.png";
import CommonComponent from "@/components/common/CommonEOA";
import { HiOutlineEye } from "react-icons/hi2";
import { createEOAWalletApi } from "@/clientApi/auth";
import { MdOutlineFileCopy } from "react-icons/md";
import CustomButton4 from "@/components/CustomButton4";
import Link from "next/link";
import { WalletContext } from "@/providers/WalletProvider";
import { createHash } from "crypto";
import {
  setStoredSeedPhrase,
  selectStoredSeedPhrase,
} from "@/store/sha256HashSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import useEncryption from "@/components/EncryptData/EncryptData";
import instanceEnDe from "@/components/EncryptData/BaseURL";

function ReviewRecovery() {
  const { encryptData, decryptData } = useEncryption();
  const dispatch = useDispatch();
  const navigation = useRouter();
  const getStoredSeedPhrase = useSelector(selectStoredSeedPhrase);
  const [hideSeed, setHideSeed] = useState(false);
  console.log(
    "🚀 ~ ReviewRecovery ~ getStoredSeedPhrase:",
    getStoredSeedPhrase
  );

  const [revealed, setRevealed] = useState(false);
  const [recoveryPhrases, setRecoveryPhrases] = useState(
    Array(12)
      .fill("")
      .map((word) => ({ word, revealed: false }))
  );
  // const { seedPhrase, setSeedPhrase } = useContext(WalletContext);
  // const seedPhrasecreateHash = recoveryPhrases;
  const generateSHA256Hash = (data) => {
    if (data === null) {
      console.error("Data is null");
      return null; // or handle the case appropriately
    }

    const hash = createHash("sha256");
    hash.update(data);
    return hash.digest("hex");
  };
  // const generateSHA256Hash = (data) => {
  //   const hash = createHash('sha256');
  //   hash.update(data);
  //   return hash.digest('hex');
  // };
  const handleConfirmClick = () => {
    const deStoredSeedPhrase = localStorage.getItem("seedPhrase");
    if (deStoredSeedPhrase || revealed) {
      navigation.push("/confirm-recovery-pharse");
    } else {
      alert("Reveal Seeds");
    }
  };
  const handleRevealClick = async (e) => {
    console.log("true or false", e.target.textContent);
    if (e.target.textContent === "Hide Secret Recovery Phrase") {
      setHideSeed(true);
    } else {
      setHideSeed(false);
    }
    const deStoredSeedPhrase = localStorage.getItem("seedPhrase");
    // const storedWalletAddress = localStorage.getItem("walletAddress");
    const storedWalletName = localStorage.getItem("walletName");
    if (deStoredSeedPhrase) {
      const storedSeedPhrase = decryptData(deStoredSeedPhrase).seeds;
      // Seed phrase already exists in local storage
      const seedPhraseArray = storedSeedPhrase.split(" ");

      const phrasesWithRevealed = seedPhraseArray.map((word) => ({
        word,
        revealed: true,
      }));

      setRecoveryPhrases(phrasesWithRevealed);
      setRevealed(true);

      const sha256Hash = generateSHA256Hash(storedSeedPhrase);
      console.log("🚀 ~ handleRevealClick ~ sha256Hash:", sha256Hash);
      dispatch(setStoredSeedPhrase(sha256Hash));
    } else {
      // Seed phrase doesn't exist in local storage, make API call
      try {
        console.log("Calling createEOAWalletApi...");
        const res = await createEOAWalletApi({
          walletName: storedWalletName,
        });
        console.log("createEOAWalletApi response:", res);
        const { data } = res;
        console.log(data?.data, "<------------handleRevealClick Data");

        // Update local storage with the newly generated seed phrase
        const enSeedPharsh = encryptData(
          JSON.stringify({
            seeds: data?.data?.seedPhrase,
          })
        );
        // console.log("encrypt-------------------->", enSeedPharsh);
        localStorage.setItem("seedPhrase", enSeedPharsh);
        localStorage.setItem("walletAddress", data?.data?.walletAddress);

        const SeedPhrase = data?.data?.seedPhrase || "";
        console.log("🚀 ~ handleRevealClick ~ SeedPhrase:", SeedPhrase);
        if (SeedPhrase.length > 0) {
          const seedPhraseArray = SeedPhrase.split(" ");

          const phrasesWithRevealed = seedPhraseArray.map((word) => ({
            word,
            revealed: true,
          }));

          setRecoveryPhrases(phrasesWithRevealed);
          setRevealed(true);

          const sha256Hash = generateSHA256Hash(SeedPhrase);
          console.log("🚀 ~ ReviewRecovery ~ sha256Hash:", sha256Hash);
          dispatch(setStoredSeedPhrase(sha256Hash));
        } else {
          console.error("Seed phrase is empty or not provided.");
        }
      } catch (err) {
        console.error("Error fetching recovery phrases:", err);
      }
    }
  };

  return (
    <div className=" h-full md:px-4  py-4 flex flex-col ">
      <CommonComponent
        title="Create EOA Wallet"
        imageSrc1={lockpassword1}
        color1="black"
        hrColor1="black"
        borderColor1="white"
        imageSrc2={lock1}
        color2="[#D0F500]"
        borderColor2="black"
        textColor2="text-black"
        hrColor2="black"
        imageSrc3={phone}
        color3="white"
        textColor3="gray-300"
        borderColor3="grey-300"
      />
      <div className=" md:w-[70%] lg:w-[45%] xl:w-[35%] container mx-auto ">
        <hr className="mt-2 w-auto  " />

        <div className="text-center mx-auto mb-4 max-w-xl">
          <h2 className="text-xl text-center font-bold mb-4 mt-8">
            Write down your Secret Recovery Phrase
          </h2>
          <p className="mx-auto">
            Write down this 12-word secret recovery phrase and save it in a
            place that you trust and only you can access.
          </p>
        </div>

        <div
          className={`rounded-3xl mx-3 md:mx-auto py-3 md:py-4 border grid grid-cols-3  md:px-5 relative `}
        >
          {recoveryPhrases.map((phraseObj, index) => (
            <div
              key={index}
              className={`rounded-full border text-center text-sm md:text-base break-words  m-1 p-1 lg:p-2 md:my-1.5  ${
                hideSeed
                  ? "blur-sm bg-black opacity-[10%] text-white"
                  : revealed
                  ? "bg-[#A66CFF] border-black"
                  : "blur-sm bg-black opacity-[10%] text-white"
              }`}
              style={{ minWidth: "25%", textAlign: "center" }}
            >
              {`${index + 1}. ${phraseObj.word}`}
            </div>
          ))}
          {(!revealed || hideSeed) && (
            <div className="absolute flex flex-col justify-center items-center inset-0">
              <div className="text-4xl">
                <HiOutlineEye />
              </div>
              <p className="my-4 text-sm">Make sure nobody Looking</p>
            </div>
          )}
        </div>
        {/* <div className="my-4 flex gap-2 justify-end items-center">
          {revealed && (
            <>
              <MdOutlineFileCopy />
              <p>copy to clipboard</p>
            </>
          )}
        </div> */}

        <div className="text-center mt-20 w-full rounded-full border border-black  bg-black text-white cursor-pointer">
          <button className="p-2.5" onClick={(e) => handleRevealClick(e)}>
            {hideSeed
              ? "Reveal Secret Recovery Phrase"
              : revealed
              ? "Hide Secret Recovery Phrase"
              : "Reveal Secret Recovery Phrase"}
          </button>
        </div>
        {revealed ? (
          <CustomButton4
            padding="px-14 py-4"
            className="rounded-full border border-black bg-white text-black hover:bg-black hover:text-white focus:outline-none"
          >
            <div onClick={handleConfirmClick} className="">
              Confirm
            </div>
          </CustomButton4>
        ) : null}
      </div>
    </div>
  );
}

export default ReviewRecovery;

// "use client";
// import React, { useState, useEffect, useContext } from "react";
// import lockpassword1 from "../../assets/eoa/Lockpassword1.png";
// import lock1 from "../../assets/eoa/Lock1.png";
// import phone from "../../assets/eoa/Phone.png";
// import CommonComponent from "@/components/common/CommonEOA";
// import { HiOutlineEye } from "react-icons/hi2";
// import { createEOAWalletApi } from "@/clientApi/auth";
// import { MdOutlineFileCopy } from "react-icons/md";
// import CustomButton4 from "@/components/CustomButton4";
// import Link from "next/link";
// import { WalletContext } from "@/providers/WalletProvider";
// import { encryptData, decryptData } from "@/utils/encryption";

// function ReviewRecovery() {
//   const [revealed, setRevealed] = useState(false);
//   const [recoveryPhrases, setRecoveryPhrases] = useState(
//     Array(12)
//       .fill("")
//       .map((word) => ({ word, revealed: false }))
//   );
//   const { seedPhrase, setSeedPhrase } = useContext(WalletContext);

//   const handleRevealClick = async () => {
//     const storedSeedPhrase = localStorage.getItem("seedPhrase");
//     const storedWalletAddress = localStorage.getItem("walletAddress");
//     const storedWalletName = localStorage.getItem("walletName");

//     if (storedSeedPhrase) {
//       // Seed phrase already exists in local storage
//       const decryptedSeedPhrase = await decryptStoredData(storedSeedPhrase);
//       // Decrypt and display the seed phrase
//       console.log("Decrypted Seed Phrase:", decryptedSeedPhrase);
//       // Seed phrase already exists in local storage
//       const seedPhraseArray = decryptedSeedPhrase.split(" ");

//       const phrasesWithRevealed = seedPhraseArray.map((word) => ({
//         word,
//         revealed: true,
//       }));

//       setRecoveryPhrases(phrasesWithRevealed);
//       setRevealed(true);
//     } else {
//       // Seed phrase doesn't exist in local storage, make API call
//       try {
//         console.log("Calling createEOAWalletApi...");
//         const res = await createEOAWalletApi({
//           walletName: storedWalletName,
//         });
//         console.log("createEOAWalletApi response:", res);
//         const { data } = res;
//         console.log(data?.data, "<------------handleRevealClick Data");

//         // Encrypt and store the seed phrase in local storage
//         const encryptedSeedPhrase = await encryptData(
//           data?.data?.seedPhrase,
//           "your-secret-key"
//         );
//         localStorage.setItem("seedPhrase", encryptedSeedPhrase);

//         localStorage.setItem("walletAddress", data?.data?.walletAddress);

//         const SeedPhrase = data?.data?.seedPhrase || "";
//         if (SeedPhrase.length > 0) {
//           const seedPhraseArray = SeedPhrase.split(" ");

//           const phrasesWithRevealed = seedPhraseArray.map((word) => ({
//             word,
//             revealed: true,
//           }));

//           setRecoveryPhrases(phrasesWithRevealed);
//           setRevealed(true);
//         } else {
//           console.error("Seed phrase is empty or not provided.");
//         }
//       } catch (err) {
//         console.error("Error fetching recovery phrases:", err);
//       }
//     }
//   };
//   // Function to decrypt stored data
//   const decryptStoredData = async (encryptedData) => {
//     try {
//       const decryptedData = await decryptData(
//         encryptedData,
//         "your-secret-key" /* IV */
//       );
//       return decryptedData;
//     } catch (error) {
//       console.error("Error decrypting data:", error);
//       throw new Error("Decryption failed");
//     }
//   };
//   return (
//     <div className=" h-full md:px-4  py-4 flex flex-col ">
//       <CommonComponent
//         title="Create EOA Wallet"
//         imageSrc1={lockpassword1}
//         color1="black"
//         hrColor1="black"
//         borderColor1="white"
//         imageSrc2={lock1}
//         color2="[#D0F500]"
//         borderColor2="black"
//         textColor2="text-black"
//         hrColor2="black"
//         imageSrc3={phone}
//         color3="white"
//         textColor3="gray-300"
//         borderColor3="grey-300"
//       />
//       <div className=" md:w-[70%] lg:w-[45%] xl:w-[35%] container mx-auto ">
//         <hr className="mt-2 w-auto  " />

//         <div className="text-center mx-auto mb-4 max-w-xl">
//           <h2 className="text-xl text-center font-bold mb-4 mt-8">
//             Write down your Secret Recovery Phrase
//           </h2>
//           <p className="mx-auto">
//             Write down this 12-word secret recovery phrase and save it in a
//             place that you trust and only you can access.
//           </p>
//         </div>

//         <div
//           className={`rounded-3xl mx-3 md:mx-auto py-3 md:py-4 border grid grid-cols-3  md:px-5 relative `}
//         >
//           {recoveryPhrases.map((phraseObj, index) => (
//             <div
//               key={index}
//               className={`rounded-full border text-center text-sm md:text-base break-words  m-1 p-1 lg:p-2 md:my-1.5  ${
//                 revealed
//                   ? "bg-[#A66CFF] border-black"
//                   : "blur-sm bg-black opacity-[10%] text-white"
//               }`}
//               style={{ minWidth: "25%", textAlign: "center" }}
//             >
//               {`${index + 1}. ${phraseObj.word}`}
//             </div>
//           ))}
//           {!revealed && (
//             <div className="absolute flex flex-col justify-center items-center inset-0">
//               <div className="text-4xl">
//                 <HiOutlineEye />
//               </div>
//               <p className="my-4 text-sm">Make sure nobody Looking</p>
//             </div>
//           )}
//         </div>
//         {/* <div className="my-4 flex gap-2 justify-end items-center">
//           {revealed && (
//             <>
//               <MdOutlineFileCopy />
//               <p>copy to clipboard</p>
//             </>
//           )}
//         </div> */}

//         <div className="text-center mt-20 w-full rounded-full border border-black  bg-black text-white cursor-pointer">
//           <button className="p-2.5" onClick={handleRevealClick}>
//             {revealed
//               ? "Hide Secret Recovery Phrase"
//               : "Reveal Secret Recovery Phrase"}
//           </button>
//         </div>
//         <CustomButton4
//           padding="px-14 py-4"
//           className="rounded-full border border-black bg-white text-black hover:bg-black hover:text-white focus:outline-none"
//         >
//           <Link href="/completion">Confirm</Link>
//         </CustomButton4>
//       </div>
//     </div>
//   );
// }

// export default ReviewRecovery;
