import React from "react";
import "../styles/FacultyProfile.css";

export default function FacultyProfile({ faculty, onBack }) {
  if (!faculty) {
    return <p>No faculty selected</p>;
  }

  return (
    <div className="faculty-profile-container">
      <h2 className="title">Faculty Profile</h2>
      <div className="profile-details">
        <p><strong>Faculty ID:</strong> {faculty.facultyId}</p>
        <p><strong>Name:</strong> {faculty.facultyName}</p>
        <p><strong>Age:</strong> {faculty.age}</p>
        <p><strong>Qualification:</strong> {faculty.qualification}</p>
        <p><strong>Joined At:</strong> {faculty.joinedAt}</p>
        <p><strong>Status:</strong> {faculty.status}</p>
      </div>
      <button className="back-button" onClick={onBack}>
        Back to List
      </button>
    </div>
  );
}