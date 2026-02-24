import React from "react";
import "./ProjectDetails.css";

function ELearning() {
  return (
    <div className="project-details-page">
      <div className="project-details-card">
        <h1>📚 E-Learning Platform</h1>
        <p className="project-description">
          A web-based platform that allows students to enroll in courses, 
          track progress, and complete assignments in a user-friendly way.
        </p>

        <h3>💻 Tech Stack</h3>
        <div className="tech-stack">
          <span className="tech-badge">React</span>
          <span className="tech-badge">Firebase</span>
          <span className="tech-badge">Tailwind CSS</span>
        </div>

        <h3>✨ Features</h3>
        <ul className="features-list">
          <li>✅ Course enrollment & progress tracking</li>
          <li>✅ Assignment submissions</li>
          <li>✅ Interactive quizzes</li>
          <li>✅ Real-time notifications</li>
        </ul>

        <div className="buttons">
          <a href="https://github.com/your-elearning-repo" target="_blank" rel="noreferrer" className="btn">
            GitHub
          </a>
          <a href="https://elearning-demo.com" target="_blank" rel="noreferrer" className="btn live">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ELearning;
