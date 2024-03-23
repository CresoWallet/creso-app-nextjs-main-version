// "use client";
// import React, { useState } from "react";
// import lockpassword1 from "../../assets/eoa/Lockpassword1.png";
// import lock2 from "../../assets/eoa/Lock2.png";
// import phone1 from "../../assets/eoa/Phone1.png";
// import CommonComponent from "@/components/common/CommonEOA";

// function ConfirmRecovery() {
//   const secretPhrase = [
//     "apple",
//     "banana",
//     "orange",
//     "grape",
//     "peach",
//     "mango",
//     "pine",
//     "water",
//     "berry",
//     "blue",
//     "peach",
//     "kiwi",
//   ];

//   // Randomly select 5 to 6 indexes to remove
//   const removedIndexes = [];

//   while (removedIndexes.length < Math.floor(Math.random() * 2) + 5) {
//     const index = Math.floor(Math.random() * secretPhrase.length);
//     if (!removedIndexes.includes(index)) {
//       removedIndexes.push(index);
//     }
//   }

//   const initialUserInput = Array(secretPhrase.length).fill("");
//   const [userInput, setUserInput] = useState(initialUserInput);
//   const [error, setError] = useState("");

//   const handleInputChange = (index, value) => {
//     const newUserInput = [...userInput];
//     newUserInput[index] = value;
//     setUserInput(newUserInput);
//   };

//   const handleConfirm = () => {
//     for (let i = 0; i < removedIndexes.length; i++) {
//       const index = removedIndexes[i];
//       if (secretPhrase[index] !== userInput[index]) {
//         setError("Incorrect phrase. Please try again.");
//         return;
//       }
//     }
//     setError("");
//     alert("Confirmed!");
//   };

//   return (
//     <div className=" h-full md:px-4  py-4 flex flex-col ">
//       <CommonComponent
//         title="Create EOA Wallet"
//         imageSrc1={lockpassword1}
//         color1="black"
//         hrColor1="black"
//         borderColor1="black"
//         imageSrc2={lock2}
//         color2="black"
//         borderColor2="black"
//         textColor2="text-black"
//         hrColor2="black"
//         imageSrc3={phone1}
//         color3="[#D0F500]"
//         textColor3="text-black"
//         borderColor3="black"
//       />
//       <div className=" md:w-[70%] lg:w-[45%] xl:w-[35%] container mx-auto ">
//         <hr className="mt-6 w-auto  " />

//         <div className="text-center mx-auto mb-12 max-w-xl">
//           <h2 className="text-xl text-center font-bold mb-4 mt-8">
//             Write down your Secret Recovery Phrase
//           </h2>
//           <p className="mx-auto">
//             Write down this 12-word secret recovery phrase and save it in a
//             place that you trust and only you can access.
//           </p>
//         </div>

//         <div className=" rounded-3xl  py-3 md:py-4 border grid grid-cols-3 md:px-5 mx-3 md:mx-auto">
//           {secretPhrase.map((word, index) => (
//             <div
//               key={index}
//               className={`rounded-full border text-center text-sm md:text-base break-words  m-1 p-1 lg:p-2 md:my-1.5 ${
//                 removedIndexes.includes(index) ? "" : "bg-[#A66CFF]"
//               } `}
//             >
//               <span>{word.slice(0, 8)}</span>
//             </div>
//           ))}
//         </div>
//         {error && <p className="text-red-500 text-center ">{error}</p>}
//         <div className="text-center mt-20 w-full rounded-full border border-black  bg-black text-white cursor-pointer">
//           <button className="p-2.5" onClick={handleConfirm}>
//             Confirm
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ConfirmRecovery;

"use client";
import React, { useState, useEffect } from "react";
import lockpassword1 from "../../assets/eoa/TempLockpassword1.png";
import lock2 from "../../assets/eoa/Lock2.png";
import phone1 from "../../assets/eoa/Phone1.png";
import CommonComponent from "@/components/common/CommonEOA";
import Link from "next/link";
import CustomButton4 from "@/components/CustomButton4";
import { useRouter } from "next/navigation";
import useEncryption from "@/components/EncryptData/EncryptData";
import { useDispatch, useSelector } from "react-redux";

