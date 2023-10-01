import React from "react";
import SubHeading from "./SubHeading";

const Contact = () => {
    return (
        <section className='py-24 border-b-2 border-b-black'>
            <div className='container'>
                <SubHeading
                    title={"Contact Me"}
                    headline={"Drop a message for me"}
                    allign={"text-center"}
                />
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className=''>
                        <img
                            src='https://i.ibb.co/sFLxwZx/20286028-6212131-removebg-preview.png'
                            alt=''
                            className='w-full'
                            loading='lazy'
                        />
                    </div>
                    <form className='mt-16'>
                        <div className='text-2xl pb-6'>
                            <label htmlFor='name' className='pb-2 block'>
                                Your Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                placeholder='eg. Jhon Smith'
                                className='border-2 border-black rounded-md block w-full p-3'
                            />
                        </div>
                        <div className='text-2xl pb-6'>
                            <label htmlFor='name' className='pb-2 block'>
                                Your Email
                            </label>
                            <input
                                type='text'
                                id='name'
                                placeholder='eg.  jhon@gmail.com'
                                className='border-2 border-black rounded-md block w-full p-3'
                            />
                        </div>
                        <div className='text-2xl'>
                            <label htmlFor='name' className='pb-2 block'>
                                Your Message
                            </label>
                            <textarea
                                type='text'
                                id='name'
                                placeholder='Drop your message here'
                                className='border-2 border-black rounded-md block w-full p-3'
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
