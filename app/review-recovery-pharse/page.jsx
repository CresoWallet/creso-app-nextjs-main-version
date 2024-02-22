// "use client";
// import React, { useState, useEffect } from "react";
// import lockpassword1 from "../../assets/eoa/Lockpassword1.png";
// import lock1 from "../../assets/eoa/Lock1.png";
// import phone from "../../assets/eoa/Phone.png";
// import CommonComponent from "@/components/common/CommonEOA";
// import { enqueueSnackbar } from "notistack";
// import { HiOutlineEye } from "react-icons/hi2";
// import { createEoaWallet } from "@/clientApi/auth";

// function ReviewRecovery() {
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

//   const [revealed, setRevealed] = useState(false);
//   const [inputWords, setInputWords] = useState(secretPhrase);

//   const handleRevealClick = () => {
//     setRevealed(!revealed);
//   };

//   const handleSendOTPMail = async () => {
//     try {
//       const res = await createEoaWallet({
//         walletName: "EOA Wallet",
//       });
//       console.log("🚀 ~ handleSendOTPMail ~ res:", res);
//       if (res?.status === 200) {
//         enqueueSnackbar(`Successful email transmission`, {
//           variant: "success",
//         });
//       } else {
//       }
//     } catch (err) {
//       enqueueSnackbar(`Something went wrong`, {
//         variant: "error",
//       });
//     } finally {
//       // setLoading(false);
//     }
//   };
//   useEffect(() => {
//     handleSendOTPMail();
//   }, []);

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
//           {inputWords.map((word, index) => (
//             <div
//               key={index}
//               className={`rounded-full border text-center text-sm md:text-base break-words  m-1 p-1 lg:p-2 md:my-1.5  ${
//                 !revealed
//                   ? "blur-sm bg-black opacity-[10%] text-white"
//                   : "bg-[#A66CFF] border-black"
//               }`}
//               style={{ minWidth: "25%", textAlign: "center" }}
//             >
//               {/* {revealed ? `${index + 1}. ${word}` : "•••••"} */}
//               {`${index + 1}. ${word.slice(0, 8)}`}
//             </div>
//           ))}
//           {!revealed && (
//             <div className="absolute flex flex-col justify-center items-center inset-0">
//               {/* <Image src={""} alt="" /> */}
//               <div className="text-4xl">
//                 <HiOutlineEye />
//               </div>
//               <p className="my-4 text-sm">Make sure nobody Looking</p>
//             </div>
//           )}
//         </div>

//         <div className="text-center mt-20 w-full rounded-full border border-black  bg-black text-white cursor-pointer">
//           <button className="p-2.5" onClick={handleRevealClick}>
//             {revealed
//               ? "Hide Secret Recovery Phrase"
//               : "Reveal Secret Recovery Phrase"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ReviewRecovery;

"use client";
import React, { useState, useEffect } from "react";
import lockpassword1 from "../../assets/eoa/Lockpassword1.png";
import lock1 from "../../assets/eoa/Lock1.png";
import phone from "../../assets/eoa/Phone.png";
import CommonComponent from "@/components/common/CommonEOA";
import { enqueueSnackbar } from "notistack";
import { HiOutlineEye } from "react-icons/hi2";
import { createEOAWalletApi } from "@/clientApi/auth";

function ReviewRecovery() {
  const [revealed, setRevealed] = useState(false);
  const [recoveryPhrases, setRecoveryPhrases] = useState(Array(12).fill(""));
  console.log(recoveryPhrases, "<------------------------recoveryPhrases");

  const handleRevealClick = async () => {
    if (!revealed) {
      try {
        const res = await createEOAWalletApi({
          walletName: "EOA",
        }); // Call the API
        const { data } = res;
        console.log(data?.data, "dssssssssssssssssss");

        setRecoveryPhrases(data?.data?.seedPhrase);
        setRevealed(true);
        console.log("Token:", data.token);
      } catch (err) {
        console.error("Error fetching recovery phrases:", err);
      }
    } else {
      setRevealed(false);
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
          {recoveryPhrases.map((word, index) => (
            <div
              key={index}
              className={`rounded-full border text-center text-sm md:text-base break-words  m-1 p-1 lg:p-2 md:my-1.5  ${
                revealed
                  ? "bg-[#A66CFF] border-black"
                  : "blur-sm bg-black opacity-[10%] text-white"
              }`}
              style={{ minWidth: "25%", textAlign: "center" }}
            >
              {`${index + 1}. ${word}`}
            </div>
          ))}
          {!revealed && (
            <div className="absolute flex flex-col justify-center items-center inset-0">
              {/* <Image src={""} alt="" /> */}
              <div className="text-4xl">
                <HiOutlineEye />
              </div>
              <p className="my-4 text-sm">Make sure nobody Looking</p>
            </div>
          )}
        </div>

        <div className="text-center mt-20 w-full rounded-full border border-black  bg-black text-white cursor-pointer">
          <button className="p-2.5" onClick={handleRevealClick}>
            {revealed
              ? "Hide Secret Recovery Phrase"
              : "Reveal Secret Recovery Phrase"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewRecovery;
