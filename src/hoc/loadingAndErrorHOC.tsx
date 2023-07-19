import React, { ComponentType, PropsWithChildren } from 'react';
import { HelloModel } from '../models.ts/helloModel';
import Card from '../components/card/Card';
import { HELLO } from '../constants/hello';
import Loading from '../components/loading/Loading';
import ErrorHandler from '../components/errorHandler/ErrorHandler';
import { useTranslation } from 'react-i18next';

export function withLoadingAndErrorHOC<T extends HelloModel>(
  Component: ComponentType<T>,
  loading: boolean,
  error: boolean,
) {
  const WrappedComponent = (props: PropsWithChildren<T>) => {
    const { t } = useTranslation();
    if (loading) return <Loading size={'2xl'} hello={HELLO} />;
    if (error) {
      return (
        <Card hello={HELLO}>
          <ErrorHandler message={t('res_somethingWentWrong')} hello={HELLO} />
        </Card>
      );
    }

    return <Component {...props} />;
  };

  return WrappedComponent;
}
