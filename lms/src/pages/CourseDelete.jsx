import { useForm } from "react-hook-form";

const CourseDelete = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Course Deleted:", data.courseId);
    alert(`Course ${data.courseId} deleted!`);
  };

  return (
    <div>
      <h2>Delete Course</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Course ID:</label>
        <input {...register("courseId", { required: true })} />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default CourseDelete