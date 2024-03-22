import React from 'react';
import Header from './layout/header/Header';
import Main from './layout/sections/main/Main';
import Works from './layout/sections/works/Works';
import Explorations from './layout/sections/explorations/Explorations';
import Projects from './layout/sections/projects/Projects';
import Contact from './layout/sections/contact/Contact';
import Footer from './layout/footer/Footer';
import { Particle } from './components/particle/Particle';
import GoTopBtn from './components/goTopBtn/GoTopBtn';


function App() {
  return (
    <div>
      <Particle/>
      <Header/>
      <Main/>
      <Works/>
      <Explorations/>
      <Projects/>
      <Contact/>
      <Footer/>
      <GoTopBtn/>
    </div>
  );
}

export default App;

