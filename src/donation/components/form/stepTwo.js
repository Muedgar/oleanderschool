import React from "react";
import InputField from "./components/InputField";

function StepTwo() {
    return(
        <>
   <div class="stepTitle">
     <h1>Parents Information</h1>
     {/* <p>Please provide your name, email address, and phone number.</p> */}
   </div>
   <InputField
      id="info_father_names_stepTwo"
      label="Father's Names"
      type="text"
      placeholder="e.g. Mugabo Ntaganda"
     />
     <InputField
      id="info_mother_names_stepTwo"
      label="Mother's Names"
      type="text"
      placeholder="e.g. Mushimiyimana Ange"
     />
     <InputField
      id="info_guardian_names_stepTwo"
      label="Guardian's Names"
      type="text"
      placeholder="e.g. Mugabo Ntaganda & Mushimiyimana Ange, you may leave this field empty if their is no guardian"
     />
     <InputField
     id="info_father_phone_stepTwo"
      label="Father's Phone Number"
      type="text"
      placeholder="07xx xxx xxx"
     />
     <InputField
     id="info_mother_phone_stepTwo"
      label="Mother's Phone Number"
      type="text"
      placeholder="07xx xxx xxx"
     />
     <InputField
     id="info_guardian_phone_stepTwo"
      label="Guardian's Phone Number"
      type="text"
      placeholder="07xx xxx xxx"
     />
   
  </>
    )
}

export default StepTwo;