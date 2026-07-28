import React from "react";
import mtest from "../assets/images/mtest.jpg";

export const Display = () => {
  return (
    <>
      <div className="card mb-3 mt-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-4">
            <img src={mtest} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  <span></span>
                  <button className="btn btn-warning">Drama</button>
                  <span className="ps-3">
                    <button className="btn btn-info">Action</button>
                  </span>
                </small>
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
