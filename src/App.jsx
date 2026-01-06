import React from 'react';
import Container from './Container/Container';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';

const App = () => {
  return (
    <div className='bg-zinc-900 text-white font-serif'>
      <Container>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
      </Container>
    </div>
  );
};

export default App;