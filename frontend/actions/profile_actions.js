export const REQUEST_PROFILE = "REQUEST_PROFILE";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const REQUEST_FOLLOW = "REQUEST_FOLLOW";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const RECEIVE_UNFOLLOW = "RECEIVE_UNFOLLOW";
export const REQUEST_UNFOLLOW = "REQUEST_UNFOLLOW";

export const requestProfile = (userId) => ({
  type: REQUEST_PROFILE,
  userId
})

export const receiveProfile = (profile) => ({
  type: RECEIVE_PROFILE,
  profile
})

export const requestFollow = (userId) => ({
  type: REQUEST_FOLLOW,
  userId
})

export const requestUnfollow = (userId) => ({
  type: REQUEST_UNFOLLOW,
  userId
})

export const receiveFollow = (follower) => ({
  type: RECEIVE_FOLLOW,
  follower
})

export const receiveUnfollow = (follower) => ({
  type: RECEIVE_UNFOLLOW,
  follower
})
