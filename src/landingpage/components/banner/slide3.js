import React from "react";
import {Button, Card} from "react-bootstrap"
import "./banner.css";

import graduate from "./assets/graduate.svg";

export const Slide3 = () => {
    return (
            <Card>
      <Card.Img variant="top" src={graduate} />
      <Card.Body>
        <Card.Title>What we do at Oleander?</Card.Title>
        <Card.Text>
            We provide quality education in line with Rwandan culture and Christian values through empowering children to become productive citizens.
        </Card.Text>
        <Button variant="primary"><span>Learn More About Oleander!</span><i></i></Button>
        </Card.Body>
        </Card>
    )
}