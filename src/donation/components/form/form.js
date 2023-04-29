import React, { useState } from "react";

import "./form.css";
import StepOne from "./stepOne";
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
       <p>Sponsor Information</p>
     </div>
    </div>
    <div class="nav-item-forms">
     <div class={currentStep===2?"nav-item-count active":"nav-item-count"}>
       <p>2</p>
     </div>
     <div class="nav-item-name">
       <p>Step 2</p>
       <p>Submit Information</p>
     </div>
    </div>
    
    
  </div>
  {currentStep===1?
    <div class="step-1">
  <StepOne />

  <div class="buttonContainer">
     <button class="form-button" onClick={async e => {
      let data = []
      let localKeys = Object.keys(localStorage)
      
      for(let i=0;i<localKeys.length;i++) {
        let item = localStorage.getItem(localKeys[i])
      //  console.log(item)
        let itemArray = localKeys[i].split('_')
        if(itemArray[0]==='sponsor') {
          data.push(item);
        }
      }

      
      
      let bdy = {data}

      await fetch("https://www.backend.oleanderschool.com/backend/api/sponsors/add", {
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
{currentStep===2?
    <div class="step-1">
  <StepFive />
  </div>:''  
}

 </div>
    )
}

export default FormAdmissions;