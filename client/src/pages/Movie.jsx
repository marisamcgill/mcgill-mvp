import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <h1>
      {movie.MovieName} 
      {/* ({MovieDirector}, {m.MovieYear})
      {m.MovieGenre}, {m.MovieLength} */}
      </h1>
    </div>
  );
}