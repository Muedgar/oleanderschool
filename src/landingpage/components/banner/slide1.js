import React from "react";
import {Button, Card} from "react-bootstrap"
import "./banner.css";

import school from "./assets/school.svg";

export const Slide1 = () => {
    return (
            <Card>
      <Card.Img variant="top" src={school} />
      <Card.Body>
        <Card.Title data-aos='fade-up'>Where is Oleander?</Card.Title>
        <Card.Text data-aos='zoom-out-down'>
            Oleander school is located in Rwanda in sub Saharan Africa, founded in 2015 in a small populated village called Rwintare in “Masaka Sector, just about 20 Miles away from the capital city center of Kigali      
        </Card.Text>
        <Button variant="primary" onClick={e=> {
            e.preventDefault();
            window.location = "/schoolvalue";
        }}><span>Learn More About Oleander!</span><i></i></Button>
        </Card.Body>
        </Card>
    )
}