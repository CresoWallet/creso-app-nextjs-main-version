// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import create from "../../assets/eoa/createeoa.svg";
// import Header from "@/components/common/HeaderEOA";
// import Link from "next/link";
// import Web3Modal from "web3modal";
// import { ethers } from "ethers";
// import ConnectWallet from "@/components/connectbutton/ConnectWallet";
// import CustomButton4 from "@/components/CustomButton4";
// import CustomCheckbox from "@/components/CustomCheckbox";

// function Welcome() {
//   const [importWalletHovered, setImportWalletHovered] = useState(false);
//   const [connectWallet, setConnectWallet] = useState(false);
//   const [createWalletHovered, setCreateWalletHovered] = useState(false);
//   const [isChecked, setIsChecked] = useState(true);

//   const initWeb3Modal = async () => {
//     const web3Modal = new Web3Modal({
//       cacheProvider: true,
//       providerOptions: {}, // You can customize this based on the providers you want to support
//     });
//     const provider = await web3Modal.connect();

//     // Once connected, you can use the provider to interact with the user's wallet
//     const signer = new ethers.providers.Web3Provider(provider).getSigner();

//     console.log("Connected to wallet:", signer._address);

//     // Handle any further actions after connecting
//   };

//   return (
//     <div className=" h-full md:px-4  py-4 flex flex-col ">
//       <Header title="Create EOA Wallet" className="md:hidden block" />
//       <div className=" grid place-items-center">
//         <div className="text-center ">
//           <h2 className="font-bold text-2xl mt-16  mb-4">
//             Let&#39;s Get Started
//           </h2>
//           <p className="text-gray-500">
//             Trusted by millions, creso is a secure wallet making the world of
//             <span className="text-[#FF4085] ml-1"> web 3 </span>
//             <p>accessible to all.</p>
//           </p>
//         </div>
//         <Image alt="" src={create} className="mb-8  mx-auto" />

//         {/* Terms of Use */}
//         <div className="flex items-center justify-center mb-8 pb-2">
//           <ConnectWallet />
//           {/* <button
//             className="rounded-full p-2 border-black focus:outline-none"
//             onClick={() => setIsChecked(!isChecked)}
//           >
//             {isChecked ? (
//               <div className="w-6 h-6 rounded-full border my-2 mr-1 border-black"></div>
//             ) : (
//               <Image alt="" src={check} className="w-8 h-8 my-1 " />
//             )}
//           </button> */}
//           <CustomCheckbox checked={isChecked} onChange={setIsChecked} />
//           <span className="ml-2">
//             I agree to creso
//             <span className="text-[#FF4085] ml-1">Terms of Use</span>
//           </span>
//         </div>

//         {/* buttons */}
//         <div className="flex flex-col sm:flex-row my-4 justify-center items-center">
//           {/* <button
//             className={`${
//               importWalletHovered
//                 ? "bg-black text-white"
//                 : "bg-transparent text-black"
//             } rounded-full py-3 sm:py-5 m-2 sm:m-4 px-12  border-black ${
//               importWalletHovered ? "" : "border"
//             }`}
//             onMouseEnter={() => setImportWalletHovered(true)}
//             onMouseLeave={() => setImportWalletHovered(false)}
//             onClick={() => {
//               setImportWalletHovered(true);
//               setCreateWalletHovered(false);
//             }}
//           >
//             <Link href="/importwallet">Import an existing wallet</Link>
//           </button> */}
//           {/* <CustomButton4
//             isHovered={connectWallet}
//             onMouseEnter={() => setConnectWallet(true)}
//             onMouseLeave={() => setConnectWallet(false)}
//             onClick={initWeb3Modal}
//             padding="px-12 "
//           >
//             Connect Wallet
//           </CustomButton4> */}
//           <CustomButton4
//             isHovered={connectWallet}
//             onMouseEnter={() => setConnectWallet(true)}
//             onMouseLeave={() => setConnectWallet(false)}
//             onClick={() => {
//               setConnectWallet(true);
//               setCreateWalletHovered(false);
//             }}
//             padding="px-12 "
//           >
//             Connect Wallet
//           </CustomButton4>
//           <CustomButton4
//             isHovered={importWalletHovered}
//             onMouseEnter={() => setImportWalletHovered(true)}
//             onMouseLeave={() => setImportWalletHovered(false)}
//             onClick={() => {
//               setImportWalletHovered(true);
//               setCreateWalletHovered(false);
//             }}
//             padding="px-12 "
//           >
//             <Link href="/importwallet">Import an existing wallet</Link>
//           </CustomButton4>
//           <CustomButton4
//             isHovered={createWalletHovered}
//             onMouseEnter={() => setCreateWalletHovered(true)}
//             onMouseLeave={() => setCreateWalletHovered(false)}
//             onClick={() => {
//               setCreateWalletHovered(true);
//               setImportWalletHovered(false);
//             }}
//             padding="px-16 "
//           >
//             <Link href="/walletmatrix">Create New Wallet</Link>
//           </CustomButton4>
//           {/*    <button
//             className={`${
//               createWalletHovered
//                 ? "bg-black text-white"
//                 : "bg-transparent text-black"
//             } rounded-full py-3 sm:py-5 m-2 sm:m-4 px-16 border-black ${
//               createWalletHovered ? "" : "border"
//             }`}
//             onMouseEnter={() => setCreateWalletHovered(true)}
//             onMouseLeave={() => setCreateWalletHovered(false)}
//             onClick={() => {
//               setCreateWalletHovered(true);
//               setImportWalletHovered(false);
//             }}
//           >
//             <Link href="/walletmatrix">Create New Wallet</Link>
//           </button> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Welcome;

