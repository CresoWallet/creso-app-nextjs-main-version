"use client";
// password.jsx

import { useState } from "react";

export default function PasswordPage() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [color, setColor] = useState("");

  function checkStrength(password) {
    let score = 0;

    // Check if password contains lowercase and uppercase characters
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      score += 1;
    }

    // Check if password contains numbers
    if (password.match(/[0-9]/)) {
      score += 1;
    }

    // Check if password contains special characters
    if (password.match(/[!@#$%^&*()_+={}\[\]:;<>?|\/\\]/)) {
      score += 1;
    }

    // Check if password length is greater than or equal to 8 characters
    if (password.length >= 8) {
      score += 1;
    }

    // Set strength based on score
    if (score === 0) {
      setStrength("Very Weak");
      setColor("text-red-500");
    } else if (score === 1) {
      setStrength("Weak");
      setColor("text-orange-500");
    } else if (score === 2) {
      setStrength("Medium");
      setColor("text-yellow-500");
    } else if (score === 3) {
      setStrength("Strong");
      setColor("text-green-500");
    } else if (score === 4) {
      setStrength("Very Strong");
      setColor("text-blue-500");
    }
  }

  function handleChange(e) {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkStrength(newPassword);
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="mb-5">
        <label htmlFor="password" className="block mb-1">
          Enter Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleChange}
          className="border border-gray-400 rounded px-3 py-2 w-full"
        />
      </div>
      <div className="mb-5">
        <p className={`font-bold ${color}`}>Password Strength: {strength}</p>
        {/* You can style this output based on the strength */}
      </div>
    </div>
  );
}
