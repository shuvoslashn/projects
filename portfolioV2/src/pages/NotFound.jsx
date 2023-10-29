import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <section className='py-24 border-b-2 border-black'>
            <div className='container'>
                <h1 className='text-6xl text-center'>Page Not Found</h1>
                <div className='text-center mt-16 h-12'>
                    <Link
                        to={"/"}
                        className='bg-[#E3E3FF] text-xl font-semibold px-8 py-3 shadow-btn inline-block'
                    >
                        Visit My Portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
