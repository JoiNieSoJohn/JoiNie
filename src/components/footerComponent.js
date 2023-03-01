import React from "react";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer>
      <div className="redirect">
        <Link className="navbar-brand" to="#">
          <img
            height={"55px"}
            src={require("../pic/icons/1201_7.jpg")}
            alt="IG"
          />
        </Link>
        <Link className="navbar-brand" to="#">
          <img
            height={"55px"}
            src={require("../pic/icons/1201_6.jpg")}
            alt="FB"
          />
        </Link>
        <Link className="navbar-brand" to="#">
          <img
            height={"55px"}
            src={require("../pic/icons/1201_13.jpg")}
            alt="Contact Us"
          />
        </Link>
      </div>
    </footer>
  );
};

export default FooterComponent;
