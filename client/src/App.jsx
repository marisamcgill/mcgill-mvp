// App.js
import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

export default function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch("/api/movies")
      .then((response) => response.json())
      .then((movies) => {
        setMovies(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      Which Robert De Niro Movie?
      <nav>
        <div>
          <Link to="/">Movie Generator</Link>
        </div>
        <div>
          <Link to="/movies">All Movies</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies movies={movies} />} />
      </Routes>
    </>
  );
}
