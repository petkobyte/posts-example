import React, { FC } from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { LoadingProps } from './models';
import { withHelloLogging } from '../../hoc/loggingHoc';

const Loading: FC<LoadingProps> = ({ color, size, text }) => {
  return (
    <div className={`loading-container ${color}`}>
      <FontAwesomeIcon icon={faSpinner} size={size} spin />
      {text && <p className='loading-text'>{text}</p>}
    </div>
  );
};

export default withHelloLogging(Loading, 'Loading');
