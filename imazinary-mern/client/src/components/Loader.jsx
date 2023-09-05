import React from 'react';

const Loader = () => {
    return (
        <div role='status'>
            {/* <div className='w-12 h-12 rounded-full'>
                <div className='w-12 h-12 border-r-4 border-l-4 animate-spin border-indigo-500 rounded-full'></div>
            </div> */}
            <div className='flex w-16 flex-wrap justify-center animate-spin'>
                <div className='transform scale-150 w-8 h-8 rounded-full -mr-1 mix-blend-multiply shadow-md bg-blue-300'></div>
                <div className='transform scale-150 w-8 h-8 rounded-full -ml-1 mix-blend-multiply shadow-md bg-indigo-300'></div>
                <div className='transform scale-150 w-8 h-8 rounded-full -mt-[11px] mix-blend-multiply shadow-md bg-purple-300'></div>
            </div>
        </div>
    );
};

export default Loader;
