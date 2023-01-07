import React, {useState} from "react";
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// import images
import imageOne from "./assets/bigimage.jpeg";
import imageTwo from "./assets/bigimagetwo.jpeg";
import imageThree from "./assets/bigimagethree.jpeg";

import "./gallery.css";

import mg from "./assets/magnifying.svg";

function Gallery() {
    const onInit = () => {
        
    };
    const [images, setImages] = useState([imageOne,imageTwo,imageThree,imageOne,imageTwo,imageThree,imageOne,imageTwo,imageThree])
    return (
        <div className="galleryContainer">
            <div className="galleryActionCall">
                <h1>Photo Gallery</h1>
                <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit. Lorem ipsum dolor sit amet, consecteur adipiscing elit. Lorem ipsum dolor sit amet, consecteur adipiscing elit. Lorem ipsum dolor sit amet, consecteur adipiscing elit</p>
                <button>View All Gallery</button>
            </div>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                {
                  images.map((image,i) => (
                    <a key={i} href={image}>
                    <img alt={`students`} src={image} />
                    <span><img src={mg} alt='zoom' /></span>
                </a>
                  ))  
                }
            </LightGallery>
        </div>
    );
}


export default Gallery;