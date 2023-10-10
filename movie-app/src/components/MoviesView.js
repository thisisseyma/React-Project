import React from "react";
import MovieCard from "./MovieCard";
import { useMovies } from "../context/MoviesContext";
import "./MoviesView.css";

function MoviesView() {
  const { moviesData } = useMovies();
  return (
    <div>
      {moviesData.length > 0 ? (
        <ul className="movies-view">
          {moviesData.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="movies-view">No movies found!</div>
      )}
    </div>
  );
}

export default MoviesView;
