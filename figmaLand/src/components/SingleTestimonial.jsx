import React from "react";

const SingleTestimonial = ({ per, name, text }) => {
    return (
        <div>
            <div className='flex flex-col gap-5 p-8 bg-zinc-900/75 hover:bg-zinc-900'>
                <div className='flex gap-6'>
                    <div className=''>
                        <img src={per} alt={name} />
                    </div>
                    <div className=''>
                        <h4 className='text-2xl font-bold'>{name}</h4>
                        <p>Designer</p>
                    </div>
                </div>
                <div className=''>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonial;
