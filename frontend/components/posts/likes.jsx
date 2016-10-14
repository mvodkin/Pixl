import React from "react";
import { Link } from "react-router";
import LikeButton from "./like_button";

const Like = ({post}) => {

  // When displaying multiple likers renderLikers() seperates the list of likers
  // with ", " and the last two with " and ".

  const renderLikers = () => {
    return (
      <ul>
        {
          post.likers.map((liker, idx) => {
            if (idx === post.likers.length - 1) {
              return (
                 <li key={idx}>
                   <Link to={`user/${liker.id}`}>
                     {liker.username}
                   </Link>
                 </li>
               );
            } else if (idx === post.likers.length - 2) {
              return (
                <li key={idx}>
                  <Link to={`user/${liker.id}`}
                    className="liker-link">{liker.username}</Link><inline> and </inline>
                </li>
              )
            } else {
              return <li key={idx}>
                <Link to={`user/${liker.id}`}
                  className="liker-link">{liker.username}</Link><inline>, </inline>
                </li>
            }
          })
        } <inline> like this</inline>
      </ul>
    )
  }

  const likes = () => {

    if (post.num_likes === 0) {
      return (
        <div>
          Be the first to <span onClick={LikeButton.handleClick}>like this.</span>
        </div>
      )
    } else if (post.num_likes === 1) {
      return (
        <div>
          <Link
            to={`user/${post.likers[0].id}`}
            className="liker-link">{post.likers[0].username}</Link> likes this
        </div>
      )
    } else if (post.num_likes < 9) {
      return (
        <div>
          {renderLikers()}
        </div>
      );
    } else {
      return (
        <div>
          {post.num_likes} Likes
        </div>
      )
    }
  };

  return (
    <div className="likes">
      {likes()}
    </div>
  );
}

export default Like;
