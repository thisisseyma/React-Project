import React from "react";
import { useMovies } from "../context/MoviesContext";
import { Link } from "react-router-dom";

function GenreCard({ genre }) {
  const { updateMoviesData } = useMovies();
  const getGenreData = async (id) => {
    try {
      //const apiKey = "01362cd35d583e444d19758bff64a01f";
      const apiUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`;

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
