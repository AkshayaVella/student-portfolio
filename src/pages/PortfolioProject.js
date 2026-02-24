import React from "react";
import "./ProjectDetails.css";

function PortfolioProject() {
  return (
    <div className="project-details-page">
      <div className="project-details-card">
        <h1>🌐 Portfolio Website</h1>
        <p className="project-description">
          A personal portfolio website to showcase projects, skills, and achievements 
          in a professional and interactive way.
        </p>

        <h3>💻 Tech Stack</h3>
        <div className="tech-stack">
          <span className="tech-badge">HTML</span>
          <span className="tech-badge">CSS</span>
          <span className="tech-badge">JavaScript</span>
        </div>

        <h3>✨ Features</h3>
        <ul className="features-list">
          <li>✅ Responsive design</li>
          <li>✅ Project showcase with filtering</li>
          <li>✅ Contact form with email integration</li>
          <li>✅ Smooth animations & transitions</li>
        </ul>

        <div className="buttons">
          <a href="https://github.com/your-portfolio-repo" target="_blank" rel="noreferrer" className="btn">
            GitHub
          </a>
          <a href="https://portfolio-demo.com" target="_blank" rel="noreferrer" className="btn live">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioProject;
