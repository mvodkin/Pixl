import React from "react";
import Likes from "./likes";
import Comments from "./comments";
import CommentForm from "./comment_form";
import LikeButton from "./like_button";
import Canvas from "./canvas";
import { Link } from "react-router";


const Post = ({props, post}) => {

  // const {requestPosts, location } = props;

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

  const editButton = () => {
    if (props.location.pathname.includes("user")) {
      if (parseInt(props.params.userId) === props.currentUser.id) {
        return (
          <h3 className="edit-post-button">
            <Link to={`posts/edit/${post.id}`}>Edit Post</Link>
          </h3>
        );
      }
    }
  }

  return (
    <li>
      <article className="post">

        <section className="post-user">
          <h3>
            <Link to={`user/${post.user.id}`}>
              {post.user.username}
            </Link>
          </h3>

          {editButton()}

        </section>

        <Canvas drawing={post.drawing}/>
        <section className="image-info">
          {renderLikes()}
          <Comments post={post} />
        </section>
        <div className="reactions">
          <LikeButton {...likeButtonProps} />
          <CommentForm props={props} post={post} />
        </div>
      </article>
    </li>
  );
};

export default Post;
