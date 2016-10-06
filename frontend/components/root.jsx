import React from "react";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import SessionFormContainer from './session/session_form_container';
import PostsContainer from './posts/posts_container';


import App from "./app";

const Root = ({store}) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('login');
    }
  };

  return(
    <Provider store={store}>
      <Router history={hashHistory}>

        <Route path="/" component={App} onEnter={_ensureLoggedIn}>
          <IndexRoute component={PostsContainer} />
        </Route>
        <Route path="login" component={SessionFormContainer} />
        <Route path="signup" component={SessionFormContainer} />
      </Router>
    </Provider>
  );
};

export default Root;
