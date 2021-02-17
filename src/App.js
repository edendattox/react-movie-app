import React, { useState, useEffect } from "react";

import "./App.css";
import Movie from "../src/component/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2b83cbbfed0be4545a7d77bc8d2f75da&page=1";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2b83cbbfed0be4545a7d77bc8d2f75da&query=";

const App = () => {
  const movies = [1, 2, 3];
  return (
    <div className="App">
      {movies.map((movie) => (
        <Movie />
      ))}
    </div>
  );
};

export default App;
