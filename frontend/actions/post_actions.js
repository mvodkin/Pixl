export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const CREATE_POST = "CREATE_POST";

export const requestPosts = () => ({
  type: REQUEST_POSTS
})

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
})
