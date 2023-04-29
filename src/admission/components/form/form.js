import React, { useState } from "react";

import "./form.css";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";
import StepFive from "./stepFive"

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
       <p>Student Information</p>
     </div>
    </div>
    <div class="nav-item-forms">
     <div class={currentStep===2?"nav-item-count active":"nav-item-count"}>
       <p>2</p>
     </div>
     <div class="nav-item-name">
       <p>Step 2</p>
       <p>Parents Information</p>
     </div>
    </div>
    <div class="nav-item-forms">
     <div class={currentStep===3?"nav-item-count active":"nav-item-count"}>
       <p>3</p>
     </div>
     <div class="nav-item-name">
       <p>Step 3</p>
       <p>Student Health</p>
     </div>
    </div>
    <div class="nav-item-forms">
     <div class={currentStep===4?"nav-item-count active":"nav-item-count"}>
       <p>4</p>
     </div>
     <div class="nav-item-name">
       <p>Step 4</p>
       <p>Supporting Documents</p>
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
     <button class="form-button" onClick={async e => {
      let data = []
      let studentinfo = []
      let stepOne = []
      let stepTwo = []
      let stepThree = []
      let localKeys = Object.keys(localStorage)
      
      for(let i=0;i<localKeys.length;i++) {
        let item = localStorage.getItem(localKeys[i])
      //  console.log(item)
        let itemArray = localKeys[i].split('_')
        if(itemArray[0]==='fileupload') {
          if(data.length<5) {
            data.push(JSON.parse(item));
          }
        }
        if(itemArray[0]==='info') {
          if(itemArray[itemArray.length-1]==='stepOne') {
            stepOne.push([localKeys[i],localStorage.getItem(localKeys[i])])
          }
          if(itemArray[itemArray.length-1]==='stepTwo') {
            stepTwo.push([localKeys[i],localStorage.getItem(localKeys[i])])
          }
          if(itemArray[itemArray.length-1]==='stepThree') {
            stepThree.push([localKeys[i],localStorage.getItem(localKeys[i])])
          }
          
        }
      }

      studentinfo = {stepOne, stepTwo, stepThree}
      
      let bdy = {supportDoc: data, studentData: studentinfo}

      await fetch("https://www.backend.oleanderschool.com/backend/api/admissions/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bdy),
      })
        .then((response) => response.json())
        .then((result) => {
          let count = currentStep + 1;
      setCurrentStep(count)
        })
        .catch((error) => {
          alert("Something went wrong. Reload and try again.")
        });
        
     }}>Submit</button>
   </div>
  </div>:''  
}
{currentStep===5?
    <div class="step-1">
  <StepFive />

  </div>:''  
}
 </div>
    )
}

export default FormAdmissions;