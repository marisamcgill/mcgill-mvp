import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../App.css';


export default function Movie() {
  const [movie, setMovie] = useState({});
  const { MovieID } = useParams();
  console.log(MovieID);

  useEffect(() => {
    getMovie();
  }, [MovieID]);

  async function getMovie() {
    const response = await fetch(`/api/movie/${MovieID}`);
    const data = await response.json();
    setMovie(data);
  }

return (
    <div>
      <h2>
      <div>Movie Title: {movie.MovieName} </div>
      <div>Directed By: {movie.MovieDirector} </div>
      <div>Year of Release: {movie.MovieYear} </div>
      <div>Genre: {movie.MovieGenre} </div>
      <div>Runntime {movie.MovieLength} minutes </div>
      </h2>
    </div>
  );
}