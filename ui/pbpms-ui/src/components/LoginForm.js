import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleSubmit =(e) => {
    e.preventDefault();
    alert(this.state.username+" "+this.state.password);
  }

  handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    });
  }

  render() {
    return (
      <div className="uk-card uk-card-default uk-position-center">
        <div className="uk-card-header">
          <h3 className="uk-card-title">Login</h3>
        </div>
        <div className="uk-card-body ">
          <form onSubmit={this.handleSubmit}>
            <div className="uk-margin">
              <div className="uk-inline">
                <a className="uk-form-icon" href="#" uk-icon="icon: user"></a>
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
              <div className="uk-inline">
                <a className="uk-form-icon" href="#" uk-icon="icon: lock"></a>
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
                className="uk-input uk-width-1-1 uk-button uk-button-primary"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
