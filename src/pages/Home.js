import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="search">
        Click here to move movie-list page
      </Link>
    </div>
  );
}
