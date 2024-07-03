import React, { useState } from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import myPhoto from '../images/my_photo.jpg';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
<div>
    <div className="header">
     <h1>My Portfolio</h1>
      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/about" onClick={toggleMenu} className="nav-item">About</Link>
        <Link to="/projects" onClick={toggleMenu} className="nav-item">Projects</Link>
        <Link to="/contact" onClick={toggleMenu} className="nav-item">Contact</Link>
      </nav>
      <div className='hamburger' onClick={toggleMenu} >
        &#9776;
      </div>
    </div>

    <div className='my-photo-container'>
    <img 
    src={myPhoto} 
    alt="profile pic" 
    className='my-photo'
    />

    <h3>OKAFOR CHINWIKE</h3>
    <p>FrontEnd Developer</p>
    </div>

    <div className='crafting'>
      <h3>
        <br /> <br />
        CRAFTING IMMERSE WEB EXPERIENCES THROUGH WELL HARMONIZED CODES, PASSIONATE ABOUT CREATING USER-FRIENDLY INTERFACES THAT LEAVES SOME LASTING IMPRESSIONS.  
      </h3>
    </div>

</div>
  );
};

export default Header;