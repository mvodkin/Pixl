import { connect } from "react-redux";
import Posts from "./posts";
import { requestProfile, requestFollow, requestUnfollow } from "../../actions/profile_actions";
import {
  requestPosts,
  createComment,
  likePost,
  unlikePost
 } from "../../actions/post_actions";

const mapStateToProps = ({post, session, profile}) => ({
  posts: post,
  currentUser: session.currentUser,
  profile
});

const mapDispatchToProps = (dispatch) => ({
  requestPosts: (userId) => dispatch(requestPosts(userId)),
  createComment: (comment) => dispatch(createComment(comment)),
  likePost: (postId) => dispatch(likePost(postId)),
  unlikePost: (postId) => dispatch(unlikePost(postId)),
  requestProfile: (userId) => dispatch(requestProfile(userId)),
  requestFollow: (userId) => dispatch(requestFollow(userId)),
  requestUnfollow: (userId) => dispatch(requestUnfollow(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
