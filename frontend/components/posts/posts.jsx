import React from "react";
import Post from './post.jsx';


export default class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.postFeed = this.postFeed.bind(this);
  }

  componentDidMount() {
    this.props.requestPosts();
  }

  postFeed() {
    const allPosts = [];
    debugger
    if (typeof this.props.posts === "Array") {
      this.props.posts.forEach(post => allPosts.push(<Post post={post}/>));
    }
  }

  render() {

    return (
      <div className="posts">
        {this.postFeed()}
      </div>
    )
  }

}
