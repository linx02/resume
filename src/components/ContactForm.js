import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { gsap } from 'gsap';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    from_name: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.init('4oM7qR4zjAn-GI12b');
    emailjs.sendForm('service_354xgyr', 'template_r0orvwj', document.querySelector('#form'))
      .then((response) => {
        console.log('Email sent successfully', response);
        setFormData({
            name: '',
            from_name: '',
            message: '',
        });
        showThankYou();
      }, (error) => {
        console.error('Email error:', error);
      });
  };

  function showThankYou() {

    document.querySelector('.contactform--container').style.display = 'none';
    document.querySelector('.contact--header').style.display = 'none';
    document.querySelector('.container--thanks').style.display = 'flex';

    gsap.to('#wine', {
        duration: 1,
        ease: 'ease-in-out',
        y: 10,
        repeat: -1,
        yoyo: true,
    });
  }

  return (
    <form onSubmit={handleSubmit} id="form">  
      <label htmlFor="email">Your Email:</label>
      <input id="email" name="from_name" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
      <button type="submit">Submit <i className="fa-solid fa-paper-plane"></i></button>
    </form>
  );
}