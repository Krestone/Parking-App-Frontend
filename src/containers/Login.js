import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import {validateEmail} from "./Helpers.js";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return validateEmail(this.state.email) && this.state.password.length > 0;
  }


  //changes appropriate state variables for whatever is typed into the fields
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  //suppresses the browser's default action on button press (for now at least)
  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <p className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="medium">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="medium">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="medium"
            disabled={!this.validateForm()}     //the button is enabled only if the set conditions are satisfied
            type="submit"
          >
            Login
          </Button>
        </form>
      </p>
    );
  }
}