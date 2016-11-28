import  merge from "lodash/merge";
import {
  RECEIVE_POSTS,
  RECEIVE_COMMENT,
  RECEIVE_LIKE,
  REMOVE_LIKE,
  RECEIVE_POST,
 } from "../actions/post_actions";

const PostReducer = (state = [], action) => {
  let newState = state.slice(0);

  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;

    case RECEIVE_LIKE:
      newState.forEach(post => {
        if (post.id === action.post_id) {
          post.likers.push(action.currentUser);
          post.num_likes++;
        };
      });
      return newState;

    case REMOVE_LIKE:
      newState.forEach(post => {
        if (post.id === action.post_id) {
          const currentUserIdx = post.likers.indexOf(action.currentUser);
          post.likers.splice(currentUserIdx, 1);
          post.num_likes--;
        }
      })
      return newState;

    case RECEIVE_COMMENT:
      newState.forEach(post => {
        if (post.id === action.comment.post_id) {
          post.comments.push(action.comment);
        }
      });
      return newState;

    case RECEIVE_POST:
      return action.post
    default:
      return state;
  }
};

export default PostReducer;
