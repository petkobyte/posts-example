import React from 'react';
import { Routing } from './routing/Routing';
import { Header } from './components/header';
import './app.scss';
import { Container } from './components/container';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className='background'>
      <Header title={t('res_postsApp')} />
      <Container>
        <Routing />
      </Container>
    </div>
  );
}

export default App;
