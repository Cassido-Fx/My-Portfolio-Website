import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
<div className="App">
  <Router>
    <div>
      <Link to='/' element={<Header />}>
      <button className='backBtn'>Back</button>
      </Link>
    </div>
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </Router>
</div>
  );
}

export default App;
