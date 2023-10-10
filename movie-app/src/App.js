import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import MovieDetails from "./pages/MovieDetails";
import { MoviesProvider } from "./contexts/MoviesContext";
import { SearchProvider } from "./contexts/SearchContext";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <MoviesProvider>
      <SearchProvider>
        <Router>
          <div className="app">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </div>
        </Router>
      </SearchProvider>
    </MoviesProvider>
  );
}

export default App;
