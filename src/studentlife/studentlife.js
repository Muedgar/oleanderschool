import React from "react";
import Footer from "./components/footer/footer";
import NavBar from "./components/navbar/navbar";

import "./studentlife.css"
import LIFEATSCHOOL from "./lifeatschool";

function StudentLife() {
    return (
        <>
            <NavBar />
            <LIFEATSCHOOL />
            <Footer />
        </>
    )
}

export default StudentLife;