"use client";
import { useState } from "react";
import Image from "next/image";
import create from "../../assets/eoa/createeoa.svg";
import Header from "@/components/common/HeaderEOA";
import Link from "next/link";
// import ConnectWallet from "@/components/connectbutton/ConnectWallet";
import CustomButton4 from "@/components/CustomButton4";
import CustomCheckbox from "@/components/CustomCheckbox";
import ConnectWalletBtn from "../components/connectWallet";

function Welcome() {
  const [importWalletHovered, setImportWalletHovered] = useState(false);
  const [connectWallet, setConnectWallet] = useState(false);
  const [createWalletHovered, setCreateWalletHovered] = useState(false);
  const [isChecked, setIsChecked] = useState(true);

  const handleConnectWallet = async () => {
    if (!isChecked) {
      // Check if user has agreed to the Terms of Use
      setError("Please agree to the Terms of Use.");
      return;
    }

    try {
      const formData = {
        userId: "yourUserId",
        authToken: "yourAuthToken",
        walletInfo: {
          address: "walletAddress",
          shares: "shamirShares",
          seedPhrase: "seedPhrase",
        },
      };

      const response = await connectExternalEOAWalletApi(formData);

      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error occurred while connecting wallet:", error);
    }
  };
  return (
    <div className=" h-full md:px-4  py-4 flex flex-col ">
      <Header title="Create EOA Wallet" className="md:hidden block" />
      <div className=" grid place-items-center">
        <div className="text-center ">
          <h2 className="font-bold text-2xl mt-16  mb-4 md:mr-2">
            Let&#39;s Get Started
          </h2>
          <p className="text-gray-500">
            Trusted by millions, creso is a secure wallet making the world of
            <span className="text-[#FF4085] ml-1"> web 3 </span>
            <p>accessible to all.</p>
          </p>
        </div>
        <Image alt="" src={create} className="mb-8  mx-auto" />

        {/* Terms of Use */}
        <div className="flex items-center justify-center mb-8 pb-2">
          {/* <ConnectWallet /> */}

          <CustomCheckbox checked={isChecked} onChange={setIsChecked} />
          <span className="ml-2">
            I agree to creso
            <span className="text-[#FF4085] ml-1">Terms of Use</span>
          </span>
        </div>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row my-4 justify-center items-center">
          <CustomButton4
            isHovered={connectWallet}
            onMouseEnter={() => setConnectWallet(true)}
            onMouseLeave={() => setConnectWallet(false)}
            // onClick={() => {
            //   handleConnectWallet();
            //   setConnectWallet(true);
            //   setCreateWalletHovered(false);
            // }}
            padding="px-20 "
          >
            {/* Connect Wallet */}
            <ConnectWalletBtn />
          </CustomButton4>
          <CustomButton4
            isHovered={importWalletHovered}
            onMouseEnter={() => setImportWalletHovered(true)}
            onMouseLeave={() => setImportWalletHovered(false)}
            onClick={() => {
              setImportWalletHovered(true);
              setCreateWalletHovered(false);
            }}
            padding="px-12 "
          >
            <Link href="/importwallet">Import an existing wallet</Link>
          </CustomButton4>
          <CustomButton4
            isHovered={createWalletHovered}
            onMouseEnter={() => setCreateWalletHovered(true)}
            onMouseLeave={() => setCreateWalletHovered(false)}
            onClick={() => {
              setCreateWalletHovered(true);
              setImportWalletHovered(false);
            }}
            padding="px-16 "
          >
            <Link href="/walletmatrix">Create New Wallet</Link>
          </CustomButton4>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
