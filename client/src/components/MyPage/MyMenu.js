import React, { Component } from "react";

export default class MyMenu extends Component {
  render() {
    return (
      <div>
        <div class="btn-group-vertical">
          <button type="button" class="btn btn-secondary">
            Profile
          </button>
          <button type="button" class="btn btn-secondary">
            Messages
          </button>
          <button type="button" class="btn btn-secondary">
            Fotos
          </button>
          <button type="button" class="btn btn-secondary">
            My Products
          </button>
          <button type="button" class="btn btn-secondary">
            Back
          </button>
          <div class="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              class="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
              <a class="dropdown-item" href="#">
                Dropdown link
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
