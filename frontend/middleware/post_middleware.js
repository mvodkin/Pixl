import {
  REQUEST_POSTS,
  CREATE_POST,
  CREATE_COMMENT,
  receivePosts,
  receiveComment
} from '../actions/post_actions';

import { fetchPosts, createPost } from '../util/post_api_util';
import { createComment } from '../util/comment_api_util';

const PostMiddleware = ({getState, dispatch}) => next => action => {
  const fetchPostsSuccessCallback = (posts) => dispatch(receivePosts(posts));
  const createCommentSuccessCallback = (comment) => dispatch(receiveComment(comment));
  switch (action.type) {
    case REQUEST_POSTS:
      fetchPosts(
        fetchPostsSuccessCallback,
        error => console.log(error)
      );
      return next(action);
    case CREATE_POST:
      // createPost()
      return next(action);
    case CREATE_COMMENT:
      createComment(
        action.comment,
        createCommentSuccessCallback,
        error => console.log(error)
      );
      return next(action);
    default:
      return next(action);
  }
}

export default PostMiddleware;
