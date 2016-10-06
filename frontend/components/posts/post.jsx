import React from "react";

const Post = ({post}) => {
  return (
    <li>
      <content className="post">
        <h3 className="post-user">{post.user.username}</h3>
        <div className="image-container">
          <img className="post-image" src={post.img_url}></img>
        </div>
        <div className="description comment">{post.description}</div>
      </content>
    </li>
  );
};

export default Post;
