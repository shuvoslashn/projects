import React from "react";

const SingleFeature = ({ title, text, bgColor }) => {
    return (
        <div
            className={`p-8 flex flex-col md:flex-row gap-8 justify-center items-start border border-black rounded-xl ${bgColor}`}
        >
            <div className='rounded-full flex-shrink-0 w-12 h-12 text-2xl border-2 border-black bg-white text-black flex justify-center items-center'>
                <i className='ri-checkbox-multiple-blank-line' />
            </div>
            <div className=''>
                <h2 className='text-3xl pb-2 capitalize'>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default SingleFeature;
