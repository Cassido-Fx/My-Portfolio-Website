import React from 'react';
import '../styles/Header.css';
import myPhoto from '../images/my_photo.jpg';

export const Header = () => {
  return (
<div>
    <header className="header">
     <h1>My Portfolio</h1>
      <nav>
        <a href="about" className='nav-menu'>About</a>
        <a href="projects" className='nav-menu'>Projects</a>
        <a href="contact" className='nav-menu'>Contact</a>
      </nav>
    </header>

    <div className='my-photo-container'>
    <img 
    src={myPhoto} 
    alt="image" 
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