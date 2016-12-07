import React from "react";
import Modal from "react-modal";
import ReactDOM from "react-dom";

Modal.setAppElement("#edit-profile");

class EditProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      username: this.props.props.currentUser.username,
      email: this.props.props.currentUser.email,
      profile_desc: this.props.props.currentUser.profile_desc
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.feed = document.getElementById("feed");
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

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleSubmit(e) {
    const user = {
      username: this.state.username,
      email: this.state.email,
      profile_desc: this.state.profile_desc
    };
    this.props.props.requestUpdateProfile(user);
    this.setState({modalIsOpen: false});
  }

  update(key) {
    return e => this.setState({[key]: e.currentTarget.value });
  }

  render() {
    return (
      <div>

        <div
          className="edit-profile"
          onClick={this.openModal}>
            Edit Profile
        </div>

        <Modal className="edit-profile-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="EditProfile">

            <section className="edit-profile-form">

              <h1>Edit Profile</h1>
      				<form onSubmit={this.handleSubmit} className="edit-profile-box">

      					{ this.renderErrors() }

                <div>
    						  <aside>Username</aside>
                  <input type="text"
    							defaultValue={this.state.username}
    							className="login-input"
                  id="username-input"
                  onChange={this.update("username")}/>
                </div>

                <div>
                  <aside>Email</aside>
                  <input type="text"
                  defaultValue={this.state.email}
                  className="login-input"
                  id="email-input"
                  onChange={this.update("email")}/>
                </div>

                <div>
                  <aside>Bio</aside>
                  <textarea
                  className="login-input"
                  id="description-input"
                  defaultValue={this.state.profile_desc}
                  onChange={this.update("profile_desc")}></textarea>
                </div>

                <div className="submit-edit">
                  <input type="submit"
                    value="Update profile"/>
                </div>

              </form>
            </section>

        </Modal>
      </div>
    );
  }

}

export default EditProfile;
