import React from "react";
import "./SearchBar.css";
import { useMovies } from "../contexts/MoviesContext";
import { useSearch } from "../contexts/SearchContext";

const SearchBar = () => {
  const { search, setSearch } = useSearch();
  const { setMoviesData } = useMovies();

  const fetchMovies = async () => {
    try {
      const apiUrl = `${process.env.REACT_APP_BASE_URL}/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: process.env.REACT_APP_AUTHORIZATION,
        },
      };

      const response = await fetch(apiUrl, options);
      const data = await response.json();
      setMoviesData(data.results);
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
      <form onSubmit={handleFormSubmit} className="search-field">
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
    </div>
  );
};

export default SearchBar;
