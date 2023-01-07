import React from "react";

import NavBar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import BannerTwo from "./components/bannertwo/bannertwo";
import BannerThree from "./components/bannerthree/bannerthree";
import BannerFour from "./components/bannerfour/bannerfour";
import ContactUs from "./components/contactus/contactus";
import OurVideo from "./components/ourvideo/ourvideo";

import "./landingpage.css";
import Gallery from "./components/gallery/gallery";
import Testimonial from "./components/testimonial/testimonial";
import Teachers from "./components/ourteachers/teachers";


export const LandingPage = () => {
    return(
        <div>
            <NavBar />
            <Banner />
            <BannerTwo />
            <BannerThree />
            <BannerFour />
            <ContactUs />
            <OurVideo />
            <Gallery />
            <Testimonial />
            <Teachers />
        </div>
    )
}