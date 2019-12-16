import React from "react";
// import axios from "axios";
import { connect } from "react-redux";
import { login } from "../actions/loginActions";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    const cred = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(cred);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    let { isLoginSuccess, isLoginPending, loginError } = this.props;
    return (
      <div className="uk-card uk-card-small uk-padding-small uk-card-default uk-position-center">
        <div className="uk-card-header">
          <h3 className="uk-card-title">Login</h3>
        </div>
        
        <div className="uk-card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="uk-margin">
              <div className="uk-inline uk-width-1-1">
                <a
                  className="uk-form-icon uk-disabled"
                  tabIndex="-1"
                  href="#"
                  uk-icon="icon: user"
                ></a>
                <input
                  name="username"
                  className="uk-input"
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="uk-margin">
              <div className="uk-inline uk-width-1-1">
                <a
                  className="uk-form-icon uk-disabled"
                  tabIndex="-2"
                  href="#"
                  uk-icon="icon: lock"
                ></a>
                <input
                  name="password"
                  className="uk-input"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="uk-margin">
              <input
                name="login"
                className="uk-input uk-width-1-1 uk-button-primary uk-button"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
        <div className={"uk-label " + (isLoginSuccess?'uk-label-success':'uk-label-warning')}>
        {isLoginSuccess && "welcome"}
        {loginError && loginError.message}
        </div>
         
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoginSuccess: state.login.isLoginSuccess,
    isLoginPending: state.login.isLoginPending,
    loginError: state.login.loginError
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    login: credentials => dispatch(login(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(LoginForm);
