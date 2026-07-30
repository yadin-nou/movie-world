import React, { useEffect, useState } from "react";

export const MovieList = ({ movieList }) => {
  // console.log(movieList);
  const [type, setType] = useState([]);

  const handleAction = (action) => {
    action !== "all"
      ? setType(movieList.filter((item) => item.action === action))
      : setType(movieList);
  };
  useEffect(() => {
    setType(movieList);
    //console.log(movieList);
  }, [movieList.length]);
  return (
    <>
      <div className="btn-group">
        <input
          type="radio"
          className="btn-check"
          name="filter"
          id="all"
          defaultChecked
          onClick={() => handleAction("all")}
        />
        <label className="btn btn-outline-primary" htmlFor="all">
          ALL
        </label>

        <input
          type="radio"
          className="btn-check"
          name="filter"
          id="drama"
          onClick={() => handleAction("drama")}
        />
        <label className="btn btn-outline-warning" htmlFor="drama">
          Drama
        </label>

        <input
          type="radio"
          className="btn-check"
          name="filter"
          id="action"
          onClick={() => handleAction("actions")}
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
            style={{ maxWidth: "350px" }}
          >
            <div className="row g-0">
              <div className="col-4">
                <img
                  src={movie.Poster}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <h5 className="card-title fs-6">{movie.Title}</h5>
                  <p className="card-text" style={{ fontSize: "12px" }}>
                    IMBD Rating: {movie.imdbRating}
                    <br />
                    {movie.Plot}
                  </p>

                  <span className="pt-2">
                    <button className="btn btn-danger w-50">Delete</button>
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
