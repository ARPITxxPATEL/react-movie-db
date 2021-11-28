import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css"

export default function Home() {
  return (
    <div className="home">
      <Link to="search" activeClassName="active" className="text">
        Click here to move to Search Page 
      </Link>
    </div>
  );
}
