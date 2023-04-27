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
      label="Student Names"
      type="text"
      placeholder="e.g. Mugabo Greg"
     />
     <InputField
      label="Student Previous Year of Study"
      type="text"
      placeholder="e.g. P3 or Primary 3 or Primary Three"
     />
     <InputField
      label="Student Current Year of Study"
      type="text"
      placeholder="e.g. P4 or Primary 4 or Primary Four"
     />
     <InputField
      label="Which School Did The Student Go To?"
      type="text"
      placeholder="e.g. X - Primary School or X - Nursery School"
     />

<InputField
      label="Student Date of Birth"
      type="date"
      placeholder=""
     />
     <InputField
      label="Student Place of Birth"
      type="text"
      placeholder="e.g. Kacyiru, Kigali - Rwanda"
     />
     <InputField
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