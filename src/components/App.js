import React from 'react';

export default () => (
  <div>
    <h2>Home component</h2>
    {Array(1000).fill(1).map((object, i) => <span key={i}>line_{i}; </span>)}
  </div>
);
