import React from "react";

function Home() {


  console.log("test");

const genres = ['Action', 'Comedy', 'Crime', 'Drama', 'Family', 'Musical', 'Romance', 'Thriller', 'War']; 
function genreQuestion({ onGenreSelect }) {

  };

  const handleGenreSelect = (event) => {
    // onGenreSelect(genre);
    event.preventDefault();
    console.log(genres[event]);
  
}

// const times = ['< 90 minutes', '< 120 minutes', '< 180 minutes', '< 240 minutes', '< 300 minutes'];
// function timeQuestion({ onTimeSelect }) { 

//   const handleTimeSelect = (time) => {
   // // onTimeSelect(time);
// console.log(time);    
//   };

// }
// const years = ['1970s', '1980s', '1990s', '2000s', '2010s']; 
// function yearQuestion({ onYearSelect }) {

//   const handleYearSelect = (year) => {
//     //onYearSelect(year);
//    console.log(years);
//   };

  return (
    // <div>
    //   <div>
    //   <h2>What are you in the mood for?</h2>
    //   <ul>
    //     {genres.map((genre) => (
    //       <li key={genre} onClick={() => handleGenreSelect(genre)}>
    //         {genre}
    //       </li>
    //     ))}
    //   </ul>
    // </div>

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


    {/* <div>
    <h2>How long have you got?</h2>
    <ul>
      {times.map((time) => (
        <li key={time} onClick={() => handleTimeSelect(time)}>
          {time}
        </li>
      ))}
    </ul>
    </div>
      <div>
        <h2>When was it released?</h2>
        <ul>
          {years.map((year) => (
            <li key={year} onClick={() => handleYearSelect(year)}>
              {year}
            </li>
          ))} */}
        {/* </ul> */}
      {/* </div> */}
    </div>
  );
 }
export default Home;


