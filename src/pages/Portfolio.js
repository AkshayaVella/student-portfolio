import React, { useState } from "react";
import "./Portfolio.css";

function Portfolio() {
  const [formData, setFormData] = useState({
    about: "",
    skills: "",
    projects: "",
    achievements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Portfolio Submitted:", formData);
    alert("Portfolio saved successfully! ✅");
  };

  return (
    <div className="portfolio-container">
      <h1>📁 My Portfolio</h1>
      <p className="portfolio-subtitle">
        Fill out your details to showcase your skills, projects, and achievements ✨
      </p>

      <form className="portfolio-form" onSubmit={handleSubmit}>
        <div className="portfolio-card">
          <h3>🌟 About Me</h3>
          <textarea
            name="about"
            placeholder="Write a short bio about yourself..."
            value={formData.about}
            onChange={handleChange}
          />
        </div>

        <div className="portfolio-card">
          <h3>📚 Skills</h3>
          <textarea
            name="skills"
            placeholder="List your skills (comma separated)..."
            value={formData.skills}
            onChange={handleChange}
          />
        </div>

        <div className="portfolio-card">
          <h3>🏗 Projects</h3>
          <textarea
            name="projects"
            placeholder="Describe your projects..."
            value={formData.projects}
            onChange={handleChange}
          />
        </div>

        <div className="portfolio-card">
          <h3>🏆 Achievements</h3>
          <textarea
            name="achievements"
            placeholder="Mention your certifications, awards, or recognitions..."
            value={formData.achievements}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="portfolio-submit">
          💾 Save Portfolio
        </button>
      </form>
    </div>
  );
}

export default Portfolio;
