import React from "react";
import Likes from "./likes";
import Comments from "./comments"
import CommentForm from "./comment_form";


const Post = ({props}) => {

  const { post, requestPosts } = props;

  const renderLikes = () => {
    if (post.num_likes > 0) {
      return (
        <Likes post={post} />
      );
    }
  }
  // debugger
  return (
    <li>
      <article className="post">

        <h3 className="post-user">{post.user.username}</h3>
          <img className="post-image" src={post.img_url}></img>
        <section className="image-info">
          {renderLikes()}
          <Comments post={post} />
        </section>
        <CommentForm props={props} />
      </article>
    </li>
  );
};

export default Post;
