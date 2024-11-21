import React from 'react';
import "./../styles/Home.css";
import ProfileImage from "./../assets/nikitha.jpg";
import Resume from "./../assets/resume.pdf"; // Add your resume file here

const Home = () => {
  const scrollToAbout = () => {
    document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Section 1: Welcome */}
      <section className="welcome-section">
        <div className="welcome-content">
          <div className="welcome-message">
            <h1>Welcome to My Portfolio</h1>
            <p>Discover more about my journey and skills below.</p>
            <div className="welcome-buttons">
              <button onClick={scrollToAbout}>About Me</button>
              <a href={Resume} download className="resume-button">Download Resume</a>
            </div>
          </div>
          <div className="profile-picture">
            <img
              src={ProfileImage} 
              alt="Profile"
              className="profile-image"
            />
          </div>
        </div>
      </section>

      {/* Section 2: About Me */}
      <section id="about-section" className="about-section">
        <h2>About Me</h2>
        <p>
          Hi, I'm Nikitha Mbokotwana, a passionate developer with skills in React, JavaScript,
          and other web technologies. I am constantly learning and striving to create
          impactful digital solutions. Let's connect and build something amazing!
        </p>
      </section>
    </div>
  );
};

export default Home;
