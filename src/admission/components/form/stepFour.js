import React from "react";

function StepFour() {
    return(
        <>
   <div class="stepTitle">
     <h1>Supporting Documents</h1>
     {/* <p>Please provide your name, email address, and phone number.</p> */}
   </div>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '50px',
    marginBottom: '30px'
  }}>
  <button onMouseOver={e => {
    e.target.style.boxShadow = '5px 5px black'
  }}  onMouseLeave={e => {
    e.target.style.boxShadow = '10px 10px black'
  }} style={{
    width: 'fit-content',
    padding: '20px',
    boxShadow: '10px 10px black',
    backgroundColor: 'greenyellow'
   }}>Upload Student School Report Card For Recent Year or Term</button>
   
    </div>
  </>
    )
}

export default StepFour;