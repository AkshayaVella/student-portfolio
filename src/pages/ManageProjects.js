import React, { useState } from "react";
import "./ManageProjects.css";

function ManageProjects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "AI Chatbot",
      category: "Artificial Intelligence",
      description: "A chatbot using NLP to answer student queries.",
      progress: 72,
      status: "In Progress",
      members: ["John", "Priya"],
    },
    {
      id: 2,
      title: "E-Learning Platform",
      category: "Web Development",
      description: "A full LMS system with real-time tracking.",
      progress: 92,
      status: "Completed",
      members: ["Rahul", "Swetha"],
    },
  ]);

  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(null);

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    progress: 0,
    status: "In Progress",
    members: "",
  });

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const saveProject = () => {
    const newProject = {
      ...form,
      id: edit ? edit.id : Date.now(),
      progress: Number(form.progress),
      members: form.members.split(","),
    };

    if (edit) {
      setProjects(projects.map((p) => (p.id === edit.id ? newProject : p)));
    } else {
      setProjects([...projects, newProject]);
    }

    setForm({
      title: "",
      category: "",
      description: "",
      progress: 0,
      status: "In Progress",
      members: "",
    });

    setEdit(null);
    setModal(false);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="projects-wrapper">
      <h1 className="title">🏗 Manage Projects</h1>

      <button className="add-btn" onClick={() => setModal(true)}>
        ➕ Add Project
      </button>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
            <h2>{p.title}</h2>
            <span className="category">{p.category}</span>

            <p className="desc">{p.description}</p>

            <p className="meta">
              👥 Members: {p.members.join(", ")}
            </p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${p.progress}%` }}
              ></div>
            </div>

            <p className="status">📌 {p.status}</p>

            <div className="card-actions">
              <button
                className="edit-btn"
                onClick={() => {
                  setEdit(p);
                  setForm({
                    title: p.title,
                    category: p.category,
                    description: p.description,
                    progress: p.progress,
                    status: p.status,
                    members: p.members.join(","),
                  });
                  setModal(true);
                }}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteProject(p.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>{edit ? "Edit Project" : "Create Project"}</h2>

            <input
              name="title"
              placeholder="Project Title"
              value={form.title}
              onChange={handle}
            />

            <input
              name="category"
              placeholder="Category (e.g., AI, Web Development)"
              value={form.category}
              onChange={handle}
            />

            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handle}
            />

            <input
              type="number"
              name="progress"
              placeholder="Progress (%)"
              value={form.progress}
              onChange={handle}
            />

            <select
              name="status"
              value={form.status}
              onChange={handle}
            >
              <option>In Progress</option>
              <option>Completed</option>
              <option>Not Started</option>
            </select>

            <input
              name="members"
              placeholder="Team members (comma-separated)"
              value={form.members}
              onChange={handle}
            />

            <div className="modal-actions">
              <button className="save-btn" onClick={saveProject}>
                Save
              </button>

              <button
                className="cancel-btn"
                onClick={() => {
                  setModal(false);
                  setEdit(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageProjects;
