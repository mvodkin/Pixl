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
      return <Link to="/signup">Sign up</Link>
    } else {
      return <Link to="/login">Log in</Link>
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  emailField() {
    if (this.props.formType === 'signup') {
      return (
        <label>Email:
          <input type="text"
            value={this.state.email}
            onChange={this.update("email")}
            className="login-input"></input>
        </label>
      )
    }
  }

  render() {
    return(
      <div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					Please {this.props.formType} or {this.navLink()}
					{ this.renderErrors() }
					<div className="login-form">
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>

            {this.emailField()}

						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>

						<input type="submit" value="Log In" />
					</div>
				</form>
			</div>
    )
  };

}

export default SessionForm;
