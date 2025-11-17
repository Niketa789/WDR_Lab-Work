import { Routes, Route } from "react-router-dom";
import CourseManagement from "./components/coursemanagement";
import CourseList from "./pages/CourseList";
import CourseRegistration from "./pages/CourseRegistration";
import CourseUpdate from "./pages/CourseUpdate";
import CourseDelete from "./pages/CourseDelete";
import ModuleCreation from "./pages/ModuleCreation";
import FacultyAlignment from "./pages/FacultyAlignment";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
    <>
      <CourseManagement />

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/create-course" element={<CourseRegistration />} />
          <Route path="/update-course" element={<CourseUpdate />} />
              <Route path="/course-detail" element={<CourseDetail />} />
          <Route path="/delete-course" element={<CourseDelete />} />
          <Route path="/create-modules" element={<ModuleCreation />} />
          <Route path="/faculty-align" element={<FacultyAlignment />} />
        </Routes>
      </div>
    </>
  );
}

export default App