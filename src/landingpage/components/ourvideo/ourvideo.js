import React from "react";

import './ourvideo.css';

import poster from "./assets/bigimagethree.jpeg";

function OurVideo() {
   
    return(
        <div className="ourVideoContainer">
            <h1>Watch Our Video</h1>
            <video poster={poster} controls src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            
        </div>
    )
}

export default OurVideo;