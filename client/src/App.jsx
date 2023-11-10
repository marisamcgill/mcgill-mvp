// App.js
import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
 
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
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:MovieID" element={<Movie />} />
      </Routes>
    </>
  );
}
