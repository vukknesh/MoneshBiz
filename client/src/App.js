import React, { Component } from "react";

import "./App.css";

//components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import MyPage from "./components/MyPage/MyPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MyPage />

        <Footer />
      </div>
    );
  }
}

export default App;
