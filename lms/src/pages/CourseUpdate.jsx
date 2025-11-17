import { useForm } from "react-hook-form";

const  CourseUpdate = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Updated Course:", data);
    alert("Course Updated Successfully!");
  };

  return (
    <div>
      <h2>Update Course</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Course ID (to update):</label>
        <input {...register("courseId", { required: true })} />

        <br />
        <br />

        <label>New Course Name:</label>
        <input {...register("newCourseName")} />
        <br />
        <br />

        <label>New Description:</label>
        <textarea {...register("newDescription")} />

        <br />
        <br />

        <label>New Duration (hours):</label>
        <input type="number" {...register("newDuration")} />

        <br />
        <br />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
export default CourseUpdate