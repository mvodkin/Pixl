import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from "../actions/session_actions";
import merge from "lodash/merge";

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser: action.currentUser });
    case LOGOUT:
      return merge({}, _nullUser);
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default SessionReducer;
