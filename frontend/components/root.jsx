import React from "react";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import SessionFormContainer from './session/session_form_container';


import App from "./app";

const Root = ({store}) => {

  return(
    <Provider store={store}>
      <Router history={hashHistory}>

        <Route path="/" component={App}>

        </Route>
        <Route path="/login" component={SessionFormContainer} />
        <Route path="/signup" component={SessionFormContainer} />
      </Router>
    </Provider>
  );
};

export default Root;
//
