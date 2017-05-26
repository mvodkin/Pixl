import {
  REQUEST_POSTS,
  REQUEST_POST,
  UPDATE_POST,
  CREATE_POST,
  CREATE_COMMENT,
  LIKE_POST,
  UNLIKE_POST,
  receivePosts,
  receivePost,
  receiveNewPost,
  receiveComment,
  receiveLike,
  removeLike
} from '../actions/post_actions';

import {
  fetchPosts,
  fetchPost,
  updatePost,
  createPost,
  createLike,
  destroyLike
} from '../util/post_api_util';

import { createComment } from '../util/comment_api_util';
import { hashHistory } from 'react-router';

const PostMiddleware = ({getState, dispatch}) => next => action => {
  const fetchPostsSuccessCallback = posts => dispatch(receivePosts(posts));
  const fetchPostSuccessCallback = post => dispatch(receivePost(post));
  // const fetchNewPostSuccessCallback = post => dispatch(receiveNewPost(post));
  const createCommentSuccessCallback = comment => dispatch(receiveComment(comment));
  const likeSuccessCallback = like => {
    dispatch(receiveLike(like.liked_post_id, like.liker));
  };
  const unlikeSuccessCallback = (like) => {
    dispatch(removeLike(like.liked_post_id, like.liker));
  };

  switch (action.type) {
    case REQUEST_POSTS:
      fetchPosts(
        fetchPostsSuccessCallback,
        error => console.error(error),
        action.userId,
        action.explore
      );
      return next(action);
    case REQUEST_POST:
      fetchPost(
        fetchPostSuccessCallback,
        error => console.error(error),
        action.postId
      );
      return next(action);
    case CREATE_POST:
      createPost(
        action.post,
        () => hashHistory.push("/"),
        error => console.error(error)
      );
      return next(action);
    case UPDATE_POST:
      updatePost(
        () => hashHistory.push("/"),
        error => console.error(error),
        action.post
      );
      return next(action);
    case UNLIKE_POST:
      destroyLike(
        action.post_id,
        unlikeSuccessCallback,
        error => console.error(error)
      );
      return next(action);
    case LIKE_POST:
      createLike(
        action.post_id,
        likeSuccessCallback,
        error => console.error(error)
      );
      return next(action);
    case CREATE_COMMENT:
      createComment(
        action.comment,
        createCommentSuccessCallback,
        error => console.error(error)
      );
      return next(action);
    default:
      return next(action);
  }
};

export default PostMiddleware;
