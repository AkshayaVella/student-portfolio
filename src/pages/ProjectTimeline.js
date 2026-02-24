import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

import "./ProjectTimeline.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function ProjectTimeline() {
  const data = {
    labels: ["AI Chatbot", "E-Learning", "Health Tracker", "Portfolio Site"],
    datasets: [
      {
        label: "Project Duration (Days)",
        data: [40, 55, 32, 27],
        backgroundColor: ["#ff4e50", "#42a5f5", "#66bb6a", "#ab47bc"],
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: "y",
    scales: {
      x: { beginAtZero: true },
    },
  };

  return (
    <div className="timeline-wrapper">
      <h1 className="title">📅 Project Timeline</h1>

      <div className="chart-box">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default ProjectTimeline;
