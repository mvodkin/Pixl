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


  return (
    <li>
      <article className="post">
        <h3 className="post-user">
          <Link to={`user/${post.user.id}`}>
            {post.user.username}
          </Link>
        </h3>
          <img className="post-image" src={post.img_url}></img>
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

export default Post;
