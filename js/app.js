// Eindopdracht Pascal Pater
// Javascript Advanced - Filmzoeker

// check if database is accessible
console.log(movies);

// get the needed elements and classes
const movieList = document.querySelector("#js-movie-list");
const radioButtons = document.querySelectorAll("input[name='film-filter']");

// get the url for the poster of each movie
// create an li with an img element with the poster url as src
const createImgElement = (moviePoster) => {
  const movieImg = document.createElement("img");
  movieImg.src = moviePoster;
  return movieImg;
};

// construct the link to imdb
// add the imdbID to the base url to create url
// create a element and add url to href
// add target to href to open in new page 
const createMovieLink = (movieID) => {
  const link = "https://www.imdb.com/title/" + movieID;
  const movieLink = document.createElement("a");
  movieLink.href = link;
  movieLink.target = "_blank";
  return movieLink;
};

// filter movies on title based on value send from clicked button
// put result in an array and send to addMoviesToDom
const filterMovies = (wordInMovieTitle) => {
  const getFilteredMovies = movies
    .filter((movie) => movie.Title.includes(wordInMovieTitle))
    .map((movie) => movie);
  addMoviesToDom(getFilteredMovies);
};

// filter movies based on year
// put result in an array and send to addMoviesToDom
const filterLatestMovies = () => {
  const getLatestMovies = movies
    .filter((movie) => movie.Year > 2013)
    .map((movie) => movie);
  addMoviesToDom(getLatestMovies);
};

// remove all movie items
// so filtered items will not be added 
// to the back of the previous list
const removeAllMovies = () => {
  const movieListItems = document.querySelectorAll("#js-movie-list li");
  movieListItems.forEach((movieListItem) => movieListItem.remove());
};

// receive the selected element
// get the value of the selected button
// send case to correct filter function
const handleOnChangeEvent = (event) => {
  switch (event.target.value) {
    case "latest":
      filterLatestMovies();
      break;
    case "avenger":
      filterMovies("Avengers");
      break;
    case "xmen":
      filterMovies("X-Men");
      break;
    case "princess":
      filterMovies("Princess");
      break;
    case "batman":
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

// add the movies to the movie list in the DOM
// first remove all existing movie items
// loop through received movies by the filter
// create listitem with poster img and link for each movie
// add each movie item to the list in the DOM 
const addMoviesToDom = (movies) => {
  removeAllMovies();
  const movieItems = movies.map((movie) => {
    const moviePoster = movie.Poster;
    const movieID = movie.imdbID;
    const movieItem = document.createElement("li");
    const movieImg = createImgElement(moviePoster);
    const movieLink = createMovieLink(movieID);
    movieItem.appendChild(movieLink).appendChild(movieImg);
    return movieItem;
  });

  movieItems.forEach((movieItem) => {
    movieList.appendChild(movieItem);
  });
};

// call the event listeners for the radio buttons
addEventListeners();

// on first page load or reload show all movies
addMoviesToDom(movies);
