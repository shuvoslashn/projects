import React from "react";
import SubHeading from "./SubHeading";

const Projects = () => {
    return (
        <section className='py-24 bg-[#E3E3FF] border-y-2 border-y-black'>
            <div className='container'>
                <SubHeading
                    title={"Lets see my work"}
                    headline={"I have worked on those projects"}
                    allign={"text-center"}
                />
            </div>
        </section>
    );
};

export default Projects;
