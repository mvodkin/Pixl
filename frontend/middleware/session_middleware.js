import { LOGIN, LOGOUT, SIGNUP, receiveCurrentUser, receiveErrors } from "../actions/session_actions";
import { login, signup, logout } from "../util/session_api_util";
import { hashHistory } from "react-router"


export default ({getState, dispatch}) => next => action => {
  const successCallback = (user) => dispatch(receiveCurrentUser(user));
  const errorCallback = (errors) => dispatch(receiveErrors(errors.responseJSON));
  switch (action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
    case LOGOUT:
      logout(() => {
        // hashHistory.push("login");
        next(action);
      });
    default:
      return next(action);
  }
};
