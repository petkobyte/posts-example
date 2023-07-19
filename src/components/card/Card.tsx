import React, { FC } from 'react';
import './styles.scss';
import { CardProps } from './models';
import { withHelloLogging } from '../../hoc/loggingHoc';

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className='card-container'>
      <div className='card-content'>{children}</div>
    </div>
  );
};

export default withHelloLogging(Card, 'Card');
