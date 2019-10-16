import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { wrap } from 'comlink';

import remoteStoreWrapper from './remote-store-wrapper';
import CounterContainer from './components/counter.container';
import './styles.css';

const run = async () => {
  const remoteStore = await wrap(new Worker('./worker.js', { type: 'module' }));
  const store = await remoteStoreWrapper(remoteStore);
  ReactDOM.render(
    <Provider store={store}>
      <CounterContainer />
    </Provider>,
    document.getElementById('root')
  );
};

run();
