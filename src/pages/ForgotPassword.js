import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to: ${email}`);
    navigate("/login");
  };

  return (
    <div className="fp-container">
      <div className="fp-box">
        <h2>🔐 Forgot Password</h2>
        <p className="fp-subtitle">
          Enter your email address and we will send you a reset link.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">Send Reset Link</button>
        </form>

        <p className="fp-back" onClick={() => navigate("/login")}>
          ← Back to Login
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
