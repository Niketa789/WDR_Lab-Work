import {useForm} from "react-hook-form"
const FacultyAlignment = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Faculty Assigned:", data);
    alert("Faculty aligned to course!");
  };

  return (
    <div>
      <h2>Faculty Alignment</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Course ID:</label>
        <input {...register("courseId", { required: true })} />

        <br />
        <br />

        <label>Faculty Name:</label>
        <input {...register("facultyName", { required: true })} />

        <br />
        <br />

        <label>Experience (years):</label>
        <input type="number" {...register("experience")} />

        <br />
        <br />

        <button type="submit">Align Faculty</button>
      </form>
    </div>
  );
}

export default FacultyAlignment