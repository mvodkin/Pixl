import React from "react";

class LikeButton extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      liked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  setLikeState() {
    this.props.likers.forEach((liker) => {
      if (liker.id === this.props.currentUser.id) {
        this.setState({liked: true});
      }
    });
  }

  componentDidMount() {
    this.setLikeState();
  }

  handleClick() {

    if (this.state.liked) {
      this.props.unlikePost(this.props.post_id.toString());
    } else {
      this.props.likePost(this.props.post_id.toString());
    }
    this.setState({liked: !this.state.liked});
  }

  buttonClass() {
    return this.state.liked ? "like-button unlike" : "like-button like"
  }

  render() {

    return (
      <div className={this.buttonClass()} onClick={this.handleClick}>
      </div>
    );

  }

}

// {this.buttonType()}

export default LikeButton;
