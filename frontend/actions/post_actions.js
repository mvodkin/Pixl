export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const CREATE_POST = "CREATE_POST";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const requestPosts = () => ({
  type: REQUEST_POSTS
})

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
})

export const createComment = (comment) => ({
  type: CREATE_COMMENT,
  comment
})

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
})
