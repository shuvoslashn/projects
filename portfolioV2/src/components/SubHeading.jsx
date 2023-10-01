import React from "react";

const SubHeading = ({ title, headline, allign }) => {
    return (
        <div className={`${allign} max-w-4xl capitalize mx-auto`}>
            <div className='rounded-full inline-flex justify-center items-center border-black border gap-2 text-2xl pl-4 pr-6 py-2 bg-[#FFE49F]'>
                <img
                    src='https://i.ibb.co/N1JZ3zL/Star.png'
                    className='block w-6 h-6'
                />
                <span>{title}</span>
            </div>
            {headline ? (
                <h2 className='text-4xl md:text-6xl mt-12'>{headline}</h2>
            ) : (
                <></>
            )}
        </div>
    );
};

export default SubHeading;
