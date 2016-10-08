import  merge from "lodash/merge";
import { RECEIVE_POSTS, RECEIVE_COMMENT } from "../actions/post_actions";

const PostReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_COMMENT:
      debugger
      const newState = state.slice();
      newState.forEach(post => {
        if (post.id === action.comment.post_id) {
          post.comments.push(action.comment);
        }
      });

      return newState;
    default:
      return state;
  }
};

export default PostReducer;
