import React from 'react';

import './Hero.scss';

const Hero = () => {
  const componentClassName = 'hero-wrapper'
  return (
    <div className={`${componentClassName}`}>
      <h1>Get Vaccinated Today</h1>
      <p>Schedule vaccination drives for your school with ease. Ensure the safety of your students and staff by organizing vaccination events through our portal.</p>
      <div className={`${componentClassName}-ctas`}>
        <button
          className='btn-primary'>
          Schedule a Drive
        </button>
        <button
          className='btn-secondary'>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;