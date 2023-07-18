import React, { FC, useState } from 'react';
import { AccordionProps } from './models';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleDown,
  faChevronCircleUp,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

export const Accordion: FC<AccordionProps> = ({ children, ...props }) => {
  const { title, isActive } = props;

  const onClick = () => {
    props.onClick();
  };

  const endIcon: JSX.Element = isActive ? (
    <FontAwesomeIcon icon={faChevronCircleUp} size='lg' />
  ) : (
    <FontAwesomeIcon icon={faChevronCircleDown} size='lg' />
  );

  return (
    <div className='accordion-container'>
      <div className='accordion-title' onClick={onClick}>
        <h4>{title}</h4>
        {endIcon}
      </div>
      {isActive && <div className='accordion-content'>{children}</div>}
    </div>
  );
};
