import React from "react";

const Card = ({ country, onClick, index }) => {
  const { name, flag, region, capital, population } = country;
  // console.log(onClick);
  return (
    <div className="mt-4">
      <div className="col mb-3">
        <div className="card">
          <img
            src={flag}
            // src="https://via.placeholder.com/340x120/FFB6C1/000000"
            alt="Cover"
            className="card-img-top img-fluid"
          />
          <div className="card-body text-center">
            <img
              // src={flag}
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              style={{ width: "100px", height: "100px", marginTop: "-65px" }}
              alt="User"
              className="img-fluid img-thumbnail rounded-circle border-0 mb-3"
            />
            <h5 className="card-title">{name}</h5>
            <p className="text-secondary mb-1">
              {capital} - {region}
            </p>
            <p className="text-muted font-size-sm"> Nufus : {population} </p>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <button
              className="btn bg-primary"
              type="button"
              onClick={onClick.kaydetFun}
            >
              Takip et!
            </button>

            <button
              className="btn btn-danger btn-block"
              type="button"
              onClick={onClick.silFun}
            >
              Sil!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
