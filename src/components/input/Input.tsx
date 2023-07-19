import React, { FC } from 'react';
import './styles.scss';
import { InputProps } from './models';

export const Input: FC<InputProps> = ({ type, value, placeholder, name, disabled, onChange }) => {
  return (
    <div className='input-container'>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};
