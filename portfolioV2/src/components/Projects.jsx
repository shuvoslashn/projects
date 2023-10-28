import React from "react";
import SubHeading from "./SubHeading";
import { projects } from "./../data/projects";
import { AnchorSection } from "react-anchor-navigation";

const Projects = () => {
    return (
        <AnchorSection id='projects'>
            <section className='py-24 bg-[#E3E3FF] border-y-2 border-y-black'>
                <div className='container'>
                    <SubHeading
                        title={"Lets see my work"}
                        headline={"I have worked on those projects"}
                        allign={"text-center"}
                    />
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-16 gap-8'>
                        {projects?.map((project) => {
                            return (
                                <div className='bg-white p-2 rounded-2xl ring-black ring-2 duration-300 hover:ring-8'>
                                    <img
                                        className='w-full h-[300px] object-cover rounded-xl'
                                        src={`${project?.img}`}
                                        alt=''
                                    />
                                    <div className='p-4'>
                                        <h2 className='text-2xl'>
                                            {project.title}
                                        </h2>
                                        <p className='pb-2'>
                                            {project.subtitle.substring(0, 100)}
                                        </p>
                                        <div className='flex gap-4'>
                                            {project.link && (
                                                <div className='h-16 w-full'>
                                                    <a
                                                        href={`${project.link}`}
                                                        target='_blank'
                                                        className='shadow-btn px-6 py-2 w-full bg-[#FFE49F] block text-center'
                                                    >
                                                        Live Link
                                                    </a>
                                                </div>
                                            )}
                                            {project.github && (
                                                <div className='h-16 w-full'>
                                                    <a
                                                        href={`${project.github}`}
                                                        target='_blank'
                                                        className='shadow-btn px-6 py-2 w-full bg-[#E3E3FF] block text-center'
                                                    >
                                                        Github
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                        <hr />
                                        <h4 className='text-xl font-bold py-2'>
                                            Technology
                                        </h4>
                                        <ul className='flex flex-wrap gap-2'>
                                            {project.tech.map((e) => {
                                                return (
                                                    <li className='px-3 py-0 border border-black rounded-md'>
                                                        {e}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </AnchorSection>
    );
};

export default Projects;
