import React from "react";
import SubHeading from "./SubHeading";
import { Link } from "react-router-dom";

const AboutMe = () => {
    return (
        <div className='py-16 bg-[#E3E3FF] border-b border-b-black relative'>
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
                    <SubHeading title={"About"} headline={"More About Me"} />
                    <p className='pt-8 '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Doloremque rem cumque ipsum aspernatur deleniti.
                        Fugiat dolore laborum voluptates sequi, libero dicta
                        rerum nulla et illo aspernatur, aliquam alias nobis
                        eveniet.
                    </p>
                    <p className='pt-4 pb-8 '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Doloremque rem cumque ipsum aspernatur deleniti.
                        Fugiat dolore laborum voluptates sequi, libero dicta
                        rerum nulla et illo aspernatur, aliquam alias nobis
                        eveniet.
                    </p>
                    <div className='h-12'>
                        <Link
                            className='text-xl font-semibold px-8 py-4 shadow-btn bg-white inline-flex justify-center items-center'
                            to={"/"}
                        >
                            <i className='ri-download-line mr-3' />
                            <span className='block'>Download Resume</span>
                        </Link>
                    </div>
                </div>
            </div>
            <img
                src='https://i.ibb.co/0DgxwHY/Vector-4.png'
                className='absolute -bottom-10 left-[40%] -translate-x-1/2 hidden lg:block'
            />
        </div>
    );
};

export default AboutMe;
