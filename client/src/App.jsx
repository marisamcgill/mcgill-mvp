import { useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";

​
function App() {
  return (
    <>
      Pick Flick
      <div>
        <Link to="/">Home</Link>
        <Link to="/results">Results</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}
​
export default App;