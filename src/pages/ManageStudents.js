import React, { useState } from "react";
import "./ManageStudents.css";

const initialStudents = [
  {
    id: 1,
    name: "John Doe",
    regNo: "20CS001",
    course: "B.E CSE",
    year: "III Year",
    portfolioLink: "https://portfolio.johndoe.dev",
    status: "On Track",
    projects: [
      {
        id: 101,
        title: "Smart Attendance System",
        category: "Web App",
        description:
          "RFID + Web dashboard to track student attendance in real-time.",
        progress: 80,
        milestone: "Integrating database & reports",
        lastUpdated: "2025-11-20",
      },
      {
        id: 102,
        title: "Student Portfolio Website",
        category: "Frontend",
        description: "Personal portfolio to showcase academic & personal work.",
        progress: 60,
        milestone: "Adding project gallery section",
        lastUpdated: "2025-11-18",
      },
    ],
    feedback: ["Good progress. Improve UI for the dashboard module."],
  },
  {
    id: 2,
    name: "Priya Sharma",
    regNo: "20CS017",
    course: "B.Tech IT",
    year: "II Year",
    portfolioLink: "https://priya-portfolio.com",
    status: "Needs Attention",
    projects: [
      {
        id: 201,
        title: "AI-based Career Recommendation",
        category: "ML",
        description:
          "Recommends career paths based on student skills & interests.",
        progress: 45,
        milestone: "Collecting training dataset",
        lastUpdated: "2025-11-15",
      },
    ],
    feedback: ["Schedule a review call to discuss dataset collection."],
  },
  {
    id: 3,
    name: "Rahul Kumar",
    regNo: "20CS025",
    course: "B.E CSE",
    year: "IV Year",
    portfolioLink: "https://rahul.codes",
    status: "Completed",
    projects: [
      {
        id: 301,
        title: "Online Learning Analytics Dashboard",
        category: "Full Stack",
        description:
          "Tracks student course completion, quiz performance & activity.",
        progress: 100,
        milestone: "Project completed 🎉",
        lastUpdated: "2025-10-30",
      },
    ],
    feedback: ["Excellent work. Ready for placement showcase."],
  },
];

function ManageStudents() {
  const [students, setStudents] = useState(initialStudents);
  const [selectedId, setSelectedId] = useState(initialStudents[0].id);
  const [feedbackText, setFeedbackText] = useState("");

  const selectedStudent = students.find((s) => s.id === selectedId);

  const handleProgressChange = (studentId, projectId, value) => {
    const val = Number(value);
    setStudents((prev) =>
      prev.map((s) =>
        s.id === studentId
          ? {
              ...s,
              projects: s.projects.map((p) =>
                p.id === projectId ? { ...p, progress: val } : p
              ),
            }
          : s
      )
    );
  };

  const handleAddFeedback = () => {
    if (!feedbackText.trim()) return;
    setStudents((prev) =>
      prev.map((s) =>
        s.id === selectedStudent.id
          ? { ...s, feedback: [...s.feedback, feedbackText.trim()] }
          : s
      )
    );
    setFeedbackText("");
  };

  return (
    <div className="ms-wrapper">
      {/* TOP BAR */}
      <header className="ms-header">
        <div>
          <h1>👥 Manage Students</h1>
          <p>
            Track project portfolios, monitor progress and share feedback with
            students.
          </p>
        </div>
        <div className="ms-header-info">
          <div className="pill pill-green">
            ✅ Active Projects:{" "}
            {students.reduce((acc, s) => acc + s.projects.length, 0)}
          </div>
          <div className="pill pill-purple">👨‍🏫 Admin View</div>
        </div>
      </header>

      <div className="ms-layout">
        {/* LEFT: STUDENT LIST */}
        <section className="ms-student-list">
          <h2>Students</h2>
          <ul>
            {students.map((student) => (
              <li
                key={student.id}
                className={
                  student.id === selectedId ? "student-item active" : "student-item"
                }
                onClick={() => setSelectedId(student.id)}
              >
                <div className="student-main">
                  <span className="avatar">
                    {student.name.charAt(0).toUpperCase()}
                  </span>
                  <div>
                    <h3>{student.name}</h3>
                    <p>{student.regNo}</p>
                  </div>
                </div>
                <div className="student-meta">
                  <span className="tag">{student.status}</span>
                  <span className="tag subtle">
                    📁 {student.projects.length} projects
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* RIGHT: SELECTED STUDENT DETAILS */}
        <section className="ms-details">
          {selectedStudent && (
            <>
              <div className="ms-details-header">
                <div>
                  <h2>{selectedStudent.name}</h2>
                  <p>
                    {selectedStudent.course} • {selectedStudent.year} •{" "}
                    {selectedStudent.regNo}
                  </p>
                  <a
                    href={selectedStudent.portfolioLink}
                    target="_blank"
                    rel="noreferrer"
                    className="portfolio-link"
                  >
                    🌐 View Portfolio
                  </a>
                </div>
                <div className="ms-details-badges">
                  <div className="pill pill-blue">
                    📁 {selectedStudent.projects.length} Projects
                  </div>
                  <div className="pill pill-orange">
                    🎯 Status: {selectedStudent.status}
                  </div>
                </div>
              </div>

              {/* PROJECTS */}
              <h3 className="section-title">Project Overview</h3>
              <div className="projects-grid">
                {selectedStudent.projects.map((project) => (
                  <div className="project-card" key={project.id}>
                    <div className="project-card-header">
                      <h4>{project.title}</h4>
                      <span className="tag">{project.category}</span>
                    </div>
                    <p className="project-desc">{project.description}</p>

                    <p className="project-milestone">
                      🧩 Current milestone: <b>{project.milestone}</b>
                    </p>

                    <p className="project-updated">
                      ⏱ Last updated: {project.lastUpdated}
                    </p>

                    <div className="progress-row">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>

                    <label className="slider-label">
                      Update progress:
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={project.progress}
                        onChange={(e) =>
                          handleProgressChange(
                            selectedStudent.id,
                            project.id,
                            e.target.value
                          )
                        }
                      />
                    </label>
                  </div>
                ))}
              </div>

              {/* FEEDBACK */}
              <h3 className="section-title">Feedback & Notes</h3>
              <div className="feedback-section">
                <div className="feedback-list">
                  {selectedStudent.feedback.length === 0 && (
                    <p className="empty-note">No feedback added yet.</p>
                  )}
                  {selectedStudent.feedback.map((f, idx) => (
                    <div key={idx} className="feedback-item">
                      <span>💬</span>
                      <p>{f}</p>
                    </div>
                  ))}
                </div>

                <div className="feedback-form">
                  <textarea
                    placeholder="Type your feedback or next steps for this student..."
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                  />
                  <button onClick={handleAddFeedback}>Send Feedback</button>
                </div>
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
}

export default ManageStudents;
