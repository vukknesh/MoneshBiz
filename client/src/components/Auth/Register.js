import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
            />
            <small id="nameError" className="form-text text-muted">
              Get error if validation not passed
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="password2"
              placeholder="Confirm Password"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
