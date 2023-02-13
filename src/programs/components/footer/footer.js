import React from "react";

import mail from "./assets/mail.svg";
import location from "./assets/location.svg";
import phone from "./phone.svg";

// import instagram from "./assets/instagram.svg";
// import twitter from "./assets/twitter.svg";
// import facebook from "./assets/facebook.svg";

import "./footer.css";
import "./footertwo.css";

function Footer() {
    return(
        <div className="footerContainer">
          {/* <div id="footerContainer-top-id" className="footerContainer-top">
            <div>
              <p>Subscribe to Our Newsletters.</p>
              <p>Lorem ipsum ipsum ipsum ipsum ipsum orem ipsum ipsum ipsum ipsum ipsumorem ipsum ipsum ipsum ipsum ipsum</p>
            </div>
            <form onSubmit={e => {
              e.preventDefault();
            }}>
              <div id="footerContainer-top-1">
                <label><img src={mail} alt="mail"/></label>
                <input type="email" placeholder="example@gmail.com" />
              </div>
              <div id="footerContainer-top-2">
                <input type="submit" value="Signup" />
              </div>
            </form>
          </div> */}
          <div className="footerContainer-bottom">
            <div className="footerContainer-bottom-top">
              <div className="footerContainer-bottom-top-left">
                <h1>Oleander Nursery and Primary School.</h1>
                <p>
                Oleander school is located in Rwanda in sub Saharan Africa, founded in 2015 in a small populated village called Rwintare in “Masaka Sector, just about 20 Miles away from the capital city center of Kigali      
        </p>
              </div>
              <div className="footerContainer-bottom-top-middle-1">
                <h4>Quick links</h4>
                <ul>
                  <li><a href="/" rel="noreferrer">Home</a></li>
                  <li><a href="#programs" rel="noreferrer">Our programs</a></li>
                  <li><a href="/admissionprocess" rel="noreferrer">Admission process</a></li>
                  <li><a href="/schoolvalue" rel="noreferrer">School values</a></li>
                  <li><a href="/studentlife" rel="noreferrer">Student life</a></li>
                  <li><a href="/donation" rel="noreferrer">Donation</a></li>
                </ul>
              </div>
              <div className="footerContainer-bottom-top-middle-2">
                <h4>Opening Hours</h4>
                <div>
                <h5><span>Monday</span><span>08:00 - 17:00</span></h5>
                <h5><span>Tuesday</span><span>08:00 - 17:00</span></h5>
                <h5><span>Wednesday</span><span>08:00 - 17:00</span></h5>
                <h5><span>Thursday</span><span>08:00 - 17:00</span></h5>
                <h5><span>Friday</span><span>08:00 - 17:00</span></h5>
                <h5><span>Saturday</span><span>Closed</span></h5>
                <h5><span>Sunday</span><span>Closed</span></h5>
                </div>
              </div>
              <div className="footerContainer-bottom-top-right">
                <h4>Get in Touch</h4>
                <div>
                <h5><span><img src={location} alt="location"/></span><span>Gitaraga - Masaka, Kicukiro - Kigali, Rwanda</span></h5>
                <h5><span><img src={mail} alt="mail"/></span><span><a target="_blank" rel="noreferrer" href="mailto:olns2015@gmail.com">olns2015@gmail.com</a></span></h5>
                <h5><span><img src={phone} alt="phone"/></span><span><a target="_parent" rel="noreferrer" href="tel:+250788507087">+250788507087</a></span></h5>
                </div>
                {/* <div className="connectwithus">
                <h5><a href="#2"><img src={instagram} alt="location"/></a></h5>
                <h5><a href="#2"><img src={facebook} alt="location"/></a></h5>
                <h5><a href="#2"><img src={twitter} alt="location"/></a></h5>
                </div> */}
              </div>
            </div>
            <div className="footerContainer-bottom-bottom">
              <p>Copyright © Oleander Nursery and Primary School 2023. All Rights Reserved</p>
            </div>
          </div>
        </div>
    )
}

export default Footer;