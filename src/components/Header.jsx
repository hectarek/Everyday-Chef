import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "../style/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="icons">
        {/*<i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram-square"></i> */}
        <div
          id="icon-spacing"
          className="row d-flex justify-content-center text-center"
        >
          <div id="icon-1">
            <FontAwesomeIcon icon={["fab", "facebook-square"]} size="2x" />
          </div>
          <div id="icon-2">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </div>
          <div id="icon-3">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </div>
        </div>
      </div>
      <div className="head text-center">
        <h1 id="logo">
          Everyday <span>Chef</span>
        </h1>
      </div>
      <div>
        <form>
          <input id="input" type="text" placeholder="Search" />
          {/* <button className="btn btn-primary">
            search
            <span>
              <i className="fas fa-search"></i>
            </span>
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default Header;