import {
  setStoredSeedPhrase,
  selectStoredSeedPhrase,
} from "@/store/sha256HashSlice";
import { createHash } from "crypto";
function ConfirmRecovery() {
  const { encryptData, decryptData } = useEncryption();
  const [removedPhrases, setRemovedPhrases] = useState([]);
  // const [userInput, setUserInput] = useState(
  //   Array(secretPhrase.length).fill("")
  // );
  const [seedPhraseData, setseedPhraseData] = useState(
    Array(12)
      .fill("")
      .map((word) => ({ word, revealed: false }))
  );
  // console.log("🚀 ~ ConfirmRecovery ~ seedPhraseData:", seedPhraseData);
  const [error, setError] = useState("");
  const navigation = useRouter();
  const [readOnly, setReadOnly] = useState(true);
  const getStoredSeedPhrase = useSelector(selectStoredSeedPhrase);
  const dispatch = useDispatch();

  useEffect(() => {
    const numToRemove = Math.floor(Math.random() * 2) + 3;
    const removedPhrases = [];
    while (removedPhrases.length < numToRemove) {
      const index =
        seedPhraseData && Math.floor(Math.random() * seedPhraseData.length);
      if (!removedPhrases.includes(index)) {
        removedPhrases.push(index);
      }
    }
    setRemovedPhrases(removedPhrases);

    const storedSeedPhrase = localStorage.getItem("seedPhrase");
    const seedPhraseArray = storedSeedPhrase.split(" ");

    const phrasesWithRevealed = seedPhraseArray.map((word, index) => {
      if (removedPhrases.includes(index)) {
        return {
          word: "",
          revealed: false,
        };
      } else {
        return {
          word,
          revealed: true,
        };
      }
    });

    setseedPhraseData(phrasesWithRevealed);
  }, []);

  const handleInputChange = (index, value) => {
    setseedPhraseData((prevSeedPhraseData) => {
      const newUserInput = [...prevSeedPhraseData];
      newUserInput[index] = { ...newUserInput[index], word: value };
      return newUserInput;
    });

    // setseedPhraseData(...seedPhraseData,value)
  };

  const generateSHA256Hash = (data) => {
    if (data === null) {
      console.error("Data is null");
      return null; // or handle the case appropriately
    }

    const hash = createHash("sha256");
    hash.update(data);
    return hash.digest("hex");
  };

  const handleConfirm = () => {
    const deStoredSeedPhrase = localStorage.getItem("seedPhrase");
    const walletPassword = localStorage.getItem("walletPassword");
    // const storedSeedPhrase = decryptData(deStoredSeedPhrase).seeds;
    const storedSeedPhrase = deStoredSeedPhrase;
    for (let i = 0; i < removedPhrases.length; i++) {
      const storedSeedPhraseAry = storedSeedPhrase.split(" ");
      const index = removedPhrases[i];
      console.log("local", storedSeedPhraseAry, "user", seedPhraseData);
      if (seedPhraseData[index].word !== storedSeedPhraseAry[index]) {
        setError("Incorrect phrase. Please try again.");
        return;
      }
    }
    setError("");
    setReadOnly(true); // Disable editing after confirmation
    // Persist removedPhrases and readOnly if needed
    // For now, I'm just alerting "Confirmed!"
    // const sha256Hash = generateSHA256Hash(storedSeedPhrase);
    // console.log("🚀 ~ handleRevealClick ~ sha256Hash:", sha256Hash);
    const encryptedData = encryptData(deStoredSeedPhrase, walletPassword);

    dispatch(setStoredSeedPhrase(encryptedData));
    localStorage.setItem("encryptedSeedPhrase", encryptedData);
    localStorage.removeItem("seedPhrase");
    navigation.push("/completion");
  };

  return (
    <div className="h-full md:px-4 py-4 flex flex-col">
      <CommonComponent
        title="Create EOA Wallet"
        imageSrc1={lockpassword1}
        color1="black"
        hrColor1="black"
        borderColor1="black"
        imageSrc2={lock2}
        color2="black"
        borderColor2="black"
        textColor2="text-black"
        hrColor2="black"
        imageSrc3={phone1}
        color3="[#D0F500]"
        textColor3="text-black"
        borderColor3="black"
      />
      <div className="md:w-[70%] lg:w-[45%] xl:w-[35%] container mx-auto">
        <hr className="mt-6 w-auto" />
        <div className="text-center mx-auto mb-12 max-w-xl">
          <h2 className="text-xl text-center font-bold mb-4 mt-8">
            Write down your Secret Recovery Phrase
          </h2>
          <p className="mx-auto">
            Write down this 12-word secret recovery phrase and save it in a
            place that you trust and only you can access.
          </p>
        </div>
        <div className="rounded-3xl py-3 md:py-4 border grid grid-cols-3 md:px-5 mx-3 md:mx-auto">
          {seedPhraseData.map((item, index) => (
            <input
              key={index}
              type="text"
              className={`rounded-full border text-center text-sm md:text-base break-words m-1 p-1 border-black lg:p-2 ${
                removedPhrases.includes(index)
                  ? ""
                  : "bg-[#A66CFF] cursor-pointer"
              }`}
              value={
                removedPhrases.includes(index) === false
                  ? item.revealed
                    ? item.word
                    : ""
                  : null
              }
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div
          className="text-center mt-20 w-full rounded-full border border-black bg-black text-white cursor-pointer"
          onClick={handleConfirm}
        >
          <button className="p-2.5">Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmRecovery;
