import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

import "../styles/movie-details.css";

export default function MovieDetails() {
  //"https://www.omdbapi.com/?s=avatar&apikey=9619d107"
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const { imdbID } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${imdbID}&apikey=9619d107`
      );
      console.log(response);
      setMovieDetails(response.data);
      setIsLoading(false);
    };
    fetchMovieDetails();
  }, [imdbID]);

  if (isLoading) {
    return "Movie details are being fetched! Please wait";
  } else if (movieDetails) {
    return (
      <div className="movie-details">

        <div className="upper-half">
          <a href={movieDetails.Poster} className="poster">
            <img src={movieDetails.Poster} alt={movieDetails.Title} />
          </a>
          <div className="upper-half-content">
            <div className="imdb-rating">{movieDetails.imdbRating}</div><br/>
            <span>Actors: {movieDetails.Actors}</span>
          </div>
        </div>

        <div className="lower-half">
          <p>Released on: {movieDetails.Released}</p>
        </div>

      </div>
    );
  } else {
    return null;
  }
}
