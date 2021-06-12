import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas, faUserAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ takipEdilen }) => {
  const style = {
    position: "relative",
    top: "-35px",
    left: "-10px",
    borderRadius: "50%",
    width: "21px",
    height: "21px",
    padding: "3px",
    background: "red",
    color: "white",
    textAlign: "center",
    font: "13px Arial, sans-serif",
    display: "inline-block",
  };

  let badge = <div style={style}>{takipEdilen}</div>;

  return (
    <div className="px-3 py-2 bg-dark text-white mb-0">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
          >
            <FontAwesomeIcon icon={faGlobeAmericas} className="h1" />
            <span className="h4 ms-2"> Dunya Kupasi </span>
          </a>

          <ul className="nav col-3 col-lg-auto my-0 text-small">
            <li>
              <a href="/" className="nav-link text-white">
                <FontAwesomeIcon icon={faUserAlt} className="h1" />
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
