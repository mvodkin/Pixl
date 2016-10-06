import { connect } from "react-redux";
import Posts from "./posts";
import { requestPosts } from "../../actions/post_actions";

const mapStateToProps = ({post}) => ({
  posts: post
});

const mapDispatchToProps = (dispatch) => ({
  requestPosts: () => dispatch(requestPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
