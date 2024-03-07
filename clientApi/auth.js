import { axiosInstance } from "@/services/axios";

// export const loginApi = async (formData) => {
//   const res = await axiosInstance(`/login`, {
//     method: "POST",
//     data: formData,
//   });
//   return res;
// };

export const logOut = async (formData) => {
  const res = await axiosInstance(`/logout`, {
    method: "POST",
    data: formData,
  });
  return res;
};

// export const signUpAPI = async (formData) => {
//   const res = await axiosInstance(`/signup`, {
//     method: "POST",
//     data: formData,
//   });

//   return res;
// };

export const authenticateUser = async (formData) => {
  const res = await axiosInstance(`/authenticate`, {
    method: "GET",
    data: formData,
  });

  return res;
};

// export const sendOTPMail = async (formData) => {
//   const res = await axiosInstance(`/sendOTP`, {
//     method: "POST",
//     data: formData,
//   });
//   return res;
// };

// export const verifyOTP = async (formData) => {
//   const res = await axiosInstance(`/verifyOTP`, {
//     method: "POST",
//     data: formData,
//   });

//   return res;
// };

export const createEoaWallet = async (formData) => {
  const res = await axiosInstance(`/wallets/eoa`, {
    method: "POST",
    data: formData,
  });

  return res;
};

//-------------------Creso API-v1----------------

//User Registration and Authentication
export const signUpApi = async (formData) => {
  const res = await axiosInstance("/signup", {
    method: "POST",
    data: formData,
  });
  return res;
};

export const verifyEmailApi = async (formData) => {
  const res = await axiosInstance("/verify_email", {
    method: "POST",
    data: formData,
  });
  return res;
};

export const resendOTPApi = async (email) => {
  const res = await axiosInstance("/resend_otp", {
    method: "POST",
    data: email,
  });
  return res;
};

export const loginApi = async (formData) => {
  const res = await axiosInstance("/login", {
    method: "POST",
    data: formData,
  });
  return res;
};

export const socialLoginApi = async (provider, credentials) => {
  const res = await axiosInstance(`/login/${provider}`, {
    method: "POST",
    data: credentials,
  });
  return res;
};

// Wallet Management
export const createEOAWalletApi = async (formData) => {
  const res = await axiosInstance("/wallet/eoa", {
    method: "POST",
    data: formData,
  });
  return res;
};

export const importEOAWalletApi = async (formData) => {
  const res = await axiosInstance("/wallet/import", {
    method: "POST",
    data: formData,
  });
  return res;
};

export const connectExternalEOAWalletApi = async (formData) => {
  const res = await axiosInstance("/wallet/connect", {
    method: "POST",
    data: formData,
  });
  return res;
};

export const createAAWalletApi = async () => {
  const res = await axiosInstance("/wallet/aa", {
    method: "POST",
  });
  return res;
};

// export const setMultiSigThresholdApi = async (address, threshold) => {
//   const res = await axiosInstance(`/wallet/aa/${address}/threshold`, {
//     method: "POST",
//     data: { threshold },
//   });
//   return res;
// };

// Dual Sign Authorization
export const initiateActionApi = async (actionType, formData) => {
  const res = await axiosInstance(`/actions/${actionType}`, {
    method: "POST",
    data: formData,
  });
  return res;
};

export const approveActionOnMainDeviceApi = async (
  transactionId,
  authenticationMethod
) => {
  const res = await axiosInstance(`/actions/${transactionId}/approve`, {
    method: "POST",
    data: { authenticationMethod },
  });
  return res;
};

// // Security Features
// export const generateShamirSharesApi = async () => {
//   const res = await axiosInstance("/shamir/generate", {
//     method: "GET",
//   });
//   return res;
// };

// export const verifyShamirSharesApi = async (shares) => {
//   const res = await axiosInstance("/shamir/verify", {
//     method: "POST",
//     data: { shares },
//   });
//   return res;
// };

// export const createEncryptedBackupApi = async (formData) => {
//   const res = await axiosInstance("/backups", {
//     method: "POST",
//     data: formData,
//   });
//   return res;
// };

// export const manageAuthenticationMethodsApi = async () => {
//   const res = await axiosInstance("/auth/methods", {
//     method: "GET",
//   });
//   return res;
// };

