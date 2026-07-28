export const Form = ({ handleCenterForm, focus }) => {
  return (
    <>
      {focus && (
        <div>
          <h4>Search Millions of Moives</h4>
          <p>Findout about the movies more details before watching them...</p>
        </div>
      )}
      <form className="row pt-4 ">
        <div className="col-auto">
          <div className="input-group">
            <input
              type="text"
              name="movieName"
              className="form-control "
              placeholder="Search Movie Name"
              style={{ width: "400px" }}
              onFocus={handleCenterForm}
            />
            <button className="btn btn-danger">Search</button>
          </div>
        </div>
      </form>
    </>
  );
};
