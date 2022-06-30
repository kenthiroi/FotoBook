import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store"
import Root from "./components/root"

document.addEventListener("DOMContentLoaded", () => {
  let store;
  
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        user: { [window.currentUser.id]: {
          ...window.currentUser, 
          hometown: window.currentUser.hometown === "" ? null : window.currentUser.hometown,
          profile_banner: window.currentUser.profile_banner === "" ? null : parseInt(window.currentUser.profile_banner),
          profile_picture: window.currentUser.profile_picture === "" ? null : parseInt(window.currentUser.profile_picture),
          school: window.currentUser.school === "" ? null : window.currentUser.school,
        }}
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});