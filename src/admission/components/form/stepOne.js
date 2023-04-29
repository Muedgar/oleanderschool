import React from "react";
import InputField from "./components/InputField";

function StepOne() {
    return(
        <>
   <div class="stepTitle">
     <h1>Student Information</h1>
     {/* <p>Please provide your name, email address, and phone number.</p> */}
   </div>
   <InputField
      id="info_student_names_stepOne"
      label="Student Names"
      type="text"
      placeholder="e.g. Mugabo Greg"
     />
     <InputField
      id="info_student_previous_year_of_study_stepOne"
      label="Student Previous Year of Study"
      type="text"
      placeholder="e.g. P3 or Primary 3 or Primary Three"
     />
     <InputField
     id="info_student_current_year_of_study_stepOne"
      label="Student Current or Next Year of Study"
      type="text"
      placeholder="e.g. P4 or Primary 4 or Primary Four"
     />
     <InputField
     id="info_previous_school_stepOne"
      label="Which School Did The Student Go To?"
      type="text"
      placeholder="e.g. X - Primary School or X - Nursery School"
     />

<InputField
  id="info_dob_stepOne"
      label="Student Date of Birth"
      type="date"
      placeholder=""
     />
     <InputField
     id="info_pob_stepOne"
      label="Student Place of Birth"
      type="text"
      placeholder="e.g. Kacyiru, Kigali - Rwanda"
     />
     <InputField
     id="info_sa_stepOne"
      label="Student Address"
      type="text"
      placeholder="e.g. Kimironko, Gasabo"
     />
   {/* <div class="inputControl">
     <label><span>Phone Number</span> <span>This field is required</span></label>
     <input class="inputStyles" type="text" placeholder="example@email.com" />
   </div> */}
  </>
    )
}

export default StepOne;