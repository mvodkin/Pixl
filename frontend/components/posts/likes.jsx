import React from "react";

const Like = ({post}) => {

  // When displaying multiple likers renderLikers() seperates the list of likers
  // with ", " and the last two with " and ".

  const renderLikers = () => {
    return (
      <ul>
        {
          post.likers.map((liker, idx) => {
            if (idx === post.likers.length - 1) {
              return <li key={idx}>{liker.username}</li>
            } else if (idx === post.likers.length - 2) {
              return <li key={idx}>{liker.username}<inline> and </inline></li>
            } else {
              return <li key={idx}>{liker.username}<inline>, </inline></li>
            }
          })
        } <inline> like this</inline>
      </ul>
    )
  }

  const likes = () => {

    if (post.num_likes === 1) {
      return (
        <div>
          {post.likers[0].username} likes this
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
