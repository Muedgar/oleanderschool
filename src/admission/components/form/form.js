import React, { useState } from "react";

import "./form.css";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";

function FormAdmissions() {
  let [currentStep, setCurrentStep] = useState(1)
    return(
        <div class="forms">
  <div class="navigation">
    <div class="nav-item-forms">
     <div class={currentStep===1?"nav-item-count active":"nav-item-count"}>
       <p>1</p>
     </div>
     <div class="nav-item-name">
       <p>Step 1</p>
       <p>Your Info</p>
     </div>
    </div>
    <div class="nav-item-forms">
     <div class={currentStep===2?"nav-item-count active":"nav-item-count"}>
       <p>2</p>
     </div>
     <div class="nav-item-name">
       <p>Step 2</p>
       <p>Select plan</p>
     </div>
    </div>
    <div class="nav-item-forms">
     <div class={currentStep===3?"nav-item-count active":"nav-item-count"}>
       <p>3</p>
     </div>
     <div class="nav-item-name">
       <p>Step 3</p>
       <p>Add-ons</p>
     </div>
    </div>
    <div class="nav-item-forms">
     <div class={currentStep===4?"nav-item-count active":"nav-item-count"}>
       <p>4</p>
     </div>
     <div class="nav-item-name">
       <p>Step 4</p>
       <p>Summary</p>
     </div>
    </div>
  </div>
  {currentStep===1?
    <div class="step-1">
  <StepOne />

  <div class="buttonContainer">
     <button class="form-button" onClick={e => {
      let count = currentStep + 1;
      setCurrentStep(count)
     }}>Next Step</button>
   </div>
  </div>:''  
}
{currentStep===2?
    <div class="step-1">
  <StepTwo />

  <div class="buttonContainer">
     <button class="form-button" onClick={e => {
      let count = currentStep - 1;
      setCurrentStep(count)
     }}>Previous</button>
     <button class="form-button" onClick={e => {
      let count = currentStep + 1;
      setCurrentStep(count)
     }}>Next Step</button>
   </div>
  </div>:''  
}

{currentStep===3?
    <div class="step-1">
  <StepThree />

  <div class="buttonContainer">
     <button class="form-button" onClick={e => {
      let count = currentStep - 1;
      setCurrentStep(count)
     }}>Previous</button>
     <button class="form-button" onClick={e => {
      let count = currentStep + 1;
      setCurrentStep(count)
     }}>Next Step</button>
   </div>
  </div>:''  
}
{currentStep===4?
    <div class="step-1">
  <StepFour />

  <div class="buttonContainer">
  <button class="form-button" onClick={e => {
      let count = currentStep - 1;
      setCurrentStep(count)
     }}>Previous</button>
     <button class="form-button" onClick={e => {
      console.log("submiting")
     }}>Submit</button>
   </div>
  </div>:''  
}
 </div>
    )
}

export default FormAdmissions;