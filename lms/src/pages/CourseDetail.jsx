import { useForm } from "react-hook-form";

const CourseDetail = ()=> {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log("Fetching details for:", data.courseId);
    alert("Showing details in console (dummy)");
  };

  return (
    <div>
      <h2>Course Detail</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Enter Course ID:</label>
        <input {...register("courseId", { required: true })}/>
        <button type="submit">Get Details</button>
      </form>
    </div>
  );
}

export default CourseDetail