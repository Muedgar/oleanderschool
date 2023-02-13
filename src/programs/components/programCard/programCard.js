import React, {useEffect, useState} from "react";


import './programcard.css';

// import assets
import slideImageOne from "../assets/slideImageOne.png";
import slideImageTwo from "../assets/slideImageTwo.jpeg";
import slideImageThree from "../assets/slideImageThree.gif";
import slideImageFour from "../assets/slideImageFour.jpeg";
import slideImageFive from "../assets/slideImageFive.webp";
import slideImageSix from "../assets/slideImageSix.jpeg";

import data from "./career";

function ProgramCard() {
    const [bannerImgFour, setBannerImgFour] = useState([]);
    const [careers, setCareers] = useState([]);
    
    useEffect(() => {
        setBannerImgFour([slideImageOne,slideImageTwo,slideImageThree,slideImageFour,slideImageFive,slideImageSix,slideImageSix,slideImageOne,slideImageTwo,slideImageThree,slideImageFour,slideImageFive,slideImageSix,slideImageSix,slideImageOne,slideImageTwo,slideImageThree,slideImageFour,slideImageFive,slideImageSix,slideImageSix,slideImageOne,slideImageTwo,slideImageThree,slideImageFour,slideImageFive,slideImageSix,slideImageSix]);
        setCareers(data);
        console.log("called use effect");
    },[])

    return(
        <div className="programs">
            <h1>Subjects We Teach</h1>
            <div id="classesWeTeach">
        {bannerImgFour.map((img,i) => (
                <div className="programCard" key={`programs${i}`}>
                    <img src={img} alt={`programsalt${i}`} />
                    <h4>08:00 am - 10:00 am</h4>
                    <h3>Education Programs System</h3>
                    <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit.

                    Lorem ipsum dolor sit amet, consecteur adipiscing elit.
                    
                    </p>
                    <div>
                        <p>Students: 30</p>
                        <p>Fee: $150</p>
                    </div>
                </div>
        ))}
            </div>

            <h1>Career - Open Positions</h1>
            {careers.map((career, index) => {
                return (
                    <div key={index} className="careerCard">
                <h2>
                    <span>Job Title:</span>
                    <span>{career.title}</span>
                </h2>
                <h2>Summary:</h2>
                <p>{career.summary}</p>
                <h2>Duties and Responsibilities:</h2>
                <ul>
                    {career.duties.map((duty,index)=> (
                        <li key={index}>{duty}</li>
                    ))}
                </ul>

                <h2>Job Requirements:</h2>
                <ul>
                    {career.requirements.map((requirement,index)=> (
                        <li key={index}>{requirement}</li>
                    ))}
                </ul>
                <div><button>Apply For This Job.</button></div>
            </div>
                )
            })}
        </div>
    )
}

export default ProgramCard;