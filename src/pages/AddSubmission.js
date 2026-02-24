// src/pages/AddSubmission.js
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddSubmission.css";

function AddSubmission() {
  const navigate = useNavigate();
  const { code } = useParams(); // Capture assignment code from URL
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  // ✅ Updated handleSave function
  const handleSave = () => {
    alert(`✅ Submission saved for ${code}`);
    navigate(`/submission-details/${code}`); // Redirect to submission details page
  };

  return (
    <div className="add-submission-container">
      <header className="submission-header">
        <button className="back-btn" onClick={() => navigate("/assignments")}>
          ⬅ Back
        </button>
        <h1>📤 Add Submission</h1>
        <p>
          Upload your files for <strong>{code}-Assignment</strong>
        </p>
      </header>

      <div className="submission-box">
        <label className="file-label">File submissions</label>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="file-input"
        />

        {files.length > 0 && (
          <ul className="file-list">
            {files.map((file, idx) => (
              <li key={idx}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="submission-actions">
        <button className="save-btn" onClick={handleSave}>
          Save changes
        </button>
        <button className="cancel-btn" onClick={() => navigate("/assignments")}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AddSubmission;
