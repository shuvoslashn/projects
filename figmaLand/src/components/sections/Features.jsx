import React from "react";
import SectionHeading from "../SectionHeading";
import ChatBack from "./../../assets/ChatBack.png";
import ChatFront from "./../../assets/ChatFront.png";

const Features = () => {
    return (
        <section className='py-16 md:py-24 bg-zinc-900/50'>
            <div className='container'>
                <SectionHeading
                    title={"Features"}
                    text={
                        "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."
                    }
                />
                <div className='flex flex-col md:flex-row justify-center items-center gap-16 mt-8 md:mt-16'>
                    <div className='basis-2/4 relative'>
                        <img src={ChatBack} alt='Chatbox Back' />
                        <img
                            src={ChatFront}
                            alt='Chatbox Back'
                            className='absolute md:-right-16 -bottom-10 md:-bottom-5 px-8 md:px-0'
                        />
                    </div>
                    <div className='basis-1/4'>
                        <div className='p-4'>
                            <h2 className='text-2xl'>
                                <i className='ri-checkbox-multiple-blank-line mr-4 text-teal-500' />
                                A single
                                <br /> source of truth
                            </h2>
                            <p className='text-[14px] font-light pt-3'>
                                When you add work to your Slate calendar we
                                automatically calculate useful insights
                            </p>
                        </div>
                        <div className='p-4'>
                            <h2 className='text-2xl'>
                                <i className='ri-checkbox-multiple-blank-line mr-4 text-teal-500' />
                                Intuitive interface
                            </h2>
                            <p className='text-[14px] font-light pt-3'>
                                When you add work to your Slate calendar we
                                automatically calculate useful insights
                            </p>
                        </div>
                        <div className='p-4'>
                            <h2 className='text-2xl'>
                                <i className='ri-checkbox-multiple-blank-line mr-4 text-teal-500' />
                                A single
                                <br /> source of truth
                            </h2>
                            <p className='text-[14px] font-light pt-3'>
                                When you add work to your Slate calendar we
                                automatically calculate useful insights
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
