import React from "react";

const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <div className="flex items-center">
      <label className="relative flex cursor-pointer items-center p-1 rounded-md">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onChange(!checked)} // Toggle the checked state
          className="peer cursor-pointer appearance-none relative h-6 w-6 bg-white  border border-black  transition-all checked:border-black checked:bg-[#D0F500] rounded-full"
        />
        {checked && ( // Only render checkmark if checkbox is checked
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        )}
      </label>
    </div>
  );
};

export default CustomCheckbox;
