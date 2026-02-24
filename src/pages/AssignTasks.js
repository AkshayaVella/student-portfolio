import React, { useState } from "react";
import "./AssignTasks.css";

function AssignTasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Build Personal Portfolio",
      description: "Create a portfolio website using React.js",
      student: "John Doe",
      dueDate: "2025-01-15",
      priority: "High",
      status: "Pending",
    },
    {
      id: 2,
      title: "Data Science Mini Project",
      description: "Submit EDA + ML model notebook",
      student: "Priya Sharma",
      dueDate: "2025-01-20",
      priority: "Medium",
      status: "In Progress",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    student: "",
    dueDate: "",
    priority: "Low",
    status: "Pending",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveTask = () => {
    if (editTask) {
      setTasks((prev) =>
        prev.map((t) => (t.id === editTask.id ? { ...form, id: editTask.id } : t))
      );
    } else {
      setTasks((prev) => [...prev, { ...form, id: Date.now() }]);
    }

    setModalOpen(false);
    setEditTask(null);
    setForm({
      title: "",
      description: "",
      student: "",
      dueDate: "",
      priority: "Low",
      status: "Pending",
    });
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="tasks-wrapper">
      <h1 className="title">📝 Assign Tasks</h1>

      <button className="add-task-btn" onClick={() => setModalOpen(true)}>
        ➕ Assign New Task
      </button>

      <div className="tasks-grid">
        {tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <h2>{task.title}</h2>
            <p className="desc">{task.description}</p>

            <p className="meta">👤 {task.student}</p>
            <p className="meta">📅 Due: {task.dueDate}</p>
            <p className="meta">⭐ Priority: {task.priority}</p>
            <p className="meta status">📌 Status: {task.status}</p>

            <div className="task-footer">
              <button
                className="edit-btn"
                onClick={() => {
                  setEditTask(task);
                  setForm(task);
                  setModalOpen(true);
                }}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>{editTask ? "Edit Task" : "Assign New Task"}</h2>

            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Task Title"
            />

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Task Description"
            />

            <input
              name="student"
              value={form.student}
              onChange={handleChange}
              placeholder="Assign to (Student Name)"
            />

            <input
              type="date"
              name="dueDate"
              value={form.dueDate}
              onChange={handleChange}
            />

            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <select name="status" value={form.status} onChange={handleChange}>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>

            <div className="modal-actions">
              <button onClick={saveTask} className="save-btn">
                Save
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="cancel-btn"
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

export default AssignTasks;
