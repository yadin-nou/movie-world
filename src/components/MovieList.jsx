import React from "react";

export const MovieList = ({ movie }) => {
  return (
    <>
      <div className="card mb-3 mt-3" style={{ maxWidth: "640px" }}>
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

              <span className="pt-2">
                <button className="btn btn-danger w-50">Delete</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
