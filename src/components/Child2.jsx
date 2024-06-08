import React from 'react';

const Child2 = ({ decrement }) => {
  return (
    <div>
      <h2>Child 2 Component</h2>
      <button onClick={decrement}>Subtract $500</button>
    </div>
  );
};

export default Child2;
