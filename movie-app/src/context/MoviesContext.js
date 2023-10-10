import React, { createContext, useContext, useState } from "react";

const MoviesContext = createContext();

export const useMovies = () => {
  return useContext(MoviesContext);
};

export const MoviesProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState([]);

  const defaultMoviesData = () => {
    const getPopularMovies = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_BASE_URL}/movie/popular?language=en-US&page=1`;

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
      value={{ setMoviesData, moviesData, defaultMoviesData }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
