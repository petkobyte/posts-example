import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import Card from '../../components/card/Card';
import { HELLO } from '../../constants/hello';
import { withHelloLogging } from '../../hoc/loggingHoc';
import { HomeModel } from './models';

const Home = (props: HomeModel) => {
  const { t } = useTranslation();

  return (
    <Card hello={HELLO}>
      <div className='home-container'>
        <div>{t('res_homeMessage')}</div>
        <br />
        <br />
        <NavLink to='/posts'>{t('res_viewPosts')}</NavLink>
      </div>
    </Card>
  );
};

export default withHelloLogging(Home, 'Home');
