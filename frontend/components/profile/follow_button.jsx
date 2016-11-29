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
    if (props.profile.followers) {
      this.setState({ following: false, disabled: false })
      props.profile.followers.forEach(follower => {
        if (follower.id === props.currentUser.id) {
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
      this.props.requestUnfollow(this.props.profile.id);
    } else {
      this.props.requestFollow(this.props.profile.id);
    }
    this.setState({ disabled: true })
  }

  button() {
    if (this.props.currentUser.id === this.props.profile.id) {
      return (
        <EditProfile props={this.props} />
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
