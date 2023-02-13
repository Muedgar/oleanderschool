import React from "react";

import "./bannerthree.css";

import img1 from "./assets/DSC_6783.JPG";
import img2 from "./assets/DSC_6767.JPG";
import book from "./assets/book.svg";
import chalkboard from "./assets/chalkboard.svg";
import school from "./assets/school.svg";

function BannerThree() {
    return (
        <div className="bannerThreeContainer">
            <div className="leftContainer">
                <img src={img1} alt="imageone" className="imgOne" />
                <img src={img2} alt="imagetwo" className="imgTwo" />
                <div className="imgThree"></div>
            </div>
            <div className="rightContainer">
                <div className="title">
                    <h1>Online Learning Platforms</h1>
                    <p>Our webspace and the G-Suite contain educational content and resources that offers our students everything they need in one place: lectures, resources, opportunities to meet and chat with other students, and more. </p>
                </div>
                <div className="body">
                    <div className="cards">
                        <div className="cardImgContainer">
                            <img alt="book" src={book} />
                        </div>
                        <div className="cardContentContainer">
                            <h3>Special Education</h3>
                            <p>We focus on educating students in a way that accommodates their individual differences, disabilities, and special needs. </p>
                        </div>
                    </div>


                    <div className="cards">
                        <div className="cardImgContainer">
                            <img alt="book" src={chalkboard} />
                        </div>
                        <div className="cardContentContainer">
                            <h3>Honors classes</h3>
                            <p>We provide more in-depth classes on a subjects like Mathematics, science and social studies.</p>
                        </div>
                    </div>


                    <div className="cards">
                        <div className="cardImgContainer">
                            <img alt="book" src={school} />
                        </div>
                        <div className="cardContentContainer">
                            <h3>Traditional academies</h3>
                            <p>We follow the country primary and nursery school curriculum program as provided by Rwanda Education Board.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerThree;