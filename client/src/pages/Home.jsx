import React, {useState} from "react";

function Home() {
  const [genre, setGenre] = useState("");
  const [time, setTime] = useState("");
  const [year, setYear] = useState("");

  console.log("test");

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
   console.log(years);
  };

  return (
<div>
    <div>
  <label className="col-4">
      What are you in the mood for?
      <select className="form-select form-select-md" name='genre' id="selected" onChange={(event) => handleGenreSelect(event)}>
          {genres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
          ))}
      </select>
  </label>
  </div> 

            <div>
  <label className="col-4">
      How long have you got?
      <select className="form-select form-select-md" name='time' id="selected" onChange={(event) => handleTimeSelect(event)}>
          {times.map(time => (
              <option key={time} value={time}>{time}</option>
          ))}
      </select>
  </label>
  </div> 

  <div>
  <label className="col-4">
      When was it released?
      <select className="form-select form-select-md" name='year' id="selected" onChange={(event) => handleTimeSelect(event)}>
          {years.map(year => (
              <option key={year} value={year}>{year}</option>
          ))}
      </select>
  </label>
  </div> 

  </div>


  );
 }
export default Home;


