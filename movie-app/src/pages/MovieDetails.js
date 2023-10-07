import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const [movieData, setMovieData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        //const apiKey = "01362cd35d583e444d19758bff64a01f";
        const apiUrl = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

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
      <div>Back to Home Page</div>
      <div>
        <div>
          {movieData.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
              alt={`Poster for ${movieData.title}`}
            />
          ) : (
            <p>No poster available</p>
          )}
        </div>
        <div>{movieData.title}</div>
      </div>
    </div>
  );
}

export default MovieDetails;
