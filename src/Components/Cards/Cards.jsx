import React from "react";
import data from "./cardsData";
const Cards = () => {
  return (
    <>
      
        <div className="row  d-flex justify-content-around p-sm-3 mb-5">
          <div className="col-lg-4">
            <div className="card-deck">
            <img className="img-fluid" src="/Images/3.jpg" alt="" />
              <div className="card shadow p-3 mb-5 bg-white rounded">
                <h2>{data[0].tittle}</h2>
                <p className="mt-5">{data[0].parah}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-deck">
            <img className="img-fluid" src="/Images/3.jpg" alt="" />
              <div className="card shadow p-3 mb-5 bg-white rounded">
                <h2>{data[1].tittle}</h2>
                <p className="mt-5">{data[1].parah}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-deck">
            <img className="img-fluid" src="/Images/3.jpg" alt="" />
              <div className="card p-3 shadow p-3 mb-5 bg-white rounded">
                <h2>{data[2].tittle}</h2>
                <p className="mt-5">{data[2].parah}</p>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Cards;
