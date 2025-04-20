import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import logo from './../../assets/logo.png';

import './Header.scss';

const Header = () => {
  const componentClassName = 'header-container';
  return (
    <header className={`${componentClassName}`}>
      <img
        alt={'Vaccinate portal logo'}
        src={logo}
        className={`${componentClassName}--logo`}
      />
      <div className={`${componentClassName}--ctas`}>
        <Button
          variant='white'>
          Sign Up!
        </Button>
      </div>
    </header>
  )
};

Header.propTypes = {
  logoAlt: PropTypes.string
};

export default Header;