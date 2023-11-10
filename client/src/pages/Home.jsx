import React, {useState, useEffect} from "react";
import '../App.css';

function Home() {
  const [genre, setGenre] = useState("");
  const [time, setTime] = useState("");
  const [year, setYear] = useState("");
  const [randomMovie, setRandomMovie] = useState(null);

  console.log("test");

const genres = ['Action', 'Comedy', 'Crime', 'Drama', 'Family', 'Musical', 'Romance', 'Thriller', 'War']; 
function genreQuestion({ onGenreSelect }) {

  };

  const handleGenreSelect = (event) => {
    event.preventDefault();

    genre = event.target.value;
    
    setGenre(genre);
    console.log(genre);
  }

const times = ['Up to 90 minutes', 'Up to 120 minutes', 'Up to 180 minutes', 'Up to 240 minutes', 'Up to 300 minutes'];
function timeQuestion({ onTimeSelect }) { 

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

  useEffect(() => {
    getRandomMovie();
  }, []);
  
  async function getRandomMovie() {
    try {
   //   const randomMovie = await db("SELECT * FROM movies WHERE genre LIKE "%${genre}%" AND duration LIKE "%${time}%" AND year like "%${year}%" ORDER BY RAND() LIMIT 1;")
      const randomMovie = await db(`SELECT * FROM movies WHERE genre LIKE "%{$genre}%" ORDER BY RAND() LIMIT 1;`)
      const displayRandomMovie = randomMovie.data[0]
      return displayRandomMovie
    } catch (error) {
      console.error("Uh oh, we weren't able to find a match. Click Movie Generator to try again.");
   }
  };

  const handleSubmit = async () => {
    try {
      const result = await getRandomMovie();
      if (!result.ok) {
        throw new Error ("Uh oh, we weren't able to find a match. Click Movie Generator to try again.");
      }
      const data = await result.json();
      setRandomMovie(movie);
      // console.log("Genre: ", genre);
      // console.log("Time: ", time);
      // console.log("Year: ", year);
    } catch (error) {
      console.error("Uh oh, we weren't able to find a match. Click Movie Generator to try again.");    }
  };


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
      {randomMovie && (
        <div className="centered">
          <h2>Here's your movie!</h2>
          <p>{randomMovie.title}</p>
        </div>
      )}
    </div>
  );
}

export default Home;


