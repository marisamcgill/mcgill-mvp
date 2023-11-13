import React, {useState, useEffect} from "react";
import '../App.css';

function Home() {
  const [genre, setGenre] = useState("");
  const [time, setTime] = useState("");
  const [year, setYear] = useState("");
  const [randomMovie, setRandomMovie] = useState(null);
  const [error, setError] = useState("");

  // console.log("test");

const genres = ['Action', 'Comedy', 'Crime', 'Drama', 'Family', 'Musical', 'Romance', 'Thriller', 'War']; 
function genreQuestion({ onGenreSelect }) {

  };

  const handleGenreSelect = (event) => {
    event.preventDefault();

    const genre = event.target.value;
    
    setGenre(genre);
    console.log(genre);
  }

const times = ['Up to 90 minutes', 'Up to 120 minutes', 'Up to 180 minutes', 'Up to 240 minutes', 'Up to 300 minutes'];
function timeQuestion({ onTimeSelect }) { 
  //convert array of str to array of obj
  //add values and labels 

};

  const handleTimeSelect = (event) => {
   event.preventDefault();

   const time = event.target.value;
   
  setTime(time);
  console.log(time);    
  };

const years = ['1970s', '1980s', '1990s', '2000s', '2010s']; 
function yearQuestion({ onYearSelect }) {

};

  const handleYearSelect = (event) => {
    event.preventDefault();

    const year = event.target.value;

    setYear(year);
   console.log(year);
  };

  //whre year is > this and less than < +10
  //or match first 3 characters 


  async function getRandomMovie() {
    try {
      console.log(genre);
      let response = await fetch(`/api/movies/${genre}`);
      // console.log(response);
      if (response.ok) {
          let movieDisplay = await response.json();
          setRandomMovie(movieDisplay[0]);
          console.log(movieDisplay);
      } else {
          console.log("Uh oh, we weren't able to find a match. Click Movie Generator to try again.");
      }
  } catch (err) {
      console.log("Uh oh, we weren't able to find a match. Click Movie Generator to try again.");
  }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    getRandomMovie();
  }
  


  return (
    <div className="container">
      <h1 className="title">Movie Generator</h1>

    <div className="centered">
        <label className="question">
          What are you in the mood for?
          <select className="form-select" name='genre' onChange={handleGenreSelect}>
            {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </label> </div>

        <div className="centered">
        <label className="question">
          How long have you got?
          <select className="form-select" name='time' onChange={handleTimeSelect}>
            {times.map(time => (
              <option key={time} value={time}>{time}</option>
              //value = time.value
            ))}
          </select>
        </label></div>

        <div className="centered">
        <label className="question">
          When was it released?
          <select className="form-select" name='year' onChange={handleYearSelect}>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </label></div>
            
        <div className="centered">
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {error}
      {randomMovie && (
        <div className="centered">
          <h2>Here's your movie!</h2>
          <img 
            src={`/posters/${randomMovie.MovieID}.jpg`} 
            alt="Movie Poster" 
            style={{ maxWidth: '250px', height: 'auto' }} />
            <h3>{randomMovie.MovieName}</h3>
        </div>
      )}
    </div>
  );
}

export default Home;


