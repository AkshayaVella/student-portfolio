import React from "react";
import "./ProjectDetails.css";

function HealthTracker() {
  return (
    <div className="project-details-page">
      <div className="project-details-card">
        <h1>🏋️‍♂️ Health Tracker App</h1>
        <p className="project-description">
          A mobile app designed to track fitness goals, daily workouts, 
          and health metrics such as calories, water intake, and sleep.
        </p>

        <h3>💻 Tech Stack</h3>
        <div className="tech-stack">
          <span className="tech-badge">Flutter</span>
          <span className="tech-badge">Firebase</span>
        </div>

        <h3>✨ Features</h3>
        <ul className="features-list">
          <li>✅ Daily fitness tracking</li>
          <li>✅ Water intake & calorie counter</li>
          <li>✅ Sleep cycle monitoring</li>
          <li>✅ Cloud sync with Firebase</li>
        </ul>

        <div className="buttons">
          <a href="https://github.com/your-healthtracker-repo" target="_blank" rel="noreferrer" className="btn">
            GitHub
          </a>
          <a href="https://healthtracker-demo.com" target="_blank" rel="noreferrer" className="btn live">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default HealthTracker;
