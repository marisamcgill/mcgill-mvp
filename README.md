# GoodMovies for GoodFellas - Robert De Niro random movie generator

This app asks the user to select a multichoice answer to 3 questions (movie genre, runtime and release year) in order to randomly generate a movie suggestion from a database of movies starring Robert De Niro.

## Features

:one: Movie Generator 

This is the homepage of the app and features 3 questions:
    1. What are you in the mood for? (Genre)
    2. How long have you got? (Time)
    3. When was it release? (Year)

When the user clicks the 'Submit' button, a random movie will be generated.
If there is no movie in the database fitting their inputs, they will receive an error message.
There is a 'Reset' button they can use to enter different answers. 

:two: All Movies

This page shows a full list of the movies in the database.
The user can click on each individual movie to find out more information about it.

:three: Movie Spotlight 

When a user clicks on a movie from the All Movies page, they will be redirected to the Movie Spotlight.
This will display the following information:
    - Movie title
    - Director
    - Year of release
    - Genre
    - Runtime 

The user can click the 'Back' button to return to the All Movies page.
They can also use the navigation menu to return to the All Movies page or the Movie Generator page.

## Things to know

There are 20 movies in the MySQL 'movies' database.
There are 3 routes - Home (corresponds to Movie Generator), Movies (corresponds to All Movies) and Movie (corresponds to Movie Spotlight).
The Movie route is accessed by clicking on a movie on the All Movies page, there is no menu / navigation option to access this page directly.
The responses from the 3 questions on the frontend are used to fetch on the backend - it will check for any movies in the database that match the inputs and then uses a randomise function to select one at random. The code for this can be found on movies.js.
All styling was done with CSS of app.css.
There is a public folder call 'posters' which includes all movie posters and the main image used on the page.

## Features I would have likes to added

'Next' or 'Skip' button to move to the next random movie. 
Links to the relevent streaming service / YouTube trailer / IMDB etc.
Larger database - I manually imported the movies to the database as I couldn't find a suitable pre-existing one, ideally there would be much more than 20 films available.
Option to thumbs up / thumbs down / mark a movie as watched. 
Track user history to see their preferences and what they have watched before.

# Setup

## Dependencies

Run `npm install` in your project directory
`cd client` and run `npm install`

## Database

Access the MySQL interface in your terminal by running `mysql -u root -p`
Within the mvp database there is one table, 'movies'
Run `npm migrate` in the project folder of this repository, in a new terminal window

## Frontend development

Run `npm start` in the project directory to start the Express server on port 4000
In another terminal, `cd client` and `npm run dev` to start the client in development with hot reloading in port 5173