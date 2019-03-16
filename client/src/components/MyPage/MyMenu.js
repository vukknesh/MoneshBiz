import React, { Component } from "react";
import MyProfile from "./MyProfile";

export default class MyMenu extends Component {
  render() {
    return (
      <div className="btn-group-vertical d-flex flex-column ml-5 mr-4 ">
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
      </div>
    );
  }
}
