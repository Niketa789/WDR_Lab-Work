import { Link } from "react-router-dom";

const CourseManagement = ()=> {
  return (
    <nav style={{ padding: "15px", background: "#444", color: "#fff" }}>
      <Link style={linkStyle} to="/">Course List</Link>
      <Link style={linkStyle} to="/create-course">Course Registration</Link>
        <Link style={linkStyle} to="/course-detail">Course Detail</Link>
      <Link style={linkStyle} to="/update-course">Update Course</Link>
      <Link style={linkStyle} to="/delete-course">Delete Course</Link>
      <Link style={linkStyle} to="/create-modules">Modules Creation</Link>
      <Link style={linkStyle} to="/faculty-align">Faculty Alignment</Link>

    </nav>
  );
}

const linkStyle = {
  marginRight: "20px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold"
};

export default CourseManagement