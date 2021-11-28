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
      <div className="movie-details-grid">
        <a href={movieDetails.Poster} alt={movieDetails.Title} className="grid-1">
          <img src={movieDetails.Poster} alt={movieDetails.Title} />
        </a>
        
        <div className="grid-2">
          <div className="imdb-rating">{movieDetails.imdbRating}</div>
          <p><span>Genre</span> :  {movieDetails.Genre}</p>
          <p><span>Director</span> :  {movieDetails.Director}</p>
          <p><span>Actors</span> :  {movieDetails.Actors}</p>
          <p><span>Writer</span> :  {movieDetails.Writer}</p>
          <p><span>Language</span> :  {movieDetails.Language}</p>
          <p><span>Rated</span> :  {movieDetails.Rated}</p>
        </div>

        <div className="grid-3">
          <p><span>Released On</span> :  {movieDetails.Released}</p>
          <p><span>Country</span> :  {movieDetails.Country}</p>
          <p><span>Rated</span> :  {movieDetails.Rated}</p>
          <p><span>Box Office</span> :  {movieDetails.BoxOffice}</p>
          <p><span>Plot</span> :  {movieDetails.Plot}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
