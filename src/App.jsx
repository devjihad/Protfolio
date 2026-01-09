import React from 'react';
import Container from './Container/Container';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='bg-zinc-900 text-white font-serif'>
      <Container>
        <Navbar></Navbar>
        {/* <Hero></Hero>
        <About></About>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer> */}
      </Container>
    </div>
  );
};

export default App;