import React, { Component } from "react";
import MyProfile from "./MyProfile";

export default class MyMenu extends Component {
  render() {
    return (
      <div className="btn-group-vertical d-flex flex-column">
        <MyProfile />
        <button
          type="button"
          className="btn btn-block btn-light border border-secondary"
        >
          Profile
        </button>
        <button type="button" className="btn btn-block btn-success">
          Messages
        </button>
        <button type="button" className="btn btn-block btn-success">
          Fotos
        </button>
        <button type="button" className="btn btn-block btn-success">
          My Products
        </button>
        <button type="button" className="btn btn-block btn-success">
          Back
        </button>
        <div className="btn-group" role="group btn-block">
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
            <a className="dropdown-item" href="/landing">
              Dropdown link
            </a>
            <a className="dropdown-item" href="/landing">
              Dropdown link
            </a>
          </div>
        </div>
      </div>
    );
  }
}
