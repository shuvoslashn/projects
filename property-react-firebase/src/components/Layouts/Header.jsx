import React, { useEffect, useState } from 'react';
import logo from './../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const matchRoute = (route) => {
        if (route === location.pathname) {
            return true;
        }
    };

    const [active, setActive] = useState(false);
    const [width, setWidth] = useState(window.screen.width);

    const toggleMenu = () => {
        setActive(!active);
    };
    const disableActive = () => {
        setWidth(window.innerWidth);
        if (width > 639) {
            setActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', disableActive);
        return () => {
            window.removeEventListener('resize', disableActive);
        };
    });

    const navLink = `py-5 font-medium hover:text-blue-500 duration-300 relative after:absolute after:-bottom-0 after:w-0 hover:after:w-full after:h-1 after:bg-blue-500 after:left-0 after:duration-300`;
    return (
        <header className='bg-white relative z-30 h-[66px] flex justify-center items-center'>
            <div className='container flex justify-between items-center w-full'>
                {/* logo here */}
                <div className='-mt-2'>
                    <Link to={'/'} onClick={() => setActive(false)}>
                        <img src={logo} alt='Property App logo' className='h-10' />
                    </Link>
                </div>

                {/* desktop menu */}
                {active ? (
                    <nav className='transition-all duration-500 opacity-100 flex gap-6 absolute left-0 top-[66px] w-full h-[calc(100vh-66px)] pb-32 justify-center items-center flex-col bg-white/5 backdrop-blur-md'>
                        <Link
                            onClick={() => setActive(false)}
                            className={`${navLink} ${matchRoute('/') && 'scale-150 font-extrabold'}`}
                            to={'/'}
                        >
                            Home
                        </Link>
                        <Link
                            onClick={() => setActive(false)}
                            className={`${navLink} ${matchRoute('/offers') && 'scale-150 font-extrabold'}`}
                            to={'/offers'}
                        >
                            Offers
                        </Link>
                        <Link
                            onClick={() => setActive(false)}
                            className={`${navLink} ${matchRoute('/sign-in') && 'scale-150 font-extrabold'}`}
                            to={'/sign-in'}
                        >
                            SignIn
                        </Link>
                    </nav>
                ) : (
                    <nav className='invisible sm:visible opacity-0 sm:opacity-100 flex justify-center items-center sm:flex-row flex-col gap-6 duration-500 transition-all absolute top-10 sm:static w-full sm:w-auto h-[calc(100vh-66px)] left-0 sm:h-auto p-24 sm:p-0  bg-white/5 backdrop-blur-md sm:bg-transparent'>
                        <Link
                            onClick={() => setActive(false)}
                            className={`${navLink} ${matchRoute('/') && 'text-blue-500 after:w-full'}`}
                            to={'/'}
                        >
                            Home
                        </Link>
                        <Link
                            onClick={() => setActive(false)}
                            className={`${navLink} ${matchRoute('/offers') && 'text-blue-500 after:w-full'}`}
                            to={'/offers'}
                        >
                            Offers
                        </Link>
                        <Link
                            onClick={() => setActive(false)}
                            className={`${navLink} ${matchRoute('/sign-in') && 'text-blue-500 after:w-full'}`}
                            to={'/sign-in'}
                        >
                            SignIn
                        </Link>
                    </nav>
                )}

                {/* mobile menu */}
                <div
                    className='sm:hidden h-16 flex justify-center items-center cursor-pointer px-2 mr-2 z-50'
                    onClick={toggleMenu}
                >
                    {active ? (
                        <div className='flex flex-col gap-[6px]'>
                            <div className='duration-500 rounded-[100px] rotate-45 w-6 h-[2px] bg-black'></div>
                            <div className='duration-500 rounded-[100px] opacity-0 w-6 h-[2px] bg-black'></div>
                            <div className='duration-500 rounded-[100px] -rotate-45 -mt-4 w-6 h-[2px] bg-black'></div>
                        </div>
                    ) : (
                        <div className='flex flex-col gap-[6px]'>
                            <div className='duration-500 rounded-[100px] w-6 h-[2px] bg-black'></div>
                            <div className='duration-500 rounded-[100px] w-6 h-[2px] bg-black'></div>
                            <div className='duration-500 rounded-[100px] w-6 h-[2px] bg-black'></div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
