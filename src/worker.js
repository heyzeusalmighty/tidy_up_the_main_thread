import { createStore } from "redux";
import { expose } from "comlink";
import { combineReducers } from 'redux';
import countReducer from './store/count.reducer';


const rootReducer = combineReducers({
  count: countReducer,
});

const store = createStore(rootReducer);
expose(store);

/* eslint-disable */
self.addEventListener('message', e => {
    console.log('IAM WORKER', e.data);
});