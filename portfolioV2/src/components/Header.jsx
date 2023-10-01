import React, { useState } from "react";
import Headroom from "react-headroom";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <Headroom>
            <header className='z-50 w-full py-1 lg:py-4 border-b-black border-b-2 bg-white'>
                <div className='container flex justify-between items-center relative'>
                    {/* logo */}
                    <Link to={"/"}>
                        <h2 className='text-2xl font-extrabold'>Shuvo</h2>
                    </Link>

                    {/* menu */}
                    <nav className='hidden lg:flex gap-2'>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-[url('https://i.ibb.co/KLGTLwL/Vector-2.png')] bg-contain bg-no-repeat bg-bottom px-4 py-2 text-xl"
                                    : "px-4 py-2 text-xl"
                            }
                            to='/'
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-[url('https://i.ibb.co/KLGTLwL/Vector-2.png')] bg-contain bg-no-repeat bg-bottom px-4 py-2 text-xl"
                                    : "px-4 py-2 text-xl"
                            }
                            to='/about'
                        >
                            About
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-[url('https://i.ibb.co/KLGTLwL/Vector-2.png')] bg-contain bg-no-repeat bg-bottom px-4 py-2 text-xl"
                                    : "px-4 py-2 text-xl"
                            }
                            to='/portfolio'
                        >
                            Portfolio
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-[url('https://i.ibb.co/KLGTLwL/Vector-2.png')] bg-contain bg-no-repeat bg-bottom px-4 py-2 text-xl"
                                    : "px-4 py-2 text-xl"
                            }
                            to='/testimonial'
                        >
                            Testimonial
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-[url('https://i.ibb.co/KLGTLwL/Vector-2.png')] bg-contain bg-no-repeat bg-bottom px-4 py-2 text-xl"
                                    : "px-4 py-2 text-xl"
                            }
                            to='/contact'
                        >
                            Contact
                        </NavLink>
                    </nav>

                    {/* social icons */}
                    <div className='hidden lg:flex gap-2 h-12 justify-center items-center'>
                        <Link
                            className='text-2xl w-10 h-[35px] flex justify-center items-center shadow-btn'
                            to={""}
                        >
                            <i className='ri-github-line' />
                        </Link>
                        <Link
                            className='text-2xl w-10 h-[35px] flex justify-center items-center shadow-btn'
                            to={""}
                        >
                            <i className='ri-linkedin-line' />
                        </Link>
                        <Link
                            className='text-2xl w-10 h-[35px] flex justify-center items-center shadow-btn'
                            to={""}
                        >
                            <i className='ri-facebook-line' />
                        </Link>
                    </div>

                    {/* Responsive menu icon */}
                    <button
                        className='p-4 cursor-pointer block lg:hidden'
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        <i className='ri-menu-3-line text-3xl' />
                    </button>

                    {/* Responsive Menu */}
                    {open && (
                        <div className='block lg:hidden fixed w-full h-screen bg-white top-0 left-0 text-right'>
                            {/* Responsive close icon */}
                            <button
                                onClick={() => setOpen(false)}
                                className='p-8 cursor-pointer inline-block lg:hidden'
                            >
                                <i className='ri-close-line text-5xl' />
                            </button>
                            {/* menu */}
                            <nav className='flex flex-col gap-2 justify-center items-center pt-16'>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? " scale-150 font-black px-4 py-2 text-xl"
                                            : "px-4 py-2 text-xl"
                                    }
                                    to='/'
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? " scale-150 font-black px-4 py-2 text-xl"
                                            : "px-4 py-2 text-xl"
                                    }
                                    to='/about'
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? " scale-150 font-black px-4 py-2 text-xl"
                                            : "px-4 py-2 text-xl"
                                    }
                                    to='/portfolio'
                                >
                                    Portfolio
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? " scale-150 font-black px-4 py-2 text-xl"
                                            : "px-4 py-2 text-xl"
                                    }
                                    to='/testimonial'
                                >
                                    Testimonial
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? " scale-150 font-black px-4 py-2 text-xl"
                                            : "px-4 py-2 text-xl"
                                    }
                                    to='/contact'
                                >
                                    Contact
                                </NavLink>
                            </nav>

                            {/* social icons */}
                            <div className='mt-16 flex gap-4 h-12 justify-center items-center'>
                                <Link
                                    className='text-2xl w-10 h-[35px] flex justify-center items-center shadow-btn'
                                    to={""}
                                >
                                    <i className='ri-github-line' />
                                </Link>
                                <Link
                                    className='text-2xl w-10 h-[35px] flex justify-center items-center shadow-btn'
                                    to={""}
                                >
                                    <i className='ri-linkedin-line' />
                                </Link>
                                <Link
                                    className='text-2xl w-10 h-[35px] flex justify-center items-center shadow-btn'
                                    to={""}
                                >
                                    <i className='ri-facebook-line' />
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </Headroom>
    );
};

export default Header;
