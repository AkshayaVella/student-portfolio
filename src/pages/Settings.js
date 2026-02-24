// src/pages/Settings.js
import React, { useState } from "react";
import "./Settings.css";

function Settings() {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);

  return (
    <div className={`settings-container ${theme}-theme`}>
      <h1 className="settings-title">⚙ Settings</h1>
      <p className="settings-subtitle">Customize your experience ✨</p>

      <div className="settings-grid">
        {/* Theme Settings */}
        <div className="settings-card">
          <h2>🎨 Theme</h2>
          <p>Select your preferred theme</p>
          <div className="theme-options">
            <button
              className={theme === "light" ? "active" : ""}
              onClick={() => setTheme("light")}
            >
              🌞 Light
            </button>
            <button
              className={theme === "dark" ? "active" : ""}
              onClick={() => setTheme("dark")}
            >
              🌙 Dark
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="settings-card">
          <h2>🔔 Notifications</h2>
          <p>Enable or disable app notifications</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <span className="slider"></span>
          </label>
        </div>

        {/* Account Settings */}
        <div className="settings-card">
          <h2>👤 Account</h2>
          <p>Manage your profile and security</p>
          <button className="btn">Edit Profile</button>
          <button className="btn danger">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
