import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "./../components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer-title'>
            <p>Keep in Touch</p>
        </div>
      <div className="footer-content">
        <a
          href="https://github.com/Nikithamboks25" // Replace with your GitHub profile
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/nikitha-mbokotwana-2a5a82159/" // Replace with your LinkedIn profile
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
