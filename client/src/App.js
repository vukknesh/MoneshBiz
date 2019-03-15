import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/users")
      .then(res => res.data)
      .then(data => {
        this.setState({ users: data });
      });
  }
  render() {
    const { users } = this.state;
    const conteudo = users.map(user => {
      return (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      );
    });
    return (
      <div className="App">
        <h1>Hello from react</h1>
        {conteudo}
      </div>
    );
  }
}

export default App;
