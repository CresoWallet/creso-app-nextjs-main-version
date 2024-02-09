"use client";
// import React, { useState } from "react";
// import lockpassword1 from "../../assets/eoa/Lockpassword1.png";
// import lock2 from "../../assets/eoa/Lock2.png";
// import phone1 from "../../assets/eoa/Phone1.png";
// import CommonComponent from "@/components/CommonEOA";

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
//     setError("");
//     alert("Confirmed!");
//   };

//   return (
//     <div className="border-black border-2 h-full p-4 px-4 mx-4 py-4 flex flex-col ">
//       <CommonComponent
//         title="Create EOA Wallet"
//         imageSrc1={lockpassword1}
//         imageSrc2={lock2}
//         imageSrc3={phone1}
//         color1="black"
//         color2="black"
//         color3="[#D0F500]"
//         hrColor1="black"
//         hrColor2="black"
//         borderColor1="black"
//         borderColor2="black"
//         textColor1="black"
//         textColor2="black"
//       />
//       <hr className="mt-6 w-auto  " />

//       <div className="text-center mx-auto mb-4 max-w-xl">
//         <h2 className="text-xl text-center font-bold mb-4 mt-8">
//           Write down your Secret Recovery Phrase
//         </h2>
//         <p className="mx-auto">
//           Write down this 12-word secret recovery phrase and save it in a place
//           that you trust and only you can access.
//         </p>
//       </div>

//       <div className="relative h-80 w-auto rounded-xl  my-16  border border-black flex justify-center items-center flex-wrap sm:gap-1 gap-2">
//         {secretPhrase.map((word, index) => (
//           <div
//             key={index}
//             className={`rounded-full border text-center border-black p-2 md:m-1 ${
//               removedIndexes.includes(index) ? "" : "bg-[#A66CFF]"
//             } h-10 w-12`}
//             style={{
//               minWidth: "25%",
//               textAlign: "center",
//             }}
//           >
//             {removedIndexes.includes(index) ? (
//               <input type="text" />
//             ) : (
//               <span>{word}</span>
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
import React, { useState } from "react";
import lockpassword1 from "../../assets/eoa/Lockpassword1.png";
import lock2 from "../../assets/eoa/Lock2.png";
import phone1 from "../../assets/eoa/Phone1.png";
import CommonComponent from "@/components/common/CommonEOA";

function CreateEOAWallet() {
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

  // Randomly select 5 to 6 indexes to remove
  const removedIndexes = [];
  while (removedIndexes.length < Math.floor(Math.random() * 2) + 5) {
    const index = Math.floor(Math.random() * secretPhrase.length);
    if (!removedIndexes.includes(index)) {
      removedIndexes.push(index);
    }
  }

  const initialUserInput = Array(secretPhrase.length).fill("");
  const [userInput, setUserInput] = useState(initialUserInput);
  const [error, setError] = useState("");

  const handleInputChange = (index, value) => {
    const newUserInput = [...userInput];
    newUserInput[index] = value;
    setUserInput(newUserInput);
  };

  const handleConfirm = () => {
    for (let i = 0; i < removedIndexes.length; i++) {
      const index = removedIndexes[i];
      if (secretPhrase[index] !== userInput[index]) {
        setError("Incorrect phrase. Please try again.");
        return;
      }
    }
    setError("");
    alert("Confirmed!");
  };

  return (
    <div className="h-full md:p-4 md:px-4 mx-2 md:mx-4 md:py-4 flex flex-col">
      <CommonComponent
        title="Create EOA Wallet"
        imageSrc1={lockpassword1}
        imageSrc2={lock2}
        imageSrc3={phone1}
        color1="black"
        color2="black"
        color3="[#D0F500]"
        hrColor1="black"
        hrColor2="black"
        borderColor1="black"
        borderColor2="black"
        textColor1="black"
        textColor2="black"
      />
      <div className=" md:w-[70%] lg:w-[45%] xl:w-[35%] container mx-auto ">
        <hr className="mt-6 w-auto  " />

        <div className="text-center mx-auto mb-12 max-w-xl">
          <h2 className="text-xl text-center font-bold mb-4 mt-8">
            Write down your Secret Recovery Phrase
          </h2>
          <p className="mx-auto">
            Write down this 12-word secret recovery phrase and save it in a
            place that you trust and only you can access.
          </p>
        </div>

        <div className=" rounded-3xl mx-auto py-3 md:py-4 border grid grid-cols-3  md:px-5">
          {secretPhrase.map((word, index) => (
            <div
              key={index}
              className={`rounded-full border text-center text-sm md:text-base break-words  m-1 p-1 lg:p-2 md:my-1.5 ${
                removedIndexes.includes(index) ? "" : "bg-[#A66CFF]"
              } `}
            >
              <span>{word.slice(0, 10)}</span>
            </div>
          ))}
        </div>
        {error && <p className="text-red-500 text-center ">{error}</p>}
        <div className="text-center mt-20 w-full rounded-full border border-black bg-white text-black hover:bg-black hover:text-white cursor-pointer">
          <button className="p-2.5" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateEOAWallet;
