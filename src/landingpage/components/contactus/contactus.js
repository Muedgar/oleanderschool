import React from "react";


import './contactus.css';

function ContactUs() {
   
    return(
        <div className="contactUsContainer">
            <h1>We are the best choice for your child</h1>
            {/* <p>
            Lorem ipsum dolor sit amet, consecteur adipiscing elit.
            Lorem ipsum dolor sit amet, consecteur adipiscing elit.
            Lorem ipsum dolor sit amet, consecteur adipiscing elit.
            Lorem ipsum dolor sit amet, consecteur adipiscing elit.
            Lorem ipsum dolor sit amet, consecteur adipiscing elit.
            Lorem ipsum dolor sit amet, consecteur adipiscing elit.
            </p> */}
            <button onClick={e => {
                e.preventDefault();
                document.getElementById("callus").click();
            }}>Contact Us</button>
            <a target="_parent" id="callus" rel="noreferrer" href="tel:+250788507087" style={{display:"none"}}>Call us</a>
        </div>
    )
}

export default ContactUs;