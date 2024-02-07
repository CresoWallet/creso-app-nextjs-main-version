// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import creso from "../../assets/eoa/cresoblack.svg";
// import confirm from "../../assets/eoa/confirmpassword.svg";
// import lockpassword1 from "../../assets/eoa/Lockpassword1.png";
// import lock2 from "../../assets/eoa/Lock2.png";
// import phone1 from "../../assets/eoa/Phone1.png";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import Currency from "../../assets/security/dollor2.png";
// import Language from "../../assets/security/language.png";

// function YourComponent() {
//   const secretPhrase = [
//     "apple",
//     "banana",
//     "orange",
//     "grape",
//     "peach",
//     "mango",
//     "pineapple",
//     "watermelon",
//     "strawberry",
//     "blueberry",
//     "raspberry",
//     "kiwi",
//   ];

//   // Randomly select 4 to 6 indexes to remove
//   const removedIndexes = [];
//   while (removedIndexes.length < Math.floor(Math.random() * 6) + 7) {
//     const index = Math.floor(Math.random() * secretPhrase.length);
//     if (!removedIndexes.includes(index)) {
//       removedIndexes.push(index);
//     }
//   }

//   // Initialize state for input words, user's input, and edit status
//   const [inputWords, setInputWords] = useState(
//     secretPhrase.map((word, index) =>
//       removedIndexes.includes(index) ? "" : word
//     )
//   );
//   const [userInput, setUserInput] = useState(
//     Array(removedIndexes.length).fill("")
//   );
//   const [editStatus, setEditStatus] = useState(
//     Array(removedIndexes.length).fill(true)
//   );
//   const [error, setError] = useState("");

//   // Handle click event to enable editing of a specific input field
//   const handleFieldClick = (index) => {
//     const newEditStatus = [...editStatus];
//     newEditStatus[index] = true;
//     setEditStatus(newEditStatus);
//   };

//   // Update user's input for removed words
//   const handleInputChange = (index, event) => {
//     const newValue = event.target.value;
//     const newInput = [...userInput];
//     newInput[index] = newValue;
//     setUserInput(newInput);
//   };

//   // Validate user's input
//   const handleDoneClick = () => {
//     for (let i = 0; i < removedIndexes.length; i++) {
//       const index = removedIndexes[i];
//       if (inputWords[index] !== userInput[i]) {
//         setError("Please fill in all the missing words correctly.");
//         return;
//       }
//     }
//     setError("");
//     // Proceed with further actions upon successful validation
//   };

//   return (
//     <div className="border-black border-2 mx-4 p-4 ">
//       <div className="flex flex-col max-w-lg mx-auto">
//         <div className="flex ">
//           <h1 className="grid grid-cols-3 text-3xl font-bold w-full text-center rounded-t-xl py-8 ">
//             <Image alt="" src={creso} className=" " />
//             Create EOA Wallet
//           </h1>
//           <div className="flex items-center gap-1">
//             <Image alt="" src={Language} className="w-6 h-6" />
//             <MdKeyboardArrowDown />
//             <p className="text-sm text-black">USD</p>
//             <MdKeyboardArrowDown />
//           </div>
//         </div>
//         <div className="text-xl text-center font-bold mb-4 mt-8">
//           <Image alt="" src={confirm} className="mx-auto" />
//         </div>

//         <div className="flex ">
//           <div className="flex flex-col">
//             <Image
//               alt=""
//               src={lockpassword1}
//               className="rounded-full bg-black border-black border-2 h-16 w-16 mx-2 p-4 "
//             />
//             <p className="text-sm font-semibold pt-3 ">Create Password</p>
//           </div>
//           <hr className="w-24 mt-7 border-black " />
//           <div className="flex flex-col">
//             <Image
//               alt=""
//               src={lock2}
//               className="rounded-full bg-black border-black border-2 h-16 w-16 mx-2 p-4 "
//             />
//             <p className="text-sm font-semibold pt-3">Secure Wallet</p>
//           </div>
//           <hr className="w-24 mt-7 border-black " />
//           <div className="flex flex-col">
//             <Image
//               alt=""
//               src={phone1}
//               className="rounded-full bg-[#D0F500] border-black border-2 h-16 w-16 mx-2 p-4 "
//             />
//             <p className="text-sm font-semibold  pt-3">Confirm Code</p>
//           </div>
//         </div>

//         <hr className="mt-6" />

//         <div className="my-10 mx-4 px-4">
//           <p className="text-xl text-center  mb-4 font-semibold my-8">
//             Write down your Secret Recovery Phrase
//           </p>
//           <p className="font-normal text-base my-8">
//             Write down this 12-word secret recovery phrase and save it in a
//             place that you trust and only you can access.
//           </p>
//         </div>

