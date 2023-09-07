import React from 'react';

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
    return (
        <div>
            {/* form label */}
            <div className='flex items-center gap-2 mb-2'>
                <label htmlFor={name} className='block text-sm font-medium text-gray-800'>
                    {labelName}
                </label>
                {isSurpriseMe && (
                    <button
                        type='button'
                        onClick={handleSurpriseMe}
                        className='px-3 py-0.5 text-indigo-600 font-medium bg-indigo-100 text-sm rounded-full'
                    >
                        Surprise Me
                    </button>
                )}
            </div>

            {/* Form Input */} 
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                required
                className='text-sm py-3 px-4 rounded-md w-full bg-white/50 border'
            />
        </div>
    );
};

export default FormField;
