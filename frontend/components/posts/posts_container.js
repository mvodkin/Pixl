import { connect } from "react-redux";
import Posts from "./posts";
import { requestPosts, createComment } from "../../actions/post_actions";

const mapStateToProps = ({post}) => ({
  posts: post
});

const mapDispatchToProps = (dispatch) => ({
  requestPosts: () => dispatch(requestPosts()),
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
