import React from "react";
import { Player } from 'video-react';

import './ourvideo.css';

import poster from "./assets/bigimagethree.jpeg";

function OurVideo() {
   
    return(
        <div className="ourVideoContainer">
            <h1>Watch Our Video</h1>
            <Player
                playsInline
                poster={poster}
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
            
        </div>
    )
}

export default OurVideo;