import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "./../components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a
          href="https://github.com/your-username" // Replace with your GitHub profile
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/your-username" // Replace with your LinkedIn profile
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
