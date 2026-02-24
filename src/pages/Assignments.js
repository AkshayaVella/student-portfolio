import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { courses } from "./Courses"; // ✅ Reuse the same course list
import "./Assignments.css";

function Assignments() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Example assignment details for each course
  const assignments = [
    {
      course: "⚛️ React for Beginners",
      code: "REACT01",
      opened: "Saturday, 6 September 2025, 12:00 AM",
      due: "Saturday, 20 September 2025, 12:00 AM",
      description: "Build a React To-Do App",
      status: "Not submitted",
      grading: "Not graded",
      timeRemaining: "7 days 14 hours remaining",
    },
    {
      course: "🟢 Node.js Essentials",
      code: "NODE01",
      opened: "Monday, 1 September 2025, 10:00 AM",
      due: "Monday, 15 September 2025, 11:59 PM",
      description: "Express.js CRUD API",
      status: "Submitted for grading",
      grading: "In review",
      timeRemaining: "3 days 5 hours remaining",
    },
    {
      course: "☕ Java Programming",
      code: "JAVA01",
      opened: "Wednesday, 3 September 2025, 9:00 AM",
      due: "Wednesday, 17 September 2025, 11:59 PM",
      description: "OOPs & Collections Project",
      status: "Not submitted",
      grading: "Not graded",
      timeRemaining: "5 days 8 hours remaining",
    },
    {
      course: "🗄️ Database Management",
      code: "DB01",
      opened: "Friday, 5 September 2025, 12:00 PM",
      due: "Friday, 19 September 2025, 11:59 PM",
      description: "SQL & NoSQL Mini Project",
      status: "No submissions yet",
      grading: "Not graded",
      timeRemaining: "6 days 10 hours remaining",
    },
  ];

  // ✅ Filter based on search term
  const filteredAssignments = assignments.filter(
    (a) =>
      a.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="assignments-container">
      <header className="assignments-header">
        <button
          className="back-btn"
          onClick={() => navigate("/student-dashboard")}
        >
          ⬅ Back
        </button>
        <h1>📝 Assignments</h1>
        <p>Track and submit your course assignments 📌</p>

        {/* ✅ Search Bar */}
        <input
          type="text"
          placeholder="🔍 Search assignments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </header>

      <div className="assignments-grid">
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((a, index) => (
            <div key={index} className="assignment-card">
              <h2>
                {a.course} <span className="code">{a.code}-Assignments</span>
              </h2>
              <p>
                <strong>Opened:</strong> {a.opened}
              </p>
              <p>
                <strong>Due:</strong> {a.due}
              </p>
              <p>{a.description}</p>

              {/* ✅ Navigate to submission page */}
              <button
                className="submit-btn"
                onClick={() => navigate(`/student/assignments/${a.code}/submit`)}
              >
                Add submission
              </button>

              <div className="status-box">
                <h3>Submission status</h3>
                <p>
                  <strong>Submission status:</strong> {a.status}
                </p>
                <p>
                  <strong>Grading status:</strong> {a.grading}
                </p>
                <p>
                  <strong>Time remaining:</strong> {a.timeRemaining}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">❌ No assignments found</p>
        )}
      </div>
    </div>
  );
}

export default Assignments;
