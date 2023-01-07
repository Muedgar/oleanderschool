import React from "react";
import Teacher from "./teacher";

import "./teachers.css";

//
import teacher1 from "./assets/professional.jpeg";

function Teachers() {
    return(
        <div className="teachersContainer">
          <h1>Our Teachers</h1>
          <div className="teachers">
            <Teacher id="teacherId1" image={teacher1} />
            <Teacher id="teacherId2" image={teacher1} />
            <Teacher id="teacherId3" image={teacher1} />
          </div>
        </div>
    )
}

export default Teachers;