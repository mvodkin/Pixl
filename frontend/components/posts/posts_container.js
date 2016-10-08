import { connect } from "react-redux";
import Posts from "./posts";
import {
  requestPosts,
  createComment,
  likePost,
  unlikePost
 } from "../../actions/post_actions";

const mapStateToProps = ({post, currentUser}) => ({
  posts: post,
  currentUser: currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestPosts: () => dispatch(requestPosts()),
  createComment: (comment) => dispatch(createComment(comment)),
  likePost: (post_id) => dispatch(likePost(post_id)),
  unlikePost: (post_id) => dispatch(unlikePost(post_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
