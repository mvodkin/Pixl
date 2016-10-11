import { RECEIVE_PROFILE, RECEIVE_FOLLOW, RECEIVE_UNFOLLOW } from "../actions/profile_actions";

const ProfileReducer = (profile = {}, action) => {
  let newProfile = Object.assign({}, profile);
  switch (action.type) {
    case RECEIVE_PROFILE:
      return action.profile;
    case RECEIVE_FOLLOW:
      newProfile.followers.push(action.follower);
      newProfile.num_followers++;
      return newProfile;
    case RECEIVE_UNFOLLOW:
      let followerIdx;
      newProfile.followers.forEach((follower, idx) => {
        if (follower.id === action.follower.id) {
          followerIdx = idx;
        }
      });
      newProfile.followers.splice(followerIdx, 1);
      newProfile.num_followers--;
      return newProfile;
    default:
      return profile;
  }
}

export default ProfileReducer;
