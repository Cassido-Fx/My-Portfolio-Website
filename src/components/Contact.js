import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div>
      <Link to='/' element={<Header />}>
      <button className='backBtn'>Back</button>
      </Link>
    </div>
      <h2>Contact</h2>
      <p>This is the contact section where you can provide your contact information.</p>
    </section>
  );
};

export default Contact;
