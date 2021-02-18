import React, { useState, useEffect } from "react";

import "./App.css";
import Movie from "../src/component/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2b83cbbfed0be4545a7d77bc8d2f75da&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=2b83cbbfed0be4545a7d77bc8d2f75da&query=";
  

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
   getMovies(FEATURED_API)
  }, []);

  const getMovies =(API) => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    });
  }

  const handelOnSubmit = (e) => {
    e.preventDefault();
  
    if(searchTerm) {
      fetch(SEARCH_API + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMovies(data.results);
      });
      setSearchTerm("");
    }
  }

  const handelOnChange = e => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
    <header>

    <form onSubmit={handelOnSubmit}>
    <input 
     type="search" 
     onChange={handelOnChange}
     className="search" 
     placeholder="search..." 
     value={searchTerm} />
  </form>

  </header>
    <div className="movie-container">
      {movies.length > 0 &&
        movies.map((movie) => <Movie key={movie.id} {...movie} />)}
    </div>
  </>
  );
};

export default App;
