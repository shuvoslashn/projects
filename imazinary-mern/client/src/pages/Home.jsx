import React, { useState } from 'react';
import { Card, FormField, Loader } from '../components';

// Render Cards functional component
const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        return data.map((post) => <Card key={post._id} {...post} />);
    }

    return <h2 className='mt-5 font-bold text-indigo-500 text-xl uppercase'>{title}</h2>;
};

const Home = () => {
    // states
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);
    const [searchText, setSearchText] = useState('');

    // return ui
    return (
        <section className='mx-auto py-10 md:py-24'>
            <div className='container'>
                {/* after header heading area  */}
                <div className=''>
                    <h1 className='font-medium text-2xl md:text-4xl'>Generated Ai Image Showcase</h1>
                    <p className='mt-3'>
                        Browse through a collection of imaginative and visually stunning images generativd By Imazinary
                        Artificial Inteligent System.
                    </p>
                </div>

                {/* form feield */}
                <div className='mt-16'>
                    <FormField />
                </div>

                {/* Generated Images */}
                <div className='mt-16'>
                    {loading ? (
                        <div className='flex justify-center items-center'>
                            <Loader />
                        </div>
                    ) : (
                        <>
                            {searchText && (
                                <h2 className='font-medium text-xl mb-3'>
                                    Showing results for <span className='text-black font-bold'>{searchText}</span>
                                </h2>
                            )}

                            {/* image grids */}
                            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
                                {searchText ? (
                                    <RenderCards data={[]} title='No Search Results Found' />
                                ) : (
                                    <RenderCards data={[]} title='No post found' />
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Home;
