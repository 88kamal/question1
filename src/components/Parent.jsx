import React, { useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const Parent = () => {
  // Initialize state
  const [money, setMoney] = useState(0);

  // Function to increment money by 1000
  const incrementMoney = () => {
    setMoney(prevMoney => prevMoney + 1000);
  };

  // Function to decrement money by 500
  const decrementMoney = () => {
    setMoney(prevMoney => prevMoney - 500);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Money: ${money}</p>
      <Child1 increment={incrementMoney} />
      <Child2 decrement={decrementMoney} />
    </div>
  );
};

export default Parent;
