import React from 'react';
import Arrow from './arrow.svg';

const CounterDemo = ({ count, increment, decrement }) => (
  <div className='demo-body'>
    <h1>THIS IS A DEMO</h1>
    <div className='countainer'>
      <p>The current counter is: {count}</p>
      <div className='button-box'>
        <button onClick={() => increment()} className='button'>
          <img src={Arrow} className='up-arrow' alt='+' />
        </button>
        <button onClick={() => decrement()} className='button'>
          <img src={Arrow} className='down-arrow' alt='-' />
        </button>
      </div>
    </div>

    <marquee direction='down' width='500' height='250' behavior='alternate' className='parent-marquee'>
      <marquee behavior="alternate">
        PRESS SOME BUTTONS
      </marquee>
    </marquee>
  </div>
);

export default CounterDemo;