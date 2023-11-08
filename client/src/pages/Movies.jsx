import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  const [movies, setMovies] = useState([]);
  // const [movie, setMovie] = useState({
  //   movienmame: "",
  //   moviedirector: "",
  //   movieyear: ""
  // });

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const response = await fetch("/api/movies");
    const data = await response.json();
    setMovies(data);

    async function getMovies() {
      try {
        const response = await fetch("/api/movies");
        if (!response.ok) {
          throw new Error("Oops, something went wrong");
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Oops, something went wrong");
      }
    }
    

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
