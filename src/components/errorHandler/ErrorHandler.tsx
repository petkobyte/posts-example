import React, { FC } from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import image404 from '../../resources/images/panic404.png';
import { ErrorHandlerProps } from './models';
import { withHelloLogging } from '../../hoc/loggingHoc';

const ErrorHandler: FC<ErrorHandlerProps> = ({ message }) => {
  const { t } = useTranslation();
  return (
    <div className='error-container'>
      <img src={image404} alt='Page not found' width={250} />
      <div className='error-content'>
        <h1>{t('res_ooops')}</h1>
        <h3>{message}</h3>
      </div>
    </div>
  );
};

export default withHelloLogging(ErrorHandler, 'ErrorHandler');
