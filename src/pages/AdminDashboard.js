import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar admin">
        <h2>👨‍🏫 Admin Panel</h2>
        <ul>
          <li onClick={() => navigate("/admin/manage-students")}>👥 Manage Students</li>
          <li onClick={() => navigate("/admin/manage-courses")}>📚 Manage Courses</li>
          <li onClick={() => navigate("/admin/assign-tasks")}>📝 Assign Tasks</li>
          <li onClick={() => navigate("/admin/reports")}>📊 View Reports</li>

          {/* ⭐ NEW PROJECT NAVIGATION */}
          <li onClick={() => navigate("/admin/manage-projects")}>🏗 Projects</li>
          <li onClick={() => navigate("/admin/project-kanban")}>🗂 Project Kanban Board</li>
          <li onClick={() => navigate("/admin/project-timeline")}>📅 Project Timeline</li>
          <li onClick={() => navigate("/admin/feedback")}>💬 Feedback</li>
          <li onClick={() => navigate("/admin/settings")}>⚙ Settings</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Welcome, Admin 👋</h1>

        <div className="modules">

          <div className="module-card" onClick={() => navigate("/admin/manage-students")}>
            👥 Manage Students
          </div>

          <div className="module-card" onClick={() => navigate("/admin/manage-courses")}>
            📚 Add/Edit Courses
          </div>

          <div className="module-card" onClick={() => navigate("/admin/assign-tasks")}>
            📝 Assign Work
          </div>

          <div className="module-card" onClick={() => navigate("/admin/reports")}>
            📊 Performance Reports
          </div>

          {/* ⭐ NEW PROJECT MODULES */}
          <div className="module-card" onClick={() => navigate("/admin/manage-projects")}>
            🏗 Manage Projects
          </div>

          <div className="module-card" onClick={() => navigate("/admin/project-kanban")}>
            🗂 Kanban Board
          </div>

          <div className="module-card" onClick={() => navigate("/admin/project-timeline")}>
            📅 Project Timeline
          </div>

          <div className="module-card" onClick={() => navigate("/admin/feedback")}>
            💬 Review Feedback
          </div>


        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
