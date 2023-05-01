import React from "react";
import {Button, Card} from "react-bootstrap"
import "./banner.css";

import whatis from "./assets/whatis.svg";

export const Slide2 = () => {
    return (
            <Card>
      <Card.Img variant="top" src={whatis} />
      <Card.Body>
        <Card.Title>OLEANDER NURSERY AND PRIMARY SCHOOL</Card.Title>
        <Card.Text>
        Oleander Nursery and Primary School (ONPS) started in 2015 with 6 students and finished our first academic year with 30 students, currently, we have 500+ students. We have excellent Nursery and Primary sections with exceptional teaching staff.

            </Card.Text>
        <Button variant="primary" onClick={e=> {
            e.preventDefault();
            window.location = "/schoolvalue";
        }}><span>Learn More About Oleander!</span><i></i></Button>
        </Card.Body>
        </Card>
    )
}