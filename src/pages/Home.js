import React, { useState, useEffect } from 'react';
import "./../styles/Home.css";
import ProfileImage from "./../assets/nikitha.jpg";
import Resume from "./../assets/resume.pdf";
import ReactIcon from "../assets/react.png";
import JavaScriptIcon from './../assets/js.png';
import CSSIcon from './../assets/files.png';
import HTMLIcon from './../assets/html.png';
import NodeIcon from './../assets/node.png';
import MongoDBIcon from './../assets/database.png';
import ProblemSolvingIcon from './../assets/idea.png';
import CommunicationIcon from './../assets/conversation.png';
import CollaborationIcon from './../assets/united.png';

const skillsData = [
  { name: 'React', description: 'A JavaScript library for building user interfaces.', icon: ReactIcon },
  { name: 'JavaScript', description: 'Programming language for web development.', icon: JavaScriptIcon },
  { name: 'CSS', description: 'Style sheet language for designing web pages.', icon: CSSIcon },
  { name: 'HTML', description: 'Markup language for structuring web pages.', icon: HTMLIcon },
  { name: 'Node.js', description: 'JavaScript runtime for building server-side applications.', icon: NodeIcon },
  { name: 'MongoDB', description: 'NoSQL database for modern web applications.', icon: MongoDBIcon },
  { name: 'Problem-Solving', description: 'Ability to approach complex problems and find solutions.', icon: ProblemSolvingIcon },
  { name: 'Communication', description: 'Clear, concise, and effective communication.', icon: CommunicationIcon },
  { name: 'Collaboration', description: 'Working together to achieve common goals.', icon: CollaborationIcon }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToAbout = () => {
    document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsData.length);
    }, 3000); // Change skill every 3 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const { name, description, icon } = skillsData[currentIndex];

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
        <div className="about-content">
          <div className="about-left">
            <h2>Nikitha Mbokotwana</h2>
            <div className="title-with-lines">
              <hr className="line" />
              <span>Full Stack Developer</span>
              <hr className="line" />
            </div>
            <p>I am a Full-stack developer that holds a Diploma in Application Development qualification obtained from the Cape Peninsula University of Technology.  I specialize in web technologies and have built a strong foundation in both front-end and back-end development. 
              My technical and soft skills, which are highlighted on the beside the carousel, reflect my versatile capabilities. 
              Passionate about continuous learning, I am always striving to create impactful digital solutions. 
              I am dedicated to delivering high-quality work that addresses real-world challenges through innovative and efficient development practices.</p>
          </div>
          <div className="carousel-container">
            <div className="carousel">
              <div className="carousel-item">
                <img src={icon} alt={name} className="skill-icon" />
                <h3 className="skill-name">{name}</h3>
                <p className="skill-description">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
