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
      
     <div className='media-handles'>
      <h4>WE ARE JUST A DM AWAY...</h4>
      <img src='../images/email-logo.jpg'   alt='logo' />
      <h4>okaforcassy@gmail.com</h4>

      <img src='../images/whatsapp-logo.jpg' alt='logo' />
      <h4>+234 810 729 4135</h4>

      <img src='../images/x-logo.webp' alt='logo' />
      <h4>@realCassido</h4>

      <img src='../images/linkedin.avif' alt='logo' />
      <h4>Click here <a href='http://linkedin.com/in/chinwike-okafor-324b47228' target='_blank'>Linkedin</a> </h4>

     </div>

    <form className='form'>
    <h4>WE WOULD LOVE TO HEAR FROM YOU!</h4>

      <div className='details-container'>
        <h5>Full Name: <input type='text' placeholder='Your full name' required /></h5>

        <h5>Email: <input type='email' required placeholder='Your email address' /></h5>

        <h5>Subject: <input type='text' required placeholder='Enter subject' /></h5>

        <h5>Message:</h5>
        <textarea placeholder='Your Message' className='message-area' rows='7' />
      </div>

      <button type='submit' className='submitbtn'>Submit</button>
    </form>
    </section>
  );
};

export default Contact;
