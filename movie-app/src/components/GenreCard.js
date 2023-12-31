import React from "react";
import { useMovies } from "../contexts/MoviesContext";
import { Link } from "react-router-dom";

function GenreCard({ genre }) {
  const { setMoviesData } = useMovies();
  const getGenreData = async (id) => {
    try {
      const apiUrl = `${process.env.REACT_APP_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`;

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
