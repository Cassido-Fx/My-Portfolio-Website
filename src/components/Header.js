import React from 'react';
import '../styles/Header.css';
import myPhoto from '../images/my_photo.jpg';

export const Header = () => {
  return (
<div>
    <header className="header">
     <h1>My Portfolio</h1>
      <nav>
        <a href="about">About</a>
        <a href="projects">Projects</a>
        <a href="contact">Contact</a>
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

</div>
  );
};

export default Header;
