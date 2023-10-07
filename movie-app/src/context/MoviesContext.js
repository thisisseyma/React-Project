import React, { createContext, useContext, useState } from "react";

const MoviesContext = createContext();

export const useMovies = () => {
  return useContext(MoviesContext);
};

export const MoviesProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState([]);
  const updateMoviesData = (data) => {
    setMoviesData(data);
  };
  const defaultMoviesData = () => {
    const getPopularMovies = async () => {
      try {
        //const apiKey = "01362cd35d583e444d19758bff64a01f";
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;

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
        setMoviesData(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getPopularMovies();
  };
  return (
    <MoviesContext.Provider
      value={{ updateMoviesData, moviesData, defaultMoviesData }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
