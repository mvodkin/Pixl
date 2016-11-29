import React from "react";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from "./app";
import SessionFormContainer from "./session/session_form_container";
import PostsContainer from "./posts/posts_container";
import CreatePostFormContainer from "./create_post/create_post_form_container";
import UpdatePostContainer from "./create_post/update_post_container";

const Root = ({store}) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('login');
    }
  };

  const _ensureSufficientFollowing = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('login');
    } else if (currentUser.num_following < 1) {
      replace('/explore');
    }
  }

  return(
    <Provider store={store}>
      <Router history={hashHistory}>

        <Route path="/" component={App} onEnter={_ensureLoggedIn}>
          <IndexRoute component={PostsContainer} onEnter={_ensureSufficientFollowing} />
          <Route path="/user/:userId" component={PostsContainer} onEnter={_ensureLoggedIn} />
          <Route path="/new" component={CreatePostFormContainer} onEnter={_ensureLoggedIn} />
          <Route path="/explore" component={PostsContainer} onEnter={_ensureLoggedIn} />
          <Route path="/edit/:postId" component={UpdatePostContainer} onEnter={_ensureLoggedIn} />
        </Route>
        <Route path="login" component={SessionFormContainer} />
        <Route path="signup" component={SessionFormContainer} />
      </Router>
    </Provider>
  );
};

export default Root;
