import React from "react";

function StepFive() {
 
    return(
        <>
  <div style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
   }}>Admission information has been successfully sent. We will contact you within the next 3 to 4 business days. Thank you.</button>
   
   <button onMouseOver={e => {
    e.target.style.boxShadow = '5px 5px black'
  }}  onMouseLeave={e => {
    e.target.style.boxShadow = '10px 10px black'
  }} style={{
    width: 'fit-content',
    padding: '20px',
    boxShadow: '10px 10px black',
    backgroundColor: 'greenyellow',
    marginTop: '15px'
   }} onClick={e => {
      localStorage.clear()
      window.location.reload()
    }}>Go Back</button>
   
    </div>
    
  </>
    )
}

export default StepFive;