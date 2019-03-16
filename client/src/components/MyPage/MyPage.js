import React, { Component } from "react";
import MyMenu from "./MyMenu";
import MyContent from "./MyContent";

export default class MyPage extends Component {
  render() {
    return (
      <div style={pageStyle}>
        <div className="row h-100">
          <div className="w-25 border">
            <MyMenu />
          </div>
          <div className="w-75">
            <MyContent />
          </div>
        </div>
      </div>
    );
  }
}

const pageStyle = {
  height: "100%",
  width: "100%"
};
