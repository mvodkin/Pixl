import React from "react";
import Post from "./post";


export default class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.allPosts = this.allPosts.bind(this);
  }

  componentDidMount() {
    this.props.requestPosts();
  }

  allPosts() {

    if (this.props.posts.length) {
      return this.props.posts.map((post, idx) => {

        let props = {
          createComment: this.props.createComment,
          likePost: this.props.likePost,
          unlikePost: this.props.unlikePost,
          currentUser,
          post
        }

        return (
          <Post key={idx} props={props} />
        )

      });
    };

  }

  render() {
    return (
      <main className="feed">
        <div className="posts">
          <ul>{this.allPosts()}</ul>
        </div>
      </main>
    );
  };

}
