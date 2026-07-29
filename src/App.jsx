import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Display } from "./components/Display";

function App() {
  const [focus, setFocus] = useState(false);
  const [movie, setMovie] = useState([]);

  const handleCenterForm = () => {
    setFocus(true);
  };

  const fetchMovie = async (title) => {
    try {
      const url = `https://www.omdbapi.com/?t=${title}&apikey=2f439848`;
      const response = await fetch(url);
      const data = await response.json();
      //setMovie(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const serachDelete = () => {
    setFocus(true);
  };
  const seachMovie = async (title) => {
    const data = await fetchMovie(title);
    setMovie(data);
    setFocus(false);
    //console.log(movie);
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
    <div className="wrapper d-flex flex-directin-coloum justify-content-center">
      <div className="container-md bg-danger pt-5">
        <header>
          <h2>Movie World</h2>
        </header>
        <section
          className="container-sm mt-3 bg-warning search"
          style={{ minHeight: "80vh" }}
        >
          <Form
            handleCenterForm={handleCenterForm}
            focus={focus}
            seachMovie={seachMovie}
          />
          {!focus && <Display movie={movie} serachDelete={serachDelete} />}
        </section>
        <section>Hello</section>
      </div>
    </div>
  );
}

export default App;
