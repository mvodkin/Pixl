import { connect } from "react-redux";
import { updatePost, requestPost } from "../../actions/post_actions";
import UpdatePostForm from "./update_post";

const mapDispatchToProps = (dispatch) => ({
  requestPost: postId => dispatch(requestPost(postId)),
  updatePost: post => dispatch(updatePost(post))
});

const mapStateToProps = ({post}) => ({
  post
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdatePostForm);
