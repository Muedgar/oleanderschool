import React from "react";
import InputField from "./components/InputField";

function StepOne() {
    return(
        <>
   <div class="stepTitle">
     <h1>Sponsor Information</h1>
     {/* <p>Please provide your name, email address, and phone number.</p> */}
   </div>
   <InputField
      id="sponsor_name"
      label="Names"
      type="text"
      placeholder="e.g. Mugabo Greg"
     />
     <InputField
      id="sponsor_address"
      label="Address"
      type="text"
      placeholder="e.g. Kigali - Rwanda"
     />
     <InputField
     id="sponsor_email"
      label="Email"
      type="email"
      placeholder="e.g. example@email.com"
     />

<InputField
     id="sponsor_phone"
      label="Phone Number"
      type="text"
      placeholder="e.g. 250 7xx ..."
     />
   {/* <div class="inputControl">
     <label><span>Phone Number</span> <span>This field is required</span></label>
     <input class="inputStyles" type="text" placeholder="example@email.com" />
   </div> */}
  </>
    )
}

export default StepOne;