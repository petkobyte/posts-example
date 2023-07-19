import React from 'react';
import { Card } from '../../components/card';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import { ErrorHandler } from '../../components/errorHandler/ErrorHandler';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <ErrorHandler message={t('res_pageNotFoundMessage')} />
    </Card>
  );
};

export default NotFound;
