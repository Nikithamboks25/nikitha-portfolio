// src/components/Projects.js
import React from 'react';
import './../styles/Project.css'; 

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <img src="weather-app-screenshot.png" alt="Weather App" className="project-image" />
          <h3>Weather App</h3>
          <p>This React app allows users to check weather forecasts using the OpenWeather API. Features include dynamic search, temperature units, and daily/weekly forecasts.</p>
          <div className="project-links">
            <a href="https://github.com/yourusername/weather-app" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
            <a href="https://weather-app-demo.com" target="_blank" rel="noopener noreferrer">View Live Demo</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src="task-manager-screenshot.png" alt="Task Manager App" className="project-image" />
          <h3>Task Manager App</h3>
          <p>A task management app with React that helps users organize and track their tasks. It features task categorization, completion status, and deadline reminders.</p>
          <div className="project-links">
            <a href="https://github.com/yourusername/task-manager" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
            <a href="https://task-manager-demo.com" target="_blank" rel="noopener noreferrer">View Live Demo</a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src="project3-screenshot.png" alt="Project 3" className="project-image" />
          <h3>Project 3</h3>
          <p>Description of Project 3 goes here. Explain what the project is about and the features it includes.</p>
          <div className="project-links">
            <a href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
            <a href="https://project3-demo.com" target="_blank" rel="noopener noreferrer">View Live Demo</a>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <img src="project4-screenshot.png" alt="Project 4" className="project-image" />
          <h3>Project 4</h3>
          <p>Description of Project 4 goes here.</p>
          <div className="project-links">
            <a href="https://github.com/yourusername/project4" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
            <a href="https://project4-demo.com" target="_blank" rel="noopener noreferrer">View Live Demo</a>
          </div>
        </div>

        {/* Project 5 */}
        <div className="project-card">
          <img src="project5-screenshot.png" alt="Project 5" className="project-image" />
          <h3>Project 5</h3>
          <p>Description of Project 5 goes here.</p>
          <div className="project-links">
            <a href="https://github.com/yourusername/project5" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
            <a href="https://project5-demo.com" target="_blank" rel="noopener noreferrer">View Live Demo</a>
          </div>
        </div>

        {/* Project 6 */}
        <div className="project-card">
          <img src="project6-screenshot.png" alt="Project 6" className="project-image" />
          <h3>Project 6</h3>
          <p>Description of Project 6 goes here.</p>
          <div className="project-links">
            <a href="https://github.com/yourusername/project6" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
            <a href="https://project6-demo.com" target="_blank" rel="noopener noreferrer">View Live Demo</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
