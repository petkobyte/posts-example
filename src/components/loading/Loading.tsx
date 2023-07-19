import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const Loading = () => {
  return (
    <div className='loading-container'>
      <FontAwesomeIcon icon={faSpinner} size='lg' spin />
    </div>
  );
};
