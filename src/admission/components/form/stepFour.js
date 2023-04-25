import React from "react";

function StepFour() {
    return(
        <>
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
   
  </>
    )
}

export default StepFour;