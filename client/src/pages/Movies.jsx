import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const response = await fetch("/api/movies");
    const data = await response.json();
    setMovies(data);
  }
  return (
    <div>
      All Movies
      <div>
        {movies.map((m) => (
          <div key={m.id}>
            <Link to={`/movies/${m.id}`}>
              {m.moviename} {m.moviedirector} {m.movieyear}
            </Link>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
