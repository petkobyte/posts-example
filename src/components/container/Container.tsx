import React, { FC } from 'react';
import './styles.scss';
import { ContainerProps } from './models';

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className='container'>{children}</div>;
};
