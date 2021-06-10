import React, { useState, useEffect } from "react";
import Card from "./Card";

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
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
      {ulkeler.map((ulke, i) => {
        return <Card country={ulke} onClick={() => sil(i)} key={ulke.name} />;
        // const { name, flag, region, capital, population } = ulke;
        // const imgStyle = {
        //   borderRadius: "50%",
        //   width: "150px",
        //   height: "140px",
        //   border: "6px solid white",
        // };

        // return (
        //   <div key={name}>
        //     <div className="row flex-row mt-3 border border-danger w-50 shadow bg-dark">
        //       <div
        //         onClick={() => {
        //           sil(i);
        //         }}
        //         className="kapat h2 text-end text-secondary d-block-inline"
        //       >
        //         x
        //       </div>
        //       <div className="col-4 d-grid justify-content-center mb-4">
        //         <img src={flag} alt={`${name} flag`} style={imgStyle} />
        //       </div>
        //       <div className="col flex-column justify-content-center">
        //         <h4 className="text-white lead">
        //           <span className="fw-bold">Ulke adi : </span> {name}
        //         </h4>
        //         <h4 className="text-white lead">
        //           <span className="fw-bold">Baskenti : </span> {capital}
        //         </h4>
        //         <h4 className="text-white lead">
        //           <span className="fw-bold">Kitasi : </span>
        //           {region}
        //         </h4>
        //         <h4 className="text-white lead">
        //           <span className="fw-bold">Nufusu : </span>
        //           {population}
        //         </h4>
        //       </div>
        //     </div>
        //   </div>
        // );
      })}
    </div>
  );
}

export default FetchApi;
