import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm.js";

import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      
        <div className="App">
          <BrowserRouter>
          <div className="uk-container">
            <Route path="/login" Component={LoginForm} />
            <div>
            <p style={{ color: "white" }}>
              {this.props.cred.username}
              <br />
              {this.props.cred.password}
            </p>
          </div>
          </div>
          
          </BrowserRouter>
        </div>
      
    );
  }
}

const mapStateToProps = state => ({
  cred: state.login.credentials
});

export default connect(mapStateToProps)(App);
