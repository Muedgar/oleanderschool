import React from "react";
import Card from 'react-bootstrap/Card';

import "./bannertwo.css";

import customer from "./assets/customer.svg";
import education from "./assets/education.svg";
import graduate from "./assets/graduate.svg";
import teacher from "./assets/teacher.svg";

function BannerTwo() {
    return(
        <div className="bannerTwoContainer">
            
            
            <Card>
                <div className="imgContainer">
                    <Card.Img variant="top" src={customer} />
                </div>
                <Card.Body>
                    <Card.Title className="cardTitle">Parent - Student Support</Card.Title>
                    <Card.Text>
                     Our school provides direct support to learning before and during formal education, as well as indirect facilitating of factors such as nutrition, health, hygiene, school and home communication, assistance in learning activities at home, participation in school events, and participation in school-decision-making bodies.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <div className="imgContainer">
                    <Card.Img variant="top" src={education} />
                </div>
                <Card.Body>
                    <Card.Title className="cardTitle">Quality Education</Card.Title>
                    <Card.Text>
                        We teach our students to think intensively and to think critically. We encourage students to explore ideas, make choices, and value their own dignity and worth.
                    </Card.Text>
                </Card.Body>
            </Card>
            
            <Card>
                <div className="imgContainer">
                    <Card.Img variant="top" src={graduate} />
                </div>
                <Card.Body>
                    <Card.Title className="cardTitle">Scholarship News</Card.Title>
                    <Card.Text>
                    We provide financial support to a student, based on academic achievement or other criteria that may include financial need, for the purpose of schooling. 
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <div className="imgContainer">
                    <Card.Img variant="top" src={teacher} />
                </div>
                <Card.Body>
                    <Card.Title className="cardTitle">Expert teachers</Card.Title>
                    <Card.Text>
                        Our teachers have 5000+ hours of practice, they have also proved to have a growth mindset required at our school.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BannerTwo;