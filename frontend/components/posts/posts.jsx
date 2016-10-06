import React from "react";
import Post from './post.jsx';


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
      return this.props.posts.map((post, idx) => (
        <Post key={idx} post={post} />
      ));
    };

  }

  render() {
    return (
      <div className="posts">
        <ul>{this.allPosts()}</ul>
      </div>
    );
  };

}
