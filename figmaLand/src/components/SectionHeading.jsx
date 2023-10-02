import React from "react";

const SectionHeading = ({ title, text }) => {
    return (
        <div className='max-w-lg text-center mx-auto'>
            <h2 className='text-4xl md:text-6xl text-light capitalize pb-4'>
                {title}
            </h2>
            <p className='leading-[1.7]'>{text}</p>
        </div>
    );
};

export default SectionHeading;
