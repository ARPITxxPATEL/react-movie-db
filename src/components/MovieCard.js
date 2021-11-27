import React from "react";
import { Link } from "react-router-dom";

import "../styles/movie-card.css";

// Poster: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg"
// Title: "Avatar"
// Type: "movie"
// Year: "2009"
// imdbID: "tt0499549"

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="movie-card">
        <img src={movie.Poster} alt={movie.Title} />

        <div className="movie-card-content">
          <p className="title">{movie.Title}</p>
          <p>Type: {movie.Type}</p>
          <p>Year: {movie.Year}</p>
        </div>
      </div>
    </Link>
  );
}
