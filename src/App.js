import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/main/hero/Hero';
import Main from './components/main/Main';
import './styles/utils/variables.scss';

function App() {
  return (
      <>
      <div className="bgImg">
      <Header />
      <Hero />
      </div>
      <Main />
      <Footer />
      </>
  );
}

export default App;
