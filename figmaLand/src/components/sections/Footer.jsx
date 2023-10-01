import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='bg-zinc-900 py-16'>
            <div className='container flex flex-col md:flex-row justify-between gap-8 md:gap-24 xl:gap-40'>
                <div className='flex gap-8 justify-between basis-2/3'>
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
                        <h2 className='text-xl pb-4 font-semibold'>About</h2>
                        <div className='flex flex-col gap-4'>
                            <Link to='/'>Home</Link>
                            <Link to='/'>Examples</Link>
                            <Link to='/'>Pricing</Link>
                            <Link to='/'>Updates</Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 basis-1/3'>
                    <h2 className='text-xl font-semibold'>Address</h2>
                    <div className=''>
                        <i className='ri-map-pin-2-line mr-2' />
                        <span>7480 Mockingbird Hill undefined</span>
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
        </footer>
    );
};

export default Footer;
