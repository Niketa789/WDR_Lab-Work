import React from "react";
import "../styles/FacultyList.css";

export default function FacultyList({ facultyData, onViewProfile, onEdit }) {
  return (
    <div className="faculty-list-container">
      <h2 className="title">Faculty List</h2>
      <table className="faculty-table">
        <thead>
          <tr>
            <th>Faculty ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Qualification</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {facultyData && facultyData.length > 0 ? (
            facultyData.map((faculty, index) => (
              <tr key={index}>
                <td>{faculty.facultyId}</td>
                <td>{faculty.facultyName}</td>
                <td>{faculty.age}</td>
                <td>{faculty.qualification}</td>
                <td>{faculty.status}</td>
                <td>
                  <button
                    className="action-button"
                    onClick={() => onViewProfile(faculty)}
                  >
                    View
                  </button>
                  <button
                    className="action-button"
                    onClick={() => onEdit(faculty)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No faculty data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}