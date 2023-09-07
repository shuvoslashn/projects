import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import preview from './../assets/preview.png';
import { getRendomPrompt } from './../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    });

    const [generatingImage, setGeneratingImage] = useState(false);
    const [loading, setLoading] = useState(false);

    // handle Submit
    const generatingIMG = () => {};
    const handleSubmit = () => {};
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSurpriseMe = () => {
        const randomPrompt = getRendomPrompt(form.prompt);
        setForm({ ...form, prompt: randomPrompt });
    };

    return (
        <section className='mx-auto py-8'>
            <div className='container'>
                {/* after header heading area  */}
                <div className=''>
                    <h1 className='font-medium text-2xl'>Imagine with Imazinary AI</h1>
                    <p className='mt-3'>
                        Browse through a collection of imaginative and visually stunning images generativd By Imazinary
                        Artificial Inteligent System.
                    </p>
                </div>

                {/* Form Area */}
                <form className='mt-8 max-w-3xl' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-5'>
                        <FormField
                            labelName='Your Name'
                            type='text'
                            name='name'
                            placeholder='e.g. Jhone Doe'
                            value={form.name}
                            handleChange={handleChange}
                        />
                        <FormField
                            labelName='Prompt'
                            type='text'
                            name='prompt'
                            placeholder='e.g. an armchair in the shape of an avocado'
                            value={form.prompt}
                            handleChange={handleChange}
                            isSurpriseMe
                            handleSurpriseMe={handleSurpriseMe}
                        />

                        {/* Preview Image */}
                        <div className='relative bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
                            {form.photo ? (
                                <img src={form.photo} alt={form.prompt} />
                            ) : (
                                <img src={preview} className='opacity-30 max-w-full w-3/4 object-contain' />
                            )}

                            {/* Image Generation Effect */}
                            {generatingImage && (
                                <div className='absolute inset-0 z0 flex justify-center items-center bg-black/50 rounded-lg'>
                                    <Loader />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Generating Button */}
                    <div className='mt-5 flex gap-5'>
                        <button
                            onClick={generatingIMG}
                            className='btn-1 from-green-400 to-teal-400 shadow-green-500/40 hover:shadow-green-500/50'
                        >
                            {generatingImage ? 'Generating...' : 'Generate'}
                        </button>
                        <button type='submit' className='btn-1'>
                            {loading ? 'Sharing...' : 'Share Now'}
                        </button>
                    </div>

                    <div className='mt-10'>
                        <p className='text-[14px]'>Once you have created the image you can share it with others</p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CreatePost;
