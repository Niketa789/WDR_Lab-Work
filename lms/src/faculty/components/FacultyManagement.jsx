import { Link } from "react-router-dom";

const linkStyle = {
  marginRight: "20px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold"
};

export default function FacultyManagement() {
  return (
    <nav style={{ padding: "15px", background: "#222", color: "#fff" }}>
          <Link style={linkStyle} to="/faculty-registration">Faculty Registration</Link>
          <Link style={linkStyle} to="/faculty-list">Faculty List</Link>
          <Link style={linkStyle} to="/faculty-profile">Faculty Profile</Link>
          <Link style={linkStyle} to="/faculty-update">Faculty Update</Link>
        </nav>
  );
}