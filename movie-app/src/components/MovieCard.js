import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";
import noPoster from "../assets/images/no-poster.png";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      {movie.poster_path ? (
        <img
          className="movie-card-image"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`Poster for ${movie.title}`}
        />
      ) : (
        <img className="movie-card-image" src={noPoster} alt="no-poster" />
      )}
      <h2>{movie.title}</h2>
    </Link>
  );
}

export default MovieCard;
