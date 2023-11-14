import React, { useState, useEffect } from "react";
import "../App.css";

function Home() {
  const [genre, setGenre] = useState("");
  const [time, setTime] = useState("");
  const [year, setYear] = useState("");
  const [randomMovie, setRandomMovie] = useState(null);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  // console.log("test");

  const genres = [
    { label: "Select", value: "null" },
    { label: "Action", value: "Action" },
    { label: "Comedy", value: "Comedy" },
    { label: "Crime", value: "Crime" },
    { label: "Drama", value: "Drama" },
    { label: "Family", value: "Family" },
    { label: "Musical", value: "Musical" },
    { label: "Romance", value: "Romance" },
    { label: "Science Fiction", value: "Science Fiction" },
    { label: "Thriller", value: "Thriller" },
    { label: "War", value: "War" },
  ];

  // ['Action', 'Comedy', 'Crime', 'Drama', 'Family', 'Musical', 'Romance', 'Science Fiction', 'Thriller', 'War'];
  function genreQuestion({ onGenreSelect }) {}

  const handleGenreSelect = (event) => {
    event.preventDefault();

    const genre = event.target.value;

    setGenre(genre);
    console.log(genre);
  };

  const times = [
    { label: "Select", value: null },
    { label: "Up to 90 minutes", value: "90" },
    { label: "Up to 120 minutes", value: "120" },
    { label: "Up to 180 minutes", value: "180" },
    { label: "Up to 240 minutes", value: "240" },
    { label: "Up to 300 minutes", value: "300" },
  ];

  // ['Up to 90 minutes', 'Up to 120 minutes', 'Up to 180 minutes', 'Up to 240 minutes', 'Up to 300 minutes'];
  function timeQuestion({ onTimeSelect }) {}

  const handleTimeSelect = (event) => {
    event.preventDefault();

    const time = event.target.value;

    setTime(time);
    console.log(time);
  };

  const years = [
    { label: "Select", value: null },
    { label: "1970s", value: "1970" },
    { label: "1980s", value: "1980" },
    { label: "1990s", value: "1990" },
    { label: "2000s", value: "2000" },
    { label: "2010s", value: "2010" },
  ];

  // ['1970s', '1980s', '1990s', '2000s', '2010s'];
  function yearQuestion({ onYearSelect }) {}

  const handleYearSelect = (event) => {
    event.preventDefault();

    const year = event.target.value;

    setYear(year);
    console.log(year);
  };

  const getRandomMovie = async () => {
    try {
      console.log(genre);
      console.log(time, year);
      if (genre || time || year) {
        let response = await fetch(
          `/api/movies/random?genre=${genre}&time=${time}&year=${year}`
        );
        if (response.ok) {
          let movieDisplay = await response.json();
          setRandomMovie(movieDisplay[0]);
          // console.log(movieDisplay);
          setHasSearched(true);
          setGenre("");
          setTime("");
          setYear("");
        } else {
          setError(
            "Uh oh, we weren't able to find a match. Click Movie Generator to try again."
          );
        }
      }

    } catch (err) {
      setError(
        "Uh oh, we weren't able to find a match. Click Movie Generator to try again."
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    getRandomMovie(genre, time, year);
  };

  const handleReset = () => {
    setGenre("");
    setTime("");
    setYear("");
    setRandomMovie(null);
    setError("");
    setHasSearched(false);
  };

  return (
    <div className="pageContainer">
    <div>
      <h1 className="titleMovieGenerator">Movie Generator</h1>

      <div className="centered">
        <label className="questions">
          What are you in the mood for?
          <select
            className="form-select"
            name="genre"
            onChange={handleGenreSelect}
          >
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.label}
              </option>
            ))}
          </select>
        </label>{" "}
      </div>

      <div className="centered">
        <label className="questions">
          How long have you got?
          <select
            className="form-select"
            name="time"
            onChange={handleTimeSelect}
          >
            {times.map((time) => (
              <option key={time.value} value={time.value}>
                {time.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="centered">
        <label className="questions">
          When was it released?
          <select
            className="form-select"
            name="year"
            onChange={handleYearSelect}
          >
            {years.map((year) => (
              <option key={year.value} value={year.value}>
                {year.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
      <div className="buttonSection">
        <button className="button" onClick={handleSubmit}>
          Submit
        </button>
        <button className="button" onClick={(handleReset)}>
          Reset
        </button>  
        </div>
        </div>
      {randomMovie ? (
        <div className="results">
          <p>{randomMovie.MovieName}</p>
          <img
            src={`/posters/${randomMovie.MovieID}.jpg`}
            alt="Movie Poster"
            style={{ maxWidth: "250px", height: "auto" }}
          />
        </div>
      ) : (
        hasSearched && (
          <div className="errorMessage">
            Uh oh, we weren't able to find a match. Click Reset to try again.
          </div>
        )
      )}
    </div>
    </div>
  );
}

export default Home;
