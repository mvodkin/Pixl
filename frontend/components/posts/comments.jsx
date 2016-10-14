import React from "react";

const Comments = ({post}) => {

  const renderComment = (comment, idx) => (
    <li key={idx + 1} className="comment group">
      <h3 className="comment-user">{comment.user.username}: </h3>
      <p className="comment-body">{comment.body}</p>
    </li>
  );


  let allComments = post.comments.map((comment, idx) => (
    renderComment(comment, idx)
  ))

  const description = () => {
    if (post.description) {
      return (
        <li key={0} className="comment group">
          <h3 className="comment-user">{post.user.username}: </h3>
          <p className="comment-body">{post.description}</p>
        </li>
      );
    }
  }

  return (
    <ul className="comments">
      {description()}
      {allComments}
    </ul>
  );

};

export default Comments;