//         <div className="h-80 w-auto rounded-xl border border-black p-2 m-4 my-6 flex justify-center items-center flex-wrap gap-4">
//           {secretPhrase.map((word, index) => (
//             <div
//               key={index}
//               className="rounded-full border border-black bg-[#A66CFF] p-2 m-1"
//               style={{ width: "120px", textAlign: "center" }}
//               onClick={() => handleFieldClick(index)}
//             >
//               {removedIndexes.includes(index) && editStatus[index] ? (
//                 <input
//                   type="text"
//                   value={userInput[removedIndexes.indexOf(index)]}
//                   onChange={(event) =>
//                     handleInputChange(removedIndexes.indexOf(index), event)
//                   }
//                   className="bg-transparent border-none focus:outline-none w-full"
//                 />
//               ) : (
//                 word
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center">
//           <button
//             type="button"
//             className="px-14 py-4 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white"
//             onClick={handleDoneClick}
//           >
//             Done
//           </button>
//         </div>
//         {error && <p className="text-red-500 text-center mt-4">{error}</p>}
//       </div>
//     </div>
//   );
// }

// export default YourComponent;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import creso from "../../assets/eoa/cresoblack.svg";
import confirm from "../../assets/eoa/confirmpassword.svg";
import lockpassword1 from "../../assets/eoa/Lockpassword1.png";
import lock2 from "../../assets/eoa/Lock2.png";
import phone1 from "../../assets/eoa/Phone1.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import Currency from "../../assets/security/dollor2.png";
import Language from "../../assets/security/language.png";

