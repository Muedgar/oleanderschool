import React from "react";
import Footer from "./components/footer/footer";
import NavBar from "./components/navbar/navbar";
import ProgramCard from "./components/programCard/programCard";

import "./programs.css"

function Programs() {
    return (
        <>
            <NavBar />
            <ProgramCard />
            <Footer />
        </>
    )
}

export default Programs;