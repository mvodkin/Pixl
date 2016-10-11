import React from "react";
import FollowButton from "./follow_button";

class Profile extends React.Component {

  constructor(props) {
    super(props)
  }

  renderProfilePic() {
    if (this.props.profile.profile_pic) {
      return <img className="profile-pic" src={this.props.profile.profile_pic.img_url}></img>
    }
  }

  followButtonProps() {
    return {
      currentUserId: this.props.currentUser.id,
      profileId: this.props.profile.id,
      followers: this.props.profile.followers,
      requestFollow: this.props.requestFollow,
      requestUnfollow: this.props.requestUnfollow
    }
  }

  render() {
    const {
      num_followers,
      num_following,
      num_posts,
      profile_desc,
      profile_pic,
      username
    } = this.props.profile;

    return (
      <section className ="profile">
        {this.renderProfilePic()}
        <div className="profile-info">
          <div className="top-row">
            <h1 className="username">{username}</h1>
            <FollowButton {...this.followButtonProps()} />
          </div>
          <div className="profile-stats-container group">
            <ul className="profile-stats group">
              <li>{num_posts} <span>posts</span></li>
              <li>{num_followers} <span>followers</span></li>
              <li>{num_following} <span>following</span></li>
            </ul>
          </div>
          <p className="profile-description">{profile_desc}</p>
        </div>
      </section>
    );
  }


}

export default Profile;

//
