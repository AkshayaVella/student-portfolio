import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useNavigate } from "react-router-dom";
import "./Progress.css";

// ✅ Weekly Progress Data
const progressData = [
  { week: "Week 1", progress: 20 },
  { week: "Week 2", progress: 40 },
  { week: "Week 3", progress: 55 },
  { week: "Week 4", progress: 70 },
  { week: "Week 5", progress: 85 },
  { week: "Week 6", progress: 95 },
];

// ✅ Assignment Courses Progress
const courseData = [
  { name: "⚛️ React for Beginners", value: 75 },
  { name: "🟢 Node.js Essentials", value: 60 },
  { name: "☕ Java Programming", value: 50 },
  { name: "🗄️ Database Management", value: 40 },
];

const COLORS = ["#61DBFB", "#3C873A", "#F89820", "#FF6F61"];

function Progress() {
  const navigate = useNavigate();

  return (
    <div className="progress-container">
      {/* Header */}
      <header className="progress-header">
        <button className="back-btn" onClick={() => navigate("/student-dashboard")}>
          ⬅ Back
        </button>
        <h1>📊 Learning Progress</h1>
        <p className="subtitle">
          Visualize your weekly improvements and track course completion 🚀
        </p>
      </header>

      {/* Summary */}
      <div className="progress-summary">
        <h2>
          ✅ You’ve completed <span className="highlight">60%</span> of your assignments
        </h2>
        <p>Keep going! Consistency builds mastery. 🌟</p>
      </div>

      {/* Charts Section */}
      <div className="charts-container">
        {/* Weekly Progress (Line Chart) */}
        <div className="chart-card">
          <h2>📈 Weekly Learning Progress</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressData}>
              <defs>
                <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="progress"
                stroke="#4CAF50"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorProgress)"
                dot={{ r: 6, stroke: "#2e7d32", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Course Progress (Pie Chart) */}
        <div className="chart-card">
          <h2>🥧 Course-wise Assignment Progress</h2>
          <ResponsiveContainer width="100%" height={320}>
            <PieChart>
              <Pie
                data={courseData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={100}
                paddingAngle={4}
                label={({ value }) => `${value}%`} // ✅ show only % inside slices
              >
                {courseData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{ fontSize: "14px", marginTop: "10px" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Motivation Box */}
      <div className="motivation-box">
        <h3>💡 Tip of the Day</h3>
        <p>
          “Small progress each day adds up to big results. Stay consistent, stay focused, and success will follow.”
        </p>
      </div>
    </div>
  );
}

export default Progress;
