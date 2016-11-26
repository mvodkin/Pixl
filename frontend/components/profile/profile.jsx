import React from "react";
import FollowButton from "./follow_button";
import CanvasComponent from "../posts/canvas";

class Profile extends React.Component {

  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(newProps) {

    if (newProps.profile.profile_pic) {
      this.updateCanvas(newProps.profile.profile_pic.drawing, 2)
    }
  }

  updateCanvas(drawing, pixelSize) {

    if (drawing) {
      const ctx = this.refs.canvas.getContext('2d');
      let x, y;

      for (let i = 0; i < drawing.length; i++) {
        x = (i % 50) * pixelSize;
        y = Math.floor(i / 50) * pixelSize;
        ctx.fillStyle = drawing[i];
        ctx.fillRect(x, y, pixelSize, pixelSize)
      }
    }
  }

  followButtonProps() {
    return {
      currentUserId: this.props.currentUser.id,
      profileId: this.props.profile.id,
      followers: this.props.profile.followers,
      requestFollow: this.props.requestFollow,
      requestUnfollow: this.props.requestUnfollow,
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      profileDesc: this.props.currentUser.profile_desc
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
        <canvas ref="canvas" className="profile-pic" width={100} height={100}></canvas>
        <div className="profile-info">
          <div className="top-row">
            <h1 className="username">{username}</h1>
            <FollowButton {...this.props} />
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
