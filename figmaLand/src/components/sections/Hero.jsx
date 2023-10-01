import React from "react";
import Button from "../Button";
import Screens from "./../../assets/screens.png";

const Hero = () => {
    return (
        <section className=''>
            <div className='container text-center'>
                <div className='max-w-xl w-full mx-auto py-16 sm:py-24'>
                    <h1 className='text-4xl md:text-6xl font-bold leading-[120%] pb-6'>
                        Work at the speed of thought
                    </h1>
                    <p className='text-xl leading-[1.7]'>
                        Most calendars are designed for teams. Slate is designed
                        for freelancers who want a simple way to plan their
                        schedule.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-6 justify-center mt-8'>
                        <Button>Try For Free</Button>
                        <Button sx={"outline"}>Learn More</Button>
                    </div>
                </div>
                <div className='relative'>
                    <img src={Screens} alt='' />
                    <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-zinc-950/25 to-zinc-950'></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
