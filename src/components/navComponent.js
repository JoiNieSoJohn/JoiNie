import React from "react";
import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        {/* icon */}
        <Link className="navbar-brand" to="#">
          <img
            height={"60px"}
            src={require("../pic/icons/JoiNie.png")}
            alt="logo"
          />
        </Link>
        {/* toggler button */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
              <Link class="nav-link" to="#">
                <img
                  height={"30px"}
                  src={require("../pic/icons/1201_2.jpg")}
                  alt="profile"
                />
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">
                <img
                  height={"30px"}
                  src={require("../pic/icons/1201_3.jpg")}
                  alt="shopping cart"
                />
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">
                <img
                  height={"30px"}
                  src={require("../pic/icons/1201_12.jpg")}
                  alt="notification"
                />
              </Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
