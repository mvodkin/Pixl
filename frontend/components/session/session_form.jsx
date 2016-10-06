import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  update(key) {
    return e => this.setState({ [key]: e.currentTarget.value });
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  componentDidMount() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  renderErrors() {
    const errorList = []
    // debugger
    if (this.props.errors) {
      this.props.errors.forEach((error, index) => {
        errorList.push(<li key={index} className="error">{error}</li>);
      })
      return (
        <ul className="error-list">
          {errorList}
        </ul>
      )
    }
  }

  navLink() {
    if (this.props.formType === 'login') {
      return (
        <div className="switch-session-form">
          <p className="session-form-link-text">
            Don't have an account? <Link className="session-form-link" to="/signup">Sign up</Link>
          </p>
        </div>)
    } else {
      return (
        <div className="switch-session-form">
          <p className="session-form-link-text">
            Have an account? <Link className="session-form-link" to="/login">Log in</Link>
          </p>
        </div>
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  guestLogin(e) {
    e.preventDefault();
    const user = {username: "Super_User", email: "", password: "password"};
    this.props.processForm({user});
  }

  emailField() {
    if (this.props.formType === 'signup') {
      return (
        <div className="login-input-container">
          <input type="text"
            value={this.state.email}
            onChange={this.update("email")}
            className="login-input"
            placeholder="Email"></input>
        </div>
      )
    }
  }

  formName() {
    return (this.props.formType === "login") ? "Log in" : "Sign up";
  }

  render() {
    return(
      <div className="login-background">
        <div className="login-form-container">
          <div className="logo" data-text="Pixl">
            Pixl
          </div>
  				<form onSubmit={this.handleSubmit} className="login-form-box">

  					{ this.renderErrors() }
  					<div className="login-form">

              <div className="login-input-container">
    						<input type="text"
    							value={this.state.username}
    							onChange={this.update("username")}
    							className="login-input"
                  placeholder="Username"/>
              </div>

              {this.emailField()}

              <div className="login-input-container">
    						<input type="password"
    							value={this.state.password}
    							onChange={this.update("password")}
    							className="login-input"
                  placeholder="Password"/>
              </div>

              <input className="submit-login"
                type="submit"
                data-text={this.formName()}
                value={this.formName()}></input>


  					</div>
  				</form>
          <form onSubmit={this.guestLogin}>
            <input className="submit-login"
              type="submit"
              data-text="Test Access"
              value="Test access"
              ></input>
          </form>
          {this.navLink()}
  			</div>
      </div>
    )
  };

}

export default SessionForm;
