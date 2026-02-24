import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>🎓 Student Panel</h2>
        <ul>
          <li onClick={() => navigate("/student/portfolio")}>📁 My Portfolio</li>
          <li onClick={() => navigate("/student/courses")}>📚 Courses</li>
          <li onClick={() => navigate("/student/assignments")}>📝 Assignments</li>
          <li onClick={() => navigate("/student/progress")}>📊 Progress</li>
          <li onClick={() => navigate("/student/projects")}>🏗 Projects</li>
          <li onClick={() => navigate("/student/achievements")}>🏆 Achievements</li> {/* ✅ Fixed */}
          <li onClick={() => navigate("/student/settings")}>⚙ Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Welcome, Student 👋</h1>
        <div className="modules">
          <div
            className="module-card"
            onClick={() => navigate("/student/portfolio")}
          >
            📁 Manage Portfolio
          </div>
          <div
            className="module-card"
            onClick={() => navigate("/student/courses")}
          >
            📚 Browse Courses
          </div>
          <div
            className="module-card"
            onClick={() => navigate("/student/assignments")}
          >
            📝 Submit Assignments
          </div>
          <div
            className="module-card"
            onClick={() => navigate("/student/progress")}
          >
            📊 Track Progress
          </div>
          <div
            className="module-card"
            onClick={() => navigate("/student/projects")}
          >
            🏗 Work on Projects
          </div>
          <div
            className="module-card"
            onClick={() => navigate("/student/achievements")} // ✅ Fixed
          >
            🏆 View Achievements
          </div>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;
