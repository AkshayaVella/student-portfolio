import React from "react";
import "./ProjectDetails.css";

function AIChatbot() {
  return (
    <div className="project-details-page">
      <div className="project-details-card">
        <h1>🤖 AI Chatbot</h1>
        <p className="project-description">
          A chatbot built using NLP and Machine Learning to assist students in learning.
        </p>

        <h3>💻 Tech Stack</h3>
        <div className="tech-stack">
          <span className="tech-badge">React</span>
          <span className="tech-badge">Node.js</span>
          <span className="tech-badge">TensorFlow</span>
        </div>

        <h3>✨ Features</h3>
        <ul className="features-list">
          <li>✅ NLP-based query handling</li>
          <li>✅ Real-time student support</li>
          <li>✅ Adaptive learning assistance</li>
        </ul>

        <div className="buttons">
          <a href="https://github.com/your-chatbot-repo" target="_blank" rel="noreferrer" className="btn">GitHub</a>
          <a href="https://chatbot-demo.com" target="_blank" rel="noreferrer" className="btn live">Live Demo</a>
        </div>
      </div>
    </div>
  );
}

export default AIChatbot;
