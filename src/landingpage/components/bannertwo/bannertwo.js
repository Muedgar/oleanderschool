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
                    <Card.Img variant="top" src={teacher} />
                </div>
                <Card.Body>
                    <Card.Title className="cardTitle">Expert teachers</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, adipiscing elit. Vivamus nibh dolor gravida at eleifend
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
                    Lorem ipsum dolor sit amet, adipiscing elit. Vivamus nibh dolor gravida at eleifend
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <div className="imgContainer">
                    <Card.Img variant="top" src={customer} />
                </div>
                <Card.Body>
                    <Card.Title className="cardTitle">Life Time Support</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, adipiscing elit. Vivamus nibh dolor gravida at eleifend
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
                    Lorem ipsum dolor sit amet, adipiscing elit. Vivamus nibh dolor gravida at eleifend
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BannerTwo;