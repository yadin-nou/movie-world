import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Display } from "./components/Display";
import { MovieList } from "./components/MovieList";

function App() {
  const [focus, setFocus] = useState(false);
  const [movie, setMovie] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const handleCenterForm = () => {
    setFocus(true);
  };

  const fetchMovie = async (title) => {
    try {
      const url = `https://www.omdbapi.com/?t=${title}&apikey=2f439848`;
      const response = await fetch(url);
      const data = await response.json();
      //setMovie(data);
      if (data.Response === "false") {
        //console.log(data.Error);
        return null;
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const searchDelete = () => {
    setFocus(true);
  };
  const searchMovie = async (title) => {
    const data = await fetchMovie(title);
    setMovie(data);
    setFocus(false);
    //console.log(movie);
  };

  const deleteMovie = (imdbID) => {
    setMovieList(movieList.filter((item) => item.imdbID !== imdbID));
    //console.log(action);
  };

  const setMovieAction = (type) => {
    //     ...movieList — spreads all existing movies in the array (keeps them, doesn't mutate the original array ).
    // { ...movie, actions: type } — creates a new object that copies all of movie's existing properties (Title, Poster, imdbRating, etc.),
    //  then adds/overwrites an actions property set to type.
    // The whole thing wraps in [...] to build a new array, which gets set as the new movieList state.
    setMovieList([...movieList, { ...movie, action: type }]);
    //setMovieList([...movieList, movie]);
    setFocus(true);
    //console.log(movieList);
  };
  useEffect(() => {
    const initailMovie = async () => {
      const index = Math.floor(Math.random() * 12);
      const seedTitles = [
        "The Matrix",
        "Inception",
        "The Dark Knight",
        "Parasite",
        "Interstellar",
        "Pulp Fiction",
        "The Godfather",
        "Fight Club",
        "Spirited Away",
        "The Shawshank Redemption",
        "Titanic",
        "Gladiator",
      ];
      const data = await fetchMovie(seedTitles[index]);
      setMovie(data);
    };
    initailMovie();
  }, []);
  return (
    <>
      <div
        className="wrapper d-flex flex-directin-coloum justify-content-center"
        style={{
          backgroundImage: `url(${movie.Poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container-md  pt-5 p-3">
          <header>
            <h2>Movie World</h2>
          </header>
          <section
            className="container-sm mt-3 search"
            style={{
              minHeight: "80vh",
            }}
          >
            <Form
              handleCenterForm={handleCenterForm}
              focus={focus}
              searchMovie={searchMovie}
            />
            {!focus && (
              <Display
                movie={movie}
                searchDelete={searchDelete}
                setMovieAction={setMovieAction}
              />
            )}
          </section>
        </div>
      </div>
      <div className="wrapper d-flex flex-directin-coloum justify-content-center">
        <div className="container-md  pt-5 p-3">
          <section
            className="movie-list container-sm mt-3 pt-3 "
            style={{ minHeight: "80vh" }}
          >
            <MovieList movieList={movieList} deleteMovie={deleteMovie} />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
