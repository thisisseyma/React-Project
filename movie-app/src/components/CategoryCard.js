import React from "react";
import { Link } from "react-router-dom";
import { useMovies } from "../context/MoviesContext";

function CategoryCard({ category }) {
  const { updateMoviesData, defaultMoviesData } = useMovies();

  const fetchCategories = async (category) => {
    try {
      const apiUrl =
        category === "Top Rated"
          ? `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`
          : `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`;
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
      to="/"
      onClick={() => {
        if (category === "Popular") {
          defaultMoviesData();
        } else if (category === "Top Rated") {
          fetchCategories(category);
        } else {
          fetchCategories(category);
        }
      }}
    >
      {category}
    </Link>
  );
}

export default CategoryCard;
