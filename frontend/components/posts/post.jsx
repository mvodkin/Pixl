import React from "react";
import Likes from "./likes";
import Comments from "./comments"
import CommentForm from "./comment_form";
import LikeButton from "./like_button";
import { Link } from "react-router";


const Post = ({props}) => {

  const { post, requestPosts } = props;

  const renderLikes = () => {
    if (post.num_likes > 0) {
      return (
        <Likes post={post} />
      );
    }
  };

  const likeButtonProps = {
    currentUser: props.currentUser,
    likePost: props.likePost,
    unlikePost: props.unlikePost,
    likers: post.likers,
    post_id: post.id
  };

  const renderDrawing = () => {
    // debugger
    const allCells = [];

    if (post.drawing) {

      for (let i = 0; i < 2500; i++) {
        allCells.push(<li
          className={"pixl gridlines-off"}
          key={i}
          value={i}
          id={i}
          style={{backgroundColor: `${post.drawing[i]}`}}></li>)
      }
      return allCells;
    }
  }


  return (
    <li>
      <article className="post">
        <h3 className="post-user">
          <Link to={`user/${post.user.id}`}>
            {post.user.username}
          </Link>
        </h3>
        <ul className="canvas group">{renderDrawing()}</ul>
        <section className="image-info">
          {renderLikes()}
          <Comments post={post} />
        </section>
        <div className="reactions">
          <LikeButton {...likeButtonProps} />
          <CommentForm props={props} />
        </div>
      </article>
    </li>
  );
};

// <img className="post-image" src={post.img_url}></img>

export default Post;
