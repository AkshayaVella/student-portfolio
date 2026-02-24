import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // same styling

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "student"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted:", formData);

    // ✅ Navigate based on role
    if (formData.role === "student") {
      navigate("/student-dashboard");
    } else {
      navigate("/admin-dashboard");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Login</h2>
        <p className="subtitle">Access your Student Portfolio 📂</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="admin">Admin (Teacher/Institution)</option>
          </select>

          <button type="submit">Login</button>
        </form>

        <p className="switch-text">
          <a href="/forgot-password">Forgot Password?</a>
        </p>
        <p className="switch-text">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
