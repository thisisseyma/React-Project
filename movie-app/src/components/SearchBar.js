import React, { useState } from "react";
import "./SearchBar.css";
import MovieCard from "./MovieCard";
import { useMovies } from "../context/MoviesContext";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { updateMoviesData, moviesData } = useMovies();

  const fetchMovies = async () => {
    try {
      //const apiKey = "01362cd35d583e444d19758bff64a01f";
      const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTM2MmNkMzVkNTgzZTQ0NGQxOTc1OGJmZjY0YTAxZiIsInN1YiI6IjY1MWZkZTMyNzQ1MDdkMDBlMjExNmE1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.22Hx92KLNqH4ve5puNNHvQJ3ldaBgdA3yo2jIeoTaVE",
        },
      };

      const response = await fetch(apiUrl, options);
      const data = await response.json();
      updateMoviesData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (search) {
      fetchMovies();
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <div className="search-input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search for a movie..."
            type="text"
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </div>
      </form>
      <div>
        <ul>
          {moviesData.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
