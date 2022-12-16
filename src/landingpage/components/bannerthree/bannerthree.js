import React from "react";

import "./bannerthree.css";

import img1 from "./assets/bigimage.jpeg";
import img2 from "./assets/bigimagetwo.jpeg";
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
                    <h1>Online Learning Platform</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh dolor, gravida faucibus dolor consectetur, pulvinar rhoncus risus. Fusce vel rutrum mi.</p>
                </div>
                <div className="body">
                    <div className="cards">
                        <div className="cardImgContainer">
                            <img alt="book" src={book} />
                        </div>
                        <div className="cardContentContainer">
                            <h3>Special Education</h3>
                            <p>Lorem ipsum dolor sit amet, adipiscing elit. Vivamus nibh dolor gravida at eleifend</p>
                        </div>
                    </div>


                    <div className="cards">
                        <div className="cardImgContainer">
                            <img alt="book" src={chalkboard} />
                        </div>
                        <div className="cardContentContainer">
                            <h3>Honors classes</h3>
                            <p>Lorem ipsum dolor sit amet, adipiscing elit. Vivamus nibh dolor gravida at eleifend</p>
                        </div>
                    </div>


                    <div className="cards">
                        <div className="cardImgContainer">
                            <img alt="book" src={school} />
                        </div>
                        <div className="cardContentContainer">
                            <h3>Traditional academies</h3>
                            <p>Lorem ipsum dolor sit amet, adipiscing elit. Vivamus nibh dolor gravida at eleifend</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerThree;