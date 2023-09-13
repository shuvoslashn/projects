import React, { useState } from 'react';
import Layout from '../../components/Layouts/Layout';
import { Link } from 'react-router-dom';
import propertyAnimation from './../../assets/property.gif';

const SignUp = () => {
    const [eye, setEye] = useState(false);
    const [formData, setFormData] = useState({
        yourName: '',
        email: '',
        password: '',
    });

    const { yourName, email, password } = formData;

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    };

    const handleEye = () => {
        setEye(!eye);
    };

    return (
        <Layout>
            <section className='container flex flex-col-reverse lg:flex-row min-h-[60vh] justify-between w-full h-full px-8 py-16'>
                <div className='-mt-8 sm:-mt-16 -mb-8 sm:-mb-24 basis-[70%] -z-10'>
                    <img src={propertyAnimation} alt='' />
                </div>
                <div className=' basis-[40%] bg-white p-4 rounded-lg shadow-2xl shadow-blue-950/10'>
                    <h1 className='text-2xl pb-4 text-center'>Register Now</h1>
                    <form className='max-w-[800px] w-full space-y-4'>
                        {/* name */}
                        <input
                            type='text'
                            id='yourName'
                            value={yourName}
                            onChange={handleChange}
                            className='w-full border py-3 px-4 rounded-md'
                            placeholder='Your Name'
                        />
                        {/* email address */}
                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={handleChange}
                            className='w-full border py-3 px-4 rounded-md'
                            placeholder='Email Address'
                        />

                        {/* password */}
                        <div className='relative'>
                            <input
                                type={eye ? 'text' : 'password'}
                                id='password'
                                value={password}
                                onChange={handleChange}
                                className='w-full border py-3 px-4 block rounded-md'
                                placeholder='Password'
                            />
                            <div
                                className='absolute right-2 top-1/2 -translate-y-1/2 p-2 cursor-pointer'
                                onClick={handleEye}
                            >
                                {eye ? <i className='ri-eye-line' /> : <i className='ri-eye-off-line' />}
                            </div>
                        </div>

                        {/* register & forgot password */}
                        <div className='flex gap-8 flex-col sm:flex-row justify-between items-center text-[14px] text-center md:text-left'>
                            <p>
                                Already Registerd?{' '}
                                <Link to={'/sign-in'} className='text-blue-500 font-semibold'>
                                    Sign in
                                </Link>
                            </p>
                        </div>

                        {/* SignUp button */}
                        <div className='space-y-4'>
                            <button className='px-8 w-full bg-blue-500 hover:bg-blue-600 duration-300 py-3 text-white rounded-md shadow-xl shadow-blue-500/20'>
                                Register
                            </button>
                            <div className='text-center relative before:w-[45%] before:absolute before:left-0 before:h-[1px] before:bg-gray-300 before:top-1/2 before:-translate-y-1/2 after:w-[45%] after:absolute after:right-0 after:h-[1px] after:bg-gray-300 after:top-1/2 after:-translate-y-1/2 text-gray-400'>
                                or
                            </div>
                            <button className='px-8 w-full bg-gray-100 hover:bg-gray-200 py-3 text-gray-500 hover:text-gray-800 duration-300 rounded-md'>
                                <i className='ri-google-fill mr-1' />
                                Sign In With Google
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    );
};

export default SignUp;
