import React, { Component } from "react";
import GuideUser from "./GuideUser";
export default class Guide extends Component {
  render() {
    return (
      <div className="container">
        <form className="form-inline  justify-content-center">
          <input
            className="form-control w-75"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-secondary w-15 my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        <GuideUser />
      </div>
    );
  }
}
