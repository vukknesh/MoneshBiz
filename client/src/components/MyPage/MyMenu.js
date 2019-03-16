import React, { Component } from "react";

export default class MyMenu extends Component {
  render() {
    return (
      <div className="btn-group-vertical d-flex flex-column">
        <button type="button" className="btn">
          Profile
        </button>
        <button type="button" className="btn">
          Messages
        </button>
        <button type="button" className="btn">
          Fotos
        </button>
        <button type="button" className="btn">
          My Products
        </button>
        <button type="button" className="btn">
          Back
        </button>
        <div className="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn btn-secondary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <a className="dropdown-item" href="#">
              Dropdown link
            </a>
            <a className="dropdown-item" href="#">
              Dropdown link
            </a>
          </div>
        </div>
      </div>
    );
  }
}
