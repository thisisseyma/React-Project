import React from "react";
import { useMovies } from "../context/MoviesContext";
import { Link } from "react-router-dom";

function GenreCard({ genre }) {
  const { updateMoviesData } = useMovies();
  const getGenreData = async (id) => {
    try {
      const apiUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`;

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: process.env.REACT_APP_AUTHORIZATION,
        },
      };

      const response = await fetch(apiUrl, options);
      const data = await response.json();
      updateMoviesData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Link
      to={"/"}
      onClick={() => {
        getGenreData(genre.id);
      }}
    >
      {genre.name}
    </Link>
  );
}

export default GenreCard;
