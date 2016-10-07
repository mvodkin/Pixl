import React from "react";

const Post = ({post}) => {
  return (
    <li>
      <article className="post">
        <h3 className="post-user">{post.user.username}</h3>
        <div className="image-container">
          <img className="post-image" src={post.img_url}></img>
        </div>
        <div className="description comment">
          <inline className="comment-user">{post.user.username} > </inline>
          {post.description}</div>
      </article>
    </li>
  );
};

export default Post;
