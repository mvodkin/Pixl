import React from "react";

const Comments = ({post}) => {

  const renderComment = (comment, idx) => (
    <li key={idx + 1} className="comment">
      <inline className="comment-user">{comment.user.username}: </inline>
      <div className="comment-body">{comment.body}</div>
    </li>
  );


  let allComments = post.comments.map((comment, idx) => (
    renderComment(comment, idx)
  ))

  return (
    <ul className="comments">
      <li key={0} className="comment">
        <inline className="comment-user">{post.user.username}: </inline>
        <div className="comment-body">{post.description}</div>
      </li>
      {allComments}
    </ul>
  );

};

export default Comments;
