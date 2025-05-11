import React from 'react';

import './Dropdown.scss';

const Dropdown = ({ 
  options = [],
  label,
  value,
  setSelectedOption }) => {
  return (
    <div className='dropdown'>
      <label className='label'>{label}</label>
      <select
        value={value}
        onChange={(e) => setSelectedOption(options.find(opt => opt._id === e.target.value)._id)}
        className='field'
      >
        <option value=""></option>
        {options.map((option, index) => (
          <option key={index} value={option._id}>
            {option.label || option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;