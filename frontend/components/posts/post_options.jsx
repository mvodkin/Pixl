import React from "react";
import Modal from "react-modal";
import { Link } from "react-router";

class PostOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSetProfilePic = this.handleSetProfilePic.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleSetProfilePic() {
    const updatedCurrentUser = {
      id: this.props.currentUser.id,
      profile_pic_id: this.props.post.id
    }
    this.closeModal();
    this.props.requestUpdateProfile(updatedCurrentUser);
    if (window.location.hash.includes("user")) {
      window.scrollTo(0, 0);
    }
  }

  ownPostButtons() {
    if (this.props.post.user.id === this.props.currentUser.id) {
      return (
        <ul className="edit-profile-form">
          <li><Link className="options-modal-button" to={`/edit/${this.props.post.id}`}>Edit post</Link></li>
          <li><button className="options-modal-button" onClick={this.handleSetProfilePic}>Set as profile picture</button></li>
        </ul>
      );
    } else {
      return (
        <ul className="edit-profile-form">
          <li className="options-modal-button" onClick={this.closeModal}>Cancel</li>
        </ul>
      );
    }
  }

  render() {

    return (
      <section className="options">

        <span className={"options-button"} onClick={this.openModal}>***</span>

        <Modal className="post-options-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Options">

          {this.ownPostButtons()}

        </Modal>
      </section>
    );
  }

}

export default PostOptions;
