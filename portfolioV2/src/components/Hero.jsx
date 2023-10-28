import React from "react";
import { Link } from "react-router-dom";
import SubHeading from "./SubHeading";

const Hero = () => {
    return (
        <section className='pb-0 bg-[#E3E3FF]'>
            <div className='container flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8'>
                {/* Hero Left Section */}
                <div className='max-w-2xl w-full text-center lg:text-left py-16 2xl:py-32'>
                    {/* Hello text */}
                    <SubHeading title={"Hello"} />
                    <h1 className='text-5xl lg:text-7xl font-bold my-8'>
                        I'm Shuvo Sarker,
                        <br /> a{" "}
                        <span className='relative'>
                            <span className='font-black'>front-end</span>
                            <img
                                src='https://i.ibb.co/rmMXStB/vect.png'
                                alt=''
                                className='absolute -bottom-2 left-0 w-full'
                            />
                        </span>{" "}
                        developer.
                    </h1>
                    <p className='mb-8'>
                        I'm Shuvo Sarker, a dedicated web developer specializing
                        in front-end design and development, with expertise in
                        HTML5, CSS3, Bootstrap, Tailwind and various CMS
                        platforms. I thrive on challenges, continuously
                        expanding my expertise, and I'm passionate about
                        crafting exceptional user experiences. Eager to
                        contribute to innovative projects.
                    </p>
                    <div className='h-16'>
                        <Link
                            to={"/portfolio"}
                            className='text-xl font-semibold px-8 py-3 inline-block shadow-btn bg-white'
                        >
                            See My Works
                        </Link>
                    </div>
                </div>

                {/* Hero Image Section */}
                <div className='relative'>
                    <img
                        // src='https://i.ibb.co/sRVfdJd/mypic02.png'
                        src='https://i.ibb.co/GcfNtHP/propic.png'
                        alt='Shuvo Sarker'
                    />
                    <img
                        src='https://i.ibb.co/XVp48Td/Group-2.png'
                        alt='Lets work together'
                        className='absolute top-0 -left-24 animate-spin-slow'
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
