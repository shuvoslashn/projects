import { NavLink } from "react-router-dom";
import logo from "./../../assets/logo.png";
import Button from "./../Button";
import { useState } from "react";

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className='py-3 relative bg-zinc-950/75 backdrop-blur-lg'>
            <div className='container flex justify-between items-center'>
                {/* logo here */}
                <div className='-mt-3'>
                    <img src={logo} alt='figma land' />
                </div>

                {/* menu here */}
                <nav className='hidden md:flex gap-8'>
                    <NavLink className={"hover:text-white duration-300"} to='/'>
                        Home
                    </NavLink>
                    <NavLink
                        className={"hover:text-white duration-300"}
                        to='/products'
                    >
                        Products
                    </NavLink>
                    <NavLink
                        className={"hover:text-white duration-300"}
                        to='/about'
                    >
                        About
                    </NavLink>
                    <NavLink
                        className={"hover:text-white duration-300"}
                        to='/contact'
                    >
                        Contact
                    </NavLink>
                </nav>

                {/* Login Menu */}
                <div className='flex justify-center items-center gap-6'>
                    <Button sx={"outline"} style={"px-6 py-2"}>
                        Login
                    </Button>
                    <div
                        className='text-2xl block md:hidden'
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <i className='ri-close-line' />
                        ) : (
                            <i className='ri-menu-3-line' />
                        )}
                    </div>
                </div>

                {/* Responsive menu here */}
                {open && (
                    <nav className='transition-all duration-300 flex gap-8 flex-col absolute w-[80vw] top-20 left-1/2 -translate-x-1/2  bg-zinc-900 text-center mx-auto justify-center items-center rounded-md py-8'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/products'>Products</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
