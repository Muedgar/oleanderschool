import React from "react";
import {Button, Card} from "react-bootstrap"
import "./banner.css";

import graduate from "./assets/graduate.svg";

export const Slide3 = () => {
    return (
            <Card>
      <Card.Img variant="top" src={graduate} />
      <Card.Body>
        <Card.Title>AIMING FOR QUALITY EDUCATION</Card.Title>
        <Card.Text>
        Our school provides edification to enhance the Christian values formation of the individual child and molds his/her intellect with standard knowledge and skills through quality education for him/her to become highly competent and, an exemplary citizen.
</Card.Text>
        <Button variant="primary" onClick={e=> {
            e.preventDefault();
            window.location = "/schoolvalue";
        }}><span>Learn More About Oleander!</span><i></i></Button>
        </Card.Body>
        </Card>
    )
}