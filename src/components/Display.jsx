import React from "react";
import mtest from "../assets/images/mtest.jpg";

export const Display = ({ movie, searchDelete, setMovieAction }) => {
  console.log("test", movie.Response);

  return (
    <>
      <div
        className="card mb-3 mt-3 text-white"
        style={{
          maxWidth: "640px",
          backgroundColor: " rgba(255, 255, 255, 0.4)",
        }}
      >
        {movie.Response === "False" && (
          <div className="row g-0">
            <div className="col-12">
              <div className="card-body bg-info">Movie Not Found</div>
            </div>
          </div>
        )}
        {movie.Response !== "False" && (
          <div className="row g-0">
            <div className="col-12 col-sm-6">
              <img
                src={movie.Poster}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-12 col-sm-6">
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">
                  IMBD Rating: {movie.imdbRating}
                  <br />
                  {movie.Plot}
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <span></span>
                    <button
                      className="btn btn-warning"
                      onClick={() => setMovieAction("drama")}
                    >
                      Drama
                    </button>
                    <span className="ps-3">
                      <button
                        className="btn btn-info"
                        onClick={() => setMovieAction("actions")}
                      >
                        Action
                      </button>
                    </span>
                  </small>
                </p>
                <span className="pt-2">
                  <button
                    className="btn btn-danger w-50"
                    onClick={searchDelete}
                  >
                    Delete
                  </button>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
