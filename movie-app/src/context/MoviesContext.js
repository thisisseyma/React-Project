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
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;

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
