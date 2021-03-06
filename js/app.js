// Eindopdracht Pascal Pater
// Javascript Advanced - Filmzoeker

// check if database is accessible
console.log(movies);

// get all the needed elements and classes
const movieList = document.querySelector("#movie-list");
const radioButtons = document.querySelectorAll("input[name='film-filter']");

// add the movies to the movie list in the DOM
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
  const movieLink = document.createElement("a");
  movieItem.appendChild(movieLink).appendChild(movieImg);
  movieID = movie.imdbID;
  const link = "https://www.imdb.com/title/" + movieID;
  movieLink.href = link;
  movieLink.target = "_blank";
  movieImg.src = moviePoster;
  addMoviesToDom(movieItem);
});


// receive the selected element
// get the value of the selected button
const handleOnChangeEvent = (event) => {
  console.log("dit is handleonchangeevent", event.target.value);
  switch (event.target.value) {
    case "latest":
      console.log("hey ik ben Latest film");
      break;
    case "avenger":
      console.log("hey ik ben Avneger film");
      break;
    case "xmen":
      console.log("hey ik ben X-men film");
      break;
    case "princess":
      console.log("hey ik ben Princess film");
      break;
    case "batman":
      console.log("hey ik ben Batman film");
      break;
    default:
      console.log("DEFAULT");
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
