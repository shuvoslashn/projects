import React from "react";
import SubHeading from "./SubHeading";
import { Link } from "react-router-dom";
import { AnchorSection } from "react-anchor-navigation";

const AboutMe = () => {
    return (
        <AnchorSection id='aboutme'>
            <section
                className='py-16 bg-[#E3E3FF] border-b border-b-black relative'
                // id='about'
            >
                <div className='container flex flex-col lg:flex-row lg:text-left text-center justify-between items-center gap-16'>
                    {/* left */}
                    <div className=' basis-1/2 p-8 pb-0'>
                        <img
                            src='https://i.ibb.co/G7TkvSz/Frame-67.png'
                            alt=''
                            className='w-full'
                        />
                    </div>
                    {/* right */}
                    <div className='basis-1/2'>
                        <SubHeading
                            title={"About"}
                            headline={"More About Me"}
                        />
                        <p className='pt-8 '>
                            In my early career (2019-2021), I focused on
                            developing my skills in HTML5, CSS3, Bootstrap 4 and
                            5, as well as CMS design and basic PHP programming.
                            During this time, I worked on various projects,
                            including a basic LMS project, and I used builders
                            such as Elementor Pro, Divi, Braver Builder, Muffin
                            Builder, WPBakery, and Visual Composer Builder.
                        </p>
                        <p className='pt-4 pb-8 '>
                            More recently (since late 2022), I have been
                            expanding my skillset and diving deeper into the
                            world of MERN stack development. I am learning and
                            working with a range of technologies, including
                            JavaScript, Tailwind, React Js, Node Js, Next Js,
                            Express Js, MUI, and React Bootstrap, among others.
                        </p>
                        <div className='h-12'>
                            <a
                                className='text-xl font-semibold px-8 py-4 shadow-btn bg-white inline-flex justify-center items-center'
                                href='https://drive.google.com/file/d/1MVB_Qx6jWu--58uCusOzXOx-n5Tg-NI9/view'
                                target='_blank'
                            >
                                <i className='ri-download-line mr-3' />
                                <span className='block'>Download Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
                <img
                    src='https://i.ibb.co/0DgxwHY/Vector-4.png'
                    className='absolute -bottom-10 left-[40%] -translate-x-1/2 hidden lg:block'
                />
            </section>
        </AnchorSection>
    );
};

export default AboutMe;
