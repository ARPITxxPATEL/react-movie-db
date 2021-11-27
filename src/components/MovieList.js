import React from "react";
import MovieCard from "./MovieCard.js";

import "../styles/movie-list.css"

export default function MovieList({ isLoading, movieList, inputValue }) {
  if (isLoading) {
    return "Movies are Loading";
  }
  else if(!movieList){
    return "Nothing to show"
  }
  else {
    return (
      <div className="movie-list">
        {movieList.map((movie)=><MovieCard movie={movie} key={movie.imdbID} />)}
      </div>
    );
  }
}
