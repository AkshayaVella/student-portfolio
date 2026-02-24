import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./Achievements.css";



function Achievements() {
  const [view, setView] = useState("grid"); // grid/timeline
  const [year, setYear] = useState("All"); // filter by year
  const [search, setSearch] = useState(""); // search filter
  const [showConfetti, setShowConfetti] = useState(true); // confetti control
  const [achievements, setAchievements] = useState([
    {
      title: "🏆 Hackathon Winner",
      description: "Secured 1st place in KL University Hackathon 2024.",
      date: "March 2024",
      year: "2024",
      medal: "🥇",
    },
    {
      title: "🎓 Dean’s List",
      description: "Recognized for academic excellence with a 9.2 GPA.",
      date: "June 2024",
      year: "2024",
      medal: "🥈",
    },
    {
      title: "💡 Research Paper",
      description: "Published a paper on AI-powered chatbots in IEEE Xplore.",
      date: "August 2023",
      year: "2023",
      medal: "🥉",
    },
    {
      title: "🌐 Open Source Contributor",
      description: "Contributed to React and Node.js open source projects.",
      date: "October 2023",
      year: "2023",
      medal: "⭐",
    },
  ]);

  // 🎉 Trigger confetti on page load (once)
  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Unique years for dropdown
  const years = ["All", ...new Set(achievements.map((a) => a.year))];

  // Filter achievements by year + search text
  const filteredAchievements = achievements.filter((a) => {
    const matchesYear = year === "All" || a.year === year;
    const matchesSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.description.toLowerCase().includes(search.toLowerCase());
    return matchesYear && matchesSearch;
  });

  // 🎉 Add new achievement (example button)
  const addAchievement = () => {
    const newAch = {
      title: "🚀 New Milestone",
      description: "Achieved something amazing just now!",
      date: new Date().toLocaleDateString(),
      year: new Date().getFullYear().toString(),
      medal: "🏅",
    };
    setAchievements((prev) => [...prev, newAch]);

    // Show confetti again for new achievement
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  return (
    <div className="achievements-container">
      {/* 🎉 Confetti */}
      {showConfetti && <Confetti recycle={false} numberOfPieces={300} />}

      <h1 className="achievements-title">🌟 My Achievements 🌟</h1>
      <p className="achievements-subtitle">
        A showcase of my milestones, awards & contributions 🚀
      </p>

      {/* Controls */}
      <div className="controls">
        {/* Search Bar */}
        <input
          type="text"
          className="search-bar"
          placeholder="🔍 Search achievements..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Year Filter */}
        <select
          className="year-filter"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          {years.map((yr, i) => (
            <option key={i} value={yr}>
              {yr}
            </option>
          ))}
        </select>

        {/* Toggle View */}
        <div className="toggle-buttons">
          <button
            className={view === "grid" ? "active" : ""}
            onClick={() => setView("grid")}
          >
            🔲 Grid
          </button>
          <button
            className={view === "timeline" ? "active" : ""}
            onClick={() => setView("timeline")}
          >
            📅 Timeline
          </button>
        </div>

        {/* Add Achievement Button */}
        <button className="add-btn" onClick={addAchievement}>
          ➕ Add Achievement
        </button>
      </div>

      {/* Grid View */}
      {view === "grid" && (
        <div className="achievements-grid">
          {filteredAchievements.length > 0 ? (
            filteredAchievements.map((ach, index) => (
              <div key={index} className="achievement-card">
                <div className="medal">{ach.medal}</div>
                <h2 className="card-header">{ach.title}</h2>
                <p className="card-desc">{ach.description}</p>
                <span className="achievement-date">{ach.date}</span>
              </div>
            ))
          ) : (
            <p className="no-results">❌ No achievements found.</p>
          )}
        </div>
      )}

      {/* Timeline View */}
      {view === "timeline" && (
        <div className="timeline">
          {filteredAchievements.length > 0 ? (
            filteredAchievements.map((ach, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot">{ach.medal}</div>
                <div className="timeline-content">
                  <h2>{ach.title}</h2>
                  <p>{ach.description}</p>
                  <span className="timeline-date">{ach.date}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">❌ No achievements found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Achievements;
