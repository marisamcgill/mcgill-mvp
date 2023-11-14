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
        <h1>GoodMovies for GoodFellas</h1>
      </div>
      <nav>
        <div className="menu">
          <div>
            <Link to="/">Movie Generator </Link>
            <Link to="/movies"> All Movies</Link>
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
