import React from 'react';
import Button from '../Button/Button';

import './Hero.scss';

const Hero = () => {
  const componentClassName = 'hero-wrapper'
  return (
    <div className={`${componentClassName}`}>
      <h1>Get Vaccinated Today</h1>
      <p>Schedule vaccination drives for your school with ease. Ensure the safety of your students and staff by organizing vaccination events through our portal.</p>
      <div className={`${componentClassName}-ctas`}>
        <Button
          variant='primary'>
          Schedule a Drive
        </Button>
        <Button
          variant='secondary'>
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Hero;