import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Courses.css";

// ✅ Export courses so Assignments.js can use the same list
export const courses = [
  {
    id: 1,
    title: "⚛️ React for Beginners",
    code: "REACT01",
    desc: "Learn React fundamentals with interactive projects.",
  },
  {
    id: 2,
    title: "🟢 Node.js Essentials",
    code: "NODE01",
    desc: "Master backend development using Node.js and Express.",
  },
  {
    id: 3,
    title: "☕ Java Programming",
    code: "JAVA01",
    desc: "Build strong OOPs concepts and real-world apps in Java.",
  },
  {
    id: 4,
    title: "🗄️ Database Management",
    code: "DB01",
    desc: "Learn SQL & NoSQL with hands-on database projects.",
  },
];

function Courses() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Filter courses based on search input
  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="courses-container">
      <header className="courses-header">
        <button
          className="back-btn"
          onClick={() => navigate("/student-dashboard")}
        >
          ⬅ Back
        </button>
        <h1>📚 Available Courses</h1>
        <p>Choose a course and start your learning journey 🚀</p>

        {/* ✅ Search Bar */}
        <input
          type="text"
          placeholder="🔍 Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </header>

      <div className="courses-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          ))
        ) : (
          <p className="no-results">❌ No courses found</p>
        )}
      </div>
    </div>
  );
}

export default Courses;
