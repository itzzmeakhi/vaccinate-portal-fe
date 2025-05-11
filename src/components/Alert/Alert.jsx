import React from 'react';
import Button from '../Button/Button';

import './Alert.scss';

const Alert = ({ type, message, closeFn }) => {
  return (
    <div className={`alert alert__${type}`}>
      <span>{message}</span>
      <Button
        variant={type}
        onClick={closeFn}>
        X
      </Button>
    </div>
  );
};

export default Alert;