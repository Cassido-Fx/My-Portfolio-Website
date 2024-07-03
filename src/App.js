import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
<div className="App">

  <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes> 

    
</div>
  );
}

export default App;


