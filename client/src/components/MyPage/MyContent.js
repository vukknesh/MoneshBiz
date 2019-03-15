import React, { Component } from "react";
import axios from "axios";
import Spinner from "../common/Spinner";

export default class MyContent extends Component {
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
    let conteudo;

    if (users === null) {
      conteudo = <Spinner />;
    } else {
      conteudo = users.map(user => (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ));
    }

    return <div>{conteudo}</div>;
  }
}
