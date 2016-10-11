import { combineReducers } from "redux";
import SessionReducer from "./session_reducer";
import PostReducer from "./post_reducer";
import ProfileReducer from "./profile_reducer";

export default combineReducers({
  session: SessionReducer,
  post: PostReducer,
  profile: ProfileReducer
});
