// App.js
import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="titleMain">
        <p>GoodMovies for GoodFellas</p>
        </div> <div className="subheading">
        <p>Which Robert de Niro movie should you watch?</p>
      </div>
      <img
            src={`/posters/main.png`}
            alt="De Niro"
            style={{ maxWidth: "1000px", height: "auto"}}
            className="mainImage"
          />
      <nav>
        <div className="menu">
          <div>
            <Link to="/">Movie Generator</Link>
            <Link to="/movies">All Movies</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:MovieID" element={<Movie />} />
      </Routes>
    </>
  );
}
