import React, { FC, useState, useEffect } from 'react';
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
  const [loading, setLoading] = useState<boolean>(false);

  const onClick = () => {
    if (!isActive) {
      setLoading(true);
    }

    props.onClick();
  };

  useEffect(() => {
    if (isActive) {
      setLoading(false);
    }
  }, [isActive]);

  const endIcon: JSX.Element = loading ? (
    <FontAwesomeIcon icon={faSpinner} size='lg' />
  ) : isActive ? (
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
