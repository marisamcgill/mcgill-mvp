import { useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Movies from "./pages/Movies";

function App() {
  return (
    <>
      Which Robert De Niro Movie?
      <nav>
        <div>
        <Link to="/">Home</Link></div>
        <div>
        <Link to="/results">Results</Link></div>
        <div>
        <Link to="/movies">Movies</Link></div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;