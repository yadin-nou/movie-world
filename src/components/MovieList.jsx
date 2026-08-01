import React, { useEffect, useState } from "react";

export const MovieList = ({ movieList, deleteMovie }) => {
  const [type, setType] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleAction = (action) => {
    setActiveFilter(action);
  };
  useEffect(() => {
    if (activeFilter === "all") {
      setType(movieList);
    } else {
      setType(movieList.filter((item) => item.action === activeFilter));
    }
    //console.log(type);
  }, [movieList, activeFilter]);

  return (
    <>
      <div className="btn-group">
        <input
          type="radio"
          className="btn-check"
          name="filter"
          id="all"
          onChange={() => handleAction("all")}
        />
        <label className="btn btn-outline-primary" htmlFor="all">
          ALL
        </label>

        <input
          type="radio"
          className="btn-check"
          name="filter"
          id="drama"
          checked={activeFilter === "drama"}
          onChange={() => handleAction("drama")}
        />
        <label className="btn btn-outline-warning" htmlFor="drama">
          Drama
        </label>

        <input
          type="radio"
          className="btn-check"
          name="filter"
          id="action"
          checked={activeFilter === "actions"}
          onChange={() => handleAction("actions")}
        />
        <label className="btn btn-outline-info" htmlFor="action">
          Action
        </label>
      </div>
      <div className="pt-4">Movies: {movieList.length}</div>
      <div className="d-flex justify-content-center align-item-center flex-wrap gap-2">
        {type.map((movie, index) => (
          <div
            key={index}
            className="card mb-3 mt-4"
            style={{
              maxWidth: "550px",
              backgroundColor: " rgba(255, 255, 255, 0.4)",
            }}
          >
            <div className="row g-0">
              <div className="col-6">
                <img
                  src={movie.Poster}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-6">
                <div className="card-body">
                  <h5 className="card-title fs-6">{movie.Title}</h5>
                  <p className="card-text" style={{ fontSize: "12px" }}>
                    IMBD Rating: {movie.imdbRating}
                    <br />
                    {movie.Plot.slice(0, 100)} ....
                  </p>

                  <span className="pt-2">
                    <button
                      className="btn btn-danger w-50"
                      onClick={() => deleteMovie(movie.imdbID)}
                    >
                      Delete
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
