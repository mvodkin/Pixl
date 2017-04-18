import React from "react";

const LikeButton = (props) => {

  const handleClick = () => {
    if (isLiked()) {
      props.unlikePost(props.post_id.toString());
    } else {
      props.likePost(props.post_id.toString());
    }
  }

  const buttonClass = () => {
    return isLiked() ? "like-button unlike" : "like-button like"
  }

  const isLiked = () => {
    const liked = props.likers.findIndex((liker) => {
      return liker.id === props.currentUser.id
    });
    return liked > -1;
  }

  return (
    <div className={buttonClass()} onClick={handleClick}>
    </div>
  );

}

export default LikeButton;
