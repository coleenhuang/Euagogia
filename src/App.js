import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import LandingPage from './landing/LandingPage';
import LanguagesPage from './languages/LanguagesPage';
import SetPage from './sets/SetPage';
import CardPage from './card/CardPage';
import CardEditPage from './cardList/CardEditPage';
import './App.css'


function App() {
  return (
    <main className='App'>
      <Header />
      <div className='container'>
          <Route path='/' exact component={LandingPage}/>
          <Route path='/languages' exact component={LanguagesPage} />
          <Route path='/sets' exact component={SetPage} />
          <Route path='/cards' exact component={CardPage} />
          <Route path='/edits' exact component={CardEditPage} />
      </div>
    </main>
  );
}

export default App;
