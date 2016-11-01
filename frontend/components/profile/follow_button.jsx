import React from "react";
import EditProfile from "./edit_profile"

class FollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      following: false,
      disabled: false
    };
    this.setFollowState = this.setFollowState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setFollowState(props) {
    if (props.followers) {
      this.setState({ following: false, disabled: false })
      props.followers.forEach(follower => {
        if (follower.id === props.currentUserId) {
          this.setState({ following: true });
        }
      });
    }
  }

  componentWillReceiveProps(newProps) {
    this.setFollowState(newProps)
  }

  handleClick() {
    if (this.state.following) {
      this.props.requestUnfollow(this.props.profileId);
    } else {
      this.props.requestFollow(this.props.profileId);
    }
    this.setState({ disabled: true })
  }

  button() {
    if (this.props.currentUserId === this.props.profileId) {
      return (
        <div
          className="edit-profile"
          disabled={this.props.disabled}>
            Edit Profile
          </div>
      )
    } else {

      if (this.state.following) {
        return (
          <div
            className="following"
            disabled={this.props.disabled}
            onClick={this.handleClick}>
              Following
            </div>
        )
      } else {
        return (
          <div className="follow"
            disabled={this.props.disabled}
            onClick={this.handleClick}>
              Follow
          </div>
        )
      }
    }
  }

  render() {
    return (
      <div className="follow-button">{this.button()}</div>
    )
  }
}

export default FollowButton;
