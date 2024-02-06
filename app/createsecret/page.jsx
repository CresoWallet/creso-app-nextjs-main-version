"use client";
import React, { useState } from "react";
import Image from "next/image";
import creso from "../../assets/eoa/cresoblack.svg";
import secure from "../../assets/eoa/securepassword.svg";

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

  // Randomly select 4 to 5 indexes to remove
  const removedIndexes = [];
  while (removedIndexes.length < Math.floor(Math.random() * 2) + 4) {
    const index = Math.floor(Math.random() * secretPhrase.length);
    if (!removedIndexes.includes(index)) {
      removedIndexes.push(index);
    }
  }

  // Initialize state for input words, user's input, and edit status
  const [inputWords, setInputWords] = useState(
    secretPhrase.map((word, index) =>
      removedIndexes.includes(index) ? "" : word
    )
  );
  const [userInput, setUserInput] = useState(
    Array(removedIndexes.length).fill("")
  );
  const [editStatus, setEditStatus] = useState(
    Array(removedIndexes.length).fill(true)
  );
  const [error, setError] = useState("");

  // Handle click event to enable editing of a specific input field
  const handleFieldClick = (index) => {
    const newEditStatus = [...editStatus];
    newEditStatus[index] = true;
    setEditStatus(newEditStatus);
  };

  // Update user's input for removed words
  const handleInputChange = (index, event) => {
    const newValue = event.target.value;
    const newInput = [...userInput];
    newInput[index] = newValue;
    setUserInput(newInput);
  };

  // Validate user's input
  const handleDoneClick = () => {
    for (let i = 0; i < removedIndexes.length; i++) {
      const index = removedIndexes[i];
      if (inputWords[index] !== userInput[i]) {
        setError("Please fill in all the missing words correctly.");
        return;
      }
    }
    setError("");
    // Proceed with further actions upon successful validation
  };

  return (
    <div className="border-black border-2 mx-4 flex justify-center items-center">
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold text-center py-8">
          <Image alt="" src={creso} className=" " />
          Create EOA Wallet
        </h1>
        <div className="text-center">
          <Image alt="" src={secure} className="mx-auto" />
        </div>
        <hr />

        <div className="my-10 mx-4 px-4">
          <p className="text-xl text-center  mb-4 font-semibold my-8">
            Write down your Secret Recovery Phrase
          </p>
          <p className="font-normal text-base my-8">
            Write down this 12-word secret recovery phrase and save it in a
            place that you trust and only you can access.
          </p>
        </div>

        <div className="h-80 w-auto rounded-xl border border-black p-2 m-4 my-6 flex justify-center items-center flex-wrap gap-4">
          {secretPhrase.map((word, index) => (
            <div
              key={index}
              className="rounded-full border border-black bg-[#A66CFF] p-2 m-1"
              style={{ width: "120px", textAlign: "center" }}
              onClick={() => handleFieldClick(index)}
            >
              {removedIndexes.includes(index) && editStatus[index] ? (
                <input
                  type="text"
                  value={userInput[removedIndexes.indexOf(index)]}
                  onChange={(event) =>
                    handleInputChange(removedIndexes.indexOf(index), event)
                  }
                  className="bg-transparent border-none focus:outline-none w-full"
                />
              ) : (
                word
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
            Done
          </button>
        </div>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default YourComponent;
