import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm"

class App extends React.Component {
  state={

  }
  render() {
    return (
      <div className="App">
        <div className="uk-container">
        <LoginForm className="" />
        </div>
      </div>
    );
  }
}

export default App;
