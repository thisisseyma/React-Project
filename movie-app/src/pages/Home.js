import React from "react";
import SearchBar from "../components/SearchBar";
import "./Home.css";
import MoviesView from "../components/MoviesView";

function Home() {
  return (
    <div className="home-container">
      <div className="main">
        <SearchBar />
        <MoviesView />
      </div>
    </div>
  );
}

export default Home;
