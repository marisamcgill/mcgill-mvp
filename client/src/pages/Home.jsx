import React from "react";

export default function Home() {
  return <div>Movie Generator</div>;
}


function genreQuestion({ onGenreSelect }) {
  const genres = ['Action', 'Comedy', 'Crime', 'Drama', 'Family', 'Musical', 'Romance', 'Thriller', 'War']; 

  const handleGenreSelect = (genre) => {
    onGenreSelect(genre);
  };

  return (
    <div>
      <h2>What are you in the mood for?</h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre} onClick={() => handleGenreSelect(genre)}>
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default genreQuestion;

function timeQuestion({ onTimeSelect }) {
  const times = ['< 90 minutes', '< 120 minutes', '< 180 minutes', '< 240 minutes', '< 300 minutes']; 

  const handleTimeSelect = (time) => {
    onTimeSelect(time);
  };

  return (
    <div>
      <h2>How long have you got?</h2>
      <ul>
        {times.map((time) => (
          <li key={time} onClick={() => handleTimeSelect(time)}>
            {time}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default timeQuestion;

function yearQuestion({ onYearSelect }) {
  const years = ['1970s', '1980s', '1990s', '2000s', '2010s']; 

  const handleYearSelect = (year) => {
    onYearSelect(year);
  };

  return (
    <div>
      <h2>When was it released?</h2>
      <ul>
        {years.map((year) => (
          <li key={year} onClick={() => handleYearSelect(time)}>
            {year}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default yearQuestion;