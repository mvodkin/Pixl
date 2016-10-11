import { applyMiddleware } from "redux";
import SessionMiddleware from "./session_middleware";
import PostMiddleware from "./post_middleware";
import ProfileMiddleware from "./profile_middleware";

export default applyMiddleware(
  SessionMiddleware,
  PostMiddleware,
  ProfileMiddleware
);
