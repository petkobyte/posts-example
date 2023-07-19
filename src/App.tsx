import React from 'react';
import { Routing } from './routing/Routing';
import './app.scss';
import Container from './components/container/Container';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { HELLO } from './constants/hello';
import Header from './components/header/Header';

function App() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className='background'>
      <Header
        title={
          <div className='app-name' onClick={() => navigate('/')}>
            {t('res_postsApp')}
          </div>
        }
        hello={HELLO}
      />
      <Container hello={HELLO}>
        <Routing />
      </Container>
    </div>
  );
}

export default App;
