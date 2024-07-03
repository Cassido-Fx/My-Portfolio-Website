import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import {Header} from './Header';
import ProfilePic from '../images/profile-pic.jpeg';

const About = () => {
  return (
    <section id="about" className="about">
       <div>
      <Link to='/' element={<Header />}>
      <button className='backBtn'>Back</button>
      </Link>
    </div>
      <h2>About</h2>
      <p>
        Hello, I'm Okafor Chinwike, a front-end developer with 2 years of experience in crafting high-quality web products.  I am a graduate of Federal University Otuoke (FUO), Bayelsa State, Nigeria. <br />  My journey began with exploring the captivating realm of UI/UX and Frontend development where I delved into the Cousera Learning Platform to study, practice and get various certified qualifications. I am passionate about craftmanship and problem-solving.
      </p>

      <br />

      <h2>Profile</h2>
      <div className='profile-container'>
        <div className='profile1'>
          <h4><span className='topics'>FULL NAME:</span> Okafor Chinwike Boniface</h4>
          <h4><span className='topics'>DATE OF BIRTH:</span> 19-07-1996</h4>
          <h4><span className='topics'>CAREER:</span> Frontend Developer</h4>
          <h4><span className='topics'>EMAIL:</span> okaforcassy@gmail.com</h4>
          <h4> <span className='topics'>PHONE:</span> +234 810 729 4135</h4>
      </div>
       
       <div>
        <img className='profile-pic' src={ProfilePic} alt='my pic' />
       </div>
      </div>

      <br />

      <div>
        <h2>Qualifications</h2>
        <ul>
        <li>IBM Front-End Development Professional Certificate</li>
        <li>Introduction to HTML, CSS & JavaScript</li>
        <li>Developing Front-End Apps with React</li>
        <li>Getting Started with Cloud Native, DevOps, Agile, and NoSQL</li>
        <li>Developing Websites Front-Ends with Bootstrap</li>
        </ul>
      </div>

      <br />
      <div>
        <h2>Hard Skills</h2>
      </div>

        <div className='container1'>
          <div>
          <img src= {`${process.env.PUBLIC_URL}/images/html.png`} alt='logo' className='skills-logo'/>

          <h3>HTML</h3>
        </div>
        <div>
          <img src= {`${process.env.PUBLIC_URL}/images/css.png`} alt='logo' className='skills-logo'/>
          <h3>CSS</h3>
        </div>
        <div>
          <img src= {`${process.env.PUBLIC_URL}/images/js.png`} alt='logo' className='skills-logo'/>
          <h3>JavaScript</h3>
        </div>
        </div>

        <div className='container2'>
        <div>
          <img src= {`${process.env.PUBLIC_URL}/images/bootstrap.jpeg`} alt='logo' className='skills-logo'/>
          <h3>Bootstrap</h3>
        </div>
        <div>
          <img src= {`${process.env.PUBLIC_URL}/images/react.webp`} alt='logo' className='skills-logo'/>
          <h3>React</h3>
        </div>
        <div>
          <img src= {`${process.env.PUBLIC_URL}/images/git.png`} alt='logo' className='skills-logo'/>
          <h3>Git</h3>
        </div>
        </div>
        <br /> <br /> 
    <div className='soft-skills'>
      <h2>Soft Skills</h2>
      <p>Effective Communication | Teamwork and Collaboratin | Problem-solving | Physical and Emotional Strength | Time Management | Brand Awareness | Adaptability</p>
    </div>
    </section>
  );
};

export default About;
