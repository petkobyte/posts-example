import React from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import Card from '../../components/card/Card';
import { HELLO } from '../../constants/hello';
import ErrorHandler from '../../components/errorHandler/ErrorHandler';
import { NotFoundModel } from './models';
import { withHelloLogging } from '../../hoc/loggingHoc';

const NotFound = (props: NotFoundModel) => {
  const { t } = useTranslation();

  return (
    <Card hello={HELLO}>
      <ErrorHandler message={t('res_pageNotFoundMessage')} hello={HELLO} />
    </Card>
  );
};

export default withHelloLogging(NotFound, 'NotFound');
