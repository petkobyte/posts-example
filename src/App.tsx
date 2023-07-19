import React from 'react';
import { Routing } from './routing/Routing';
import { Header } from './components/header';
import './app.scss';
import { Container } from './components/container';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

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
      />
      <Container>
        <Routing />
      </Container>
    </div>
  );
}

export default App;
