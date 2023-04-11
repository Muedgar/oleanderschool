import React, {useEffect, useState} from "react";


import './programcard.css';


import data from "./career";
import GetSummary from "../../getSummary";
import ErrorBoundary from '../../ErrorBoundary';
import ErrorMessage from "../../ErrorMessage";
import GetHistory from "../../getHistory";

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
                <h2>Summary:</h2>
                <ErrorBoundary fallback={<ErrorMessage message="Loading summary ..." />}>
                            <GetSummary />
                </ErrorBoundary>
                <h2>History:</h2>
                
                <ErrorBoundary fallback={<ErrorMessage message="Loading summary ..." />}>
                            <GetHistory />
                </ErrorBoundary>
                <h2>Getting involved:</h2>
                <ul>
                    {career.requirements.map((requirement,index)=> (
                        <li key={index}>{requirement}</li>
                    ))}
                </ul>
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