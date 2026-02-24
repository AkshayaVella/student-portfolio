import React, { useState } from "react";
import "./ManageCourses.css";

function ManageCourses() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Full Stack Development",
      code: "CSE301",
      description: "Learn MERN stack and build real-world applications.",
      students: 48,
      category: "Web Development",
      level: "Intermediate",
    },
    {
      id: 2,
      title: "Data Science",
      code: "CSE405",
      description: "Python, Pandas, ML, Deep Learning and real projects.",
      students: 52,
      category: "Data",
      level: "Advanced",
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      code: "AIML520",
      description: "Neural networks, CV, NLP and model deployment.",
      students: 34,
      category: "AI",
      level: "Advanced",
    },
  ]);

  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

  const [form, setForm] = useState({
    title: "",
    code: "",
    description: "",
    category: "",
    level: "",
    students: 0,
  });

  // 🔍 FILTER COURSES
  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  // ✨ HANDLE FORM CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ➕ ADD OR EDIT COURSE
  const handleSubmit = () => {
    if (!form.title.trim()) return;

    if (editingCourse) {
      // EDIT
      setCourses((prev) =>
        prev.map((c) =>
          c.id === editingCourse.id ? { ...c, ...form } : c
        )
      );
      setToast("Course updated successfully!");
    } else {
      // ADD NEW
      setCourses((prev) => [
        ...prev,
        { ...form, id: Date.now(), students: 0 },
      ]);

      setToast("Course added successfully!");
    }

    // RESET
    setForm({
      title: "",
      code: "",
      description: "",
      category: "",
      level: "",
      students: 0,
    });
    setEditingCourse(null);
    setModalOpen(false);

    setTimeout(() => setToast(""), 3000);
  };

  // 🗑 DELETE COURSE
  const handleDelete = (id) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
    setToast("Course deleted!");
    setTimeout(() => setToast(""), 3000);
  };

  // ✏ EDIT COURSE (LOAD VALUES)
  const handleEdit = (course) => {
    setEditingCourse(course);
    setForm(course);
    setModalOpen(true);
  };

  return (
    <div className="courses-wrapper">
      <h1 className="title">📚 Manage Courses</h1>

      {/* 🔍 SEARCH BAR */}
      <input
        type="text"
        placeholder="Search courses..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* COURSES GRID */}
      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <div className="course-card" key={course.id}>
            <h2>{course.title}</h2>
            <span className="course-code">{course.code}</span>

            <p className="category">📂 {course.category}</p>
            <p className="level">🎯 Level: {course.level}</p>

            <p className="desc">{course.description}</p>

            <div className="course-footer">
              <span className="students-count">👥 {course.students} Students</span>

              <button className="edit-btn" onClick={() => handleEdit(course)}>
                Edit
              </button>

              <button className="delete-btn" onClick={() => handleDelete(course.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ADD COURSE BUTTON */}
      <button className="add-course-btn" onClick={() => setModalOpen(true)}>
        ➕ Add New Course
      </button>

      {/* POPUP MODAL */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>{editingCourse ? "Edit Course" : "Add New Course"}</h2>

            <input name="title" value={form.title} onChange={handleChange} placeholder="Course Title" />
            <input name="code" value={form.code} onChange={handleChange} placeholder="Course Code" />
            <input name="category" value={form.category} onChange={handleChange} placeholder="Category" />
            <input name="level" value={form.level} onChange={handleChange} placeholder="Level (Beginner/Advanced)" />
            <textarea name="description" value={form.description} onChange={handleChange} placeholder="Course Description" />

            <div className="modal-actions">
              <button onClick={handleSubmit} className="save-btn">
                Save
              </button>
              <button onClick={() => setModalOpen(false)} className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST MESSAGE */}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default ManageCourses;
