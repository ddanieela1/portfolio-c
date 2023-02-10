
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import ReactDOM from 'react-dom';

function App() {
  return (
    <main>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      
      
 
      
    </main>
  )
}

export default App
