import React from "react";

class LikeButton extends React.Component {

  constructor(props) {
    super(props)

    this.liked;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.isLiked()) {
      this.props.unlikePost(this.props.post_id.toString());
    } else {
      this.props.likePost(this.props.post_id.toString());
    }
  }

  buttonClass() {
    return this.isLiked() ? "like-button unlike" : "like-button like"
  }

  isLiked() {
    const liked = this.props.likers.findIndex((liker) => {
      return liker.id === this.props.currentUser.id
    });
    return liked > -1;
  }

  render() {

    return (
      <div className={this.buttonClass()} onClick={this.handleClick}>
      </div>
    );

  }

}

export default LikeButton;
