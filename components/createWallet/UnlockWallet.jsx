import React, { useState } from "react";
import CustomButton3 from "../CustomButton3";
import PasswordInput from "../common/PasswordInput";
import CustomButton1 from "../CustomButton1";
import useEncryption from "../EncryptData/EncryptData";

const UnlockWallet = ({ handleBackButton, handleConfirm }) => {
  const { decryptData } = useEncryption();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleUnlock = () => {
    const encryptedSeedPhrase = localStorage.getItem("encryptedSeedPhrase");
    const value = decryptData(encryptedSeedPhrase, password);
    if (value) {
      localStorage.setItem("walletPassword", password);
      handleConfirm();
    } else {
      setError(true);
    }
  };

  return (
    <div className="bg-white flex flex-col xl:mx-8 md:mx-4 mx-0 mt-10 xl:px-0 px-2 md:px-2 space-y-8 h-full">
      <div className="flex flex-row items-center justify-between">
        <p className="text-black font-bold text-xl">Unlock Wallet</p>
        <div>
          <CustomButton3
            title="Back"
            buttonColor="[#FFC8DC]"
            titleColor="[#FF4085]"
            onClick={handleBackButton}
          />
        </div>
      </div>

      <p className="pt-10 text-sm text-[#A09FAA]">
        Your ownership of the wallet entails the responsibility of unlocking it,
        requiring you to enter the designated password so as to unlock and
        enable further actions or functionalities associated with it!
      </p>

      <div className="my-4 mx-auto max-w-md">
        {/* <span
          htmlFor="walletName"
          className="block text-gray-700 font-bold md:mb-2 mb-1"
        >
          Password
        </span> */}
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          placeholder="Enter Password"
          className="shadow appearance-none w-full py-5 px-4 text-gray-700 leading-tight border rounded-full"
        />
        {error && (
          <p className="text-red-500 text-center pt-5">Invalid Password</p>
        )}
      </div>

      <CustomButton1
        isLoading={loading}
        name="Unlock"
        bgColor="black"
        textColor="white"
        handleClick={handleUnlock}
        isDisabled={false}
      />
    </div>
  );
};

export default UnlockWallet;