function YourComponent() {
  const secretPhrase = [
    "apple",
    "banana",
    "orange",
    "grape",
    "peach",
    "mango",
    "pineapple",
    "watermelon",
    "strawberry",
    "blueberry",
    "raspberry",
    "kiwi",
  ];

  const [inputWords, setInputWords] = useState(
    secretPhrase.map((word, index) => ({
      word,
      edited: index < 6 ? false : true,
    }))
  );
  const [userInput, setUserInput] = useState(
    Array(secretPhrase.length).fill("")
  );
  const [error, setError] = useState("");

  const handleFieldClick = (index) => {
    const newInputWords = [...inputWords];
    newInputWords[index].edited = true;
    setInputWords(newInputWords);
  };

  const handleInputChange = (index, event) => {
    const newValue = event.target.value;
    const newUserInput = [...userInput];
    newUserInput[index] = newValue;
    setUserInput(newUserInput);
  };

  const handleDoneClick = () => {
    for (let i = 6; i < secretPhrase.length; i++) {
      if (inputWords[i].edited && inputWords[i].word !== userInput[i]) {
        setError("Please fill in all the missing words correctly.");
        return;
      }
    }
    setError("");
    // Proceed with further actions upon successful validation
  };

  return (
    <div className="border-black border-2 mx-4 p-4 ">
      <div className="flex flex-col max-w-lg mx-auto">
        <div className="flex ">
          <h1 className="grid grid-cols-3 text-3xl font-bold w-full text-center rounded-t-xl py-8 ">
            <Image alt="" src={creso} className=" " />
            Create EOA Wallet
          </h1>
          <div className="flex items-center gap-1">
            <Image alt="" src={Language} className="w-6 h-6" />
            <MdKeyboardArrowDown />
            <p className="text-sm text-black">USD</p>
            <MdKeyboardArrowDown />
          </div>
        </div>
        <div className="text-xl text-center font-bold mb-4 mt-8">
          <Image alt="" src={confirm} className="mx-auto" />
        </div>

        <div className="flex ">
          <div className="flex flex-col">
            <Image
              alt=""
              src={lockpassword1}
              className="rounded-full bg-black border-black border-2 h-16 w-16 mx-2 p-4 "
            />
            <p className="text-sm font-semibold pt-3 ">Create Password</p>
          </div>
          <hr className="w-24 mt-7 border-black " />
          <div className="flex flex-col">
            <Image
              alt=""
              src={lock2}
              className="rounded-full bg-black border-black border-2 h-16 w-16 mx-2 p-4 "
            />
            <p className="text-sm font-semibold pt-3">Secure Wallet</p>
          </div>
          <hr className="w-24 mt-7 border-black " />
          <div className="flex flex-col">
            <Image
              alt=""
              src={phone1}
              className="rounded-full bg-[#D0F500] border-black border-2 h-16 w-16 mx-2 p-4 "
            />
            <p className="text-sm font-semibold  pt-3">Confirm Code</p>
          </div>
        </div>

        <hr className="mt-6" />

        <div className="my-10 mx-4 px-4">
          <p className="text-xl text-center  mb-4 font-semibold my-8">
            Write down your Secret Recovery Phrase
          </p>
          <p className="font-normal text-base my-8">
            Write down this 12-word secret recovery phrase and save it in a
            place that you trust and only you can access.
          </p>
        </div>
        <div className="h-80 w-auto rounded-xl  border border-black p-2 m-4 my-6 flex justify-center items-center flex-wrap sm:gap-1 gap-4">
          {inputWords.map((item, index) => (
            <div
              key={index}
              className={`rounded-full border border-black p-2 md:m-1 ${
                item.edited ? "" : "bg-[#A66CFF]" // Add background color only for non-empty fields
              }`}
              style={{ width: "120px", textAlign: "center" }}
              onClick={() => handleFieldClick(index)}
            >
              {item.edited ? (
                <input
                  type="text"
                  value={userInput[index]}
                  onChange={(event) => handleInputChange(index, event)}
                  className={`bg-transparent border-none focus:outline-none w-full text-center ${
                    item.edited ? "text-black bg-white" : "" // Add this line to set styles for empty input fields
                  }`}
                />
              ) : (
                <span>
                  {index + 1}. {item.word}
                </span> // Display number before word
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="px-14 py-4 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white"
            onClick={handleDoneClick}
          >
            Confirm
          </button>
        </div>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default YourComponent;

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import lockpassword1 from "../../assets/eoa/Lockpassword1.png";
// import lock2 from "../../assets/eoa/Lock2.png";
// import phone1 from "../../assets/eoa/Phone1.png";
// import Header from "@/components/HeaderEOA";
// import confirm from "../../assets/eoa/confirmpassword.svg";

// function CreateEOAWallet() {
//   const secretPhrase = [
//     "apple",
//     "banana",
//     "orange",
//     "grape",
//     "peach",
//     "mango",
//     "pineapple",
//     "watermelon",
//     "strawberry",
//     "blueberry",
//     "raspberry",
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
//     setError(""); // Reset error message if no error
//     // Proceed with confirmation logic
//     alert("Confirmed!");
//   };

//   return (
//     <div className="border-black border-2 items-center justify-center h-full p-4 px-4 mx-4 py-4 flex flex-col ">
//       <Header title="Create EOA Wallet" />
//       <div className="text-xl text-center font-bold mb-4 mt-8">
//         <Image alt="" src={confirm} className="mx-auto" />
//       </div>
//       <div className="flex ">
//         <div className="flex flex-col">
//           <Image
//             alt=""
//             src={lockpassword1}
//             className="rounded-full bg-black border-black border-2 h-16 w-16 mx-2 p-4 "
//           />
//           <p className="text-sm font-semibold pt-3 ">Create Password</p>
//         </div>
//         <hr className="w-24 mt-7 border-black " />
//         <div className="flex flex-col">
//           <Image
//             alt=""
//             src={lock2}
//             className="rounded-full bg-black border-black border-2 h-16 w-16 mx-2 p-4 "
//           />
//           <p className="text-sm font-semibold pt-3">Secure Wallet</p>
//         </div>
//         <hr className="w-24 mt-7 " />
//         <div className="flex flex-col">
//           <Image
//             alt=""
//             src={phone1}
//             className="rounded-full bg-[#D0F500] border-black border-2 h-16 w-16 mx-2 p-4 "
//           />
//           <p className="text-sm font-semibold text-gray-400 pt-3">
//             Confirm Code
//           </p>
//         </div>
//       </div>

//       <hr className="mt-6" />

//       <div className="my-4 mx-4 px-4">
//         <p className="text-xl text-center  mb-4 font-semibold my-8">
//           Write down your Secret Recovery Phrase
//         </p>
//         <p className="font-normal text-base my-8">
//           Write down this 12-word secret recovery phrase and save it in a place
//           that you trust and only you can access.
//         </p>
//       </div>

//       <div className="h-80 rounded-xl border border-black p-2 m-4 my-6 flex justify-center items-center flex-wrap sm:gap-1 gap-2">
//         {secretPhrase.map((word, index) => (
//           <div
//             key={index}
//             className={`rounded-full border text-center border-black p-2 md:m-1 ${
//               removedIndexes.includes(index) ? "" : "bg-[#A66CFF]"
//             } h-10 w-12`}
//             style={{
//               minWidth: "25%",
//               textAlign: "center",
//               position: "relative",
//             }} // Added position: 'relative'
//           >
//             <span>{index + 1}.</span>
//             {removedIndexes.includes(index) ? (
//               <input
//                 type="text"
//                 onChange={(e) => handleInputChange}
//                 style={{ marginLeft: "20px", width: "calc(100% - 20px)" }} // Added style for positioning the input box
//               />
//             ) : (
//               word
//             )}
//           </div>
//         ))}
//       </div>

//       {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//       <div className="flex justify-center">
//         <button
//           type="button"
//           className="px-14 py-4 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white"
//           onClick={handleConfirm}
//         >
//           Confirm
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CreateEOAWallet;
