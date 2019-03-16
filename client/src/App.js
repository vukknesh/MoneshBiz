import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

//components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import MyPage from "./components/MyPage/MyPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Guide from "./components/Guide/Guide";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/my-page" component={MyPage} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/guide" component={Guide} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
