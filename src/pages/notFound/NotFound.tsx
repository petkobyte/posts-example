import React from 'react';
import image404 from '../../resources/images/panic404.png';
import { Card } from '../../components/card';
import './styles.scss';
import { useTranslation } from 'react-i18next';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <div className='not-found-container'>
        <img src={image404} alt='Page not found' width={250} />
        <div className='not-found-content'>
          <h1>{t('res_ooops')}</h1>
          <h3>{t('res_pageNotFoundMessage')}</h3>
        </div>
      </div>
    </Card>
  );
};
