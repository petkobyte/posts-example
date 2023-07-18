import React from 'react';
import { Routing } from './routing/Routing';
import { Header } from './components/header/Header';
import './app.scss';
import { Container } from './components/container';

function App() {
  return (
    <div className='background'>
      <Header />
      <Container>
        <Routing />
      </Container>
    </div>
  );
}

export default App;
