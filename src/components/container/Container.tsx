import React, { FC } from 'react';
import './styles.scss';
import { ContainerProps } from './models';
import { withHelloLogging } from '../../hoc/loggingHoc';

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className='container'>{children}</div>;
};

export default withHelloLogging(Container, 'Container');
