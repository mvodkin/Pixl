import React from "react";
import ReactDOM from "react-dom";
import Post from "./post";
import Profile from "../profile/profile";
import Infinite from "react-infinite";
import Spinner from "react-spinkit";

export default class Posts extends React.Component {

  constructor(props) {
    super(props);
    this.allPosts = this.allPosts.bind(this);
  }

  componentDidMount() {
    if (this.props.location.pathname === "/") {
      this.props.requestPosts();
    } else if (this.props.location.pathname === "/explore") {
      this.props.requestPosts(null, true)
    } else if (this.props.location.pathname.includes("/user")) {
      const userId = this.props.params.userId;
      this.props.requestPosts(userId);
      this.props.requestProfile(userId);
    }
  }

  componentWillReceiveProps(newProps) {

    if (newProps.location.pathname === this.props.location.pathname) return;
    if (newProps.location.pathname === "/") {
      newProps.requestPosts();
    } else if (newProps.location.pathname === "/explore") {
      newProps.requestPosts(null, true);
    } else if (newProps.location.pathname.includes("/user")) {
      const userId = newProps.params.userId;
      newProps.requestPosts(userId);
      newProps.requestProfile(userId);
    }

    window.scrollTo(0, 0);
  }


  allPosts() {
    if (this.props.posts.length) {
      return this.props.posts.map((post, idx) => {

        return (
          <Post key={idx} props={this.props} post={post} />
        )

      });
    } else {
      return <Spinner
        style={{width: "100px", height: "100px"}}
        spinnerName="cube-grid"
        noFadeIn />
    }
  }

  renderProfileInfo() {
    if (this.props.location.pathname !== "/" && this.props.location.pathname !== "/explore") {
      return (
        <Profile {...this.props} />
      );
    }
  }

  renderExloreHeading() {
    if (this.props.location.pathname === "/explore") {
      return (
        <h1 className="explore-heading">All Most Recent Drawings:</h1>
      )
    }
  }

  render() {
    return (
      <main id="feed">

        {this.renderExloreHeading()}
        {this.renderProfileInfo()}

          <div className="posts">
            <ul>{this.allPosts()}</ul>
          </div>

      </main>
    );
  };

}
