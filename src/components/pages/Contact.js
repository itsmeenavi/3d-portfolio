// src/components/pages/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0nvh3h4',
        'template_h1zvowo',
        e.target,
        '41M3Bbo3aIfm44zj-'
      )
      .then(
        (result) => {
          console.log('Email successfully sent!');
        },
        (error) => {
          console.error('Error sending email:', error);
        }
      );

    // Reset form
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="page-content">
      <h1>Get in Touch</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit">Send Enquiry</button>
      </form>
    </div>
  );
}

export default Contact;
