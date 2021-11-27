import React from "react";

// import { faSearch } from '@fortawesome/free-solid-svg-icons'

import "../styles/navbar.css";

export default function NavBar({ inputValue, setInputValue, search }) {
  return (
    <div className="navbar">
      <span className="heading">Movie DB</span>
      <div className="nav-right">
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyPress={search}
          type="text"
          placeholder="Search..."
          className="search-bar"
        />
        <button onClick={search} className="search-button"></button>
      </div>
    </div>
  );
}
