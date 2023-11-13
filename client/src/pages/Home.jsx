import React, {useState, useEffect} from "react";
import '../App.css';

function Home() {
  const [genre, setGenre] = useState("");
  const [time, setTime] = useState("");
  const [year, setYear] = useState("");
  const [randomMovie, setRandomMovie] = useState(null);
  const [error, setError] = useState("");

  // console.log("test");

const genres = [
  { label: 'Comedy', value: 'Comedy' },
  { label: 'Crime', value: 'Crime' },
  { label: 'Drama', value: 'Drama' },
  { label: 'Family', value: 'Family' },
  { label: 'Musical', value: 'Musical' },
  { label: 'Romance', value: 'Romance' },
  { label: 'Science Fiction', value: 'Science Fiction' },
  { label: 'Thriller', value: 'Thriller' },
  { label: 'War', value: 'War' },
];

// ['Action', 'Comedy', 'Crime', 'Drama', 'Family', 'Musical', 'Romance', 'Science Fiction', 'Thriller', 'War']; 
function genreQuestion({ onGenreSelect }) {

  };

  const handleGenreSelect = (event) => {
    event.preventDefault();

    const genre = event.target.value;
    
    setGenre(genre);
    console.log(genre);
  }

const times = [
  { label: 'Up to 90 minutes', value: '<= 90' },
  { label: 'Up to 120 minutes', value: '<= 120' },
  { label: 'Up to 180 minutes', value: '<= 180' },
  { label: 'Up to 240 minutes', value: '<= 240' },
  { label: 'Up to 300 minutes', value: '<= 300' },
];

// ['Up to 90 minutes', 'Up to 120 minutes', 'Up to 180 minutes', 'Up to 240 minutes', 'Up to 300 minutes'];
function timeQuestion({ onTimeSelect }) { 
};

  const handleTimeSelect = (event) => {
   event.preventDefault();

   const time = event.target.value;
   
  setTime(time);
  console.log(time);    
  };

const years = [
  { label: '1970s', value: '> 1969 && < 1980' },
  { label: '1980s', value: '> 1979 && < 1990' },
  { label: '1990s', value: '> 1989 && < 2000' },
  { label: '2000s', value: '> 1999 && < 2010' },
  { label: '2010s', value: '> 2009 && < 2020' },
];

// ['1970s', '1980s', '1990s', '2000s', '2010s']; 
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
      // console.log(genre);
      let response = await fetch(`/api/movies/${genre}`);
      // console.log(response);
      if (response.ok) {
          let movieDisplay = await response.json();
          setRandomMovie(movieDisplay[0]);
          // console.log(movieDisplay);
      } else {
          setError("Uh oh, we weren't able to find a match. Click Movie Generator to try again.");
      }
  } catch (err) {
      setError("Uh oh, we weren't able to find a match. Click Movie Generator to try again.");
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
              <option key={time} value={time.value}>{time.label}</option>
            ))}
          </select>
        </label></div>

        <div className="centered">
        <label className="question">
          When was it released?
          <select className="form-select" name='year' onChange={handleYearSelect}>
            {years.map(year => (
              <option key={year} value={year.value}>{year.label}</option>
            ))}
          </select>
        </label></div>
            
        <div className="centered">
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      {error && (
        <div className="errorMessage">
          {error}
          </div>
      )}
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


