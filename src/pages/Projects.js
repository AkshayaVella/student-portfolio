import React from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

function Projects() {
  const navigate = useNavigate();

  const projectList = [
    {
      id: "chatbot",
      title: "🤖 AI Chatbot",
      description: "A chatbot built using NLP and machine learning to assist students.",
      tech: ["React", "Node.js", "TensorFlow"],
    },
    {
      id: "portfolio",
      title: "🌐 Portfolio Website",
      description: "Personal portfolio to showcase projects, skills, and achievements.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: "elearning",
      title: "📚 E-Learning Platform",
      description: "A web app that allows students to enroll, track, and complete courses.",
      tech: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      id: "health",
      title: "🏋️‍♂️ Health Tracker App",
      description: "Mobile app for tracking fitness goals and daily health metrics.",
      tech: ["Flutter", "Firebase"],
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-title">🚀 My Projects</h1>
      <p className="projects-subtitle">
        Explore some of the exciting projects I’ve worked on.
      </p>

      <div className="projects-container">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => navigate(`/student/projects/${project.id}`)}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-badge">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
