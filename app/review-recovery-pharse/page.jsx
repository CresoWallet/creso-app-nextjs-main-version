"use client";
import React, { useState, useEffect, useContext } from "react";
import lockpassword1 from "../../assets/eoa/Lockpassword1.png";
import lock1 from "../../assets/eoa/Lock1.png";
import phone from "../../assets/eoa/Phone.png";
import CommonComponent from "@/components/common/CommonEOA";
import { HiOutlineEye } from "react-icons/hi2";
import { createEOAWalletApi } from "@/clientApi/auth";
import { MdOutlineFileCopy } from "react-icons/md";
import { WalletContext } from "@/providers/WalletProvider";
function ReviewRecovery() {
  const [revealed, setRevealed] = useState(false);
  const [recoveryPhrases, setRecoveryPhrases] = useState(
    Array(12)
      .fill("")
      .map((word) => ({ word, revealed: false }))
  );
  const { seedPhrase } = useContext(WalletContext);

  console.log(recoveryPhrases, "<------------------------recoveryPhrases");

  const handleRevealClick = async () => {
    if (!revealed) {
      try {
        const res = await createEOAWalletApi({
          walletName: "EOA",
        }); // Call the API
        const { data } = res;
        console.log(data?.data, "dssssssssssssssssss");

        // setRecoveryPhrases(data?.data?.seedPhrase);
        // setRecoveryPhrases(data?.data?.seedPhrase.split(" "));

        // setRevealed(true);
        // console.log("Token:", data.token);
        // const seedPhrase = data?.data?.seedPhrase || "";
        const SeedPhrase = data?.data?.seedPhrase || "";
        if (SeedPhrase.length > 0) {
          const seedPhraseArray = SeedPhrase.split(" ");

          const phrasesWithRevealed = seedPhraseArray.map((word) => ({
            word,
            revealed: true,
          }));

          setRecoveryPhrases(phrasesWithRevealed);
          setRevealed(true);
          console.log("Token:", data.token);
        } else {
          console.error("Seed phrase is empty or not provided.");
        }
      } catch (err) {
        console.error("Error fetching recovery phrases:", err);
      }
    } else {
      setRevealed(false); // Toggle the revealed state only if the phrase was previously revealed
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
              className={`rounded-full border text-center text-sm md:text-base break-words  m-1 p-1 lg:p-2 md:my-1.5  ${revealed
                ? "bg-[#A66CFF] border-black"
                : "blur-sm bg-black opacity-[10%] text-white"
                }`}
              style={{ minWidth: "25%", textAlign: "center" }}
            >
              {`${index + 1}. ${phraseObj.word}`}
            </div>
          ))}
          {!revealed && (
            <div className="absolute flex flex-col justify-center items-center inset-0">
              <div className="text-4xl">
                <HiOutlineEye />
              </div>
              <p className="my-4 text-sm">Make sure nobody Looking</p>
            </div>
          )}
        </div>
        <div className="my-4 flex gap-2 justify-end items-center">
          {revealed && (
            <>
              <MdOutlineFileCopy />
              <p>copy to clipboard</p>
            </>
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
