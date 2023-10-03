import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className='bg-zinc-900/20 py-12'>
                <div className='container flex flex-col md:flex-row justify-between gap-8 md:gap-24 xl:gap-40'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 flex-grow'>
                        <div className=''>
                            <h2 className='text-xl pb-4 font-semibold'>
                                Fingertipe
                            </h2>
                            <div className='flex flex-col gap-4'>
                                <Link to='/'>Home</Link>
                                <Link to='/'>Examples</Link>
                                <Link to='/'>Pricing</Link>
                                <Link to='/'>Updates</Link>
                            </div>
                        </div>
                        <div className=''>
                            <h2 className='text-xl pb-4 font-semibold'>
                                Resources
                            </h2>
                            <div className='flex flex-col gap-4'>
                                <Link to='/'>Home</Link>
                                <Link to='/'>Examples</Link>
                                <Link to='/'>Pricing</Link>
                                <Link to='/'>Updates</Link>
                            </div>
                        </div>
                        <div className=''>
                            <h2 className='text-xl pb-4 font-semibold'>
                                About
                            </h2>
                            <div className='flex flex-col gap-4'>
                                <Link to='/'>Home</Link>
                                <Link to='/'>Examples</Link>
                                <Link to='/'>Pricing</Link>
                                <Link to='/'>Updates</Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-xl font-semibold'>Address</h2>
                            <div className=''>
                                <i className='ri-map-pin-2-line mr-2' />
                                <span>7480 Mockingbird</span>
                            </div>
                            <div className=''>
                                <i className='ri-phone-fill mr-2' />
                                <span>(239) 555-0108</span>
                            </div>
                            <div className='flex gap-4 text-2xl'>
                                <i className='ri-facebook-fill' />
                                <i className='ri-twitter-fill' />
                                <i className='ri-linkedin-fill' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-6 bg-zinc-900/50'>
                <p className='container text-center text-[14px] font-light text-zinc-500'>
                    &copy;All rights reserved by Shuvo Sarker.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
