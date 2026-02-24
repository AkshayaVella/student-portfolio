import React, { useState } from "react";
import "./AdminSettings.css";

function AdminSettings() {
  const [theme, setTheme] = useState("gradient");
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="settings-wrapper">

      <h1 className="title">⚙ Admin Settings</h1>

      {/* PROFILE SETTINGS */}
      <div className="settings-card">
        <h2>👤 Profile Information</h2>

        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="Admin Name" />
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="admin@gmail.com" />
        </div>

        <button className="save-btn">Save Profile</button>
      </div>

      {/* PASSWORD */}
      <div className="settings-card">
        <h2>🔐 Change Password</h2>

        <div className="input-group">
          <label>Current Password</label>
          <input type="password" />
        </div>

        <div className="input-group">
          <label>New Password</label>
          <input type="password" />
        </div>

        <button className="save-btn">Update Password</button>
      </div>

      {/* THEME SETTINGS */}
      <div className="settings-card">
        <h2>🎨 Theme Settings</h2>

        <div className="theme-options">
          <label>
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === "light"}
              onChange={() => setTheme("light")}
            />
            Light Mode
          </label>

          <label>
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === "dark"}
              onChange={() => setTheme("dark")}
            />
            Dark Mode
          </label>

          <label>
            <input
              type="radio"
              name="theme"
              value="gradient"
              checked={theme === "gradient"}
              onChange={() => setTheme("gradient")}
            />
            Gradient Mode
          </label>
        </div>

        <button className="save-btn">Apply Theme</button>
      </div>

      {/* NOTIFICATION SETTINGS */}
      <div className="settings-card">
        <h2>🔔 Notifications</h2>

        <label className="toggle">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
          <span className="slider"></span>
        </label>

        <p>{notifications ? "Notifications enabled" : "Notifications disabled"}</p>

        <button className="save-btn">Save Changes</button>
      </div>

    </div>
  );
}

export default AdminSettings;