// Wallet Operations
export const getWalletBalanceApi = async (address, network) => {
  const res = await axiosInstance(`/wallets/${address}/balance`, {
    method: "GET",
    data: { network },
  });
  return res;
};

export const getTransactionHistoryApi = async (address, filters) => {
  const res = await axiosInstance(`/wallets/${address}/transactions`, {
    method: "GET",
    params: filters,
  });
  return res;
};

export const sendTransactionApi = async (formData) => {
  const res = await axiosInstance("/transactions", {
    method: "POST",
    data: formData,
  });
  return res;
};

export const signTransactionApi = async (transactionId, signature) => {
  const res = await axiosInstance(`/sign_transaction/${transactionId}`, {
    method: "POST",
    data: { signature },
  });
  return res;
};

export const viewTransactionDetailsApi = async (transactionId, network) => {
  const res = await axiosInstance(`/transactions/${transactionId}`, {
    method: "GET",
    data: { network },
  });
  return res;
};

// Token Management
export const getTokenBalanceApi = async (address, tokenAddress, network) => {
  const res = await axiosInstance(`/token/${address}/balance/${tokenAddress}`, {
    method: "GET",
    data: { network },
  });
  return res;
};

export const transferTokensApi = async (formData) => {
  const res = await axiosInstance("/tokens/transfer", {
    method: "POST",
    data: formData,
  });
  return res;
};

// Account Management
export const getUserInformationApi = async () => {
  const res = await axiosInstance("/users/me", {
    method: "GET",
  });
  return res;
};

export const updateUserInformationApi = async (updatedInfo) => {
  const res = await axiosInstance("/users/me", {
    method: "PUT",
    data: updatedInfo,
  });
  return res;
};

export const changePasswordApi = async (passwords) => {
  const res = await axiosInstance("/users/change_password", {
    method: "PUT",
    data: passwords,
  });
  return res;
};

// Security Feautures Settings
export const enable2FAApi = async (method) => {
  const res = await axiosInstance("/auth/2fa/enable", {
    method: "POST",
    data: method,
  });
  return res;
};

export const disable2FAApi = async (verificationCode) => {
  const res = await axiosInstance("/auth/2fa/disable", {
    method: "POST",
    data: { verificationCode },
  });
  return res;
};

// Push Notifications
export const registerDeviceForPushNotificationsApi = async (deviceInfo) => {
  const res = await axiosInstance("/notifications/devices", {
    method: "POST",
    data: deviceInfo,
  });
  return res;
};

export const unregisterDeviceForPushNotificationsApi = async (deviceId) => {
  const res = await axiosInstance(`/notifications/devices/${deviceId}`, {
    method: "DELETE",
  });
  return res;
};

export const sendPushNotificationApi = async (notification) => {
  const res = await axiosInstance("/notifications", {
    method: "POST",
    data: notification,
  });
  return res;
};

// Transaction-Related Notifications
export const requestTransactionApprovalApi = async (
  transactionId,
  recipientDeviceId
) => {
  const res = await axiosInstance(
    `/notifications/transactions/${transactionId}/request_approval`,
    {
      method: "POST",
      data: { recipientDeviceId },
    }
  );
  return res;
};

export const confirmTransactionApprovalApi = async (
  transactionId,
  authenticationToken
) => {
  const res = await axiosInstance(`/transactions/${transactionId}/approve`, {
    method: "POST",
    data: { authenticationToken },
  });
  return res;
};

export const notifyTransactionExecutionApi = async (
  transactionId,
  recipientDeviceId
) => {
  const res = await axiosInstance(
    `/notifications/transactions/${transactionId}/executed`,
    {
      method: "POST",
      data: { recipientDeviceId },
    }
  );
  return res;
};

// //. Security Settings:
// Manage Authentication Methods:
// API: GET /auth/methods (listed in Section IV)
// API: POST /auth/methods (listed in Section IV)
// API: DELETE /auth/methods/{method_id}

// View Backup Status:
// API: GET /backups
// Description: Retrieves information about existing wallet backups.
// Inputs: user ID, authentication token
// Outputs: list of backups with status

// Restore Wallet from Backup:
// API: POST /wallets/restore
// Description: Restores a wallet from a backup.
// Inputs: user ID, authentication token, backup ID, cloud storage credentials
// Outputs: success/failure message
// Here are the additional APIs for enabling/disabling 2FA, passkeys, and Face ID authentication:
