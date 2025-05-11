import React from 'react';

import './Button.scss';

const Button = ({ 
  variant = 'primary', 
  children,
  onClick,
  type = 'button',
  disabled = false
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      type={type}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;