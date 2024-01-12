// SearchField.jsx

import React, { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

const SearchField = ({ onSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef();

  const handleSearchIconClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    // You can perform any search-related logic here
    onSearch(searchTerm);
  };

  const handleCloseSearch = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseSearch);
    return () => {
      document.removeEventListener("mousedown", handleCloseSearch);
    };
  }, []);

  return (
    <div className="flex items-center relative">
      {isSearchOpen ? (
        <div className="relative font-bold">
          <CiSearch
            className="cursor-pointer hover:border-black"
            onClick={handleSearchIconClick}
          />
        </div>
      ) : (
        <div className="relative">
          <CiSearch
            className="cursor-pointer hover:border-black"
            onClick={handleSearchIconClick}
          />
        </div>
      )}
      {isSearchOpen && (
        <div className="relative" ref={inputRef}>
          <input
            type="text"
            placeholder="Search..."
            className="h-8 md:h-10 w-30 px-4 rounded-3xl border cursor-pointer hover:border-black ml-2 text-sm md:text-base"
            onChange={handleInputChange}
          />
          <CiSearch
            className="absolute right-3 top-2 text-gray-500 cursor-pointer hover:font-bold"
            onClick={handleSearchIconClick}
          />
        </div>
      )}
    </div>
  );
};

export default SearchField;
