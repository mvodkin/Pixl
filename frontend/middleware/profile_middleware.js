import { fetchProfile, createFollow, destroyFollow } from "../util/user_api_util";
import {
  REQUEST_PROFILE,
  REQUEST_FOLLOW,
  REQUEST_UNFOLLOW,
  receiveProfile,
  receiveFollow,
  receiveUnfollow
} from "../actions/profile_actions";

const ProfileMiddleware = ({getState, dispatch}) => next => action => {
  const fetchSuccessCallback = (profile) => dispatch(receiveProfile(profile));
  const followSuccessCallback = (follower) => dispatch(receiveFollow(follower));
  const unfollowSuccessCallback = (follower) => dispatch(receiveUnfollow(follower));
  switch (action.type) {
    case REQUEST_PROFILE:
      fetchProfile(
        action.userId,
        fetchSuccessCallback,
        error => console.log(error)
      );
      return next(action);
    case REQUEST_FOLLOW:
      createFollow(
        action.userId,
        followSuccessCallback,
        error => console.log(error)
      )
      return next(action);
    case REQUEST_UNFOLLOW:
      destroyFollow(
        action.userId,
        unfollowSuccessCallback,
        error => console.log(error)
      )
      return next(action)
    default:
      return next(action);
  }
}

export default ProfileMiddleware;
