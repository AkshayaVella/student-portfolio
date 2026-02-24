// src/pages/SubmissionDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import "./SubmissionDetails.css";

function SubmissionDetails() {
  const { code } = useParams();

  // Example file list (could be passed via state or API later)
  const files = ["Advanced android developeme....pdf"];

  return (
    <div className="submission-page">
      <header className="submission-header">
        <h1>📑 Submission Details</h1>
        <p>
          Assignment: <strong>{code}-Assignment</strong>
        </p>
      </header>

      {/* Top action buttons */}
      <div className="submission-actions-top">
        <button className="edit-btn">✏️ Edit submission</button>
        <button className="remove-btn">🗑 Remove submission</button>
      </div>

      {/* Status section */}
      <div className="status-card">
        <h2>Submission status</h2>
        <div className="status-grid">
          <p>
            <strong>Submission status:</strong> Submitted for grading
          </p>
          <p>
            <strong>Grading status:</strong> Not graded
          </p>
          <p>
            <strong>Time remaining:</strong> Assignment was submitted 6 days 8
            hours early
          </p>
          <p>
            <strong>Last modified:</strong> Monday, 18 August 2025, 3:47 PM
          </p>
        </div>
      </div>

      {/* File submissions */}
      <div className="status-card">
        <h2>📂 File submissions</h2>
        {files.length > 0 ? (
          <ul className="file-list">
            {files.map((file, idx) => (
              <li key={idx} className="file-item">
                {file}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-file">❌ No files submitted</p>
        )}
      </div>

      {/* Submission comments */}
      <div className="status-card">
        <h2>💬 Submission comments</h2>
        <p>Comments (0)</p>
      </div>
    </div>
  );
}

export default SubmissionDetails;
