import React from "react";
import InputField from "./components/InputField";

function StepThree() {
    return(
        <>
   <div class="stepTitle">
     <h1>Student Health</h1>
     {/* <p>Please provide your name, email address, and phone number.</p> */}
   </div>
   <InputField
   id="info_student_health_stepThree"
      label="Does a student have a health related situation that needs extra care?"
      type="text"
      placeholder="e.g. yes"
     />
   
  </>
    )
}

export default StepThree;