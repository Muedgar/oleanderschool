import React from "react";

import "./form.css";

function FormAdmissions() {
    return(
        <div class="forms">
  <div class="navigation">
    <div class="nav-item-forms">
     <div class="nav-item-count active">
       <p>1</p>
     </div>
     <div class="nav-item-name">
       <p>Step 1</p>
       <p>Your Info</p>
     </div>
    </div>
    <div class="nav-item-forms">
     <div class="nav-item-count">
       <p>2</p>
     </div>
     <div class="nav-item-name">
       <p>Step 2</p>
       <p>Select plan</p>
     </div>
    </div>
    <div class="nav-item-forms">
     <div class="nav-item-count">
       <p>3</p>
     </div>
     <div class="nav-item-name">
       <p>Step 3</p>
       <p>Add-ons</p>
     </div>
    </div>
    <div class="nav-item-forms">
     <div class="nav-item-count">
       <p>4</p>
     </div>
     <div class="nav-item-name">
       <p>Step 4</p>
       <p>Summary</p>
     </div>
    </div>
  </div>
  <div class="step-1">
   <div class="stepTitle">
     <h1>Personal info</h1>
     <p>Please provide your name, email address, and phone number.</p>
   </div>
   <div class="inputControl">
     <label><span>Email Address</span> <span></span></label>
     <input class="inputStyles" type="text" placeholder="example@email.com" />
   </div>
   <div class="inputControl">
     <label><span>Phone Number</span> <span>This field is required</span></label>
     <input class="inputStyles" type="text" placeholder="example@email.com" />
   </div>
   <div class="buttonContainer">
     <button class="form-button">Next Step</button>
   </div>
  </div>
 </div>
    )
}

export default FormAdmissions;