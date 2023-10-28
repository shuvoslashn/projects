import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import AboutMe from "../components/AboutMe";
import Testimonial from "../components/Testimonial";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { AnchorSection } from "react-anchor-navigation";

const Homepage = () => {
    return (
        <>
            <Hero />
            <Features />
            <AboutMe />
            <Testimonial />
            <Projects />
            <Contact />
        </>
    );
};

export default Homepage;
