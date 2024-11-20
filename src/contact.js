import React from 'react';
import './contact.css'; // Ensure you have a separate CSS file for styles

function Contact() {
  return (
    <div className='get-main'>
      <h2>Get In Touch With Us</h2>
      <form className="form">
        <div className="input-box">
          <input type="email" placeholder='Enter Your Email' required />
          <i className='bx bxs-envelope'></i>
        </div>
        <button type="submit" className="btn">Send</button>
        <div className="register-link">
          <p>We will get back to you shortly!</p>
        </div>
      </form>
    </div>
  );
}

export default Contact;