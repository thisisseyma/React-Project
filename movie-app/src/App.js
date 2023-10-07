import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import MovieDetails from "./pages/MovieDetails";
import { MoviesProvider } from "./context/MoviesContext";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <MoviesProvider>
      <Router>
        <div className="app">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </Router>
    </MoviesProvider>
  );
}

export default App;
