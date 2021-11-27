import React, { useState } from "react";
import { Pagination } from "@mui/material";
import { MovieList } from "../components";

import "../styles/search.css";

export default function Search({
  inputValue,
  movieList,
  isLoading,
  totalReponses,
  search,
}) {
  const [pageNumber, setPageNumber] = useState(1);

  const totalCardsOnPage = Math.floor(totalReponses / 10) + 1;


  const changePageNumber = (e) => {
    setPageNumber(parseInt(e.target.textContent));
    search(e, e.target.textContent);
  };

  return (
    <div className="search">
      <Pagination
        count={totalCardsOnPage}
        page={pageNumber}
        color="success"
        showFirstButton
        showLastButton
        onChange={changePageNumber}
      />
      <MovieList movieList={movieList} isLoading={isLoading} inputValue={inputValue} />
      <Pagination
        count={totalCardsOnPage}
        page={pageNumber}
        color="success"
        showFirstButton
        showLastButton
        onChange={changePageNumber}
      />
    </div>
  );
}
