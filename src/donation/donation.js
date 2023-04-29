import React from "react";
import Footer from "./components/footer/footer";
import NavBar from "./components/navbar/navbar";

import "./Donation.css"
import FormAdmissions from "./components/form/form";

function Donation() {
    return (
        <>
            <NavBar />
            <FormAdmissions />
            {/* <h1 style={{margin: "150px auto", width: "fit-content", height: "50px", fontFamily: "gilli"}}>Page Under Construction</h1> */}
            <Footer />
        </>
    )
}

export default Donation;