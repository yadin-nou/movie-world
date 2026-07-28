import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Display } from "./components/Display";

function App() {
  return (
    <div className="wrapper d-flex flex-directin-coloum justify-content-center">
      <div className="container-md bg-danger pt-5">
        <header className="ps-5">Movie World</header>
        <section
          className="container-sm mt-5 bg-warning search"
          style={{ minHeight: "50vh", maxWidth: "600px" }}
        >
          <Form />
          <Display />
        </section>
        <section>Hello</section>
      </div>
    </div>
  );
}

export default App;
