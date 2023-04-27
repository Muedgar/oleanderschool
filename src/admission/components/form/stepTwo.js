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
      label="Father's Names"
      type="text"
      placeholder="e.g. Mugabo Ntaganda"
     />
     <InputField
      label="Mother's Names"
      type="text"
      placeholder="e.g. Mushimiyimana Ange"
     />
     <InputField
      label="Guardian's Names"
      type="text"
      placeholder="e.g. Mugabo Ntaganda & Mushimiyimana Ange, you may leave this field empty if their is no guardian"
     />
     <InputField
      label="Father's Phone Number"
      type="text"
      placeholder="07xx xxx xxx"
     />
     <InputField
      label="Mother's Phone Number"
      type="text"
      placeholder="07xx xxx xxx"
     />
     <InputField
      label="Guardian's Phone Number"
      type="text"
      placeholder="07xx xxx xxx"
     />
   
  </>
    )
}

export default StepTwo;