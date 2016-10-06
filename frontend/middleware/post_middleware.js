import { REQUEST_POSTS, CREATE_POST, receivePosts } from '../actions/post_actions';
import { fetchPosts, createPost } from '../util/post_api_util';

const PostMiddleware = ({getState, dispatch}) => next => action => {
  const fetchPostsSuccessCallback = (posts) => dispatch(receivePosts(posts));
  switch (action.type) {
    case REQUEST_POSTS:
      fetchPosts(
        fetchPostsSuccessCallback,
        error => console.log(error)
      );
      return next(action);
    case CREATE_POST:
      // createPost()
      return next(action)
    default:
      return next(action);
  }
}

export default PostMiddleware;
