// src/components/Projects.js
import React from 'react';
import './../styles/Project.css'; 
import FullstackPicture from "../assets/fullstack.jpg";
import DiplomaPicture from "../assets/diploma.jpg";
import HigherCertificate from "../assets/HC.jpg"

const Achievements = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Achievements</h2>

      <div className="projects-grid">
        {/* Achievement 1 */}
        <div className="project-card">
          <h3>Cape Peninsula University of Technology Certificate</h3>
          <img src={DiplomaPicture} alt="Diploma Certification" className="project-image" style={{ width: "350px", height: "auto"}}/>
        </div>
        {/* Achievement 2 */}
        <div className="project-card">
          <h3>Capaciti Fullstack Certification</h3>
          <img src={FullstackPicture} alt="Fullstack Certification" className="project-image" style={{ width: "350px", height: "auto"}}/>
        </div>
        {/* Achievement 3 */}
        <div className="project-card">
          <h3>Cape Peninsula University of Technology Certificate</h3>
          <img src={HigherCertificate} alt=" Higher Certification" className="project-image" style={{ width: "350px", height: "auto"}}/>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
