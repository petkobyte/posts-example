import React, { FC } from 'react';
import './styles.scss';
import { HeaderProps } from './models';
import { withHelloLogging } from '../../hoc/loggingHoc';

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <header className='app-header'>
      <h2>{title}</h2>
    </header>
  );
};

export default withHelloLogging(Header, 'Header');
