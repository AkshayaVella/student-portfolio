import React, { useState } from "react";
import "./AdminFeedback.css";

import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

function AdminFeedback() {
  const [feedbackList, setFeedbackList] = useState([
    {
      id: 1,
      student: "John Doe",
      regNo: "20CS001",
      message: "I need clarification on project guidelines.",
      date: "2025-11-20",
      status: "Pending",
      reply: "",
      email: "john.doe@gmail.com",
    },
    {
      id: 2,
      student: "Priya Sharma",
      regNo: "20CS017",
      message: "Course material is not loading properly.",
      date: "2025-11-19",
      status: "Pending",
      reply: "",
      email: "priya17@gmail.com",
    },
    {
      id: 3,
      student: "Rahul Kumar",
      regNo: "20CS025",
      message: "Please check my assignment submission.",
      date: "2025-11-18",
      status: "Resolved",
      reply: "Reviewed and updated.",
      email: "rahul25@gmail.com",
    },
  ]);

  const [currentReply, setCurrentReply] = useState("");

  // SEND EMAIL SIMULATION
  const sendEmail = (email, replyText) => {
    alert(`📩 Email sent to: ${email}\n\nMessage:\n${replyText}`);
  };

  // HANDLE REPLY
  const handleReply = (id) => {
    setFeedbackList((prev) =>
      prev.map((fb) =>
        fb.id === id
          ? { ...fb, reply: currentReply, status: "Resolved" }
          : fb
      )
    );

    const student = feedbackList.find((fb) => fb.id === id);
    sendEmail(student.email, currentReply);
    setCurrentReply("");
  };

  // ANALYTICS DATA
  const pendingCount = feedbackList.filter((f) => f.status === "Pending").length;
  const resolvedCount = feedbackList.filter((f) => f.status === "Resolved").length;

  const pieData = {
    labels: ["Resolved", "Pending"],
    datasets: [
      {
        data: [resolvedCount, pendingCount],
        backgroundColor: ["#00e676", "#ff1744"],
      },
    ],
  };

  const barData = {
    labels: feedbackList.map((fb) => fb.student),
    datasets: [
      {
        label: "Feedback Status (1=Resolved, 0=Pending)",
        data: feedbackList.map((fb) => (fb.status === "Resolved" ? 1 : 0)),
        backgroundColor: "#42a5f5",
      },
    ],
  };

  return (
    <div className="feedback-wrapper">

      {/* ANALYTICS SECTION */}
      <h1 className="title">📊 Feedback Analytics & Dashboard</h1>

      <div className="charts-grid">
        <div className="chart-box">
          <h2>📌 Feedback Status Breakdown</h2>
          <Pie data={pieData} />
        </div>

        <div className="chart-box">
          <h2>📘 Student Feedback Overview</h2>
          <Bar data={barData} />
        </div>
      </div>

      {/* FEEDBACK LIST SECTION */}
      <h1 className="title" style={{ marginTop: "40px" }}>
        💬 Student Feedback Messages
      </h1>

      <div className="feedback-grid">
        {feedbackList.map((fb) => (
          <div className="feedback-card" key={fb.id}>
            <h2>📌 {fb.student}</h2>
            <p className="reg">Reg No: {fb.regNo}</p>
            <p className="msg">🗨️ {fb.message}</p>
            <p className="date">📅 {fb.date}</p>

            <p className={`status ${fb.status === "Resolved" ? "resolved" : "pending"}`}>
              {fb.status}
            </p>

            {fb.reply && (
              <p className="reply-box">
                <b>Admin Reply:</b> {fb.reply}
              </p>
            )}

            {!fb.reply && (
              <div className="reply-container">
                <textarea
                  placeholder="Type your reply..."
                  value={currentReply}
                  onChange={(e) => setCurrentReply(e.target.value)}
                />
                <button onClick={() => handleReply(fb.id)}>Send Reply</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminFeedback;
