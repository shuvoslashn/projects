import React, { useState } from "react";
// const { AnchorProvider, AnchorLink, AnchorContext } = ReactAnchorNavigation;
import { AnchorLink } from "react-anchor-navigation";
import Headroom from "react-headroom";
import { Link } from "react-router-dom";

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
                        <AnchorLink
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-[url('https://i.ibb.co/KLGTLwL/Vector-2.png')] bg-contain bg-no-repeat bg-bottom px-4 py-2 text-xl"
                                    : "px-4 py-2 text-xl"
                            }
                            href='#home'
                        >
                            Home
                        </AnchorLink>
                        <AnchorLink
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-[url('https://i.ibb.co/KLGTLwL/Vector-2.png')] bg-contain bg-no-repeat bg-bottom px-4 py-2 text-xl"
                                    : "px-4 py-2 text-xl"
                            }
                            href='#aboutme'
                        >
                            About
                        </AnchorLink>
                        <AnchorLink
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-[url('https://i.ibb.co/KLGTLwL/Vector-2.png')] bg-contain bg-no-repeat bg-bottom px-4 py-2 text-xl"
                                    : "px-4 py-2 text-xl"
                            }
                            href='#testimonial'
                        >
                            Testimonial
                        </AnchorLink>
                        <AnchorLink
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-[url('https://i.ibb.co/KLGTLwL/Vector-2.png')] bg-contain bg-no-repeat bg-bottom px-4 py-2 text-xl"
                                    : "px-4 py-2 text-xl"
                            }
                            href='#projects'
                        >
                            Projects
                        </AnchorLink>
                        <AnchorLink
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-[url('https://i.ibb.co/KLGTLwL/Vector-2.png')] bg-contain bg-no-repeat bg-bottom px-4 py-2 text-xl"
                                    : "px-4 py-2 text-xl"
                            }
                            href='#contact'
                        >
                            Contact
                        </AnchorLink>
                    </nav>

                    {/* social icons */}
                    <div className='hidden lg:flex gap-2 h-12 justify-center items-center'>
                        <a
                            className='text-2xl w-10 h-[35px] flex justify-center items-center shadow-btn'
                            href='https://github.com/shuvoslashn'
                            target='_blank'
                        >
                            <i className='ri-github-line' />
                        </a>
                        <a
                            className='text-2xl w-10 h-[35px] flex justify-center items-center shadow-btn'
                            href='https://www.linkedin.com/in/shuvoslashn/'
                            target='_blank'
                        >
                            <i className='ri-linkedin-line' />
                        </a>
                        <a
                            className='text-2xl w-10 h-[35px] flex justify-center items-center shadow-btn'
                            href='https://www.behance.net/imshuvosarker'
                            target='_blank'
                        >
                            <i className='ri-behance-line' />
                        </a>
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
                                <AnchorLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? " scale-150 font-black px-4 py-2 text-xl"
                                            : "px-4 py-2 text-xl"
                                    }
                                    to='/'
                                >
                                    Home
                                </AnchorLink>
                                <AnchorLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? " scale-150 font-black px-4 py-2 text-xl"
                                            : "px-4 py-2 text-xl"
                                    }
                                    to='/about'
                                >
                                    About
                                </AnchorLink>
                                <AnchorLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? " scale-150 font-black px-4 py-2 text-xl"
                                            : "px-4 py-2 text-xl"
                                    }
                                    to='/portfolio'
                                >
                                    Portfolio
                                </AnchorLink>
                                <AnchorLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? " scale-150 font-black px-4 py-2 text-xl"
                                            : "px-4 py-2 text-xl"
                                    }
                                    to='/testimonial'
                                >
                                    Testimonial
                                </AnchorLink>
                                <AnchorLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? " scale-150 font-black px-4 py-2 text-xl"
                                            : "px-4 py-2 text-xl"
                                    }
                                    to='/contact'
                                >
                                    Contact
                                </AnchorLink>
                            </nav>

                            {/* social icons */}
                            <div className='mt-16 flex gap-4 h-12 justify-center items-center'>
                                <a
                                    className='text-2xl w-10 h-[35px] flex justify-center items-center shadow-btn'
                                    href='https://github.com/shuvoslashn'
                                    target='_blank'
                                >
                                    <i className='ri-github-line' />
                                </a>
                                <a
                                    className='text-2xl w-10 h-[35px] flex justify-center items-center shadow-btn'
                                    href='https://www.linkedin.com/in/shuvoslashn/'
                                    target='_blank'
                                >
                                    <i className='ri-linkedin-line' />
                                </a>
                                <a
                                    className='text-2xl w-10 h-[35px] flex justify-center items-center shadow-btn'
                                    href='https://www.behance.net/imshuvosarker'
                                    target='_blank'
                                >
                                    <i className='ri-behance-line' />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </Headroom>
    );
};

export default Header;
