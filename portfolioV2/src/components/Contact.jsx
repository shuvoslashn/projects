import React, { useState } from "react";
import SubHeading from "./SubHeading";
import { useForm, ValidationError } from "@formspree/react";
import { AnchorSection } from "react-anchor-navigation";

const Contact = () => {
    const [state, handleSubmit] = useForm("xdorylrw");
    const [loading, setLoading] = useState(false);
    return (
        <AnchorSection id='contact'>
            <section className='py-24 border-b-2 border-b-black'>
                <div className='container'>
                    <SubHeading
                        title={"Contact Me"}
                        headline={"Drop a message for me"}
                        allign={"text-center"}
                    />
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                        <div className='pt-4 md:pt-16'>
                            <img
                                src='https://i.ibb.co/sFLxwZx/20286028-6212131-removebg-preview.png'
                                alt=''
                                className='w-full'
                                loading='lazy'
                            />
                        </div>
                        {state.succeeded ? (
                            <div className=''>
                                <img
                                    src='https://i.ibb.co/RSzB1Yz/giphy.webp'
                                    className='max-w-[300px] w-full mx-auto'
                                />

                                <h2 className='text-5xl mt-4 text-center text-green-600'>
                                    Email Send Successfully
                                </h2>
                            </div>
                        ) : (
                            <form className='mt-16' onSubmit={handleSubmit}>
                                <div className='text-2xl pb-6'>
                                    <label
                                        htmlFor='name'
                                        className='pb-2 block'
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        required
                                        placeholder='eg. Jhon Smith'
                                        className='border-2 border-black rounded-md block w-full p-3'
                                    />
                                    <ValidationError
                                        prefix='Name'
                                        field='name'
                                        errors={state.errors}
                                    />
                                </div>
                                <div className='text-2xl pb-6'>
                                    <label
                                        htmlFor='email'
                                        className='pb-2 block'
                                    >
                                        Your Email
                                    </label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        required
                                        placeholder='eg.  jhon@gmail.com'
                                        className='border-2 border-black rounded-md block w-full p-3'
                                    />
                                    <ValidationError
                                        prefix='Email'
                                        field='email'
                                        errors={state.errors}
                                    />
                                </div>
                                <div className='text-2xl'>
                                    <label
                                        htmlFor='message'
                                        className='pb-2 block'
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        type='text'
                                        id='message'
                                        name='message'
                                        required
                                        placeholder='Drop your message here'
                                        className='border-2 border-black rounded-md block w-full p-3'
                                    ></textarea>
                                    <ValidationError
                                        prefix='Message'
                                        field='message'
                                        errors={state.errors}
                                    />
                                </div>
                                <div className='h-8 mt-8'>
                                    <button
                                        className='text-xl font-semibold px-8 py-4 shadow-btn bg-[#E3E3FF] inline-flex justify-center items-center'
                                        type='submit'
                                        disabled={state.submitting}
                                    >
                                        <i className='ri-download-line mr-3' />
                                        <span className='block'>Send Now</span>
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </AnchorSection>
    );
};

export default Contact;
