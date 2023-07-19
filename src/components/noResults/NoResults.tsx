import React, { FC } from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { withHelloLogging } from '../../hoc/loggingHoc';
import { NoResultsProps } from './models';

const NoResults: FC<NoResultsProps> = ({ text }) => {
  return (
    <div className='no-results-container'>
      <FontAwesomeIcon icon={faFolderOpen} size={'lg'} />
      <p className='no-results-text'>{text}</p>
    </div>
  );
};

export default withHelloLogging(NoResults, 'NoResults');
