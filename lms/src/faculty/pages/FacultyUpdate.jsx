import React from "react";
import { useForm } from "react-hook-form";
import "../styles/FacultyUpdate.css";

export default function FacultyUpdate({ faculty, onUpdate, onCancel }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: faculty });

  const onSubmit = (data) => {
    if (onUpdate) {
      onUpdate(data);
    }
  };

  return (
    <div className="faculty-update-container">
      <h2 className="title">Update Faculty Details</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="update-form">
        <div className="form-group">
          <label>Faculty Name:</label>
          <input
            type="text"
            {...register("facultyName", { required: "Name is required" })}
          />
          {errors.facultyName && <p className="error">{errors.facultyName.message}</p>}
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input type="number" {...register("age", { required: "Age is required" })} />
          {errors.age && <p className="error">{errors.age.message}</p>}
        </div>

        <div className="form-group">
          <label>Qualification:</label>
          <input
            type="text"
            {...register("qualification", { required: "Qualification is required" })}
          />
          {errors.qualification && <p className="error">{errors.qualification.message}</p>}
        </div>

        <div className="form-group">
          <label>Status:</label>
          <select {...register("status", { required: "Status is required" })}>
            <option value="active">Active</option>
            <option value="left">Left</option>
          </select>
          {errors.status && <p className="error">{errors.status.message}</p>}
        </div>

        <button type="submit" className="submit-button">Save Changes</button>
        <button type="button" className="cancel-button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}