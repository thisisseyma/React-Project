import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/images/logo.png";
import GenreCard from "./GenreCard";
import { useMovies } from "../context/MoviesContext";
import CategoryCard from "./CategoryCard";

const Sidebar = () => {
  const [genresList, setGenresList] = useState([]);
  const { defaultMoviesData } = useMovies();
  const categoriesData = ["Popular", "Top Rated", "Upcoming"];

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        //const apiKey = "01362cd35d583e444d19758bff64a01f";
        const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?language=en`;

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
        setGenresList(data.genres);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGenres();
  }, []);

  return (
    <div className="navbar">
      <Link to="/" onClick={defaultMoviesData}>
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className="nav-links">
        <h5>Categories</h5>
        <ul>
          {categoriesData.map((category) => (
            <li key={category}>
              <CategoryCard category={category}/>
            </li>
          ))}
        </ul>
        <h5>Genres</h5>
        <ul>
          {genresList.map((genre) => (
            <li key={genre.id}>
              <GenreCard genre={genre} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
