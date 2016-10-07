import React from "react";
import Likes from "./likes";
import Comments from "./comments"


const Post = ({post}) => {

  return (
    <li>
      <article className="post">

        <h3 className="post-user">{post.user.username}</h3>
        <div className="image-container">
          <img className="post-image" src={post.img_url}></img>
        </div>
        <section className="image-info">
          <Likes post={post} />
          <Comments post={post} />
        </section>
      </article>
    </li>
  );
};

export default Post;
