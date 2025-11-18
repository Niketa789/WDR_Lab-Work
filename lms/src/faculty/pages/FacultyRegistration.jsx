import React from "react";
import { useForm } from "react-hook-form";
import "../styles/FacultyRegistration.css";

export default function FacultyRegistration({ onRegister }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (onRegister) {
      onRegister(data);
    }
    reset();
  };

  return (
    <div className="faculty-registration-container">
      <h2 className="title">Faculty Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
        <div className="form-group">
          <label>Faculty ID:</label>
          <input
            type="text"
            {...register("facultyId", { required: "Faculty ID is required" })}
          />
          {errors.facultyId && <p className="error">{errors.facultyId.message}</p>}
        </div>

        <div className="form-group">
          <label>Faculty Name:</label>
          <input
            type="text"
            {...register("facultyName", { required: "Faculty Name is required" })}
          />
          {errors.facultyName && <p className="error">{errors.facultyName.message}</p>}
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            {...register("age", { required: "Age is required", valueAsNumber: true })}
          />
          {errors.age && <p className="error">{errors.age.message}</p>}
        </div>

        <div className="form-group">
          <label>Qualification:</label>
          <input
            type="text"
            {...register("qualification", { required: "Qualification is required" })}
          />
          {errors.qualification && (
            <p className="error">{errors.qualification.message}</p>
          )}
        </div>

        <div className="form-group">
          <label>Joined At:</label>
          <input type="date" {...register("joinedAt", { required: true })} />
          {errors.joinedAt && <p className="error">Joined date is required</p>}
        </div>

        <div className="form-group">
          <label>Status:</label>
          <select {...register("status", { required: true })}>
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="left">Left</option>
          </select>
          {errors.status && <p className="error">Status is required</p>}
        </div>

        <button type="submit" className="submit-button">
          Register Faculty
        </button>
      </form>
    </div>
  );
}