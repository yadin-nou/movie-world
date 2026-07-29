import { useRef } from "react";

export const Form = ({ handleCenterForm, focus, seachMovie }) => {
  const refSearch = useRef("");
  const handleSearch = (e) => {
    e.preventDefault();
    seachMovie(refSearch.current.value);
  };
  return (
    <>
      {focus && (
        <div>
          <h4>Search Millions of Moives</h4>
          <p>Findout about the movies more details before watching them...</p>
        </div>
      )}
      <form className="row pt-4 " onSubmit={(e) => handleSearch(e)}>
        <div className="col-auto">
          <div className="input-group">
            <input
              type="text"
              name="movieName"
              className="form-control "
              placeholder="Search Movie Name"
              style={{ width: "calc(100vh - 550px)" }}
              onFocus={handleCenterForm}
              ref={refSearch}
            />
            <button className="btn btn-danger">Search</button>
          </div>
        </div>
      </form>
    </>
  );
};
