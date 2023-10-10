import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import noPoster from "../assets/images/no-poster.png";
import "./MovieDetails.css";

function MovieDetails() {
  const [movieData, setMovieData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_BASE_URL}/movie/${id}?language=en-US`;

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: process.env.REACT_APP_AUTHORIZATION,
          },
        };

        const response = await fetch(apiUrl, options);
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetail();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="movie-container">
      <div className="movie-box">
        <div>
          {movieData.poster_path ? (
            <img
              className="movie-card-img"
              src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
              alt={`Poster for ${movieData.title}`}
            />
          ) : (
            <img className="movie-card-img" src={noPoster} alt="no-poster" />
          )}
        </div>
        <div className="movie-info">
          <h1>
            {movieData.title} ({movieData.release_date?.split("-")[0]})
          </h1>
          <h3>"{movieData.tagline}"</h3>
          <h4>{movieData.vote_average} / 10</h4>
          <h4>{movieData.runtime}min</h4>
          <h3 className="overview">Overview</h3>
          <p>{movieData.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
