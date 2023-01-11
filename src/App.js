import React from 'react';
import Header from './Header';
import Home from './Home';
import BubbleTea from './BubbleTea';
import Sushi from './Sushi';
import Store from './Store';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <BubbleTea />
      <Sushi />
      <Store />
      <Footer />
    </div>
  );
}

export default App;
