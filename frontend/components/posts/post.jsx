import React from "react";
import Likes from "./likes";
import Comments from "./comments";
import CommentForm from "./comment_form";
import LikeButton from "./like_button";
import Canvas from "./canvas";
import PostOptions from "./post_options";
import { Link } from "react-router";


const Post = ({props, post}) => {

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
            <Link to={`/edit/${post.id}`}>Edit Post</Link>
          </h3>
        );
      }
    }
  }

  const handleSetProfilePic = () => {
    let updatedCurrentUser = {
      id: props.currentUser.id,
      profile_pic_id: post.id
    }

    props.requestUpdateProfile(updatedCurrentUser);
    window.scrollTo(0, 0);
  }

  const setProfilePic = () => {
    if (props.location.pathname.includes("user")) {
      if (parseInt(props.params.userId) === props.currentUser.id) {
        return (
          <h3 className="edit-post-button">
            <div onClick={handleSetProfilePic}>Set as profile pic</div>
          </h3>
        );
      }
    }
  }

  return (
    <li>
      <article className="post">

        <section className="post-user">

          <Link to={`user/${post.user.id}`}>
            {post.user.username}
          </Link>

        </section>

        <Canvas drawing={post.drawing}/>
        <section className="image-info">
          {renderLikes()}
          <Comments post={post} />
        </section>
        <div className="reactions">
          <LikeButton {...likeButtonProps} />
          <CommentForm props={props} post={post} />
          <PostOptions
            post={post}
            currentUser={props.currentUser}
            requestUpdateProfile={props.requestUpdateProfile}/>
        </div>
      </article>
    </li>
  );
};

export default Post;
