// Eindopdracht Pascal Pater
// Javascript Advanced - Filmzoeker

// check if database is accessible
console.log(movies);

// get all the needed elements and classes
const movieList = document.querySelector("#movie-list");

const addMoviesToDom = (movies) => {
  movieList.appendChild(movies);
};

// get the url for the poster of each movie from the movies database
// create an li with an img element with the poster url as src
// send the list of movie posters to addMoviesToDom function
const getMoviePosters = movies.map((movie) => {
  const moviePoster = movie.Poster
  const movieItem = document.createElement("li");
  const movieImg = document.createElement("img");
  movieItem.appendChild(movieImg);
  movieImg.src = moviePoster;
  addMoviesToDom(movieItem);
});



