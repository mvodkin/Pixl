import React from "react";
import Modal from "react-modal";
import ReactDOM from "react-dom";

Modal.setAppElement("#edit-profile");

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  render() {
    debugger
    return (
      <div>

        <div
          className="edit-profile"
          onClick={this.openModal}>
            Edit Profile
        </div>

        <Modal className="edit-profile-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}>

            <section className="edit-profile-form">

              <h1>Edit Profile</h1>
      				<form onSubmit={this.handleSubmit} className="login-form-box">

      					{ this.renderErrors() }

    						<input type="text"
    							defaultValue={this.props.props.username}
    							className="login-input"
                  id="username-input"/>

                <input type="text"
                  defaultValue={this.props.props.email}
                  className="login-input"
                  id="email-input"/>

                <textarea
                  className="login-input"
                  id="description-input"
                  defaultValue={this.props.props.profileDesc}></textarea>

                <input type="submit"
                  value="Update profile"/>

              </form>
            </section>

        </Modal>
      </div>
    );
  }

}

export default EditProfile;
