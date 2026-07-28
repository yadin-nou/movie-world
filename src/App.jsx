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
      setMovie(data);
    } catch (error) {
      console.log(Error);
    }
  };
  useEffect(() => {
    fetchMovie("prem");
  }, []);
  return (
    <div className="wrapper d-flex flex-directin-coloum justify-content-center">
      <div className="container-md bg-danger pt-5">
        <header className="ps-5">Movie World</header>
        <section
          className="container-sm mt-3 bg-warning search"
          style={{ minHeight: "80vh" }}
        >
          <Form handleCenterForm={handleCenterForm} focus={focus} />
          {!focus && <Display />}
        </section>
        <section>Hello</section>
      </div>
    </div>
  );
}

export default App;
