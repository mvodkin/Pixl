import {
  REQUEST_POSTS,
  CREATE_POST,
  CREATE_COMMENT,
  LIKE_POST,
  UNLIKE_POST,
  receivePosts,
  receiveComment,
  receiveLike,
  removeLike
} from '../actions/post_actions';

import {
  fetchPosts,
  createPost,
  createLike,
  destroyLike
} from '../util/post_api_util';

import { createComment } from '../util/comment_api_util';

const PostMiddleware = ({getState, dispatch}) => next => action => {
  const fetchPostsSuccessCallback = (posts) => dispatch(receivePosts(posts));
  const createCommentSuccessCallback = (comment) => dispatch(receiveComment(comment));
  const likeSuccessCallback = (like) => {
    dispatch(receiveLike(like.liked_post_id, like.liker))
  }
  const unlikeSuccessCallback = (like) => {
    dispatch(removeLike(like.liked_post_id, like.liker))
  }

  switch (action.type) {
    case REQUEST_POSTS:
      fetchPosts(
        fetchPostsSuccessCallback,
        error => console.log(error),
        action.userId,
        action.explore
      );
      return next(action);
    case CREATE_POST:
      createPost(
        action.post,
        data => console.log(data),
        error => console.log(error)
      )
      return next(action);
    case UNLIKE_POST:
      destroyLike(
        action.post_id,
        unlikeSuccessCallback,
        (error) => console.log(error)
      );
      return next(action);
    case LIKE_POST:
      createLike(
        action.post_id,
        likeSuccessCallback,
        (error) => console.log(error)
      );
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

//////sdhtshsdh sdhs
