import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/index.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Search from "./pages/Search.js";
import MovieDetails from "./pages/MovieDetails.js";

import axios from "axios";

const API_BASE_URL = "https://www.omdbapi.com";
//&apikey=9619d107
//"https://www.omdbapi.com/?s=avatar&apikey=9619d107"

function App() {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [totalResponses, setTotalResponses] = useState(0);

  const search = async (e, pageNumber = 1) => {
    if (e.code === "Enter" || e.type === "click") {
      setIsLoading(true);
      let response = await axios.get(
        API_BASE_URL + "/?s=" + inputValue + "&apikey=9619d107&page=" + pageNumber
      );
      console.log(response);
      setMovies(response.data.Search);
      setTotalResponses(parseInt(response.data.totalResults));
      setIsLoading(false);
    }
  };

  return (
    <div className="main">
      <NavBar
        inputValue={inputValue}
        setInputValue={setInputValue}
        search={search}
      />

      <Router>
        <Routes>
          <Route
            path={`/search`}
            element={
              <Search
                inputValue={inputValue}
                movieList={movies}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                totalReponses={totalResponses}
                search={search}
              />
            }
          />

          <Route path="/movie/:imdbID" element={<MovieDetails />} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

      {/* {isLoading? "Loading" : "Not Loading"} */}
    </div>
  );
}

export default App;
