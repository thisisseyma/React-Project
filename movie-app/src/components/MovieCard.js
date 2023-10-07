import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`Poster for ${movie.title}`}
        />
      ) : (
        <p>No poster available</p>
      )}
      <h2>{movie.title}</h2>
    </Link>
  );
}

export default MovieCard;
