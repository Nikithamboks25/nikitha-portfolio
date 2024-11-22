import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaHome, FaPhoneAlt } from 'react-icons/fa';
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
        'service_jakkfb5',
        'template_f7aejwa',
        e.target,
        'udjaV-ZswO5VwEYuf'
      )
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch(() => {
        setStatus('Failed to send message.');
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <p>If you would like to connect, please use the information below:</p>
        <div className="info-item">
          <FaEnvelope className="icon" />
          <span>lonambokotwana117@gmail.com</span>
        </div>
        <div className="info-item">
          <FaPhoneAlt className="icon" />
          <span>066 269 5211</span>
        </div>
        <div className="info-item">
          <FaHome className="icon" />
          <span>2425 Masemola Road, Masiphumelele, Fish Hoek</span>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Contact Us</h2>
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
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default ContactUs;
