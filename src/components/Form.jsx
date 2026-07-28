import React from "react";

export const Form = () => {
  return (
    <>
      <form className="row pt-4 ">
        <div className="col-auto w-100">
          <div className="input-group">
            <input
              type="text"
              name="movieName"
              className="form-control "
              placeholder="Search Movie Name"
            />
            <button className="btn btn-danger" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
