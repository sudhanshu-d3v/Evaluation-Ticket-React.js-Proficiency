import React, { useState } from "react";
import "./Search.css";

const Search = ({ handleSearch }) => {
  //   const [input, setInput] = useState("");
  return (
    <div className="search-item">
      <label htmlFor="search">Search by Name: </label>
      <input
        className="search-input"
        type="text"
        placeholder="start typing"
        id="search"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
