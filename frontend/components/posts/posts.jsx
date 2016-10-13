import React from "react";
import Post from "./post";
import Profile from "../profile/profile";
import Infinite from "react-infinite";


export default class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.allPosts = this.allPosts.bind(this);
  }

  componentDidMount() {
    if (this.props.location.pathname === "/") {
      this.props.requestPosts();
    } else if (this.props.pathname === "/explore") {
      this.props.requestPosts(null, true)
    } else {
      const userId = this.props.params.userId;
      this.props.requestPosts(userId);
      this.props.requestProfile(userId);
    }
  }

  componentWillReceiveProps(newProps) {
    // debugger
    if (this.props.params.userId === newProps.params.userId) return;
    if (newProps.location.pathname === "/") {
      newProps.requestPosts();
    } else if (newProps.location.pathname === "/explore") {
      newProps.requestPosts(null, true)
    } else {
      const userId = newProps.params.userId;
      newProps.requestPosts(userId);
      newProps.requestProfile(userId);
    }
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

  renderProfileInfo() {
    if (this.props.location.pathname !== "/" && this.props.location.pathname !== "/explore") {
      return (
        <Profile {...this.props} />
      );
    }
  }

  render() {
    return (
      <main className="feed">
        {this.renderProfileInfo()}

          <div className="posts">
            <ul>{this.allPosts()}</ul>
          </div>
  
      </main>
    );
  };

}
// <Infinite
//   containerHeight={1800}
//   elementHeight={900}
//   InfiniteLoadBeginEdgeOffset={700}/>
