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


    <div className='projects-heading'>

    <div>
      <h2>Projects</h2>
      </div>

      <div className='project-container'>
        <div>
        <img src= {`${process.env.PUBLIC_URL}/images/MovieLand.png`} className='project-image' alt='project pic'/>
        </div>

        <div className='project-details'>
        <h2>MovieLand App</h2>
          <p>React, CSS, API</p>
          <h4> <span className='topics'>ABOUT:</span> MovieLand is a movie website with a search button that generates movie icons from the IMDB API</h4>
        </div>

        <div>
        <a href='https://cassido-fx.github.io/MovieLand/' target='_blank' rel="noreferrer" className='previewBtn'>Preview Project</a>
        </div>
      </div>

      <div className='project-container'>
        <div>
        <img src= {`${process.env.PUBLIC_URL}/images/Calculator.png`} className='project-image' alt='project pic'/>
        </div>

        <div className='project-details'>
        <h2>Calculator App</h2>
          <p>HTML, CSS, JavaScript</p>
          <h4> <span className='topics'>ABOUT:</span> Calculator App is a project with the basic calculation operators made to be functional with JavaScript</h4>
        </div>

        <div>
        <a href='https://cassido-fx.github.io/Calculator-App/' target='_blank' rel="noreferrer" className='previewBtn'>Preview Project</a>
        </div>
      </div>

    </div>
    
    </section>
  );
};

export default Projects;
