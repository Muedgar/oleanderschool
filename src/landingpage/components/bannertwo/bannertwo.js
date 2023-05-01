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
                    <Card.Title className="cardTitle">Affordable education</Card.Title>
                    <Card.Text>
                    Our school provides quality education with affordable school fees and excellent feeding programs for both nursery and primary sections.
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
                    We teach our students to think intensively and to think critically. We encourage students to explore ideas, make choices, and value their own dignity and worth emphasizing developing their talents based on Christian and cultural values.
                        </Card.Text>
                </Card.Body>
            </Card>
            
            <Card>
                <div className="imgContainer">
                    <Card.Img variant="top" src={graduate} />
                </div>
                <Card.Body>
                    <Card.Title className="cardTitle">NTURI WENYINE Program</Card.Title>
                    <Card.Text>
                    Nturi Wenyine is an initiative established by ONPS to help and advocate for vulnerable children in need of support through education scholarships and free counseling services. Nturi Wenyine focuses on reducing school dropout, access to quality education, and increasing the opportunities for equal rights to education.
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
                        Our teaching staff have passion and experience in education, possess excellent organizational skills, and can connect easily with students. They have also proved to have a growth mindset required at our school to excel.    
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BannerTwo;