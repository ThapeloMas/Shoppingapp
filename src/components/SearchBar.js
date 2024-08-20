
import React, { useState } from "react";
import "./SearchBar.css"; // Make sure you import the CSS file

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
