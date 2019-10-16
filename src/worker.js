import { createStore } from "redux";

import { expose } from "comlink";

const reducer = (state = 0, { type }) => {
  switch (type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);
expose(store);



/* eslint-disable */
self.addEventListener('message', e => {
    console.log('IAM worker', e.data);
});