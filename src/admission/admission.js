import React from "react";
import Footer from "./components/footer/footer";
import NavBar from "./components/navbar/navbar";

import "./admission.css"
import FormAdmissions from "./components/form/form";

function Admission() {
    return (
        <>
            <NavBar />
            <FormAdmissions />
            <Footer />
        </>
    )
}

export default Admission;