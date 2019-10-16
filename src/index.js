import React from 'react';
import ReactDOM from 'react-dom';

import { Provider, connect } from 'react-redux';
import { wrap } from 'comlink';
import remoteStoreWrapper from './remote-store-wrapper';

import './App.css';

async function run() {
  const remoteStore = await wrap(new Worker('./worker.js', { type: 'module' }));
  const store = await remoteStoreWrapper(remoteStore);

  const CounterDemo = connect(counter => ({ counter }))(
    ({ counter, dispatch }) => (
      <div className='demo-body'>
        <h1>THIS IS A DEMO</h1>
        <div className='countainer'>
          <p>The current counter is: {counter}</p>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        </div>

        <marquee direction='down' width='500' height='250' behavior='alternate' className='parent-marquee'>
          <marquee behavior="alternate">
            PRESS SOME BUTTONS
          </marquee>
        </marquee>
      </div>
    )
  );
  ReactDOM.render(<Provider store={store}><CounterDemo /></Provider>, document.getElementById('root'));
}

run();
