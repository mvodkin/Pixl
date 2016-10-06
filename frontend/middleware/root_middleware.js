import { applyMiddleware } from "redux";
import SessionMiddleware from "./session_middleware";
import PostMiddleware from "./post_middleware";

export default applyMiddleware(
  SessionMiddleware,
  PostMiddleware
);
