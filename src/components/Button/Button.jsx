import React from 'react';

import './Button.scss';

const Button = ({ 
  variant = 'primary', 
  children
}) => {
  return (
    <button
      className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};

export default Button;