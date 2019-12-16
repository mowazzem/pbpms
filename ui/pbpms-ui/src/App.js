import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm.js";

import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="uk-container">
            <Route path="/">
              <LoginForm />
            </Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
