import cryptoJS from "crypto-js";
import { NEXT_PUBLIC_ENCRYPT_KEY } from "../../constants/index";

const useEncryption = () => {
  const cryptoKey = NEXT_PUBLIC_ENCRYPT_KEY;

  // eslint-disable-next-line consistent-return
  const encryptData = (data, key) => {
    try {
      let dataToBeEncrypted;

      if (typeof data === "string") dataToBeEncrypted = data;
      else if (typeof data === "number") dataToBeEncrypted = data.toString();
      console.log(data, cryptoKey);

      return cryptoJS.AES.encrypt(
        dataToBeEncrypted,
        key ? key : cryptoKey
      ).toString();
    } catch (err) {
      console.log("i am encrypting fun err");

      console.log("errr", err);
    }
  };

  // eslint-disable-next-line consistent-return

  const decryptData = (encryptedData, key) => {
    try {
      var decryptedBytes = cryptoJS.AES.decrypt(encryptedData, key);
      return decryptedBytes.toString(cryptoJS.enc.Utf8);
    } catch (err) {
      // console.log(err);
    }
  };

  return {
    encryptData,
    decryptData,
  };
};

export default useEncryption;
