// PasswordInput.js
"use client";
import React from "react";

function PasswordInput({ label, value, onChange, showPassword, onToggle }) {
  return (
    <div className="my-4 mx-auto max-w-md">
      <label
        htmlFor={label}
        className="block text-gray-700 font-bold md:mb-2 mb-1 items-center"
      >
        {label}
        <button
          type="button"
          className="text-[#FF4085] m-2 justify-end items-end font-normal"
          onClick={onToggle}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </label>
      <input
        type={showPassword ? "text" : "password"}
        id={label}
        value={value}
        onChange={onChange}
        placeholder={` ${label}`}
        className="shadow appearance-none w-full py-5 px-4 text-gray-700 leading-tight border rounded-full"
      />
    </div>
  );
}

export default PasswordInput;
