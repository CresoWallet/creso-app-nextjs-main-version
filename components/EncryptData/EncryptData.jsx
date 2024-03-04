import cryptoJS from "crypto-js";
import NEXT_PUBLIC_ENCRYPT_KEY from "../../constants/index"

const useEncryption = () => {
    const cryptoKey = NEXT_PUBLIC_ENCRYPT_KEY;

    // eslint-disable-next-line consistent-return
    const encryptData = (data) => {
        try {
          let dataToBeEncrypted;
    
          if (typeof data === "string") dataToBeEncrypted = data;
          else if (typeof data === "number") dataToBeEncrypted = data.toString();
    
          return cryptoJS.AES.encrypt(dataToBeEncrypted, cryptoKey).toString();
        } catch (err) {
          // //// console.log(err);
        }
      };
    
      // eslint-disable-next-line consistent-return
    
      const decryptData = (encryptedData) => {
        try {
          const plain = cryptoJS.AES.decrypt(encryptedData.toString(), cryptoKey);
    
          return JSON.parse(plain.toString(cryptoJS.enc.Utf8));
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