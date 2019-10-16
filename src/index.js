import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { wrap } from 'comlink';

import remoteStoreWrapper from './remote-store-wrapper';
import CounterContainer from './counter.container';

import './styles.css';




async function run() {
  const remoteStore = await wrap(new Worker('./worker.js', { type: 'module' }));
  const store = await remoteStoreWrapper(remoteStore);
  ReactDOM.render(<Provider store={store}><CounterContainer /></Provider>, document.getElementById('root'));
}

run();
