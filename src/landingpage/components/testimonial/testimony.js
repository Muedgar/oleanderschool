import React from "react";

import "./testimony.css";
import star from "./assets/star.svg";
import quote from "./assets/quote.svg";


function Testimony(props) {
    return (
        <div className="testimony-wrapper">
            <img className="testimony-wrapperImg" src={props.profile} alt="testimony" aria-hidden="true" />
            <div className="testimony-rate">
            {
                props.stars.map((num,i) => {
                    console.log(star);
                    return (
                        <>
                        <img src={star} alt="testimony" key={`star${i}`} />
                    </>
                    )
                })
            }
            </div>
            <p>
            {props.content}
            </p>
            <span>{props.author}</span>
            <img className="testimony-quote" src={quote} alt="testimony" aria-hidden="true" />
        </div>
    )
}

export default Testimony;