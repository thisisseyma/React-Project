import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/images/logo.png";
import GenreCard from "./GenreCard";
import CategoryCard from "./CategoryCard";
import { useMovies } from "../contexts/MoviesContext";
import { useSearch } from "../contexts/SearchContext";

const Sidebar = () => {
  const [genresList, setGenresList] = useState([]);
  const [activeCategoryName, setActiveCategoryName] = useState("Popular");
  const { defaultMoviesData } = useMovies();
  const { setSearch } = useSearch();
  const categoriesData = ["Popular", "Top Rated", "Upcoming"];

  const handleActiveCategory = (e) => {
    setActiveCategoryName(e.target.innerHTML);
    setSearch("");
  };

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_BASE_URL}/genre/movie/list?language=en`;

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: process.env.REACT_APP_AUTHORIZATION,
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
    defaultMoviesData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="sidebar">
      <Link
        to="/"
        onClick={() => {
          defaultMoviesData();
          setActiveCategoryName("Popular");
          setSearch("");
        }}
      >
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className="side-links">
        <h3 className="side-item">Categories</h3>
        <ul>
          {categoriesData.map((category) => (
            <li
              key={category}
              className={
                activeCategoryName === category
                  ? "side-elements active-category"
                  : "side-elements"
              }
              onClick={handleActiveCategory}
            >
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
        <hr className="hr" />
        <h3 className="side-item">Genres</h3>
        <ul>
          {genresList.map((genre) => (
            <li
              key={genre.id}
              className={
                activeCategoryName === genre.name
                  ? "side-elements active-category"
                  : "side-elements"
              }
              onClick={handleActiveCategory}
            >
              <GenreCard genre={genre} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
