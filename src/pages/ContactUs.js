import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './../styles/ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_jakkfb5', // EmailJS Service ID
        'template_f7aejwa', // EmailJS Template ID
        e.target, // The form element
        'udjaV-ZswO5VwEYuf' // EmailJS User ID
      )
      .then((response) => {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((err) => {
        setStatus('Failed to send message.');
      });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactUs;
