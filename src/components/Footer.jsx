import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "../style/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <hr></hr>
      <footer>
        <div className="">
          <div className="footer-icons">
            <FontAwesomeIcon icon={["fab", "facebook-square"]} size="2x" />
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </div>
        </div>
        <div className="outline"></div>
        <div className="para">
          <p>
            <span>&#169;</span>Copyright Team Loading... WIN 2020.
          </p>
          <p>Powered By Carolina Fintech Hub</p>
        </div>
        <hr></hr>
      </footer>
    </div>
  );
}

export default Footer;
