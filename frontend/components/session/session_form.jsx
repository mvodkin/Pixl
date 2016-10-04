import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return(
      <div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">

					<br/>
					Please {this.props.formType} or {this.navLink()}
					{ this.renderErrors() }
					<div className="login-form">
						<br/>
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="login-input" />
						</label>

						<br/>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>

						<br/>
						<input type="submit" value="Log In" />
					</div>
				</form>
			</div>
    )
  };

}
