import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas, faUserAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ takipEdilen }) => {
  const style = {
    position: "relative",
    top: "-30px",
    left: "-10px",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    padding: "3px",
    background: "red",
    color: "white",
    textAlign: "center",
    font: "18px Arial, sans-serif",
    display: "inline-block",
  };

  let badge = <div style={style}>{takipEdilen}</div>;

  return (
    <div className="px-3 py-2 bg-dark text-white mb-4">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
          >
            <FontAwesomeIcon icon={faGlobeAmericas} className="h1" />
            <span className="h3 ms-2"> Dunya Kupasi </span>
          </a>

          <ul className="nav col-6  col-lg-auto justify-content-end my-md-0 text-small">
            <li>
              <a href="/" className="nav-link text-white">
                <FontAwesomeIcon icon={faUserAlt} className="display-5" />
                {/* {badge} */}
                {takipEdilen !== 0 && badge}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
