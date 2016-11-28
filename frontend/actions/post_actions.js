export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REQUEST_POST = "REQUEST_POST";
export const RECEIVE_POST = "RECEIVE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const CREATE_POST = "CREATE_POST";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const createPost = (post) => ({
  type: CREATE_POST,
  post
});

export const requestPosts = (userId, explore) => ({
  type: REQUEST_POSTS,
  userId,
  explore
});

export const requestPost = (postId) => ({
  type: REQUEST_POST,
  postId
});

export const updatePost = (post) => ({
  type: UPDATE_POST,
  post
});

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const createComment = (comment) => ({
  type: CREATE_COMMENT,
  comment
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const likePost = (post_id) => ({
  type: LIKE_POST,
  post_id
});

export const unlikePost = (post_id) => ({
  type: UNLIKE_POST,
  post_id
});

export const receiveLike = (post_id, currentUser) => ({
  type: RECEIVE_LIKE,
  post_id,
  currentUser
});

export const removeLike = (post_id, currentUser) => ({
  type: REMOVE_LIKE,
  post_id,
  currentUser
});
