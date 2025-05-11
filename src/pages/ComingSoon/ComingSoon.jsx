import React from 'react';

import Template from '../Template/Template';

import './ComingSoon.scss';

const ComingSoon = () => {
  return (
    <Template>
      <div className='coming-soon'>
        <h1 style={{ fontSize: "3rem", margin: "0.5rem 0" }}>Coming Soon</h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>We are working hard to bring something amazing. Stay tuned!</p>
      </div>
    </Template>
  );
};

export default ComingSoon;