import { Routes, Route } from "react-router-dom";
import CourseManagement from "./components/coursemanagement";
import CourseList from "./pages/CourseList";
import CourseRegistration from "./pages/CourseRegistration";
import CourseUpdate from "./pages/CourseUpdate";
import CourseDelete from "./pages/CourseDelete";
import ModuleCreation from "./pages/ModuleCreation";
import FacultyAlignment from "./pages/FacultyAlignment";
import CourseDetail from "./pages/CourseDetail";
import FacultyManagement from "./faculty/components/FacultyManagement";
import FacultyRegistration from "./faculty/pages/FacultyRegistration";
import FacultyUpdate from "./faculty/pages/FacultyUpdate";
import FacultyProfile from "./faculty/pages/FacultyProfile";
import FacultyList from "./faculty/pages/FacultyList";

function App() {
  return (
    <>
    

      <div style={{ padding: "20px" }}>
       <Routes>

          {/* Course Routes */}
          
         <Route path="/" element= {<div>
          <CourseManagement />
          <CourseList />
         </div>} />
          <Route path="/create-course" element={<div>
            <CourseManagement />
            <CourseRegistration />
            </div>} />
          <Route path="/course-details" element={<div>
            <CourseManagement />
            <CourseDetail />
            </div>} />
          <Route path="/update-course" element={
            <div>
              <CourseManagement />
              <CourseUpdate />
            </div>
              }
               />
          <Route path="/delete-course" element={<div>
            <CourseManagement />
            <CourseDelete />
          </div>} />
          <Route path="/create-modules" element={<div>
            <CourseManagement />
            <ModuleCreation />
          </div>} />
          <Route path="/faculty-align" element={<div>
            <CourseManagement />
            <FacultyAlignment />
          </div>} />

          {/* Faculty Routes */}

          
          <Route path="/faculty-registration" element={<div>
            <FacultyManagement />
            <FacultyRegistration />
          </div>} />
          <Route path="/faculty-list" element={<div>
            <FacultyManagement />
            <FacultyList />
          </div>} />
          <Route path="/faculty-profile" element={<div>
            <FacultyManagement />
            <FacultyProfile />
          </div>} />
          <Route path="/faculty-update" element={<div>
            <FacultyManagement />
            <FacultyUpdate />
          </div>} />
        </Routes>
      </div>
    </>
  );
}

export default App