import React, {useEffect, useState} from "react";


import './programcard.css';


import data from "./career";
import GetSummary from "../../getSummary";
import ErrorBoundary from '../../ErrorBoundary';
import ErrorMessage from "../../ErrorMessage";

function ProgramCard() {
    const [careers, setCareers] = useState([]);
    
    useEffect(() => {
        setCareers(data);
        console.log("called use effect");
    },[])


     // getData from backend


    return(
        <div className="programs">
            <h1>Our Programs</h1>
            {careers.map((career, index) => {
                return (
                    <div key={index} className="careerCard">
                <h2>
                    <span>Program Title:</span>
                    <span>Nturi Wenyine ('You are not alone') Program</span>
                </h2>
                
                <ErrorBoundary fallback={<ErrorMessage message="Loading information ..." />}>
                            <GetSummary />
                </ErrorBoundary>
                <div><button onClick={e => {
                    window.location = "/donation";
                }}>Get Involved.</button></div>
            </div>
                )
            })}
        </div>
    )
}

export default ProgramCard;