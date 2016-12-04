import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Modal from "react-modal";
import Root from "./components/root";
import http from "http";

document.addEventListener("DOMContentLoaded", () => {

  const root = document.getElementById("root");
  let store;
  let initialState = {}

  if (window.currentUser) {
    initialState = {session: {currentUser: window.currentUser}};
  }

  store = configureStore(initialState);

  window.store = store;

  Modal.setAppElement(root);

  ReactDOM.render(<Root store={store} />, root);
});

setInterval(function() {
    let hour = (new Date()).getHours()
    if (hour > 6) {
      http.get("http://pixl-app.herokuapp.com");
    }
}, 300000);
