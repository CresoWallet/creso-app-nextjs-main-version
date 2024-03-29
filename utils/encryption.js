// utils/encryptionUtils.js

// Function to encrypt data
export async function encryptData(data, secretKey) {
  try {
    const encodedData = new TextEncoder().encode(data);
    const encodedKey = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(secretKey)
    );
    const iv = crypto.getRandomValues(new Uint8Array(12)); // Initialization Vector
    const encryptedData = await crypto.subtle.encrypt(
      {
        name: "AES-GCM",
        iv: iv,
      },
      encodedKey,
      encodedData
    );
    return {
      encryptedData: new Uint8Array(encryptedData),
      iv: iv,
    };
  } catch (error) {
    console.error("Encryption error:", error);
    throw new Error("Encryption failed");
  }
}

// Function to decrypt data
export async function decryptData(encryptedData, secretKey, iv) {
  try {
    const encodedKey = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(secretKey)
    );
    const decryptedData = await crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: iv,
      },
      encodedKey,
      encryptedData
    );
    return new TextDecoder().decode(decryptedData);
  } catch (error) {
    console.error("Decryption error:", error);
    throw new Error("Decryption failed");
  }
}

// Function to store encrypted data and IV in local storage
export function storeEncryptedDataInLocalStorage(dataKey, encryptedData, iv) {
  LocalStorage.setItem(
    dataKey + "_encryptedData",
    JSON.stringify([...encryptedData])
  );
  LocalStorage.setItem(dataKey + "_iv", JSON.stringify([...iv]));
}

// Function to retrieve encrypted data and IV from local storage
export function retrieveEncryptedDataFromLocalStorage(dataKey) {
  const encryptedData = LocalStorage.getItem(dataKey + "_encryptedData");
  const iv = LocalStorage.getItem(dataKey + "_iv");
  if (encryptedData && iv) {
    return {
      encryptedData: new Uint8Array(JSON.parse(encryptedData)),
      iv: new Uint8Array(JSON.parse(iv)),
    };
  } else {
    return null;
  }
}
