import React from "react";

class CommentForm extends React.Component {

  constructor(props, post) {
    super(props);
    this.state = {
      body: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = this.state
    comment.post_id = this.props.post.id
    this.props.props.createComment({comment});
    this.setState({ body: "" });
  }

  update() {
    return  e => this.setState({ body: e.currentTarget.value })
  }

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <input type="text"
          className="comment-input"
          placeholder="Add a comment..."
          value={this.state.body}
          onChange={this.update()}
        />
      </form>
    );
  }

}

export default CommentForm;
