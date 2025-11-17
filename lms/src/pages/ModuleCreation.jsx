import { useForm } from "react-hook-form";

const ModulesCreation = ()=> {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Module Created:", data);
    alert("Module Created Successfully!");
  };

  return (
    <div>
      <h2>Create Module</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Course ID:</label>
        <input {...register("courseId", { required: true })}/>

        <br />
        <br />

        <label>Module Title:</label>
        <input {...register("moduleTitle", { required: true })}/>

        <br />
        <br />

        <label>Module Description:</label>
        <textarea {...register("moduleDescription")} />

        <br /><br />

        <button type="submit">Create Module</button>
      </form>
    </div>
  );
}
export default ModulesCreation