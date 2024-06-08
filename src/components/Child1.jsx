import React from 'react';

const Child1 = ({ increment }) => {
  return (
    <div>
      <h2>Child 1 Component</h2>
      <button onClick={increment}>Add $1000</button>
    </div>
  );
};

export default Child1;
