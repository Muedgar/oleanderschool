import React from "react";
import {Button, Card} from "react-bootstrap"
import "./banner.css";

import whatis from "./assets/whatis.svg";

export const Slide2 = () => {
    return (
            <Card>
      <Card.Img variant="top" src={whatis} />
      <Card.Body>
        <Card.Title>What is Oleander?</Card.Title>
        <Card.Text>
            “Oleander Nursery and Primary School” works as private school regulated by Rwanda Ministry of Education (MINEDUC), it is also a legal registered school by Rwanda Development Board (RDB). 
        </Card.Text>
        <Button variant="primary"><span>Learn More About Oleander!</span><i></i></Button>
        </Card.Body>
        </Card>
    )
}