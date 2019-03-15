import React, { Component } from "react";
import MyMenu from "./MyMenu";
import MyContent from "./MyContent";

export default class MyPage extends Component {
  render() {
    return (
      <div class="container" style={pageStyle}>
        <div className="row">
          <div class="bg-secondary w-25 border border-primary rounded">
            <MyMenu />
          </div>
          <div class="bg-warning w-75 border border-secondary rounded">
            <MyContent />
          </div>
        </div>
      </div>
    );
  }
}

const pageStyle = {
  height: "80vh"
};
