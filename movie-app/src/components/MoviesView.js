import React from "react";
import MovieCard from "./MovieCard";
import { useMovies } from "../context/MoviesContext";

function MoviesView() {
  const { moviesData } = useMovies();
  return (
    <div>
      <ul>
        {moviesData.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesView;
