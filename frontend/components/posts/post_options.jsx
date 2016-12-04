import React from "react";
import Modal from "react-modal";

class PostOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen = false
    };
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div onClick={this.openModal}>...</div>

        <Modal className="edit-profile-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}>

            <section className="edit-profile-form">

              <h1>Edit Profile</h1>
              <form onSubmit={this.handleSubmit} className="edit-profile-box">

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
    )
  }

}
