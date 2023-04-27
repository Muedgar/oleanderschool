import React from "react";

import "./teacher.css";

function Teacher(props) {
    return(
          <div onMouseOver={e => {
            document.getElementById(props.id).style.transform = "rotateY(180deg)";
          }}  onMouseLeave={e => {
            document.getElementById(props.id).style.transform = "rotateY(0)";
          }} className="teacher">
            <div id={props.id} className="teacher-inner">
                <div className="teacher-front-face">
                    <img src={props.image} alt="teacher" aria-hidden="true" />
                </div>
                <div className="teacher-back-face">
                    <p>Name: <span>{props.name}</span></p>
                    <p>Responsibility: <span>{props.responsibility}</span></p>
                    {/* <p>Contact: <span>+250 780 530 000</span></p> */}
                </div>
            </div>
          </div>
    )
}

export default Teacher;