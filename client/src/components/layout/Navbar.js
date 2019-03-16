import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
          <Link to="/landing">
            <div className="navbar-brand">Monesh.com</div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/my-page">
                  <div className="nav-link" href="#">
                    My page <span className="sr-only">(current)</span>
                  </div>
                </Link>
              </li>
              <Link to="/guide">
                <li className="nav-item">
                  <div className="nav-link" href="/landing">
                    Guide
                  </div>
                </li>
              </Link>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/landing"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/landing">
                    Action
                  </a>
                  <a className="dropdown-item" href="/landing">
                    Another action
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="/landing">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="/landing"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <ul className="form-inline navbar nav my-2 my-lg-0">
              <Link to="/login">
                <li className="nav-item active">
                  <div className="nav-link text-light">Login</div>
                </li>
              </Link>
              <Link to="/register">
                <li className="nav-item active">
                  <div className="nav-link text-light">Register</div>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
