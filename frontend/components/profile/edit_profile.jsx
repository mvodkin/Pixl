import React from "react";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <section className ="edit-profile">

        <div className="login-form-container">
          <h1>Edit Profile</h1>
  				<form onSubmit={this.handleSubmit} className="login-form-box">

  					{ this.renderErrors() }

						<input type="text"
							value={this.props.username}
							className="login-input"
              id="username-input"/>

            <input type="text"
              value={this.props.username}
              className="login-input"
              id="email-input"/>

            <textarea
              className="login-input"
              id="description-input">{this.props.profile_desc}</textarea>

            <input type="submit"
              value="Update profile"/>

  			</div>

      </section>
    );
  }


}
