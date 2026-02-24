import React from "react";
import "./Reports.css";

function Reports() {
  const studentStats = [
    { name: "Completed", value: 68 },
    { name: "In Progress", value: 22 },
    { name: "Not Started", value: 10 },
  ];

  const courseStats = [
    { course: "CSE", pass: 82 },
    { course: "IT", pass: 76 },
    { course: "ECE", pass: 88 },
    { course: "AI&DS", pass: 91 },
  ];

  const taskStats = [
    { task: "Assignments", completion: 70 },
    { task: "Projects", completion: 54 },
    { task: "Exams", completion: 92 },
  ];

  return (
    <div className="reports-wrapper">
      <h1 className="title">📊 Performance & Analytics Dashboard</h1>

      {/* STUDENT PERFORMANCE */}
      <div className="report-section">
        <h2>👨‍🎓 Student Performance Overview</h2>

        <div className="chart-row">
          {studentStats.map((item, index) => (
            <div className="chart-card" key={index}>
              <div className="circle">
                <div
                  className="inner-circle"
                  style={{ height: `${item.value}%`, background: "#ffcc00" }}
                ></div>
              </div>
              <h3>{item.name}</h3>
              <p>{item.value}% Students</p>
            </div>
          ))}
        </div>
      </div>

      {/* COURSE PERFORMANCE */}
      <div className="report-section">
        <h2>📘 Course-wise Pass Percentage</h2>

        <div className="bar-chart">
          {courseStats.map((item, i) => (
            <div key={i} className="bar-card">
              <div
                className="bar"
                style={{ height: `${item.pass}%` }}
              ></div>
              <p>{item.course}</p>
              <span>{item.pass}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* TASK PERFORMANCE */}
      <div className="report-section">
        <h2>📝 Task Completion Summary</h2>

        <div className="task-chart">
          {taskStats.map((task, i) => (
            <div className="task-card" key={i}>
              <h3>{task.task}</h3>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${task.completion}%` }}
                ></div>
              </div>
              <p>{task.completion}% Completed</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reports;
