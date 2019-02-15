import React from 'react';

const Box = ({ children, title }) => (
  <div>
    <h1>{title}</h1>
    <div>{children}</div>
  </div>
);

export default Box;
