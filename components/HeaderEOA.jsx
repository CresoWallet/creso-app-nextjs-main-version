// import React from "react";
// import Image from "next/image";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import creso from "../assets/eoa/cresoblack.svg";
// import Language from "../assets/security/language.png";

// const Header = ({ title }) => {
//   return (
//     <div className="flex">
//       <h1 className="grid grid-cols-3 text-3xl font-bold w-full text-center rounded-t-xl py-8 ">
//         <Image alt="" src={creso} className="mx-auto" />
//         {title}
//       </h1>

//       <div className="flex items-center gap-1 ">
//         <Image alt="" src={Language} className="w-6 h-6" />
//         <div className="font-bold ">
//           <MdKeyboardArrowDown />
//         </div>
//         <p className="text-sm text-black ">USD</p>
//         <div className="font-bold ">
//           <MdKeyboardArrowDown />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import creso from "../assets/eoa/cresoblack.svg";
import Language from "../assets/security/language.png";

const HeaderEOA = ({ title }) => {
  return (
    <div className="flex items-center justify-between xl:mx-10 md:mx-2 mb-10 lg:mb-0 mt-4 ">
      <div className="flex items-center ">
        <Image alt="" src={creso} className="w-auto h-auto mr-2" />
      </div>
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>

      <div className="flex items-center mx-4 gap-2 cursor-pointer ">
        <div className="flex items-center ">
          <Image alt="" src={Language} className="w-6 h-6 " />
          <MdKeyboardArrowDown />
        </div>
        <div className="flex items-center">
          <p className="text-sm text-black mr-1">ENG</p>
          <MdKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default HeaderEOA;
