import React from "react";
import SectionHeading from "./../SectionHeading";
import Button from "./../Button";
import Macbook from "./../../assets/Macbook.png";
import Boards from "./../../assets/Boards.png";

const Contents = () => {
    return (
        <section className='py-16 md:24 bg-zinc-950'>
            <div className='container'>
                <SectionHeading
                    title={"Contents"}
                    text={`We focus on ergonomics and meeting you where you work. It's only a keystroke away.`}
                />
                <div className='max-w-5xl w-full mx-auto flex flex-col lg:flex-row justify-center items-center gap-8 mt-8 md:mt-16'>
                    <div className='p-8 pt-12 rounded-md text-center bg-zinc-900 hover:border hover:border-primary duration-300 border border-transparent'>
                        <h3 className='text-2xl'>Work</h3>
                        <p className='mt-4 mb-8'>
                            Ever wondered if you're too reliant on a client for
                            work? Slate helps you identify .
                        </p>
                        <Button>Sign Up</Button>
                        <img
                            src={Macbook}
                            alt='Macbook'
                            className=' mx-auto mt-4 lg:mt-12 h-64 w-auto object-contain'
                        />
                    </div>
                    <div className='p-8 pt-12 rounded-md text-center bg-zinc-900 hover:border hover:border-primary duration-300 border border-transparent'>
                        <h3 className='text-2xl'>Design with real data</h3>
                        <p className='mt-4 mb-8'>
                            Ever wondered if you're too reliant on a client for
                            work? Slate helps you identify .
                        </p>
                        <Button>Try For Free</Button>
                        <img
                            src={Boards}
                            alt='Boards'
                            className=' mx-auto mt-4 lg:mt-12 h-64 w-auto object-contain'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contents;
