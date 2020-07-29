import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './landing/LandingPage';
import LanguagesPage from './languages/LanguagesPage';
import SetPage from './sets/SetPage';
import CardPage from './card/CardPage';
import CardEditPage from './cardList/CardEditPage';

function App() {
  return (
    <main className='App'>
      <BrowserRouter>
        <Route path='/' exact component={LandingPage}/>
        <Route path='/languages' exact component={LanguagesPage} />
        <Route path='/sets' exact component={SetPage} />
        <Route path='/card' exact component={CardPage} />
        <Route path='/edit' exact component={CardEditPage} />
      </BrowserRouter>
    </main>
  );
}

export default App;
