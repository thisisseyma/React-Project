import React from "react";
import MovieCard from "./MovieCard";
import { useMovies } from "../contexts/MoviesContext";
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
        <div className="movies-view">
          <p>No movies found!</p>
        </div>
      )}
    </div>
  );
}

export default MoviesView;
