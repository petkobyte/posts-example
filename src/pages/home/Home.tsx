import React from 'react';
import { Card } from '../../components/card';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <div className='home-container'>
        <div>{t('res_homeMessage')}</div>
        <br />
        <br />
        <NavLink to='/posts'>{t('res_viewPosts')}</NavLink>
      </div>
    </Card>
  );
};

export default Home;
