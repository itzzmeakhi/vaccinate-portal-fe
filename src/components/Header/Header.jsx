import React from 'react';
import PropTypes from 'prop-types';

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
        <button
          className='signup-btn'>
          Sign Up!
        </button>
      </div>
    </header>
  )
};

Header.propTypes = {
  logoAlt: PropTypes.string
};

export default Header;