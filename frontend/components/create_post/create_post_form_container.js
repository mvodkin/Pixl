import { connect } from "react-redux";
import CreatePostForm from "./create_post_form";
import { createPost } from "../../actions/post_actions";

const mapDispatchToProps = (dispatch) => ({
  createPost: post => dispatch(createPost(post))
});

export default connect(
  null,
  mapDispatchToProps
)(CreatePostForm);
