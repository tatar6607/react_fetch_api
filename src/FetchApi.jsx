import React, { useState, useEffect } from "react";

function FetchApi() {
  const [ulkeler, setUlkeler] = useState([]);

  const fecthData = () => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setUlkeler(data));
  };

  useEffect(() => {
    fecthData();
  }, []);

  const sil = function (index) {
    setUlkeler(ulkeler.filter((v, i) => i !== index));
  };

  return (
    <div>
      {ulkeler.map((ulke, i) => {
        const { name, flag, region, capital, population } = ulke;
        const imgStyle = {
          borderRadius: "50%",
          width: "150px",
          height: "140px",
          border: "5px solid white",
        };

        return (
          <div key={name}>
            <div className="row flex-row p-3 mt-3 border border-danger w-50 shadow bg-warning">
              <div
                onClick={() => {
                  sil(i);
                }}
                className="kapat h1 text-end d-block-inline"
              >
                x
              </div>
              <div className="col-4">
                <img src={flag} alt={`${name} flag`} style={imgStyle} />
              </div>
              <div className="col">
                <h4 className="text-white lead">
                  <span className="fw-bold">Ulke adi : </span> {name}
                </h4>
                <h4 className="text-white lead">
                  <span className="fw-bold">Baskenti : </span> {capital}
                </h4>
                <h4 className="text-white lead">
                  <span className="fw-bold">Kitasi : </span>
                  {region}
                </h4>
                <h4 className="text-white lead">
                  <span className="fw-bold">Nufusu : </span>
                  {population}
                </h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FetchApi;
