import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div>
      <Link to='/' element={<Header />}>
      <button className='backBtn'>Back</button>
      </Link>
    </div>
      <h2>Projects</h2>
      <p>This is the projects section where you can showcase your work.</p>
    </section>
  );
};

export default Projects;
