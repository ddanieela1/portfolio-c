
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useRef } from "react";
// import ReactDOM from 'react-dom';

import { ScrollToTop } from './components/ScrollToTop';

function App() {
  const skills =useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    
      <div className="App">

      <NavBar />
      <Banner />
      <div ref={skills} className="skills">
      <Skills ref={skills} />
      </div>
      <Projects/>
      <Contact />
      <Footer />
      <ScrollToTop />

    </div>
   
      
 
  )
}

export default App
