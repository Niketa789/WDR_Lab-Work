import React from 'react'
import { useForm } from 'react-hook-form'

const CourseRegistration = () => {
  const {register, handleSubmit , formState:{errors},reset} = useForm();

  const onSubmit = (data)=>{
    console.log("Form Data: ",data);
    alert("Course Registered Successfully!");
    reset();
  };
  return (
    <div>
      <h2>Course Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        
        {/* course id  */}

        <label>Course ID: </label>
        <input type='text' {...register("courseId", {required: 'Course id must be filled.', minLength:{value:3, message: "Course ID must be at least 3 characters"},
       })} />
      
      <p style={{color: "red"}}> {errors.courseId?.message}</p>

        {/* course name  */}
        
        <label>Course Name : </label>
        <input type='text' {...register("courseName",{required:'course name is required.', minLength:{value:3, message: "Course name must contains atleast 3 character"},
        })} />

        <p style={{color: "red"}}>{errors.courseName?.message}</p>
        
        {/* Description */}

        <label>Description : </label>
        <input type='text' {...register("description",{required:'Description must be filled.', minLength:{value:10, message: "Description atleast contains 10 words"},
        })} />
        <p style={{color: "red"}}>{errors.description?.message}</p>
        

        <label>Duration  (in hours ): </label>
        <input type="number" {...register("duration", { required: "true",
            min: { value: 1, message: "Minimum duration 1 hour" },
          })} />
        <p style={{ color: "red" }}>{errors.duration?.message}</p>
        
        <label>Minimum Enrollment : </label>
        <input type='number' {...register("minEnrollment", {required: "true",      
        })} />
        <p style={{ color: "red" }}>{errors.minEnrollment?.message}</p>


        <label>Maximum Enrollment : </label>
        <input type='number' {...register("maxEnrollment", {required: "true",
        })} />
        <p style={{color:"red"}}>{errors.maxEnrollment?.message}</p>

        <label>Created at : </label>
        <input type='date'{...register("createdAt", {required: "true",
        })} />
        <p style={{color:"red"}}>{errors.createdAt?.message}</p>


        <button onClick={handleSubmit}>submit</button>
      </form>

    </div>
  )
}

export default CourseRegistration