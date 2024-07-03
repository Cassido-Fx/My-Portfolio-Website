import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import myPhoto from '../images/my_photo.jpg';

export const Header = () => {
  return (
<div>
    <header className="header">
     <h1>My Portfolio</h1>
      <nav>
        <Link to="/about" className="nav-menu">About</Link>
        <Link to="/projects" className="nav-menu">Projects</Link>
        <Link to="/contact" className="nav-menu">Contact</Link>
      </nav>
    </header>

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