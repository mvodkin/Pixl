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

  componentDidUpdate() {
    this.setLikeState();
  }

  handleClick() {
    if (this.state.liked) {
      this.props.unlikePost(this.props.currentUser.id);
    } else {
      this.props.likePost(this.props.currentUser.id);
    }
    this.setState({liked: !this.state.liked});
  }

  buttonType() {
    return this.state.liked ? <div>Unlike</div> : <div>Like</div>
  }

  render() {

    return (
      <div className="like" onClick={this.handleClick}>
        {this.buttonType()}
      </div>
    );

  }

}

export default LikeButton;
