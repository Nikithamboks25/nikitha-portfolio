import React from 'react';
import './../styles/Project.css'; 
import DevLaunchLogo from "./../assets/devlaunch_logo.png";
import TaskDashLogo from "./../assets/taskdash.png";
import SPALogo from "../assets/online-education.png";
import ApiLogo from "../assets/mobile-shopping.png";
import PythonLogo from "../assets/graduated.png";


const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <img src={DevLaunchLogo} alt="Devlaunch App" className="project-image" />
          <p>This React app is bootcamp aggregator application that serves as a centralized platform for discovering and comparing coding bootcamps and tech-related training programs. 
            It provides users with details such as course offerings, pricing, duration, location (in-person or online), and reviews.</p>
          <div className="project-links">
            <a href="https://github.com/Sonwabiso1/devlaunch3" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src={TaskDashLogo} alt="Task Management App" className="project-image" style={{ width: "150px", height: "auto"}} />
          <p>A task management app with React that helps users organize and track their tasks. It features task categorization, completion status, and deadline reminders.</p>
          <div className="project-links">
            <a href="https://github.com/Sonwabiso1/task-management-app" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src={SPALogo} alt="Single-Application" className="project-image" style={{ width: "150px", height: "auto"}}/>
          <p>This project features a Single Page Application (SPA) designed to provide undergraduate students with a platform to learn digital skills through a variety of tutorials on computer software applications essential for their coursework. 
            The application is built with React and focuses on user-friendly navigation and dynamic content loading.</p>
          <div className="project-links">
            <a href="https://github.com/Nikithamboks25/nikitha-spa-project" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <img src={ApiLogo} alt="API Application" className="project-image" style={{ width: "150px", height: "auto"}} />
          <p>This project implements a simple REST API using Node.js to manage a list of clothing items ordered by customers. 
            The API supports basic CRUD (Create, Read, Update, Delete) operations, allowing users to create, retrieve, update, and delete clothing items efficiently.</p>
          <div className="project-links">
            <a href="https://github.com/Nikithamboks25/Rest-API-Project" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
          </div>
        </div>

        {/* Project 5 */}
        <div className="project-card">
          <img src={PythonLogo} alt="Python Project" className="project-image" style={{ width: "150px", height: "auto"}}/>
          <p>This Python project analyzes a dataset of university students' sleeping patterns using NumPy and Pandas. 
            It explores how factors like study schedules, academic performance, and extracurricular activities affect sleep duration and quality. </p>
          <div className="project-links">
            <a href="https://github.com/Nikithamboks25/Python-Project" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
