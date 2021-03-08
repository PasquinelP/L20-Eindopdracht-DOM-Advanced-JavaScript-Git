// Eindopdracht Pascal Pater
// Javascript Advanced - Filmzoeker

// check if database is accessible
console.log(movies);

// get all the needed elements and classes
const movieList = document.querySelector("#movie-list");
const radioButtons = document.querySelectorAll("input[name='film-filter']");


const createMovieLink = (movieID) => {
  const link = "https://www.imdb.com/title/" + movieID;
  const movieLink = document.createElement("a");
  movieLink.href = link;
  movieLink.target = "_blank";
  return movieLink;
};

const removeAllMovies = () => {
  const movieListItems = document.querySelectorAll("#movie-list li");

  console.log("Movie list items: ", movieListItems);
  movieListItems.forEach((movieListItem) => movieListItem.remove());
};

// add the movies to the movie list in the DOM
const addMoviesToDom = (movies) => {
  
  removeAllMovies();

  console.log("Ontvangen films", movies)
  const movieItems = movies.map((movie) => {
    const moviePoster = movie.Poster;
    const movieID = movie.imdbID;
    
    const movieItem = document.createElement("li");
    const movieImg = document.createElement("img");
    const movieLink = createMovieLink(movieID);
    // const movieLink = document.createElement("a");
    movieItem.appendChild(movieLink).appendChild(movieImg);
    
    // const link = "https://www.imdb.com/title/" + movieID;
    // movieLink.href = link;
    // movieLink.target = "_blank";
    movieImg.src = moviePoster;
    return movieItem;
  });

  movieItems.forEach((movieItem) => {
    movieList.appendChild(movieItem);
  })
  
};

addMoviesToDom(movies);



 
// createMovieLink(12345);

// get the url for the poster of each movie from the movies database
// create an li with an img element with the poster url as src
// send the list of movie posters to addMoviesToDom function
const getMoviePosters = movies.map((movie) => {
  const moviePoster = movie.Poster
  const movieItem = document.createElement("li");
  const movieImg = document.createElement("img");
  const movieLink = document.createElement("a");
  movieItem.appendChild(movieLink).appendChild(movieImg);
  movieID = movie.imdbID;
  const link = "https://www.imdb.com/title/" + movieID;
  movieLink.href = link;
  movieLink.target = "_blank";
  movieImg.src = moviePoster;
  // addMoviesToDom(movieItem);
});



// receive the selected element
// get the value of the selected button
const handleOnChangeEvent = (event) => {
  console.log("dit is handleonchangeevent", event.target.value);
  switch (event.target.value) {
    case "latest":
      console.log("hey ik ben Latest film");
      filterLatestMovies();
      break;
    case "avenger":
      console.log("hey ik ben Avneger film");
      filterMovies("Avengers");
      break;
    case "xmen":
      console.log("hey ik ben X-men film");
      filterMovies("X-Men");
      break;
    case "princess":
      console.log("hey ik ben Princess film");
      filterMovies("Princess");
      break;
    case "batman":
      console.log("hey ik ben Batman film");
      filterMovies("Batman");
      break;
    default:
      console.log("all");
  } 
};

// cycle through radio buttons
// listen for a change so you know which radio button is selected
// send selected element to handleOnchangeEvent function
const addEventListeners = () => {
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", handleOnChangeEvent);
});
};

addEventListeners();



const filterMovies = (wordInMovieTitle) => {
  console.log("My value is", wordInMovieTitle);
    const getFilteredMovies = movies
      .filter((movie) => movie.Title.includes(wordInMovieTitle))
      .map((movie) => movie);

    addMoviesToDom(getFilteredMovies);
};

const filterLatestMovies = () => {
  const getLatestMovies = movies
  .filter((movie) => movie.Year > 2013)
  .map((movie) => movie);

  console.log("Layest movies: ", getLatestMovies);
  addMoviesToDom(getLatestMovies);
};

