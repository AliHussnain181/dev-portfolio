import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Services';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <About />
      <Service />
      <Project />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
